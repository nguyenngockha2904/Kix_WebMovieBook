import { Avatar, Button, Grid, makeStyles, Snackbar } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_IS_ACTVED_GHE_ITEM } from '../../redux/action/type';
import Countdown from 'react-countdown';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
//#region Ghe SVG
const ChangeGheSVG = (color, number, disable, type = 0) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="307.5" height="283" viewBox="0 0 307.5 283">

            <defs>
                <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#f0a22b" />
                    <stop offset="1" stopColor="#f7a928" />
                </linearGradient>
            </defs>
            <g id="gheIcon1" transform="translate(-170 -1017)">
                <path id="gheIcon" d="M382.9,194.5V156.2a42.593,42.593,0,0,0-42.5-42.5H172.9a42.593,42.593,0,0,0-42.5,42.5v38.3a42.643,42.643,0,0,0-27.5,39.7V396.7h25V374.2H385.4v22.5h25V234.2A42.4,42.4,0,0,0,382.9,194.5Zm-210-55.8H340.4a17.584,17.584,0,0,1,17.5,17.5v35.6a42.51,42.51,0,0,0-40,42.4v45H195.4v-45a42.51,42.51,0,0,0-40-42.4V156.2A17.584,17.584,0,0,1,172.9,138.7Z" transform="translate(67.1 1022.3)" fill={`${color}`} />
                <text id="_50" data-name="50" transform={`${number < 99 ? 'translate(266 1125)' : 'translate(237 1125)'}`} fill={`${color}`} fontSize="100" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">{number}</tspan></text>
                {disable && <Fragment>
                    <line id="Line_19" data-name="Line 19" x2="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#fff" strokeWidth="20" />
                    <line id="Line_20" data-name="Line 20" x1="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#fff" strokeWidth="20" />
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




const ChonGheResp = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = useState({ isShow: false, message: '' });
    // const [timeCount,setTimeCount]= useState({ minutes:0, seconds: }); 
    const { handleNext, dateTime, renderer, } = useMemo(() => {
        return props
    }, [props]);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });
    const listGhePhanMang = useSelector((state) => {
        return state.qlMovie.listGhePhanMang
    });
    let tongTien = useMemo(() => {
        let tt = 0;
        if (listGheDaDat.length !== 0) {
            for (let item of listGheDaDat) {
                tt += item.giaVe;
            }
        }
        return tt;
    }, [listGheDaDat]);
    const handleChooseGhe = useCallback((item) => () => {
        dispatch(createAction(SET_IS_ACTVED_GHE_ITEM, item));
    }, []);

    const renderListGhe = useCallback(() => {
        return listGhePhanMang.map((item, index) => {
            return (
                <div key={index} className={classes.groupGheDay} style={{ marginBottom: index === (listGhePhanMang.length - 1) && '51px' }}>
                    <div className={classes.dayGheItem}>{item.tenday}</div>
                    <div className={classes.groupGheitem}>
                        {item.list.map((item, index) => {
                            return (
                                <Button className={classes.getItem} disableElevation={item.daDat} disabled={item.daDat || item.isKhongTheDat} onClick={handleChooseGhe(item)} key={index}>
                                    <Avatar variant="square" className={classes.GheIcon}>{
                                        item.isKhongTheDat ? ChangeGheSVG('rgb(183,183,183,39%)', (item.stt), item.daDat, item.loaiGhe !== "Thuong" && 1) : (!item.isActived ?
                                            ChangeGheSVG((!item.daDat ? '#92a0a9' : 'rgb(183,183,183,49%)'), (item.stt), item.daDat, item.loaiGhe !== "Thuong" && 1)
                                            :
                                            ChangeGheSVG('#6b00b6', (item.stt), false, item.loaiGhe !== "Thuong" && 1))
                                    }</Avatar>
                                </Button>

                            )
                        })}
                    </div>
                </div>

            )
        });
    }, [listGhePhanMang]);
    const { tenCumRap, tenRap, diaChi, tenPhim, ngayChieu, gioChieu } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
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

    const handleClickNext = useCallback(() => {
        if (listGheDaDat.length === 0) {
            setOpen({ isShow: true, message: 'Vui lòng chọn ghế để tiếp tục!' });
        } else {
            handleNext(2);
        }

    }, [listGheDaDat]);
    const handleClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ isShow: false, message: '' });
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
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
            </div>
            <div className={classes.GroupDiscriptionGhe}>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('rgb(183,183,183,49%)', '', true)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        có người chọn
                    </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#B7B7B7', '', false, 1)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        vip
                                </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#6b00b6', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        đang chọn
                                </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#B7B7B7', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        thường
                                </div>
                </div>

                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('rgb(183,183,183,39%)', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        không thể chọn
                                </div>

                </div>

            </div>
            <div className={classes.divInfo}>
                <div className={classes.wrapperInfo}>
                    <div className={classes.filmInfo}>
                        <div className={classes.contentFilm}>
                            <p className={`${classes.textDefault} ${classes.namePhim}`}>{tenPhim}</p>
                            <div>
                                <div className={classes.general}>C18</div>
                                <span className={classes.timeSub}>91 phút 2d - Phụ Đề</span>
                            </div>
                        </div>
                        <div className={classes.timeCountDown}>
                            <Countdown
                                date={dateTime}
                                renderer={renderer}
                                onComplete={() => {
                                    history.replace('/');
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.nameThear}>
                        <div className={classes.hightline}>
                            {tenCumRap.trim().slice(0, tenCumRap.trim().indexOf(' '))}
                        </div>
                        {tenCumRap.trim().slice(tenCumRap.trim().indexOf(' '))}
                    </div>
                    <div className={classes.infoTimeShow}>
                        <div className={classes.infoDivItem}>
                            <div className={classes.timeSub}>Ngày Chiếu</div>
                            <div className={`${classes.textDefault} ${classes.textDef}`}>{ngayChieu}</div>
                        </div>
                        <div className={classes.infoDivItem}>
                            <div className={classes.timeSub}>Suất Chiếu</div>
                            <div className={`${classes.textDefault} ${classes.textDef}`}>{gioChieu}</div>
                        </div>
                        <div className={classes.infoDivItem}>
                            <div className={classes.timeSub}>Rạp/Phòng</div>
                            <div className={`${classes.textDefault} ${classes.textDef}`}>{tenRap}</div>
                        </div>

                    </div>
                    <div className={classes.infoTimeShow}>
                        <div className={classes.infoDivItem}>
                            <div className={classes.timeSub}>Ghế đã chọn</div>
                            <div className={classes.gheContent}>{listGheDaDat.length !== 0 ? renderListGheDaDat() : '...'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.priceTotal}>
                    <div className={classes.timeSub}>Tổng tiền :</div>
                    <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                        {(tongTien).toLocaleString()}đ
                    </div>
                </div>
                <div className={classes.GroupButtonNext}>
                    <Button className={classes.buttonNext} onClick={handleClickNext}>Tiếp tục</Button>
                </div>
            </div>
            <Snackbar open={open.isShow} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                    {open.message}
                </Alert>
            </Snackbar>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    //#region done
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: '#020202',
        '& .MuiAlert-standardWarning': {
            boxShadow: ' 0 0 3px 1px #fff',
        },
    },
    wrapper: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        height: 'auto',
        marginTop: '55px',
        background: 'rgb(17 20 24)',
        overflow: 'auto',
    },
    GroupManHinh: {
        minWidth: '750px',
        width: '100%',
    },
    manHinh: {
        height: theme.spacing(1.1),
        background: '#03a9f4',
    },
    anhSangManHinh: {
        height: theme.spacing(3.5),
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#2196f3c7, transparent)',
        color: '#03a9f4',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.3),
        letterSpacing: '-0.7px',
    },
    groupGheDay: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    GroupGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '0',
        minWidth: '750px',
        width: '100%',
        minHeight: '285px',
        height: '50px',
        '& .MuiGrid-spacing-xs-1 > .MuiGrid-item ': {
            display: 'flex',
            alignItems: 'center',
        }

    },
    listDayGhe: {
        width: '5%',
        height: '714px',
    },

    listGhe: {
        width: '90%',
        margin: 'auto',
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
    getItem: {
        minWidth: theme.spacing(0.5),
        width: 'auto',
        height: 'auto',
        padding: theme.spacing(0.3, 0.6),
    },
    GheIcon: {
        background: 'transparent',
        width: theme.spacing(2),
        height: theme.spacing(4.5),
    },
    GroupDiscriptionGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        padding: '0 5px',
        textAlign: 'center',
        borderTop: '1px solid #ffffff5e',
        marginBottom: '5px',
        borderRadius: '10px',
    },
    DcirpItem: {
        '& $GheIcon': {
            margin: 'auto',
            width: '16px',
            height: '37px',
        },
        '& $textDefault': {
            fontSize: theme.spacing(0.9),
        }
    },
    textDefault: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#fff',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    //#endregion
    divInfo: {
        height: 'auto',
        background: '#e4e4e4',
        borderRadius: '10px',
        padding: '8px',
    },
    wrapperInfo: {
        background: '#fff',
        borderRadius: '10px',
        padding: '6px',
        height: '160px',
        overflow: 'auto',
    },
    filmInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $textDefault': {
            color: '#000',
        }
    },
    contentFilm: {
    },
    namePhim: {
        margin: 0,
        letterSpacing: '0',
        fontFamily: 'SF Medium',
    },
    timeSub: {
        color: '#808080',
        letterSpacing: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.1),
        textTransform: 'capitalize',
        fontFamily: 'unset',
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
    timeCountDown: {
        color: '#44c020',
        fontSize: theme.spacing(2),
        fontFamily: '-webkit-pictograph',
        background: '#0000000d',
        borderRadius: '5px',
        padding: '1px 5px',
    },
    nameThear: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        letterSpacing: '-0.5px',
        fontSize: theme.spacing(1.3),
        textTransform: 'capitalize',
        margin: '5px 0',
    },
    hightline: {
        color: '#440074',
        fontFamily: 'SF Medium',

    },
    infoTimeShow: {
        display: 'flex',
        margin: '5px 0',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    infoDivItem: {
    },
    textDef: {
        fontFamily: 'SF Medium',
        color: '#000',
    },
    gheContent: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        marginTop: '5px',
    },
    gheType: {
        fontSize: theme.spacing(1.2),
        margin: theme.spacing(0, 0.5),
    },
    priceTotal: {
        marginTop: '2px',
        background: '#fff',
        borderRadius: '10px',
        padding: '10px 6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $timeSub': {
            fontSize: theme.spacing(1.4),
        }
    },
    totalMonney: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.9),
    },
    GroupButtonNext: {
        background: '#fff',
        borderRadius: '10px',
        marginTop: '6px',
    },
    buttonNext: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
    },
}));
export default memo(ChonGheResp);