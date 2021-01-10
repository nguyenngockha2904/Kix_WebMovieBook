import { Box, makeStyles } from '@material-ui/core';
import React, { Fragment, memo, useCallback } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useStyles } from './styles';
const MovieDetailInfo = () => {
    const classes = useStyles();
    const propsItem = useSelector((state) => {
        return state.qlMovie.movieInfoSystem
    });
    const converDayFormat = useCallback((value) => {
        let item = new Date(value);
        let d = `${item.getDate() < 10 ? `0${item.getDate()}` : item.getDate()}.${((item.getMonth() + 1) < 10 ? '0' + (item.getMonth() + 1) : (item.getMonth() + 1))}.${item.getFullYear()}`;
        return d;
    }, []);
    const { trailer, moTa, ngayKhoiChieu } = useMemo(() => {
        return propsItem
    }, []);
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            style={{ width: '100%' }}
        >

            <div className={classes.root}>
                <div className={classes.w100}>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>Ngày Công chiếu</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>{converDayFormat(ngayKhoiChieu)}</div>
                    </div>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>Đạo diễn</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>...</div>
                    </div>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>diễn viên</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>...</div>
                    </div>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>Thể loại</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>...</div>
                    </div>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>Định dạng</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>2D/Digital</div>
                    </div>
                    <div className={classes.groupInfo}>
                        <div className={`${classes.w100} ${classes.title}`}>Quốc gia SX</div>
                        <div className={`${classes.w100} ${classes.defaultText}`}>Việt Nam</div>
                    </div>
                </div>
                <div className={classes.w100}>
                    <div >
                        <Box className={classes.title} marginBottom="16px">Nội dung</Box>
                        <Box className={classes.defaultText} lineHeight="2" textAlign="justify">{moTa}</Box>
                    </div>
                </div>
            </div>
            <div className={classes.groupVideo}>
                <div className={`${classes.w100} ${classes.title}`}>Trailer</div>
                <div className={classes.divVideo}>
                    <iframe width="560" height="315" src={trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.video}></iframe>
                </div>
            </div>
        </motion.div>
    );
};

export default memo(MovieDetailInfo);