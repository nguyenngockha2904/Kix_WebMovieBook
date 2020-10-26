import { Box, Button, makeStyles } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import phim1 from '../../assets/img/phim5.png';
import play_videoIcon from '../../assets/img/play_videoIcon.svg';
import iconStarMid from '../../assets/img/iconStarMid.svg';
import iconStarFull from '../../assets/img/iconStarFull.svg';
import onePerTwoIcon from '../../assets/img/onePerTwoIcon.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE, SHOW_MODAL_VIDEO } from '../../redux/action/type';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

    topBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        filter: 'blur(10px)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'brightness(0.5)',
        backgroundPosition: 'center',
    },
    WraperContent: {
        zIndex: 6,
        width: '60%',
        // background: '#ffe9e996',

        // borderTopRightRadius: '33px',
        // borderBottomRightRadius: '33px',
        // boxShadow: '0 0 8px 1px #fff',
        margin: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        [theme.breakpoints.down(`${1201}`)]: {
            width: '80%',
        },
        [theme.breakpoints.down(`${1025}`)]: {
            width: '100%',
        },
        [theme.breakpoints.down(`${620}`)]: {
            width: '100%',
            borderRadius: '33px',
            padding: '5%',
        }
    },
    filmInfo: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down(`${620}`)]: {
            display: 'block',
        },
    },
    groupImgFilm: {
        position: 'relative',
        marginRight: theme.spacing(1.4),
        '&:hover $groupPlayVideo': {
            opacity: '1',
        },
        [theme.breakpoints.down(`${620}`)]: {
            display: 'flex',
            justifyContent: 'center',
        },

    },
    imgFilm: {
        width: theme.spacing(21.4),
        height: theme.spacing(32.3),
        borderRadius: '5px',
        boxShadow: '0 0 8px 1px #fff',
        [theme.breakpoints.down(`${620}`)]: {
            width: '50%',
            height: '50%',
        },
    },
    groupPlayVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.4s',
    },
    play_videoIcon: {
        minWidth: theme.spacing(1),
        width: theme.spacing(6.9),
        height: theme.spacing(6.9),
        borderRadius: '50%',
        background: '#312f2fa3',
        '&:hover': {
            background: '#312f2f33',
        }

    },
    videoIcon: {
        width: theme.spacing(6.9),
        height: 'auto',
        borderRadius: '50%',
        border: '2px solid #fff',
    },
    filmInfoContent: {
        [theme.breakpoints.down(`${620}`)]: {
            margin: theme.spacing(1, 0),
        },
    },
    defaultText: {
        color: '#fff',
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        letterSpacing: '1px',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    GroupName: {
        display: 'flex',
        width: '100%',
        alignItems: 'baseline',
        [theme.breakpoints.down(`${769}`)]: {
            width: '100%',
        },
    },
    general: {
        marginRight: theme.spacing(0.6),
        marginTop: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.6),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.5),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(3.3),
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.3),
        },
    },
    nameFilm: {
        fontSize: theme.spacing(2.4),
        fontFamily: 'SF Medium',
        color: '#fff',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.8),
        },
    },
    groupBtnPay: {

    },
    BtnPay: {
        fontSize: theme.spacing(1.6),
        borderRadius: theme.spacing(0.4),
        textAlign: 'center',
        background: '0 0',
        padding: theme.spacing(0.6, 1.6),
        textTransform: 'capitalize',
        transition: 'all .2s',
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2),
        backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        border: 'none',
        letterSpacing: '0.2px',
        fontFamily: 'SF Medium',
        color: '#fff',
        '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
        },
        [theme.breakpoints.down(`${620}`)]: {
            margin: theme.spacing(1, 0),
        },
    },
    groupStar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: '50%',
        height: 'auto',
        minWidth: theme.spacing(10),
    },
    rating: {
        [theme.breakpoints.down(`${769}`)]: {
            display: 'none'
        },
    },

}))
const MovieDetailContent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [per, SetPer] = useState(0);
    const [person, setPerson] = useState(Math.floor(Math.random() * 35) + 1);
    const propsItem = useSelector((state) => {
        return state.qlMovie.movieInfoSystem
    });
    const setTitle = useCallback((title) => {
        const prevTitle = document.title;
        document.title = title;
        return () => document.title = prevTitle;
    }, []);
    const { role, item } = useMemo(() => {
        return props
    }, [props]);
    const { hinhAnh, tenPhim, danhGia } = useMemo(() => {
        if (role === 2) {
            return propsItem
        };
        if (role === 1) {
            return item;
        }
    }, [role]);
    useEffect(() => {
        if (role === 2) { ///trang detail
            setTitle(`Kix - ${tenPhim}`);
        }
    }, [role]);
    useEffect(() => {
        let percent = (danhGia) / 10;
        SetPer(percent);
    }, [danhGia]);
    const renderRating = useCallback(() => {
        let times = danhGia % 2 > 0 ? (danhGia / 2 + 0.5) : danhGia / 2;
        let value = danhGia / 2;
        let listRaiting = [];
        for (let i = 1; i <= times; i++) {
            if (value === 0.5) {
                listRaiting.push(iconStarMid);
            } else {
                listRaiting.push(iconStarFull);
            }
            value = value - 1;
        }
        return listRaiting.map((item, index) => {
            return (
                <img src={item} alt={item} className={classes.starIcon} key={index} />
            )
        })

    }, []);

    const handleShowModalVideo = useCallback((value) => () => {
        let role1 = role === 2 ? 3 : 1;
        dispatch(createAction(SHOW_MODAL_VIDEO, { value, role: role1 }));
    }, []);
    const handleClickBuy = useCallback(() => {
        if (role === 2) {
            props.refMuaVe.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        } else {
            dispatch(createAction(SET_REQUEST_PAGE, 3));
            history.replace(`/detail/${item.maPhim}`);

        }
    }, []);
    return (
        <Fragment>
            <div className={classes.topBg} style={{ backgroundImage: `url(${hinhAnh})` }}></div>
            <div className={classes.topBg} style={{ background: 'rgba(0, 0, 0, 0.02)', zIndex: '3' }}></div>
            <div className={classes.WraperContent} style={{ margin: role === 1 ? '9%' : '5%' }}>
                <div className={classes.filmInfo}>
                    <div className={classes.groupImgFilm}>
                        <img src={hinhAnh} alt="hinhAnh" className={classes.imgFilm} />
                        <div className={classes.groupPlayVideo}>
                            <Button variant="contained" color="inherit" className={classes.play_videoIcon}
                                onClick={handleShowModalVideo(role === 2 ? propsItem : item)}
                            >
                                <img src={play_videoIcon} alt="play_videoIcon" className={classes.videoIcon} />
                            </Button>
                            <Box position="absolute" top="0" right="0" display="flex" justifyContent="center" alignItems="center">
                            </Box>
                        </div>
                    </div>
                    <div className={classes.filmInfoContent}>
                        <div className={classes.defaultText}>
                            09.10.2020
                            </div>
                        <div className={`${classes.GroupName} ${classes.nameFilm}`}>
                            <div className={classes.general}>
                                C18
                                </div>{tenPhim}
                        </div>
                        <div className={classes.defaultText}>
                            113 phút - 0 IMDb - 2D/Digital
                            </div>
                        <div className={classes.groupBtnPay}>
                            <Button className={classes.BtnPay}
                                onClick={handleClickBuy}
                            >Mua vé </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.rating}>
                    {/* Progress bar */}
                    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                        <div className={classes.progressBar}>
                            <CircularProgressbar
                                value={per}
                                maxValue={1}
                                text={`${danhGia}`}
                                background={true}
                                strokeWidth={5}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: 'rgb(169 255 68)',
                                        strokeLinecap: 'butt',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        transform: 'rotate(0 )',
                                        transformOrigin: 'center center',
                                    },
                                    trail: {
                                        stroke: 'rgb(117 113 113 / 65%)',
                                        strokeLinecap: 'butt',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                        width: '20px',
                                    },
                                    text: {
                                        fill: 'rgb(169 255 68)',
                                        fontSize: '40px',
                                        fontFamily: 'SF Medium',
                                    },
                                    background: {
                                        fill: '#0000004d',
                                    },
                                }}
                            />
                        </div>
                    </Box>
                    <div className={classes.groupStar}>
                        {renderRating()}
                        <img src={onePerTwoIcon} alt="onePerTwo" className={classes.starIcon} />
                    </div>
                    {role === 2 && <Box className={classes.defaultText} textAlign="center">
                        {person} người đánh giá
                    </Box>}

                </div>
            </div>
        </Fragment>


    );
};

export default memo(MovieDetailContent);