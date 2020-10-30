import { Box, Button, makeStyles } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../../Layouts/footer';
import 'react-circular-progressbar/dist/styles.css';
import MovieDetailContent from '../../Components/MovieDetailContent';
import { useParams } from 'react-router-dom';
import { getMovieInfoWithMovieId } from '../../redux/action/movieAction';
import Loading from '../../Layouts/Loading';
import { useDispatch, useSelector } from 'react-redux';
import ModalVideoMovie from '../../Components/ModalShowVideo';
import MovieDetailInfo from '../../Components/MovieDetailInfo';
import MovieDetailShowTime from '../../Components/MovieDetailShowTime';
import { createAction } from '../../redux/action';
import { SET_TYPE_PAGE } from '../../redux/action/type';
import Header from '../../Layouts/Header';
import { motion } from 'framer-motion';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6.4),
        width: '100%',
        minHeight: theme.spacing(140),
        height: '100%',
        background: 'rgb(10, 32, 41)',
    },
    divTop: {
        position: 'relative',
        minHeight: theme.spacing(30),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1),
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    navItem: {
        margin: theme.spacing(0, 0.5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none',
        position: 'relative',
        '&:hover $navLink': {
            fontSize: theme.spacing(2.3),
        },
        '& $img': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down(`${960}`)]: {
            '&:hover $navLink': {
                fontSize: theme.spacing(1.8),
            },
        },
    },

    navItem_active: {

        '&:hover $navLink': {
            color: '#6b00b6',
        },
        '& $navLink': {
            color: '#6b00b6',
            fontSize: theme.spacing(2.3),
        },
        [theme.breakpoints.down(`${960}`)]: {
            '& $navLink': {
                fontSize: theme.spacing(1.8),
            },
        },
    },
    navLink: {
        fontSize: theme.spacing(1.7),
        fontWeight: '700',
        cursor: 'pointer',
        textTransform: 'capitalize',
        transition: 'all 0.3s',
        letterSpacing: theme.spacing(0.1),
        // transition: '0.3s all',
        color: '#fff',
        whiteSpace: 'nowrap',

    },
    tabContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const MovieDetail = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const refMuaVe = useRef();
    const [isLoading, setIsloadding] = useState(true);
    const [isTabLichChieu, setIsTabLichChieu] = useState(true);

    const request = useSelector((state) => {
        return state.parent.request
    });
    useEffect(() => {
        dispatch(getMovieInfoWithMovieId(params.maPhim, () => {
            dispatch(createAction(SET_TYPE_PAGE, 2));
            setTimeout(() => {
                if (request === 3) {
                    refMuaVe.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

            }, 300);
            setIsloadding(false);
        }))

    }, []);
    const handleShowTabLichChieu = useCallback((value) => () => {
        refMuaVe.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        setIsTabLichChieu(value);
    }, []);
    const isShowModalVideoMovie = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.isShow
    });
    return (
        <Fragment >
            {isLoading ? <Loading /> :
                <Fragment>

                    <Header />
                    <div className={classes.root}>
                        <motion.div className={classes.divTop}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >
                            <MovieDetailContent role={2} item={{}} refMuaVe={refMuaVe} handleShowTabLichChieu={setIsTabLichChieu} />
                        </motion.div>
                        <div className={classes.divContent}>
                            <div ref={refMuaVe}></div>
                            <div className={classes.tabTitle}>
                                <div
                                    className={`${classes.navItem} ${isTabLichChieu ? classes.navItem_active : ''}`}
                                    onClick={handleShowTabLichChieu(true)}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                    >
                                        Lịch Chiếu
                                </Button>
                                    <div className={classes.tagActive}></div>
                                </div>
                                <div
                                    className={`${classes.navItem} ${!isTabLichChieu ? classes.navItem_active : ''}`}
                                    onClick={handleShowTabLichChieu(false)}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                    >
                                        Thông tin
                                </Button>
                                    <div className={classes.tagActive}></div>
                                </div>
                            </div>
                            {isTabLichChieu ?
                                <motion.div className={classes.tabContent}
                                    initial={{
                                        opacity: 0,
                                        y: 50
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                >
                                    <MovieDetailShowTime />
                                </motion.div>
                                :
                                <motion.div className={classes.tabContent}
                                    initial={{
                                        opacity: 0,
                                        y: 50
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                >
                                    <MovieDetailInfo />
                                </motion.div>
                            }
                        </div>
                    </div>
                    <Footer />
                    {isShowModalVideoMovie && <ModalVideoMovie />}
                </Fragment>}
        </Fragment>
    );
};

export default memo(MovieDetail);