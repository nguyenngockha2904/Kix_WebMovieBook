import { Box, makeStyles, Button } from '@material-ui/core';
import React, { Fragment, memo, useCallback } from 'react';
import iconStarFull from '../../assets/img/iconStarFull.svg';
import iconStarMid from '../../assets/img/iconStarMid.svg';
import onePerTwoIcon from '../../assets/img/onePerTwoIcon.svg';
import play_videoIcon from '../../assets/img/play_videoIcon.svg';
import CircularProgressCustom from '../CircularProgressCustom';
import { useStyles } from './styles';
const ImageMovie = (props) => {
    const classes = useStyles();
    const renderRating = useCallback(() => {
        let danhGia = props.danhGia;
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

    }, [props.danhGia]);
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${d.getDate() > 10 ? d.getDate() : ('0' + d.getDate())}/${(d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}`;
        return date;
    }, []);
    return (
        <Fragment>
            <div className={classes.divImg}>
                <img src={props.hinhAnh} alt="img movie" className={classes.img} />
                <div className={classes.groupRating}>
                    <div className={classes.rating}>
                        <p className={classes.point}>{props.danhGia / 2}</p>
                        <div className={classes.ratingStar}>
                            {renderRating()}
                            <img src={onePerTwoIcon} alt="onePerTwo" className={classes.starIcon} />
                        </div>

                    </div>
                    <div className={classes.CircularProgressCustomdiv}>
                        <CircularProgressCustom value={(props.danhGia / 10) * 100} size={30} thickness={2} fontsizelabel={14} colorbottom="#fff" colortop='rgb(169 255 68)' colorbg='#2b3a51d1' />
                    </div>

                </div>
                <div className={classes.bgDetail} onClick={props.handleClickChooseMovie}></div>
                <div className={classes.bgDivImg} >
                    <Button variant="contained" color="inherit" className={classes.play_videoIcon}
                        onClick={props.handleShowModalVideo}
                    >
                        <img src={play_videoIcon} alt="play_videoIcon" className={classes.videoIcon} />

                    </Button>
                </div>
                <div className={classes.ngayKhoiChieu}>{changeFormatDate(props.ngayKhoiChieu)}</div>
            </div>
        </Fragment>
    );
};

export default memo(ImageMovie);