import { Box, Button, Grid, makeStyles, } from '@material-ui/core';
import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../../redux/action';
import { SHOW_MODAL_VIDEO } from '../../redux/action/type';
import { useHistory } from 'react-router-dom';
import ImageMovie from '../ComponentImgMovie';

const useStyle = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
        cursor: 'pointer',

        '&:hover $bgContent': {
            opacity: 1,
        }

    },
    divContent: {
        marginTop: theme.spacing(1),
        position: 'relative',
        [theme.breakpoints.down(`${460}`)]: {
            display: "none",
        }
    },
    general: {
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        padding: theme.spacing(0.4, 0.6),
        display: 'inline-block',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.7),
        marginRight: theme.spacing(1.3),
        width: theme.spacing(3.3),
        textAlign: 'center',
        fontFamily: 'SF Text Regular',

    },
    nameMovie: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        height: 'auto',
        fontSize: theme.spacing(1.6),
        fontFamily: 'SF Medium',
        color: '#000',
        marginBottom: '0',
        display: '-webkit-box',
        paddingRight: theme.spacing(1.3),

    },
    time: {
        fontSize: theme.spacing(1.3),
        color: '#4a4a4a',
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1.5),
    },
    bgContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        '&:hover $btnBuy': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        }
    },
    btnBuy: {
        width: '100%',
        padding: theme.spacing(0.5, 1.5),
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(0.1),
        fontFamily: 'none',
        transition: 'all 0.3s',
        outline: 'none',
    }
}))

const MovieItem = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    let history = useHistory();
    const { maPhim, hinhAnh, moTa, tenPhim, danhGia, trailer } = props.movieItem;
    const handleShowModalVideo = useCallback((value) => () => {
        dispatch(createAction(SHOW_MODAL_VIDEO, { value, role: 2 }));
    }, []);

    const handleClickChooseMovie = useCallback((maPhim) => () => {
        history.push(`/detail/${maPhim}`);
        // history.replace(`/detail/${maPhim}`);
    }, []);
    return (
        <Grid item xs={6} sm={6} md={3} className={classes.root}>

            <ImageMovie handleShowModalVideo={handleShowModalVideo(props.movieItem)} danhGia={danhGia} hinhAnh={hinhAnh} />
            <div className={classes.divContent}>
                <div className={classes.nameMovie}>
                    <div className={classes.general}>C18</div>
                    {(tenPhim).slice(0, 30)}{tenPhim.length > 100 && '...'}
                </div>
                <div className={classes.time}>100 phút</div>
                <div className={classes.bgContent}>
                    <Button variant="contained" color="inherit" className={classes.btnBuy}
                        onClick={handleClickChooseMovie(maPhim)}
                    >Mua vé</Button>
                </div>
            </div>
        </Grid>
    );
};

export default memo(MovieItem);