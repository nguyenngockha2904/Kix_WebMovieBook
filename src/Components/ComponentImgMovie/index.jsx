import { Box, makeStyles, Button } from '@material-ui/core';
import React, { Fragment, memo, useCallback } from 'react';
import iconStarFull from '../../assets/img/iconStarFull.svg';
import iconStarMid from '../../assets/img/iconStarMid.svg';
import iconStarWeak from '../../assets/img/iconStarWeak.svg';
import onePerTwoIcon from '../../assets/img/onePerTwoIcon.svg';
import play_videoIcon from '../../assets/img/play_videoIcon.svg';
const useStyles = makeStyles((theme) => ({
    divImg: {
        position: 'relative',
        width: '100%',
        '&:hover $bgDivImg': {
            opacity: 1,
        },
    },

    img: {
        width: '100%',
        height: theme.spacing(31.8),
        borderRadius: theme.spacing(0.5),
    },
    groupRating: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    rating: {
        background: '#2B3A51',
        margin: theme.spacing(1.5),
        textAlign: 'center',
        padding: theme.spacing(.4, .8),
        borderRadius: theme.spacing(0.5),
        height: theme.spacing(4.1),
        width: theme.spacing(5.5),
    },
    point: {
        margin: 0,
        textAlign: 'center',
        fontSize: '16px',
        color: '#fff',
        marginBottom: theme.spacing(.4),
        letterSpacing: theme.spacing(.1),
    },
    ratingStar: {
        display: 'flex',
        justifyContent: 'center',
    },
    starIcon: {
        width: theme.spacing(1),
        height: 'auto',
    },
    bgDivImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        transition: 'all 0.3s',
        borderRadius: theme.spacing(0.5),
        backgroundImage: 'linear-gradient(transparent, #000000ad)',
    },
    bgDetail: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
    },
    play_videoIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: ' translate(-50%, -50%)',
        transition: 'all 0.3s',
        zIndex: '5',
        width: theme.spacing(7),
        minWidth: theme.spacing(1),
        height: theme.spacing(7),
        borderRadius: '50%',
        background: '#312f2fa3',
        '&:hover': {
            opacity: '0.7',
            background: '#312f2f33',
        }
    },
    videoIcon: {
        width: theme.spacing(7),
        border: '2px solid #fff',
        borderRadius: '50%',
    },
}));
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
                </div>
                <div className={classes.bgDivImg} >
                    <div className={classes.bgDetail} onClick={props.handleClickChooseMovie}></div>
                    <Button variant="contained" color="inherit" className={classes.play_videoIcon}
                        onClick={props.handleShowModalVideo}
                    >
                        <img src={play_videoIcon} alt="play_videoIcon" className={classes.videoIcon} />
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default memo(ImageMovie);