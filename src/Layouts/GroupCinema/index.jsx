import { Box, Button, makeStyles, withWidth } from '@material-ui/core';
import React, { Fragment, useCallback, useMemo, useRef, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, memo } from 'react';
import { getALLInfoFollowTheaterSystem } from '../../redux/action/TheaterSystemAction';
import { createAction } from '../../redux/action';
import { SET_DATA_LIST_MOVIE_WITH_THEATER, SET_DATA_MOVIE_WITH_DATE } from '../../redux/action/type';
//#region Group icon Cinema
import BHDIcon from '../../assets/img/logoTheater/bhd.jpg';
import CGVIcon from '../../assets/img/logoTheater/cgv.jpg';
import CineStarIcon from '../../assets/img/logoTheater/cns.jpg';
import GalaxyIcon from '../../assets/img/logoTheater/glx.jpg';
import LotteCinimaIcon from '../../assets/img/logoTheater/lotte.jpg';
import MegaGSIcon from '../../assets/img/logoTheater/megags.jpg';
import NoImage from '../../assets/img/logoTheater/noImage.jpg';
import { useHistory } from 'react-router-dom';
//#endregion
const returnIconTheader = (value) => {
    switch (value.toLowerCase()) {
        case 'bhd': {
            return BHDIcon;
        }
        case 'cgv': {
            return CGVIcon;
        }
        case 'cns': {
            return CineStarIcon;
        }
        case 'glx': {
            return GalaxyIcon;
        }
        case 'megags': {
            return MegaGSIcon;
        }
        case 'lotte': {
            return LotteCinimaIcon;
        }
        default: {
            return NoImage;
        }
    }
};


const GroupCine = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const refPhim = useRef(null);
    const refDay = useRef(null);
    const refRap = useRef(null);
    const listTheaterSystem = useSelector((state) => {
        return state.qlTheaterSystem.listTheaterSystem
    });

    const listRapT = useSelector((state) => {
        return state.qlTheaterSystem.theaterSystemInfo.lstCumRap
    });
    const lstLichChieu = useSelector((state) => {
        return state.qlTheaterSystem.lstLichChieu
    });
    const lstMovieWithDate = useSelector((state) => {
        return state.qlTheaterSystem.lstMovieWithDate
    });
    const listHeThongRap = useMemo(() => {
        let lst = [];
        for (let item of listTheaterSystem) {
            lst.push({ ...item, isActived: false });
        }
        return lst;
    }, [listTheaterSystem]);
    useEffect(() => {
        dispatch(getALLInfoFollowTheaterSystem('BHDStar', () => { }));
        listHeThongRap[0].isActived = true;
    }, []);
    useEffect(() => {
        // console.log(props.width);
    }, [props.width]);

    const listRap = useMemo(() => {
        let lst = [];
        if (listRapT) {
            for (let index in listRapT) {
                lst.push({ ...listRapT[index], isActived: index === 0 ? true : false });
            }
        }
        return lst;
    }, [listRapT]);
    useEffect(() => {
        if (listRap.length !== 0) {
            listRap[0].isActived = true;
        }
    }, [listRap]);

    const listDay = useMemo(() => {
        let listD = [];
        let dayCheck = '';
        let listTest = [];
        // convert
        lstLichChieu.map((item) => {
            let date = new Date(item.ngayChieuGioChieu);
            let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
            let day = '';
            if (date.getDay() === 0) {
                day = 'Chủ Nhật';
            }
            if (date.getDay() === 1) {
                day = 'Thứ 2';
            }
            if (date.getDay() === 2) {
                day = 'Thứ 3';
            }
            if (date.getDay() === 3) {
                day = 'Thứ 4';
            }
            if (date.getDay() === 4) {
                day = 'Thứ 5';
            }
            if (date.getDay() === 5) {
                day = 'Thứ 6';
            }
            if (date.getDay() === 6) {
                day = 'Thứ Bảy';
            }
            let d = {
                day,
                da: `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`,
                dateFormat: dayString,
                isActived: false,
            }
            listD.push(d);
        });
        let mangSPTheoGia = listD.sort((sp_tieptheo, sp) => {
            return parseInt(sp_tieptheo.da) - parseInt(sp.da);
        });
        mangSPTheoGia.map((item) => {
            if (dayCheck !== item.da) {
                listTest.push(item);
            }
            dayCheck = item.da;
        });

        return listTest;

    }, [lstLichChieu]);

    useEffect(() => {
        if (lstLichChieu.length !== 0) {
            let date = new Date(lstLichChieu[0].ngayChieuGioChieu);
            let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
            dispatch(createAction(SET_DATA_MOVIE_WITH_DATE, dayString));
            listDay[0].isActived = true;
        }
    }, [lstLichChieu]);


    const handleClickTabTheaterSystem = useCallback((idTheaterSystem) => () => {
        refDay.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refPhim.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refRap.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

        dispatch(getALLInfoFollowTheaterSystem(idTheaterSystem, () => {
        }));
        for (let item of listHeThongRap) {
            item.isActived = false;
        }
        let index = listHeThongRap.findIndex(i => i.maHeThongRap === idTheaterSystem);
        if (index !== -1) {
            listHeThongRap[index].isActived = true;
        }
    }, [listHeThongRap]);
    const renderHethongRap = useCallback(() => {

        return listHeThongRap.map((item, index) => {
            return (
                <div key={index} className={classes.tabItemRapRespone} style={{ opacity: item.isActived ? '1' : '0.5' }}>
                    <div className={classes.tabItemRap}>
                        <Button variant="contained" color="inherit" className={classes.buttonImg}
                            style={{ boxShadow: item.isActived && '0px 0px 7px 1px #9E9E9E' }}
                            onClick={handleClickTabTheaterSystem(item.maHeThongRap)}
                        ><img src={item.logo} alt={item.biDanh} className={classes.logoCine} /></Button>
                    </div>
                    {(index !== (listHeThongRap.length - 1)) && <div className={classes.line}></div>}
                </div>
            )
        })
    }, [listHeThongRap]);


    const handleClickTabRap = useCallback((value) => () => {
        refPhim.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refDay.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

        let index = listRap.findIndex(m => m.maCumRap === value.maCumRap);

        for (let item of listRap) {
            item.isActived = false;
        }
        if (index !== -1) {
            listRap[index].isActived = true;
        }
        dispatch(createAction(SET_DATA_LIST_MOVIE_WITH_THEATER, value.danhSachPhim));
    }, [listRap]);
    const renderListRap = useCallback(() => {
        if (listRap) {
            return listRap.map((item, index) => {
                return (
                    <div variant="contained" color="inherit" key={index} onClick={handleClickTabRap(item)} className={classes.tabRapPhimButton}
                        style={{ opacity: item.isActived ? '1' : '0.5' }}
                    >
                        <div className={`${classes.tabRapPhimItem} `}>
                            <div className={classes.divRapImg}>
                                <img src={returnIconTheader(item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' ')))} alt={returnIconTheader(item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' ')))} className={classes.movieTheaterImg} />
                            </div>
                            <div className={classes.RapphimContent}>
                                <div className={classes.nameRapPhim}>
                                    {/* note */}
                                    <div className={classes.hightlineTenRap}>{item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' '))}</div>
                                    {item.tenCumRap.trim().slice(item.tenCumRap.trim().indexOf(' '))}
                                </div>
                                <div className={classes.address}>{item.diaChi.substr(0, 24)}{item.diaChi.length > 24 && '...'}</div>
                                <Box textAlign="left">
                                    <Button disabled={!item.isActived} className={classes.btnDetail}>[Xem bản đồ]</Button>
                                </Box>
                            </div>
                        </div>
                        {(index !== (listRap.length - 1)) && <div className={classes.line}></div>}
                    </div>
                )
            });
        }

    }, [listRap]);


    const handleChooseDay = useCallback((value) => () => {
        refPhim.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        let index = listDay.findIndex(d => d.dateFormat === value.dateFormat);
        for (let i in listDay) {
            listDay[i].isActived = false;
        }
        if (index !== -1) {
            listDay[index].isActived = true;
        }
        dispatch(createAction(SET_DATA_MOVIE_WITH_DATE, value.dateFormat));
        // console.log(value);
    }, [listDay]);

    const renderListDate = useCallback(() => {

        return listDay.map((item, index) => {
            return (
                <Button key={index} variant="contained" color="inherit" className={`${classes.dateItem}`}
                    style={{
                        color: item.isActived ? '#6b00b6' : '#000',
                        backgroundColor: 'transparent',

                    }}
                    onClick={handleChooseDay(item)}

                >
                    <div className={classes.textFomart}>{item.day}</div>
                    <div className={`${classes.textFomart} ${classes.date}`}
                        style={{
                            color: item.isActived && '#fff',
                            background: item.isActived && '#6b00b6',
                            borderRadius: item.isActived && '50%',
                            padding: item.isActived && '3px 4px',
                        }}
                    >{item.da}</div>
                </Button >
            )
        });
    }, [listDay]);


    const handleClickTimeMovie = useCallback((value) => () => {
        // console.log(value.maLichChieu);
        history.push(`/chitietphongve/${value.maLichChieu}`);
    }, []);
    const renderListPhim = useCallback(() => {
        if (lstMovieWithDate) {
            return lstMovieWithDate.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={classes.phimItem}>
                            <div className={classes.phimInfo}>
                                <div className={classes.divRapImg}>
                                    <img src={item.hinhAnh} alt="CGVMovieTheater" className={classes.movieTheaterImg} />
                                </div>
                                <div>
                                    <div className={classes.namePhim}>
                                        <div className={classes.general}>C18</div>
                                        {(item.tenPhim).substr(0, 40)}{item.tenPhim.length > 100 && '...'}
                                    </div>
                                    <div className={classes.totalTime}>91 phút - TIX 7.9 - IMDb 0</div>
                                </div>
                            </div>
                            <div className={classes.Grouptime}>
                                <div className={classes.typeAudio}>
                                    2D lồng tiếng
                                </div>
                                <div className={classes.timeMovie}>
                                    {
                                        item.lstLichChieu.map((lc, index) => {
                                            let d = new Date(lc.ngayChieuGioChieu);
                                            return (
                                                <Button className={classes.timeMovie_Item} key={index}
                                                    onClick={handleClickTimeMovie(lc)}
                                                >
                                                    <div className={classes.timeStart}>
                                                        {d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}:{d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}
                                                    </div>
                                                    <div>
                                                        ~ {(d.getHours() + 1) > 24 ? ((d.getHours() + 1) - 24) : d.getHours() + 1}:31
                                                </div>
                                                </Button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {(index !== (listRap.length - 1)) && <div className={classes.line} style={{ width: '90%' }}></div>}
                    </div>
                )
            });
        }
    }, [lstMovieWithDate]);
    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.tabRap}>
                    {renderHethongRap()}
                </div>
                <div className={classes.contentRap}>
                    <div className={classes.titleTab}>Rạp</div>
                    <div className={classes.tabRapPhim}>
                        <div ref={refRap}></div>
                        {renderListRap()}
                    </div>
                    <div className={classes.titleTab}>Phim</div>
                    <div className={classes.tabContent}>
                        <div className={classes.divDate}>
                            <div ref={refDay}></div>

                            {renderListDate()}
                        </div>
                        <div className={classes.ShowTimeDetail}>
                            <div ref={refPhim}></div>
                            {renderListPhim()}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles((theme) => ({
    //#region test
    root: {
        maxWidth: theme.spacing(94),
        width: '100%',
        height: 'auto',
        border: '1px solid #80808080',
        margin: 'auto',
        display: 'flex',
        borderRadius: theme.spacing(.5),
        [theme.breakpoints.down(`${960}`)]: {
            display: 'block',
            width: '90%',
            height: '100%',
            border: '1px solid #80808080',
            margin: 'auto',
            borderRadius: '5px',
            borderTop: 'none',
            overflow: 'hidden',
            paddingBottom: theme.spacing(2),
        }
    },

    tabRap: {
        width: theme.spacing(8.5),
        maxHeight: theme.spacing(57),
        overflow: 'auto',
        borderRight: '1px solid rgb(214 214 214)',
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
        [theme.breakpoints.down(`${960}`)]: {
            display: 'flex',
            borderRadius: '5px',
            border: 'none',
            borderTop: '1px solid #80808080',
            width: '100%',
            overflowX: 'scroll',
            '&::-webkit-scrollbar ': {
                width: '3px',
                height: '7px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'rgb(214 214 214)',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#80808080',
                borderRadius: '7px',
            },
            '& $buttonImg': {
                margin: theme.spacing(0, 1),
            },
            '& $line': {
                display: 'none',
            }
        },
    },

    tabItemRap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
    },
    tabItemRapRespone: {
        width: "auto",
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%'
        }
    },
    buttonImg: {
        borderRadius: '50%',
        width: theme.spacing(5),
        height: theme.spacing(5),
        minWidth: theme.spacing(1),
        background: 'transparent',
        '&:hover': {
            background: 'transparent',
        }
    },
    logoCine: {
        width: theme.spacing(5),
    },
    line: {
        background: '#8080805e',
        width: '60%',
        height: '0.5px',
        margin: 'auto',
    },
    contentRap: {
        width: '91%',
        height: theme.spacing(55.8),
        display: 'flex',
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            display: 'block',
            paddingBottom: theme.spacing(3),
        }
    },
    tabRapPhim: {
        width: '30%',
        borderRight: '1px solid rgb(214 214 214)',
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
        [theme.breakpoints.down(`${960}`)]: {
            width: '35%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            width: '96%',
            overflow: 'auto',
            maxHeight: theme.spacing(16.5),
            height: '100%',
            margin: 'auto',
            marginBottom: theme.spacing(1),
            padding: theme.spacing(1.6, 0),
            boxShadow: '0px 5px 16px -4px #80808080',
            borderRadius: '5px',
            borderLeft: 'none',
            borderRight: 'none',
        }
    },
    titleTab: {
        textAlign: 'center',
        fontFamily: 'SF Text Regular',
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.4),
        margin: theme.spacing(1),
        display: 'none',
        [theme.breakpoints.down(`${770}`)]: {
            display: 'block',
        }
    },
    tabRapPhimButton: {
        width: '100%',
        background: 'transparent',
        boxShadow: ' 0 0 black',
        display: 'block',
        transition: 'none',
        '&:hover': {
            background: 'transparent',
            boxShadow: ' 0 0 black',
        }
    },
    tabRapPhimItem: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1.5, 0),
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
    },
    active: {
        opacity: '1',
    },
    divRapImg: {
        display: 'flex',
        alignSelf: 'center',
        margin: theme.spacing(0, 1),
    },
    movieTheaterImg: {
        width: theme.spacing(5),
        height: 'auto',
        borderRadius: theme.spacing(0.5),
    },
    RapphimContent: {
        fontSize: theme.spacing(1.4),
        width: '100%',
    },
    nameRapPhim: {
        display: 'flex',
        color: '#000',
        letterSpacing: theme.spacing(0.05),
        fontFamily: 'SF Text Regular',
        textAlign: 'left',
        fontSize: theme.spacing(1.1),
        width: '75%',
    },
    hightlineTenRap: {
        color: '#FB4226',
    },
    address: {
        fontSize: theme.spacing(1.2),
        width: theme.spacing(21),
        color: '#949494',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        letterSpacing: theme.spacing(0.03),
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',
        lineHeight: '1.7',
    },
    btnDetail: {
        color: '#FB4226 !important',
        fontSize: theme.spacing(1.2),
        background: 'transparent',
        padding: 0,
        margin: theme.spacing(0.1),
        textTransform: 'capitalize',
        '&:hover': {
            background: 'transparent',
            textDecoration: 'underline',
        }

    },
    contentPhim: {
        width: '100%',
        maxHeight: theme.spacing(57),
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
        [theme.breakpoints.down(`${770}`)]: {
            width: '96%',
            overflow: 'auto',
            maxHeight: theme.spacing(30),
            height: '100%',
            margin: 'auto',
            marginBottom: theme.spacing(1),
            padding: theme.spacing(1.6, 0),
            boxShadow: '0px 5px 16px -4px #80808080',
            borderRadius: '5px',
            border: 'none',
        }
    },
    phimItem: {
        padding: theme.spacing(1.5),
        [theme.breakpoints.down(`${960}`)]: {
            padding: theme.spacing(1.5, 0),
        },
    },
    phimInfo: {
        display: 'flex',
        marginBottom: theme.spacing(1.5),
        alignItems: 'center',
    },
    namePhim: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'SF Text Regular',
        textTransform: 'capitalize',
        width: '100%',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
            '& $general': {
                fontSize: theme.spacing(1.2),
            },
        },
    },
    general: {
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        padding: theme.spacing(0.4, 0.6),
        display: 'inline-block',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.3),
        marginRight: theme.spacing(1),
        width: theme.spacing(2.3),
        textAlign: 'center',
    },
    totalTime: {
        margin: 0,
        lineHeight: '1.7',
        fontSize: theme.spacing(1.1),
        color: '#9b9b9b',
        textTransform: 'capitalize',

    },
    Grouptime: {
        padding: theme.spacing(0, 1),
    },
    typeAudio: {
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),
        color: '#000',
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    timeMovie_Item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        color: '#108f3e',
        margin: theme.spacing(0, 1, 1, 0),
        padding: theme.spacing(0.5, 1),
        transition: 'all 0.5s',
        textAlign: 'center',
        background: 'rgba(246,246,246,.5)',
        borderRadius: '7px',
        color: '#9b9b9b',
        border: '1px solid #e4e4e4',
        cursor: 'pointer',
        letterSpacing: '1px',
        '&:hover $timeStart': {
            color: '#6b00b6',
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.1),
            margin: theme.spacing(0, 0.5, 1, 0),
            padding: theme.spacing(0.3, 0.7),
            '& $timeStart': {
                fontSize: theme.spacing(1.2),
            },
        },
    },
    timeStart: {
        fontSize: theme.spacing(1.8),
        fontFamily: 'SF Medium',
        color: '#108f3e',

    },
    //#endregion
    tabContent: {
        width: '70%',
        [theme.breakpoints.down(`${960}`)]: {
            width: '65%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            padding: '16px 0px',
            width: '96%',
            margin: 'auto',
            boxShadow: ' 0px 5px 16px -4px #80808080',
        }
    },
    divDate: {
        display: 'flex',
        overflowX: 'auto',
        '&::-webkit-scrollbar ': {
            width: '4px',
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
    dateItem: {
        display: 'block',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(12.2),
        padding: theme.spacing(0.8),

        '&:hover': {
            color: 'rgb(107, 0, 182) !important',
            background: 'transparent',
        },
        '&.active': {
            color: '#fb4226',
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.4),
            '& $textFomart': {
                fontSize: theme.spacing(1.3),
            },
            '& $date': {
                fontSize: theme.spacing(1.3),
            },
        },
    },
    textFomart: {
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    date: {
        fontSize: theme.spacing(1.7),
        letterSpacing: '2px',
        fontFamily: 'system-ui',
        display: 'inline',
    },

    ShowTimeDetail: {
        padding: theme.spacing(0, 1.4),
        margin: theme.spacing(1.4, 0),
        overflow: 'auto',
        maxHeight: theme.spacing(45),
        '&::-webkit-scrollbar ': {
            width: '8px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${960}`)]: {
            padding: '0',
        },
        [theme.breakpoints.down(`${770}`)]: {
            maxHeight: theme.spacing(24),
            padding: '0',
            '&::-webkit-scrollbar ': {
                width: '3px',
            },
        }
    },
}));



export default memo(withWidth()(GroupCine));