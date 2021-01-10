import { Box, Button, makeStyles, Paper } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import phim1 from '../../assets/img/phim5.png';
import play_videoIcon from '../../assets/img/play_videoIcon.svg';
import iconStarMid from '../../assets/img/iconStarMid.svg';
import iconStarFull from '../../assets/img/iconStarFull.svg';
import onePerTwoIcon from '../../assets/img/onePerTwoIcon.svg';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE, SHOW_MODAL_VIDEO } from '../../redux/action/type';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import CircularProgressCustom from '../CircularProgressCustom';
import { useStyles } from './styles';

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
    const { role, item, handleShowTabLichChieu } = useMemo(() => {
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
        let percent = ((danhGia) / 10) * 100;
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
                        <div className={classes.groupImgContent}>
                            <img src={hinhAnh} alt="hinhAnh" className={classes.imgFilm} />
                            <div className={classes.CircularProgressDiv}>
                                <CircularProgressCustom value={per} size={40} thickness={2.6} fontsizelabel={20} colorbottom="#fff" colortop='rgb(169 255 68)' colorbg='#2b3a51d1' />
                            </div>
                        </div>


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
                            <CircularProgressCustom value={per} size={100} thickness={2.6} fontsizelabel={34} colorbottom='#eeeeee91' colortop='rgb(169 255 68)' colorbg='transparent' />
                        </div>
                    </Box>
                    <div className={classes.groupStar}>
                        {renderRating()}
                        <img src={onePerTwoIcon} alt="onePerTwo" className={classes.starIcon} />
                    </div>
                    <Box className={classes.defaultText} textAlign="center">
                        {person} người đánh giá
                    </Box>

                </div>
            </div>
        </Fragment>


    );
};

export default memo(MovieDetailContent);