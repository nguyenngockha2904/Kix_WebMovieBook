import { Avatar, Button, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AtmIcon from '../../assets/img/AtmIcon.svg';
import CCIcon from '../../assets/img/CCIcon.svg';
import ZaloPayIcon from '../../assets/img/logoCine/zalopay_icon.png';
import { MovieService } from '../../services';
import swal from 'sweetalert';
const ThanhToanResComponent = (props) => {
    const classes = useStyles();
    const [thanhToan, setThanhToan] = useState(0);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });
    const { tenPhim, hinhAnh, maLichChieu } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
    const { handleNext } = useMemo(() => {
        return props
    }, [props]);
    let tongTien = useMemo(() => {
        let tt = 0;
        if (listGheDaDat.length !== 0) {
            for (let item of listGheDaDat) {
                tt += item.giaVe;
            }
        }
        return tt;
    }, [listGheDaDat]);

    const renderListGheDaDat = useCallback(() => {
        let list = [];
        if (listGheDaDat.length !== 0) {

            list = listGheDaDat.sort((sp_tieptheo, sp) => {
                return parseInt(sp_tieptheo.stt) - parseInt(sp.stt);
            });
        }
        return list.map((item, index) => {
            return (
                <div className={classes.grouGheDD} key={index}>
                    <div className={`${classes.textDefault} ${classes.textDef}`}>
                        Ghế {item.tenGhe}
                    </div>
                    <div className={classes.timeSub}>{item.loaiGhe.toLowerCase() === "thuong" ? "(thường)" : " (vip)"} </div>{index !== (list.length - 1) ? ',' : ''}
                </div>
            )
        });

    }, [listGheDaDat]);
    const handleChange = useCallback((event) => {
        setThanhToan(parseInt(event.target.value));
    }, []);
    const us = useSelector((state) => {
        return state.qlUser.credentials
    });
    const { email, soDT } = useMemo(() => {
        return us
    }, [us]);
    const handleBuyTicket = useCallback((listGheDaDat, maLichChieu) => () => {
        let taiKhoanNguoiDung = localStorage.getItem('username');

        let danhSachVe = listGheDaDat.map((item) => {
            return {
                maGhe: item.maGhe,
                giaVe: item.giaVe
            }
        });
        const data = {
            maLichChieu,
            danhSachVe,
            taiKhoanNguoiDung,
        };
        if (listGheDaDat.length !== 0) {
            MovieService.datLich(data).then(res => {
                console.log(res.data);
                handleNext(3);
            }).catch(err => {
                console.log(err);
            });
        } else {
            swal({
                title: 'Vui lòng chọn ghế !!',
                text: "Vui lòng chọn ghế để tiếp tục!",
                icon: "info",
            });
        }

    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.divInfoFilm} style={{ marginTop: '5%' }}>
                    <div className={classes.infoFilm}>
                        <div className={classes.contentFilm}>
                            <p className={`${classes.textDefault} ${classes.namePhim}`}>{tenPhim}</p>
                            <div>
                                <div className={classes.general}>C18</div>
                                <span className={classes.timeSub}>91 phút 2d - Phụ Đề</span>
                            </div>
                        </div>
                        <div className={classes.gheContent}>{listGheDaDat.length !== 0 ? renderListGheDaDat() : '...'}
                        </div>
                    </div>
                    <div className={classes.groupImg}>
                        <img src={hinhAnh} alt={tenPhim} className={classes.imgFilm} />
                    </div>
                </div>
                <div className={`${classes.divInfoFilm} ${classes.groupInfo}`}>
                    <div className={classes.timeSub}>Phone</div>
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>{soDT}</div>
                    <div className={classes.line}></div>
                    <div className={classes.timeSub}>Email</div>
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>{email}</div>
                </div>
                <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`} style={{ padding: '0 6%' }}>Phương thức thanh toán</div>
                <div className={`${classes.divInfoFilm} ${classes.groupInfo}`} style={{ marginBottom: '56px', }}>
                    <div className={classes.hinhThucThanhToan}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="Hình Thức Thanh Toán" name="thanhToan" value={thanhToan} onChange={handleChange}>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={0} />
                                    <Avatar src={ZaloPayIcon} variant="rounded" alt="ZaloPayIcon" />
                                </div>} label="Thanh Toán qua ZaloPay" />
                                <div className={classes.line}></div>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={1} />
                                    <Avatar src={CCIcon} variant="rounded" alt="CCIcon" />
                                </div>} label="Visa, Master, JCB" />
                                <div className={classes.line}></div>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={2} />
                                    <Avatar src={AtmIcon} variant="rounded" alt="AtmIcon" />
                                </div>} label="Qua thẻ ATM nội địa" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.divBottom}>
                    <div className={classes.ItemBottom}>
                        <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                            {(tongTien).toLocaleString()}đ
                        </div>
                    </div>
                    <div className={classes.ItemBottom}>
                        <Button className={classes.btnNext} onClick={handleBuyTicket(listGheDaDat, maLichChieu)}>Đặt vé
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#e4e4e4',
        // '& .MuiAlert-standardWarning': {
        //     boxShadow: ' 0 0 3px 1px #fff',
        // },
    },
    wrapper: {
        marginTop: '55px',
        overflow: 'auto',
        background: '#e4e4e4',
    },
    textDefault: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    totalMonney: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.7),
    },
    namePhim: {
        margin: 0,
        letterSpacing: '0',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),

    },
    divInfoFilm: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 5%',
        background: '#fff',
        borderRadius: ' 10px',
        marginBottom: '1px',
    },
    divBottom: {
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        marginBottom: '1px',
        position: ' fixed',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        boxShadow: '0 0 5px 1px #9E9E9E',
        borderRadius: '5px',
    },
    infoFilm: {
        width: '70%',
        padding: '5% 0 5% 5%',
    },
    contentFilm: {

    },
    timeSub: {
        color: '#808080',
        letterSpacing: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.2),
        textTransform: 'capitalize',
        fontFamily: 'unset',
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(0.9),
        },
    },
    general: {
        marginRight: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.1),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.3),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(2.5),
    },
    gheContent: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5% 0',
    },
    textDef: {
        fontFamily: 'SF Medium',
        color: '#000',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1),
        },
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        marginTop: '5px',
    },
    groupImg: {
        width: '30%',
        padding: '5%',
        textAlign: ' center',
        paddingBottom: '7%',
        borderRadius: ' 10px',
    },
    imgFilm: {
        minWidth: '60px',
        maxWidth: '100px',
        width: '100%',
        borderRadius: ' 5px',
    },
    groupInfo: {
        display: "block",
        padding: '3% 5%',
    },
    infoText: {
        letterSpacing: '0.5px',
        margin: '5px 0',
        textTransform: ' lowercase',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    line: {

        width: '100%',
        height: '1px',
        borderBottom: ' 0.5px dotted #808080c9',
        margin: '8px auto',

    },
    hinhThucThanhToan: {
        '& $textDefault': {
            fontFamily: 'SF Medium',
            fontSize: theme.spacing(1.1),
        },
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiFormControlLabel-label': {
            fontSize: theme.spacing(1.4),
            color: '#2B3A51',
            fontFamily: 'SF Medium',
            letterSpacing: '-0.5px',
            [theme.breakpoints.down(`${600}`)]: {
                fontSize: theme.spacing(1.2),
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1.1rem',
        }
    },
    radioItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiAvatar-root': {
            marginRight: theme.spacing(0.5),
            width: ' 25px',
            height: '25px',
        },
        '& .MuiAvatar-img': {
            'object-fit': 'unset',
        }
    },
    ItemBottom: {
        width: '100%',
        textAlign: ' center',
    },
    btnNext: {
        width: '100%',
        padding: ' 7px',
        textTransform: 'capitalize',
        background: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        'border-top-left-radius': 0,
        'border-bottom-left-radius': 0,
    },
}));
export default memo(ThanhToanResComponent);