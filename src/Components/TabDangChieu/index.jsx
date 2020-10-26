import { Grid, makeStyles, withWidth } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_DATA_LIST_MOVIE_PHAN_TRANG } from '../../redux/action/type';
import MovieItem from '../MovieItem';
const TabDangChieu = (props) => {
    const dispatch = useDispatch();
    // const [currentPage, setcurrentPage] = useState(0);

    const listMovies = useSelector((state) => {
        return state.qlMovie.listMoviePhanTrang
    });

    const listMoviePhanTrang = useMemo(() => {
        return listMovies
    }, [listMovies]);
    const currentPage = useMemo(() => {
        return props.currentPage
    }, [props.currentPage]);
    useEffect(() => {
        // console.log(props.index);
        // dispatch(createAction(SET_DATA_LIST_MOVIE_PHAN_TRANG, props.width));
    }, [props.width]);
    const renderListMovie = useCallback(() => {
        // console.log(listMoviePhanTrang[page]);
        return listMoviePhanTrang[currentPage].map((item, index) => {
            return (
                // <div key={index}>
                //     <div>{item.tenPhim}</div>
                //     <img src={item.hinhAnh} alt="item.hinhAnh" />

                // </div>
                <MovieItem movieItem={item} key={index} />
            )
        })
    }, [listMoviePhanTrang, currentPage]);




    return (
        <Grid container spacing={1}>
            {renderListMovie()}
        </Grid>
    );
};
const useStyles = makeStyles((theme) => ({

}));
export default memo(withWidth()(TabDangChieu));