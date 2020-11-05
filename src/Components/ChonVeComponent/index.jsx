import { Avatar, Box, Button, makeStyles, Snackbar, withWidth } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { createAction } from '../../redux/action';
import { SET_DATA_AMOUNT_GHE } from '../../redux/action/type';
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
const useStyles = makeStyles((theme) => ({
    //#region Chung
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        '& .MuiAlert-filledWarning': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        },
    },

    GroupLoaiVe: {
        display: 'flex',
        height: '100%',
    },
    textDefault: {
        color: '#fff',
        whiteSpace: 'nowrap',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
    },
    //#endregion

    //#region  groupBannerPhim jss
    groupBannerPhim: {
        width: '25%',
        position: 'relative',
        boxShadow: '0 0 7px 1px #808080ba',
        marginTop: theme.spacing(4.7),
        [theme.breakpoints.down(`${1200}`)]: {
            display: 'none ',
        },
    },
    bgImg: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '25%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'blur(1px)',
    },
    bgBlur: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '25%',
        background: '#00000073',
        zIndex: '4',
    },
    groupImg: {
        zIndex: "5",
        position: 'absolute',
        background: 'transparent',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    },
    filmImg: {
        borderRadius: '5px',
        // boxShadow: '0 0 5px 0px #ffffffe0',
    },
    groupInfoPhim: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: '5',
        padding: theme.spacing(1),
        height: '21%',
        width: '25%',
    },

    groupNameMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    namePhim: {
        fontSize: theme.spacing(1.9),
        whiteSpace: 'inherit',
    },
    general: {
        marginRight: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.4),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.5),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(3.3),
    },
    //#endregion 

    //#region groupChooseVe jss
    groupChooseVe: {
        width: '75%',
        marginTop: theme.spacing(6.8),
        [theme.breakpoints.down(`${1280}`)]: {
            width: '100%',
        },
    },
    ChooseVe_Content: {
        width: '70%',
        margin: 'auto',
        height: '100%',
        [theme.breakpoints.down(`${601}`)]: {
            width: '100%',
        },
    },
    //#region ContentTop jss
    ContentTop: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2.5, 0),
        borderBottom: '1px solid #8080806b',
        maxHeight: '10%',
        height: '100%',
        [theme.breakpoints.down(`${601}`)]: {
            padding: theme.spacing(2.5),
            margin: theme.spacing(0, 0.5),
            width: 'auto',
        },
    },
    GroupImgTheater: {
        marginRight: theme.spacing(1),
        '& .MuiAvatar-root': {
            boxShadow: ' 0 0 1px 2px lavender',
        },
    },
    logoCine: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        boxShadow: '0 0 4px 0px #808080',
        borderRadius: '50%',
    },
    theaterContent: {

    },
    nameThear: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        letterSpacing: '0.5px',
        fontSize: theme.spacing(1.3),
        textTransform: 'capitalize',
    },
    hightline: {
        color: '#FB4226',
        fontFamily: 'SF Medium',

    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& $textDefault': {
            color: '#808080',
            fontFamily: 'unset',
            fontSize: theme.spacing(1.1),
            letterSpacing: '0.5px',
        }
    },
    //#endregion

    // #region contentBody jss
    contentBody: {
        minHeight: theme.spacing(29),
    },
    ticketItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 0),
        borderBottom: '1px solid #8080806b',
        position: 'relative',
        // [theme.breakpoints.down(`${601}`)]: {
        //     display: 'block',
        // },
    },
    divTwoTicket: {
        padding: '10px',
    },
    nameTicket: {
        color: '#000',
        fontSize: theme.spacing(1.3),
    },
    priceTicket: {
        color: '#6b00b6',
        fontSize: theme.spacing(2.1),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: ' absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.4),
        },
        [theme.breakpoints.down(`${601}`)]: {
            position: ' unset',
            justifyContent: 'flex-start',
            transform: 'translateX(0)',
        },
    },
    moneyDefault: {
        color: '#000',
        marginLeft: theme.spacing(0.5),
        fontSize: theme.spacing(1.5),
        textTransform: 'lowercase',
    },
    groupCustomTotal: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customBtn: {
        color: '#9E9E9E',
        fontSize: theme.spacing(2.3),
        cursor: 'pointer',
        padding: theme.spacing(0.5),
        '&:hover': {
            color: '#6b00b6',
        },
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.4),
        },
    },
    totalInput: {
        color: '#000',
        textAlign: 'center',
        width: theme.spacing(4),
        padding: theme.spacing(.3),
        fontSize: theme.spacing(1.3),
        margin: theme.spacing(0, 0.7),
        outline: 'none',
        // borderColor: '#8080806b',
        border: '1px solid #8080806b',
        borderRadius: '5px',
        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        }
    },
    //#endregion

    //#region contentFooter jss
    contentFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down(`${961}`)]: {
            paddingLeft: '10px',
        },
    },
    titleTongTien: {
        color: '#000',
        fontFamily: 'unset',
        fontWeight: '500',
    },
    totalMonney: {
        color: '#6b00b6',
        fontSize: theme.spacing(3.5),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $moneyDefault': {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down(`${601}`)]: {
            fontSize: theme.spacing(2),
        },

    },
    btnChonGhe: {
        height: '100%',
        color: '#fff',
        padding: theme.spacing(1.5, 1.8),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        textTransform: 'capitalize',
        '&:hover ': {
            backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        },
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down(`${601}`)]: {

            marginRight: ' 10px',
            padding: theme.spacing(0.9, 1.3),
        },
    },
    //#endregion

    //#endregion

    //#region NoteFooter
    NoteFooter: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down(`${961}`)]: {
            display: 'none ',
        },
    },
    noteText: {
        color: '#808080',
        fontFamily: 'unset',
        fontSize: theme.spacing(1.2),
        letterSpacing: '0.5px',
        textAlign: 'center',
    },
    DivContact: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Contact_title: {
        color: '#808080',
        fontSize: theme.spacing(2),
        textAlign: 'right',
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    Contact_in: {
        fontFamily: 'unset',
        fontSize: theme.spacing(1.2),
        letterSpacing: '0.5px',
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    Contact_Sdt: {
        marginLeft: theme.spacing(1),
        fontSize: theme.spacing(3.6),
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(2.6),
        },
    },
    //#endregion
}));
export default memo(withWidth()(ChonVeComponent));