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
    const currentPage = useMemo(() => {
        return props.currentPage
    }, [props.currentPage]);
    const listMoviePhanTrang = useMemo(() => {
        let lst = [];

        for (let i = currentPage; i < currentPage + 2; i++) {
            listMovies[i].map((item) => {
                lst.push(item);
            })
        }
        return lst
    }, [listMovies, currentPage]);

    useEffect(() => {
    }, [props.width]);
    const renderListMovie = useCallback(() => {
        return listMoviePhanTrang.map((item, index) => {
            return (
                <MovieItem movieItem={item} key={index} />
            )
        })
    }, [listMoviePhanTrang,]);




    return (
        <Grid container spacing={1} style={{ padding: ' 5px', borderRadius: '10px', }}>
            {renderListMovie()}
        </Grid>
    );
};
const useStyles = makeStyles((theme) => ({

}));
export default memo(withWidth()(TabDangChieu));