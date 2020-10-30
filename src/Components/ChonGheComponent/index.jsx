import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AtmIcon from '../../assets/img/AtmIcon.svg';
import CCIcon from '../../assets/img/CCIcon.svg';
import ZaloPayIcon from '../../assets/img/logoCine/zalopay_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { SET_IS_ACTVED_GHE_ITEM } from '../../redux/action/type';
import { createAction } from '../../redux/action';

//#region Ghe SVG
const ChangeGheSVG = (color, number, disable, type = 0) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="307.5" height="283" viewBox="0 0 307.5 283">

            <defs>
                <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fcd635" />
                    <stop offset="1" stopColor="#f7a928" />
                </linearGradient>
            </defs>
            <g id="gheIcon1" transform="translate(-170 -1017)">
                <path id="gheIcon" d="M382.9,194.5V156.2a42.593,42.593,0,0,0-42.5-42.5H172.9a42.593,42.593,0,0,0-42.5,42.5v38.3a42.643,42.643,0,0,0-27.5,39.7V396.7h25V374.2H385.4v22.5h25V234.2A42.4,42.4,0,0,0,382.9,194.5Zm-210-55.8H340.4a17.584,17.584,0,0,1,17.5,17.5v35.6a42.51,42.51,0,0,0-40,42.4v45H195.4v-45a42.51,42.51,0,0,0-40-42.4V156.2A17.584,17.584,0,0,1,172.9,138.7Z" transform="translate(67.1 1022.3)" fill={`${color}`} />
                <text id="_50" data-name="50" transform={`${number < 99 ? 'translate(266 1125)' : 'translate(237 1125)'}`} fill={`${color}`} fontSize="100" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">{number}</tspan></text>
                {disable && <Fragment>
                    <line id="Line_19" data-name="Line 19" x2="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#b7b7b7" strokeWidth="20" />
                    <line id="Line_20" data-name="Line 20" x1="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#b7b7b7" strokeWidth="20" />
                </Fragment>}
                {type === 1 && <Fragment>
                    <g id="layer1" transform="translate(412.001 297.522)">
                        <path id="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-2" data-name="layer1" transform="translate(188.001 297.522)">
                        <path id="path4512-3-2" data-name="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-3" data-name="layer1" transform="translate(299.001 297.522)">
                        <path id="path4512-3-3" data-name="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-4" data-name="layer1" transform="translate(260.001 130.522)">
                        <path id="path4512-3-4" data-name="path4512-3" d="M34.274,155.144C29.755,158.188.757,138.892-4.8,138.85s-34.878,18.809-39.345,15.7,6.034-35.079,4.361-40.073S-69.53,89.009-67.771,84.042s37.247-5.429,41.766-8.473S-9.514,41.021-3.96,41.064,13.025,72.788,17.492,75.9s39.942,4.114,41.615,9.107-26.749,25.035-28.508,30,8.194,37.09,3.674,40.134Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                </Fragment>}
            </g>
        </svg>
    )


}
//#endregion

const ChonGheComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [thanhToan, setThanhToan] = useState(0);
    const { handleNext, logoCine } = useMemo(() => {
        return props
    }, [props]);
    const renderer = useCallback(({ hours, minutes, seconds, completed }) => {
        if (completed) {
            history.replace('/');
            return <span>hết giờ</span>;
        } else {
            return <span>{(minutes < 10 ? '0' + minutes : minutes) + ':'}{seconds < 10 ? '0' + seconds : seconds}</span>;
        }
    }, []);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGhePhanMang = useSelector((state) => {
        return state.qlMovie.listGhePhanMang
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });
    const { tenCumRap, tenRap, diaChi, tenPhim, ngayChieu, gioChieu } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    });
    const dateTime = useMemo(() => {
        return Date.now() + 285000;
    }, []);
    const amount = useSelector((state) => {
        return state.qlMovie.amount;
    });
    const handleChange = useCallback((event) => {
        setThanhToan(parseInt(event.target.value));
    }, []);
    let tongTien = useMemo(() => {
        let tt = 0;
        if (listGheDaDat.length !== 0) {
            for (let item of listGheDaDat) {
                tt += item.giaVe;
            }
        }
        return tt;
    }, [listGheDaDat]);
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${(d.getMonth() + 1) > 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}.${d.getDate() > 10 ? d.getDate() : ('0' + d.getDate())}.${d.getFullYear()}`;
        return date;
    }, []);
    const handleChooseGhe = useCallback((item) => () => {
        dispatch(createAction(SET_IS_ACTVED_GHE_ITEM, item));
    }, [amount]);

    const renderListGhe = useCallback(() => {
        return listGhePhanMang.map((item, index) => {
            return (
                <div key={index} className={classes.groupGheDay} style={{ marginBottom: index === (listGhePhanMang.length - 1) && '51px' }}>
                    <div className={classes.dayGheItem}>{item.tenday}</div>
                    <div className={classes.groupGheitem}>
                        {item.list.map((item, index) => {
                            return (

                                <Button className={classes.getItem} disableElevation={item.daDat} disabled={item.daDat} onClick={handleChooseGhe(item)} key={index}>
                                    <Avatar variant="square" className={classes.GheIcon}>{
                                        !item.isActived ?
                                            ChangeGheSVG((!item.daDat ? '#3E515D' : '#CFD3D7'), (item.stt), item.daDat, item.loaiGhe !== "Thuong" && 1)
                                            :
                                            ChangeGheSVG('#6b00b6', (item.stt), false, item.loaiGhe !== "Thuong" && 1)
                                    }</Avatar>
                                </Button>

                            )
                        })}
                    </div>
                </div>

            )
        });
    }, [listGhePhanMang]);
    const handleBuyTicket = useCallback(() => {
        handleNext(3)
    }, []);

    const renderListGheDaDat = useCallback(() => {
        let list = [];
        if (listGheDaDat.length !== 0) {

            list = listGheDaDat.sort((sp_tieptheo, sp) => {
                return parseInt(sp_tieptheo.stt) - parseInt(sp.stt);
            });
        }
        return list.map((item, index) => {
            return (
                <div className={classes.gheContent} key={index}>
                    <div className={classes.grouGheDD}>
                        <div className={classes.textDefault}>
                            Ghế {item.tenGhe}

                        </div>
                        <div className={classes.gheType}>
                            ({item.loaiGhe.toLowerCase() === "thuong" ? "thường" : " vip"})
                        </div>
                    </div>
                    <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                        {(item.giaVe).toLocaleString()}<div className={classes.moneyDefault}>đ</div>
                    </div>
                    <Button className={classes.btnCancel}>
                        <div className={classes.gheType} onClick={handleChooseGhe(item)}>
                            [ Hủy ]
                        </div>

                    </Button>
                </div>
            )
        });

    }, [listGheDaDat]);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{ opacity: 1, y: 0, }}
            className={classes.root}>
            <div className={classes.divChonGhe}>
                <div className={classes.WrapperContent}>
                    <div className={classes.ContentTop}>
                        <div className={classes.groupInfoThearter}>
                            <div className={classes.GroupImgTheater}>
                                <Avatar alt="logoCine" src={logoCine} />
                            </div>
                            <div className={classes.theaterContent}>
                                <div className={classes.nameThear}>
                                    <Box className={classes.hightline}>
                                        {tenCumRap.trim().slice(0, tenCumRap.trim().indexOf(' '))}
                                    </Box>
                                    {tenCumRap.trim().slice(tenCumRap.trim().indexOf(' '))}
                                </div>
                                <Box className={classes.timeMovie} my={0.5}>
                                    <div className={classes.textDefault}>{changeFormatDate(ngayChieu)}</div>
                                    <Box className={classes.textDefault} mx={0.5}>{gioChieu}</Box>
                                    <div className={classes.textDefault}>{tenRap}</div>
                                </Box>
                            </div>
                        </div>
                        <div className={classes.GroupTimeCountDown}>
                            <div className={classes.textDefault}>
                                thời gian giữ ghế
                            </div>
                            <div className={classes.timeCountDown}>
                                <Countdown
                                    date={dateTime}
                                    renderer={renderer}
                                />
                            </div>
                        </div>

                    </div>

                    <div className={classes.contentBody}>
                        <div className={classes.GroupManHinh}>
                            <div className={classes.manHinh}>
                            </div>
                            <div className={classes.anhSangManHinh}>
                                Màn hình
                            </div>
                        </div>
                        <div className={classes.GroupGhe}>
                            <Grid container spacing={1} className={classes.listGhe}>
                                {renderListGhe()}
                            </Grid>
                        </div>

                        <div className={classes.GroupDiscriptionGhe}>
                            <div className={classes.DcirpItem}>
                                <Avatar variant="square" className={classes.GheIcon} >
                                    {ChangeGheSVG('#CFD3D7', '', true)}
                                </Avatar>
                                <div className={classes.textDefault}>
                                    ghế đã có người chọn
                                </div>
                            </div>
                            <div className={classes.DcirpItem}>
                                <Avatar variant="square" className={classes.GheIcon} >
                                    {ChangeGheSVG('#3E515D', '', false, 1)}
                                </Avatar>
                                <div className={classes.textDefault}>
                                    ghế vip
                                </div>
                            </div>
                            <div className={classes.DcirpItem}>
                                <Avatar variant="square" className={classes.GheIcon} >
                                    {ChangeGheSVG('#6b00b6', '', false)}
                                </Avatar>
                                <div className={classes.textDefault}>
                                    ghế đang chọn
                            </div>
                            </div>
                            <div className={classes.DcirpItem}>
                                <Avatar variant="square" className={classes.GheIcon} >
                                    {ChangeGheSVG('#3E515D', '', false)}
                                </Avatar>
                                <div className={classes.textDefault}>
                                    ghế thường
                                </div>
                            </div>

                            <div className={classes.DcirpItem}>
                                <Avatar variant="square" className={classes.GheIcon} >
                                    {ChangeGheSVG('#CFD3D7', '', false)}
                                </Avatar>
                                <div className={classes.textDefault}>
                                    ghế không thể chọn
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className={classes.divThanhToan}>
                <div className={classes.divThanhToan_content}>
                    <div className={classes.wapperBody}>
                        <div className={classes.divThanhToan_body}>
                            <div className={classes.priceTotal}>
                                <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                                    {(tongTien).toLocaleString()}<div className={classes.moneyDefault}>đ</div>
                                </div>
                            </div>
                            <Box className={classes.groupNameMovie} my={1}>
                                <div className={classes.general}>C18</div>
                                <div className={`${classes.textDefault} ${classes.namePhim}`}>{tenPhim}</div>
                            </Box>
                            <div className={classes.theaterContent}>
                                <div className={classes.nameThear}>
                                    <div className={classes.hightline}>
                                        {tenCumRap.trim().slice(0, tenCumRap.trim().indexOf(' '))}
                                    </div>
                                    {tenCumRap.trim().slice(tenCumRap.trim().indexOf(' '))}
                                </div>
                                <Box className={classes.timeMovie} my={0.5}>
                                    <div className={classes.textDefault}>{ngayChieu}</div>
                                    <Box className={classes.textDefault} mx={0.5}>{gioChieu}</Box>
                                    <div className={classes.textDefault}>{tenRap}</div>
                                </Box>
                            </div>
                            <div className={classes.lineDotted}></div>
                            <div>
                                <div className={classes.textDefault} style={{
                                    fontSize: '11px',
                                    fontFamily: 'SF Medium',
                                }}>
                                    Ghế bạn đã chọn :
                                </div>
                                {renderListGheDaDat()}
                            </div>

                            <div className={classes.lineDotted}></div>
                            <div className={classes.groupInfoUser}>
                                <div className={classes.groupInput}>
                                    <div className={classes.textDefault}>
                                        E-Mail
                                    </div>
                                    <div className={`${classes.textDefault} ${classes.inputContent}`}>
                                        khanguyen1000@gmail.com
                                    </div>
                                    <div className={classes.lineDotted}></div>
                                </div>
                                <div className={classes.groupInput}>
                                    <div className={classes.textDefault}>
                                        Phone
                                     </div>
                                    <div className={`${classes.textDefault} ${classes.inputContent}`}>
                                        0329457486
                                    </div>
                                    <div className={classes.lineDotted}></div>
                                </div>
                            </div>
                            <div className={classes.hinhThucThanhToan}>
                                <FormControl component="fieldset">
                                    <Box className={classes.textDefault} my={0.5}>Hình thức thanh toán :</Box>
                                    <RadioGroup aria-label="Hình Thức Thanh Toán" name="thanhToan" value={thanhToan} onChange={handleChange}>
                                        <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                            <Radio color="primary" value={0} />
                                            <Avatar src={ZaloPayIcon} variant="rounded" alt="ZaloPayIcon" />
                                        </div>} label="Thanh Toán qua ZaloPay" />
                                        <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                            <Radio color="primary" value={1} />
                                            <Avatar src={CCIcon} variant="rounded" alt="CCIcon" />
                                        </div>} label="Visa, Master, JCB" />
                                        <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                            <Radio color="primary" value={2} />
                                            <Avatar src={AtmIcon} variant="rounded" alt="AtmIcon" />
                                        </div>} label="Qua thẻ ATM nội địa" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className={classes.lineDotted} style={{ width: "80%", margin: 'auto' }}></div>
                    <div className={classes.divThanhToan_footer}>
                        <div >
                            <div className={`${classes.textDefault} ${classes.footerNote}`}>
                                <div className={classes.hightline} style={{ display: 'contents' }}>! </div>
                            Vé đã mua không thể đổi hoặc hoàn tiền,mã vé sẽ được gửi qua tin nhắn
                                <div className={classes.hightline} style={{ display: 'contents' }}> ZMS </div> (tin nhắn Zalo) và <div className={classes.hightline} style={{ display: 'contents' }}> Email </div> đã nhập.
                            </div>
                        </div>
                        <div className={classes.FooterButton}>
                            <Button className={classes.btnDatVe} onClick={handleBuyTicket}><div className={classes.textDefault}>Đặt vé</div></Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
const useStyles = makeStyles((theme) => ({
    //#region Chung
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // [theme.breakpoints.down(`${900}`)]: {
        //     fontSize: theme.spacing(1.2),
        // },
    },
    textDefault: {
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#808080',
        fontFamily: 'unset',
        letterSpacing: '0.5px',
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.1),
        },

    },
    //#endregion
    //#region divChonGhe jss
    divChonGhe: {
        width: '80%',
        marginTop: theme.spacing(6.3),
    },
    WrapperContent: {
        width: '75%',
        margin: 'auto',
    },
    //#region  ContentTop jss
    ContentTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // #region groupInfoThearter jss
    groupInfoThearter: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(1, 0),
        maxHeight: '10%',
    },
    GroupImgTheater: {
        marginRight: theme.spacing(1),
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
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    hightline: {
        color: '#fb4226',
        fontFamily: 'SF Medium',

    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& $textDefault': {
            fontSize: theme.spacing(1.1),
        }
    },
    //#endregion

    //#region GroupTimeCountDown jss
    GroupTimeCountDown: {
        textAlign: 'center',
        '& $textDefault': {
            fontSize: theme.spacing(.9),
            fontWeight: '400',
            letterSpacing: 0,
        }
    },
    timeCountDown: {
        color: '#44c020',
        fontSize: theme.spacing(2.7),
        fontFamily: '-webkit-pictograph',
    },
    //#endregion

    //#endregion

    //#region   ContentBody jss
    contentBody: {
        position: 'relative',
    },
    GroupManHinh: {

    },
    manHinh: {
        height: theme.spacing(1.1),
        background: '#3E515D',
        'border-top-right-radius': '5px',
        'border-top-left-radius': '5px',
    },
    anhSangManHinh: {
        height: theme.spacing(5.2),
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#3e515d73, transparent)',
        color: '#3E515D',
        fontSize: theme.spacing(1.5),
        letterSpacing: '1.3px',
    },

    GroupGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5%',
        paddingBottom: '0',
        maxHeight: '410px',
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        '& .MuiGrid-spacing-xs-1 > .MuiGrid-item ': {
            display: 'flex',
            alignItems: 'center',
        }

    },
    groupGheDay: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },

    dayGheItem: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
        color: '#3E515D',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: '0%',
        paddingBottom: '9px',
        width: '0%',
    },
    groupGheitem: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listGhe: {
        width: '100%',
        marginBottom: ' 50px',
    },
    getItem: {
        minWidth: theme.spacing(0.5),
        width: 'auto',
        height: 'auto',
        width: '100%',
        padding: theme.spacing(0.3, 0.6),
    },
    GheIcon: {
        background: 'transparent',
        width: theme.spacing(2.5),
        height: theme.spacing(4.5),
    },
    GroupDiscriptionGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        borderTop: ' 1px solid #ececec',
        padding: '2px 7px',
        zIndex: ' 5',
    },
    DcirpItem: {

        '& $GheIcon': {
            margin: 'auto',
            width: '18px',
            height: '27px',
        },
        '& $textDefault': {
            marginTop: theme.spacing(0.5),
            fontSize: theme.spacing(1),
        }
    },
    //#endregion



    //#endregion

    //#region divThanhToan jss
    divThanhToan: {
        width: '25%',

    },
    divThanhToan_content: {
        position: 'fixed',
        top: 0,
        width: '25%',
        bottom: 0,
        right: 0,
        zIndex: '99',
        background: '#fff',
        boxShadow: '3px 0px 7px 3px #80808042',
        paddingTop: '1%',
    },
    //#region divThanhToan_body jss
    wapperBody: {
        maxHeight: theme.spacing(46.5),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
    },
    divThanhToan_body: {
        width: '80%',
        margin: 'auto',
        height: '100%',
    },
    priceTotal: {
        padding: theme.spacing(0.4),
        borderBottom: '1px dotted #8080806b',
        height: '55px',
        position: ' absolute',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        zIndex: '50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    lineDotted: {
        height: '1px',
        width: '100%',
        margin: theme.spacing(1, 0),
        borderBottom: '1px dotted #8080806b',
    },
    totalMonney: {
        color: '#44c020',
        fontSize: theme.spacing(3.5),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& $moneyDefault': {
            fontSize: theme.spacing(2),
        },
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(2.5),
        },
    },
    moneyDefault: {
        color: '#44c020',
        marginLeft: theme.spacing(0.5),
        fontSize: theme.spacing(1.5),
        textTransform: 'lowercase',
    },
    groupNameMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: ' 65px',
    },
    namePhim: {
        fontSize: theme.spacing(1.5),
        color: '#000',
        fontFamily: 'SF Medium',
        whiteSpace: 'inherit',
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.2),
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
        position: 'relative',
        '& $textDefault': {
            color: '#000',
            fontFamily: 'SF Medium',
        },
        '& $totalMonney': {
            color: '#44c020',
            fontFamily: '-webkit-pictograph',
            fontSize: theme.spacing(1.6),
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.1),
            },
        },
        '& $moneyDefault': {
            fontSize: theme.spacing(1.3),
        },
        cursor: 'pointer',
        '&:hover': {
            background: '#4cc32a1c',
        }
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gheType: {
        fontSize: theme.spacing(1.2),
        margin: theme.spacing(0, 0.5),
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(0.9),
        },
    },
    btnCancel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
        textTransform: 'capitalize',
        transition: 'all 0.3s',
        '&:hover': {
            color: '#fb4226',
        },
    },
    groupInput: {
        '& $textDefault': {
            fontSize: theme.spacing(1.1),
            fontFamily: 'SF Medium',
        },
        '& $inputContent': {
            fontSize: theme.spacing(1.4),
            textTransform: 'none',
            margin: theme.spacing(0.5, 0),
            fontFamily: 'unset',
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.2),
            },
        }
    },
    inputContent: {
    },
    hinhThucThanhToan: {
        marginBottom: theme.spacing(11.9),
        '& $textDefault': {
            fontFamily: 'SF Medium',
            fontSize: theme.spacing(1.1),
        },
        '& .MuiFormControl-root': {
        },
        '& .MuiFormControlLabel-label': {
            fontSize: theme.spacing(1.4),
            color: '#2B3A51',
            fontFamily: 'SF Medium',
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.1),
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
            [theme.breakpoints.down(`${1220}`)]: {
                width: '30px',
                height: '30px',
            },
        },
        '& .MuiAvatar-img': {
            'object-fit': 'unset',
        }
    },
    //#endregion

    divThanhToan_footer: {
        bottom: 0,
        right: 0,
        left: 0,
        position: ' absolute',
        background: '#fff',
        borderTop: '1px dotted #c3c3c3',
    },
    footerNote: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'unset',
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 1.5,
        width: '90%',
        margin: 'auto',
        padding: theme.spacing(2, 0),
        marginBottom: ' 44px',
        '& $hightline': {
            margin: '0 5px',
        },

    },
    iconWarning: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        margin: theme.spacing(0, 0.5),
    },
    FooterButton: {
        position: 'absolute',
        bottom: 0,
        height: theme.spacing(5),
        left: 0,
        width: '100%',
    },
    btnDatVe: {
        background: '#AFAFAF',
        width: '100%',
        height: '100%',
        '& $textDefault': {
            color: '#fff',
            fontSize: theme.spacing(1.9),
        },
        '&:hover': {
            boxShadow: '0px 0px 8px 2px #AFAFAF',
            '& $textDefault': {
                color: '#AFAFAF',
            }
        }


    },
    //#endregion



}));
export default memo(ChonGheComponent);