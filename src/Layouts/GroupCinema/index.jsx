import { Box, Button, makeStyles, withWidth } from '@material-ui/core';
import React, { Fragment, useCallback, useState } from 'react';
import CGVlogo from '../../assets/img/logoCine/cgv_logo.png';
import BHDLogo from '../../assets/img/logoCine/BHD_logo.png';
import CNXLogo from '../../assets/img/logoCine/cnx_logo.jpg';
import DcineLogo from '../../assets/img/logoCine/Dcine_logo.jpg';
import DDCLogo from '../../assets/img/logoCine/DDC_logo.png';
import GalaxyLogo from '../../assets/img/logoCine/galaxy_logo.png';
import LotteLogo from '../../assets/img/logoCine/lotte_logo.png';
import MegaLogo from '../../assets/img/logoCine/megaLogo.png';
import CGVMovieTheater from '../../assets/img/CGV_movie_theater.jpg';
import { ClassSharp } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, memo } from 'react';
import { getALLGroupTheatherWithIdTheatherSystem, getALLInfoFollowTheaterSystem } from '../../redux/action/TheaterSystemAction';
import { createAction } from '../../redux/action';
import { SET_DATA_LIST_MOVIE_WITH_THEATER } from '../../redux/action/type';
const useStyles = makeStyles((theme) => ({
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
            marginBottom: theme.spacing(2),
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
        width: '100%',
        maxHeight: theme.spacing(57),
        display: 'flex',
        [theme.breakpoints.down(`${770}`)]: {
            display: 'block',
            paddingBottom: theme.spacing(3),
        }
    },
    tabRapPhim: {
        width: theme.spacing(46),
        maxHeight: theme.spacing(57),
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
        opacity: '0.7',
        cursor: 'pointer',
        width: '100%',
        '&:hover': {
            opacity: '1',
        },
        '&:focus': {
            opacity: '1',
        }
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
        fontSize: theme.spacing(1.2),
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
        }
    },
    timeStart: {
        fontSize: theme.spacing(1.8),
        fontFamily: 'SF Medium',
        color: '#108f3e',

    },

}));

const GroupCine = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [idTheaterSystem, setIdTheaterSystem] = useState('BHDStar');
    const propsTheaterSystem = useSelector((state) => {
        return state.qlTheaterSystem
    });

    useEffect(() => {
        dispatch(getALLInfoFollowTheaterSystem(idTheaterSystem, () => { }));
    }, []);
    const handleClickTabRap = useCallback((value) => () => {
        dispatch(createAction(SET_DATA_LIST_MOVIE_WITH_THEATER, value));
    }, []);
    const handleClickTabTheaterSystem = useCallback((idTheaterSystem) => () => {
        dispatch(getALLInfoFollowTheaterSystem(idTheaterSystem, () => { }));
    }, []);
    const renderHethongRap = useCallback(() => {
        let listHeThongRap = propsTheaterSystem.listTheaterSystem;
        return listHeThongRap.map((item, index) => {
            return (
                <div key={index} className={classes.tabItemRapRespone}>
                    <div className={classes.tabItemRap}>
                        <Button variant="contained" color="inherit" className={classes.buttonImg}
                            onClick={handleClickTabTheaterSystem(item.maHeThongRap)}
                        ><img src={item.logo} alt={item.biDanh} className={classes.logoCine} /></Button>
                    </div>
                    {(index !== (listHeThongRap.length - 1)) && <div className={classes.line}></div>}
                </div>
            )
        })
    }, [propsTheaterSystem.listTheaterSystem]);
    const renderListRap = useCallback(() => {
        let listRap = propsTheaterSystem.theaterSystemInfo.lstCumRap;
        if (listRap) {
            return listRap.map((item, index) => {
                return (
                    <Button variant="contained" color="inherit" key={index} onClick={handleClickTabRap(item.danhSachPhim)} className={classes.tabRapPhimButton}>
                        <div className={`${classes.tabRapPhimItem} `}>
                            <div className={classes.divRapImg}>
                                <img src={CGVMovieTheater} alt="CGVMovieTheater" className={classes.movieTheaterImg} />
                            </div>
                            <div className={classes.RapphimContent}>
                                <div className={classes.nameRapPhim}>
                                    {/* note */}
                                    <div className={classes.hightlineTenRap}>{item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' '))}</div>
                                    {item.tenCumRap.trim().slice(item.tenCumRap.trim().indexOf(' '))}
                                </div>
                                <div className={classes.address}>{item.diaChi}</div>
                                <Box textAlign="left">
                                    <div className={classes.btnDetail}>[chi tiết]</div>
                                </Box>
                            </div>
                        </div>
                        {(index !== (listRap.length - 1)) && <div className={classes.line}></div>}
                    </Button>
                )
            });
        }

    }, [propsTheaterSystem.theaterSystemInfo.lstCumRap]);
    const renderListPhim = useCallback(() => {

        let listRap = propsTheaterSystem.listMovieWithTheater;
        // console.log(propsTheaterSystem.listMovieWithTheater);
        if (listRap) {
            return listRap.map((item, index) => {
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
                                        {(item.tenPhim).slice(0, 40)}{item.tenPhim.length > 100 && '...'}
                                    </div>
                                    <div className={classes.totalTime}>91 phút - TIX 7.9 - IMDb 0</div>
                                </div>
                            </div>
                            <div className={classes.Grouptime}>
                                <div className={classes.typeAudio}>
                                    2D lồng tiếng
                                </div>
                                <div className={classes.timeMovie}>
                                    <div className={classes.timeMovie_Item}>
                                        <div className={classes.timeStart}>
                                            15:00
                                                </div>
                                        <div>
                                            ~ 16:31
                                                </div>
                                    </div>
                                    {
                                        item.lstLichChieuTheoPhim.map((lc, index) => {
                                            let d = new Date(lc.ngayChieuGioChieu);
                                            return (
                                                <div className={classes.timeMovie_Item} key={index}>
                                                    <div className={classes.timeStart}>
                                                        {d.getHours()}:{d.getMinutes()}
                                                    </div>
                                                    <div>
                                                        ~ {(d.getHours() + 1) > 24 ? ((d.getHours() + 1) - 24) : d.getHours() + 1}:31
                                                </div>
                                                </div>
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
    }, [propsTheaterSystem.listMovieWithTheater]);
    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.tabRap}>
                    {renderHethongRap()}
                </div>
                <div className={classes.contentRap}>
                    <div className={classes.titleTab}>Rạp</div>
                    <div className={classes.tabRapPhim}>
                        {renderListRap()}
                    </div>
                    <div className={classes.titleTab}>Phim</div>
                    <div className={classes.contentPhim}>
                        {renderListPhim()}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default memo(withWidth()(GroupCine));