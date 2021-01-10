import { Avatar, Box, Button, makeStyles, Snackbar, withWidth } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { createAction } from '../../redux/action';
import { SET_DATA_AMOUNT_GHE } from '../../redux/action/type';
import { useStyles } from './styles';
const ChonVeComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState({
        veVip: '',
        veThuong: '',
    });
    const [open, setOpen] = React.useState({ isShow: false, message: '' });
    const [totalVeVip, setTotalVeVip] = useState(0);
    const [totalVeThuong, setTotalVeThuong] = useState(0);
    const [totalTien, setTotalTien] = useState(0);
    useEffect(() => {
        let mVeVip = 80000;
        let mVeThuong = 50000;
        setTotalVeVip(mVeVip * amount.veVip);
        setTotalVeThuong(mVeThuong * amount.veThuong);
    }, [amount]);
    useEffect(() => {
        setTotalTien(totalVeVip + totalVeThuong);
    }, [totalVeThuong, totalVeVip]);
    const handleClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ isShow: false, message: '' });
    }, []);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheThuongChuaDat = useSelector((state) => {
        return state.qlMovie.listGheThuong.filter(ghe => ghe.daDat === false);
    });
    const time = useMemo(() => {
        return 75 + Math.floor(Math.random() * 35) + 10
    }, []);
    const listGheVipChuaDat = useSelector((state) => {
        return state.qlMovie.listGheVip.filter(ghe => ghe.daDat === false);
    });
    const { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
    const { handleNext, logoCine } = useMemo(() => {
        return props
    }, [props]);
    const handleChange = useCallback((e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (value >= 0) {
            if (name === 'veThuong') {
                if (value < listGheThuongChuaDat.length) {
                    setAmount({
                        ...amount,
                        [name]: parseInt(value)
                    });
                } else {

                    setOpen({ isShow: true, message: `Hiện tại ${tenRap} chỉ có ${listGheThuongChuaDat.length} ghế trống dành cho vé thường !` });
                    setAmount({
                        ...amount,
                        [name]: 0
                    });
                }
            }
            if (name === 'veVip') {
                if (value < listGheVipChuaDat.length) {
                    setAmount({
                        ...amount,
                        [name]: parseInt(value)
                    });
                } else {

                    setOpen({ isShow: true, message: `Hiện tại ${tenRap} chỉ có ${listGheVipChuaDat.length} ghế trống dành cho vé vip !` });
                    setAmount({
                        ...amount,
                        [name]: 0
                    });
                }
            }

        }
    }, [amount]);
    const getThuTheoNgay = useCallback((ngay) => {
        let date = new Date(ngay);
        if (date.getDay() === 0) {
            return 'Chủ Nhật';
        }
        if (date.getDay() === 1) {
            return 'Thứ 2';
        }
        if (date.getDay() === 2) {
            return 'Thứ 3';
        }
        if (date.getDay() === 3) {
            return 'Thứ 4';
        }
        if (date.getDay() === 4) {
            return 'Thứ 5';
        }
        if (date.getDay() === 5) {
            return 'Thứ 6';
        }
        if (date.getDay() === 6) {
            return 'Thứ Bảy';
        }
    }, []);
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${(d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}.${d.getDate() > 9 ? d.getDate() : ('0' + d.getDate())}.${d.getFullYear()}`;
        return date;
    }, []);
    const handleClickCustomBtn = useCallback((name, value) => () => {
        if (value >= 0) {
            if (name === 'veThuong') {
                if (value < listGheThuongChuaDat.length) {
                    setAmount({
                        ...amount,
                        [name]: parseInt(value)
                    });
                } else {

                    setOpen({ isShow: true, message: `Hiện tại ${tenRap} chỉ có ${listGheThuongChuaDat.length} ghế trống dành cho vé thường !` });
                    setAmount({
                        ...amount,
                        [name]: 0
                    });
                }
            }
            if (name === 'veVip') {
                if (value < listGheVipChuaDat.length) {
                    setAmount({
                        ...amount,
                        [name]: parseInt(value)
                    });
                } else {

                    setOpen({ isShow: true, message: `Hiện tại ${tenRap} chỉ có ${listGheVipChuaDat.length} ghế trống dành cho vé vip !` });
                    setAmount({
                        ...amount,
                        [name]: 0
                    });
                }
            }

        }
    }, [amount]);

    const handleChonGhe = useCallback((amount) => () => {
        if (amount.veVip > 0 || amount.veThuong > 0) {
            let type = 0;
            if (!!amount.veVip && !!amount.veThuong) {
                type = 'all';
            } else if (!!amount.veVip && (!!!amount.veThuong)) {
                type = 'vip';
            } else if (!!amount.veThuong && (!!!amount.veVip)) {
                type = 'thuong';
            } else {
                type = 0;
            }

            let data = { ...amount, total: parseInt(amount.veVip + amount.veThuong), type };
            dispatch(createAction(SET_DATA_AMOUNT_GHE, data));
            handleNext(1);
        } else {
            setOpen({ isShow: true, message: 'Xin quý khách vui lòng chọn vé !' });
        }
    }, []);
    const width = useMemo(() => {
        return props.width;
    }, [props.width]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={classes.root}>
            <div className={classes.GroupLoaiVe}>
                {(width === 'lg' || width === 'xl') && <div className={classes.groupBannerPhim} >
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${hinhAnh})` }}>
                    </div>
                    <div className={classes.bgBlur} >
                    </div>

                    <div className={classes.groupInfoPhim}>
                        <Box display="flex">
                            <div className={classes.textDefault}>{getThuTheoNgay(ngayChieu)}</div>
                            <Box className={classes.textDefault} width="30%" ml="auto" style={{ color: '#fff' }}>{changeFormatDate(ngayChieu)}</Box>
                        </Box>
                        <Box className={classes.groupNameMovie} my={1}>
                            <div className={classes.general}>C18</div>
                            <div className={`${classes.textDefault} ${classes.namePhim}`}>{tenPhim}</div>
                        </Box>
                        <div className={classes.textDefault}>{time} phút - Kix -IMDb 0-2D/L.Tiếng</div>
                    </div>
                </div>}

                <div className={classes.groupChooseVe}>
                    <div className={classes.ChooseVe_Content}>
                        <div className={classes.ContentTop}>
                            <div className={classes.GroupImgTheater}>
                                <Avatar alt="logoCine" src={logoCine} />
                            </div>
                            <div className={classes.theaterContent}>
                                <div className={classes.nameThear}>
                                    <div className={classes.hightline}>{tenCumRap.trim().slice(0, tenCumRap.trim().indexOf(' '))}</div>
                                    {tenCumRap.trim().slice(tenCumRap.trim().indexOf(' '))}
                                </div>
                                <Box className={classes.timeMovie} my={0.5}>
                                    <div className={classes.textDefault}>{changeFormatDate(ngayChieu)}</div>
                                    <Box className={classes.textDefault} mx={0.5}>{gioChieu}</Box>
                                    <div className={classes.textDefault}>{tenRap}</div>
                                </Box>
                            </div>
                        </div>
                        <div className={classes.contentBody}>
                            {(width === 'sm' || width === 'md' || width === 'lg' || width === 'xl') ? <Fragment>
                                <div className={classes.ticketItem}>
                                    <div className={`${classes.textDefault} ${classes.nameTicket}`}>
                                        Vé Vip
                                    </div>
                                    <div className={`${classes.textDefault} ${classes.priceTicket}`}>
                                        {(80000).toLocaleString()} <div className={classes.moneyDefault}>đ</div>
                                    </div>
                                    <div className={classes.groupCustomTotal}>
                                        <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                            onClick={handleClickCustomBtn('veVip', parseInt(amount.veVip - 1))}
                                        >-</Button>
                                        <input className={`${classes.textDefault} ${classes.totalInput}`} type="number" name="veVip" value={amount.veVip ? amount.veVip : ''} min={0} placeholder="0" onChange={handleChange} />
                                        <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                            onClick={handleClickCustomBtn('veVip', parseInt(amount.veVip + 1))}
                                        >+</Button>
                                    </div>
                                </div>
                                <div className={classes.ticketItem}>
                                    <div className={`${classes.textDefault} ${classes.nameTicket}`}>
                                        Vé Thuờng
                                    </div>
                                    <div className={`${classes.textDefault} ${classes.priceTicket}`}>
                                        {(50000).toLocaleString()} <div className={classes.moneyDefault}>đ</div>
                                    </div>
                                    <div className={classes.groupCustomTotal}>
                                        <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                            onClick={handleClickCustomBtn('veThuong', parseInt(amount.veThuong - 1))}
                                        >-</Button>
                                        <input className={`${classes.textDefault} ${classes.totalInput}`} type="number" value={amount.veThuong ? amount.veThuong : ''} min={0} name="veThuong" placeholder="0" onChange={handleChange} />
                                        <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                            onClick={handleClickCustomBtn('veThuong', parseInt(amount.veThuong + 1))}
                                        >+</Button>
                                    </div>
                                </div>
                            </Fragment>
                                :
                                <Fragment>
                                    <div className={classes.ticketItem}>
                                        <div className={classes.divTwoTicket}>
                                            <div className={`${classes.textDefault} ${classes.nameTicket}`}>
                                                Vé Vip
                                            </div>
                                            <div className={`${classes.textDefault} ${classes.priceTicket}`}>
                                                {(80000).toLocaleString()} <div className={classes.moneyDefault}>đ</div>
                                            </div>
                                        </div>
                                        <div className={classes.groupCustomTotal}>
                                            <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                                onClick={handleClickCustomBtn('veVip', parseInt(amount.veVip - 1))}
                                            >-</Button>
                                            <input className={`${classes.textDefault} ${classes.totalInput}`} type="number" name="veVip" value={amount.veVip ? amount.veVip : ''} min={0} placeholder="0" onChange={handleChange} />
                                            <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                                onClick={handleClickCustomBtn('veVip', parseInt(amount.veVip + 1))}
                                            >+</Button>
                                        </div>
                                    </div>
                                    <div className={classes.ticketItem}>
                                        <div className={classes.divTwoTicket}>
                                            <div className={`${classes.textDefault} ${classes.nameTicket}`}>
                                                Vé Thuờng
                                     </div>
                                            <div className={`${classes.textDefault} ${classes.priceTicket}`}>
                                                {(50000).toLocaleString()} <div className={classes.moneyDefault}>đ</div>
                                            </div>
                                        </div>
                                        <div className={classes.groupCustomTotal}>
                                            <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                                onClick={handleClickCustomBtn('veThuong', parseInt(amount.veThuong - 1))}
                                            >-</Button>
                                            <input className={`${classes.textDefault} ${classes.totalInput}`} type="number" value={amount.veThuong ? amount.veThuong : ''} min={0} name="veThuong" placeholder="0" onChange={handleChange} />
                                            <Button className={`${classes.textDefault} ${classes.customBtn}`}
                                                onClick={handleClickCustomBtn('veThuong', parseInt(amount.veThuong + 1))}
                                            >+</Button>
                                        </div>
                                    </div>
                                </Fragment>}

                        </div>
                        <div className={classes.contentFooter}>
                            <div>
                                <div className={`${classes.textDefault} ${classes.titleTongTien}`} >
                                    Tổng tiền
                                </div>
                                <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                                    {(totalTien).toLocaleString()}<div className={classes.moneyDefault}>đ</div>
                                </div>
                            </div>
                            <div>
                                <Button className={classes.btnChonGhe} onClick={handleChonGhe(amount)}>
                                    Chọn ghế
                                </Button>
                            </div>
                        </div>
                        <div className={classes.NoteFooter}>
                            <div className={`${classes.textDefault} ${classes.noteText}`}>Xin lưu ý, bạn không thể hủy hoắc thay đổi suất chiếu cho vé đã mua</div>
                            <div className={classes.DivContact}>
                                <div>
                                    <div className={classes.Contact_title}>HOTLINE</div>
                                    <div className={`${classes.hightline} ${classes.Contact_in}`}>Phí cuộc gọi 1000VND/phút</div>
                                </div>
                                <div className={classes.Contact_Sdt}>
                                    1900 545 436
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={open.isShow} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                    {open.message}
                </Alert>
            </Snackbar>
        </motion.div>
    );
};
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default memo(withWidth()(ChonVeComponent));