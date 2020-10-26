import React, { Fragment, useCallback, useRef, useState } from 'react';
import Carousel from '../../Layouts/Carousel';
import HomeMovie from '../../Layouts/MovieHome';
import { makeStyles } from '@material-ui/core';
import GroupCine from '../../Layouts/GroupCinema';
import backnews from '../../assets/img/back-news.png';
import Footer from '../../Layouts/footer';
import Loading from '../../Layouts/Loading';
import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMovie } from '../../redux/action/movieAction';
import { GetAllTheaterSystem } from '../../redux/action/TheaterSystemAction';
import ModalVideoMovie from '../../Components/ModalShowVideo';
import { createAction } from '../../redux/action';
import Header from '../../Layouts/Header';
import { SET_DATA_LIST_PHONGVE_MALICHCHIEU, SET_TYPE_PAGE } from '../../redux/action/type';
const useStyle = makeStyles((theme) => ({
    homeRoot: {},
    space: {
        height: '64px',
    },
    spaceHomeTool: {
        height: '64px',
        [theme.breakpoints.down(`${970}`)]: {
            display: 'none',
        }
    },
    spaceGroupCine: {
        backgroundImage: `url(${backnews})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        paddingTop: theme.spacing(12),
    }
}));
const Home = () => {
    const classes = useStyle();
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const refHomeMovie = useRef(null);
    const refGroupCine = useRef(null);
    const refNav = useRef(null);
    // console.log('home render');  
    const request = useSelector((state) => {
        return state.parent.request
    });
    const setTitle = useCallback((title) => {
        const prevTitle = document.title;
        document.title = title;
        return () => document.title = prevTitle;
    }, []);
    useEffect(() => {
        dispatch(GetAllMovie(() => {
            dispatch(GetAllTheaterSystem(() => {
                setIsLoading(false);
                setTitle('Kix - Hệ thống mua vé xem phim đỉnh nhất việt nam !!');
                setTimeout(() => {
                    if (request === 1) {
                        refHomeMovie.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                    } else if (request === 2) {
                        refGroupCine.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }

                }, 300);

            }));
        }));
        dispatch(createAction(SET_TYPE_PAGE, 1));
        dispatch(createAction(SET_DATA_LIST_PHONGVE_MALICHCHIEU, ""));
    }, [request]);
    return (
        <div
            className={classes.homeRoot}
        >   {isLoading ? <Loading /> :
            <Fragment>
                <Header refNav={refNav} refHomeMovie={refHomeMovie} refGroupCine={refGroupCine} />
                <div ref={refNav} className={classes.space}></div>
                {/* <Carousel /> */}
                <div ref={refHomeMovie}></div>
                <div className={classes.space}></div>
                <HomeMovie />
                <div ref={refGroupCine}></div>
                <div className={classes.spaceGroupCine}></div>
                <GroupCine />
                <div className={classes.space}></div>
            </Fragment>
            }
            <Footer />
        </div>
    );
};

export default memo(Home);