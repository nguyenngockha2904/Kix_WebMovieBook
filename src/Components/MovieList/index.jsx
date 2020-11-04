import React, { Fragment, memo, useEffect, useMemo } from 'react';
import { Avatar, Grid, makeStyles, withWidth } from '@material-ui/core';
import Slider from "react-slick";
import { useCallback } from 'react';
import ImgPrevD from '../../assets/img/btnPrevDark.svg';
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
                transition: '.2s',
                // display: 'none !important',
                '&::before': {
                    display: 'none !important',
                },
                [theme.breakpoints.down(`${1100}`)]: {
                    display: 'none !important',
                },

            },
            '& .slick-next': {
                right: ' -4%',
                top: '43%',
                transform: 'translate(0, -50%)',
            },
            '& .slick-prev': {
                left: '-25px',
                top: '43%',
                transform: 'translate(-20px,-50%)',
            },
        },
        divGrid: {
            outline: 'none',
            padding: theme.spacing(0, 0.5),

        },
        slickArrow: {
            height: '40px',
        },
    }

});
const MovieList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { index } = useMemo(() => {
        return props
    }, [props]);
    const listMovies = useSelector((state) => {

        return state.qlMovie.listMoviePhanTrang

    })
    const listMoviePhanTrang = useMemo(() => {
        let lst = [];

        for (let i = props.index; i < props.index + 2; i++) {
            lst.push(listMovies[i]);
        }
        return lst
    }, [listMovies, props.index]);
    useEffect(() => {
        // console.log(props.index);
        dispatch(createAction(SET_DATA_LIST_MOVIE_PHAN_TRANG, props.width));
    }, [props.width]);
    const SlickArrowLeft = useCallback(({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <img src={ImgPrevD} alt='ImgPrevD' className={classes.slickArrow} />
        </button>
    ), []);
    const SlickArrowRight = useCallback(({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <img src={ImgNextD} alt='ImgNextD' className={classes.slickArrow} />
        </button>
    ), []);
    const settings = useMemo(() => ({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

    }), []);
    const renderListMovie = useCallback(() => {
        return listMoviePhanTrang.map((page, index) => {
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
