import { Box, Button, Grid, makeStyles, Paper, } from '@material-ui/core';
import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE, SHOW_MODAL_VIDEO } from '../../redux/action/type';
import { useHistory } from 'react-router-dom';
import ImageMovie from '../ComponentImgMovie';
import { useStyles } from './styles';


const MovieItem = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();
    const { maPhim, hinhAnh, moTa, tenPhim, danhGia, trailer, ngayKhoiChieu } = props.movieItem;
    const handleShowModalVideo = useCallback((value) => () => {
        dispatch(createAction(SHOW_MODAL_VIDEO, { value, role: 2 }));
    }, []);

    const handleClickChooseMovie = useCallback((maPhim) => () => {
        history.push(`/detail/${maPhim}`);
        dispatch(createAction(SET_REQUEST_PAGE, 3));
    }, []);
    return (
        <Grid item xs={6} sm={4} md={3} className={classes.root}>

            <Paper elevation={3} className={classes.Paper}>
                <ImageMovie handleShowModalVideo={handleShowModalVideo(props.movieItem)} danhGia={danhGia} hinhAnh={hinhAnh} ngayKhoiChieu={ngayKhoiChieu} handleClickChooseMovie={handleClickChooseMovie(maPhim)} />
            </Paper>
            <div className={classes.divContent}>
                <div className={classes.nameMovie}>
                    <div className={classes.general}>C18</div>
                    {(tenPhim).substr(0, 13)}{tenPhim.length > 13 && '...'}
                </div>
                <div className={classes.time}>100 phút</div>
                <div className={classes.bgContent}>
                    <Paper elevation={3} style={{ width: '100%' }}>
                        <Button variant="contained" color="inherit" className={classes.btnBuy}
                            onClick={handleClickChooseMovie(maPhim)}
                        >Mua vé</Button>
                    </Paper>

                </div>
            </div>
        </Grid>
    );
};

export default memo(MovieItem);