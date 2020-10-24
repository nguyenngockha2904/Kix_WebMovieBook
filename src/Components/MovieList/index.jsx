import React, { Fragment, memo, useEffect, useMemo } from 'react';
import { Grid, makeStyles, withWidth } from '@material-ui/core';
import Slider from "react-slick";
import { useCallback } from 'react';
import ImgPrevL from '../../assets/img/btnPrevLightWithHomeMovie.svg';
import ImgPrevD from '../../assets/img/btnPrevDark.svg';
import ImgNextL from '../../assets/img/btnNextLightWithHomeMovie.svg';
import ImgNextD from '../../assets/img/btnNextDark.svg';
import MovieItem from '../MovieItem';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_DATA_LIST_MOVIE_PHAN_TRANG } from '../../redux/action/type';
const useStyles = makeStyles((theme) => {
    return {
        silder: {
            '& .slick-arrow': {
                zIndex: '10',
                height: theme.spacing(5),
                width: theme.spacing(5),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                transition: '.2s',
                '&::before': {
                    content: 'none',
                },
                [theme.breakpoints.down(`${1100}`)]: {
                    display: 'none !important',
                },

            },
            '& .slick-next': {
                backgroundImage: `url(${ImgNextD}) !important`,
                '&:hover': {
                    backgroundImage: `url(${ImgNextL}) !important`,
                }
            },
            '& .slick-prev': {
                backgroundImage: `url(${ImgPrevD}) !important`,
                '&:hover': {
                    backgroundImage: `url(${ImgPrevL}) !important`,
                }
            },
        },
        divGrid: {
            outline: 'none',
            padding: theme.spacing(0, 0.5),

        }
    }

});
const MovieList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { index } = useMemo(() => {
        return props
    }, [props]);
    const listMovies = useSelector((state) => {
        if (index === 0) {
            return state.qlMovie.listMoviePhanTrang
        }
        if (index === 1) {
            return state.qlMovie.listMoviePhanTrang.reverse()
        }
    })
    useEffect(() => {
        console.log(props.width);
        dispatch(createAction(SET_DATA_LIST_MOVIE_PHAN_TRANG, props.width));
    }, [props.width]);
    const settings = useMemo(() => ({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,

    }), []);
    const renderListMovie = useCallback(() => {
        return listMovies.map((page, index) => {
            return (
                <div key={index}
                >
                    <Grid container spacing={1} justify="center" className={classes.divGrid}>
                        {
                            page.map((movieItem, index) => {
                                return (
                                    <MovieItem movieItem={movieItem} key={index} />
                                )
                            })
                        }
                    </Grid>
                </div>
            )
        })
    }, [listMovies]);
    // console.log(props.width);
    return (
        <div>
            {/* props.isTabLichChieu ? 'tab Lịch Chiếu' : 'tab Sắp Chiếu' */}
            <Slider {...settings} className={classes.silder}>
                {renderListMovie()}
            </Slider>

        </div>
    );
};

export default memo(withWidth()(MovieList));
