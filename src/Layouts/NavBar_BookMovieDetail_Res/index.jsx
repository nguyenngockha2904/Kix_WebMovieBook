import { Button, makeStyles } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useMemo } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory } from 'react-router-dom';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
const NavBar_BookMovieDetail_Res = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { dateTime, renderer, activeStep, handleNext } = useMemo(() => {
        return props
    }, [props]);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const { tenCumRap, tenRap, diaChi, tenPhim, ngayChieu, gioChieu } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
    const texttitle = useMemo(() => {
        switch (activeStep) {
            case 0: {
                return 'Chọn Chỗ Ngồi'
            }
        }
    }, [activeStep]);
    const handleClickBack = useCallback((activeStep) => () => {
        if (activeStep === 0) {
            history.replace('/');
        } else if (activeStep === 1) {
            handleNext(0);
        }
    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.groupBtnBack}>
                <Button className={classes.btnBack} onClick={handleClickBack(activeStep)}><ArrowBackIosRoundedIcon style={{ color: '#fff', }} /></Button>
            </div>
            {activeStep === 0 ? <Fragment>
                <div className={` ${classes.textDefault} ${classes.titleNav}`}>Chọn Chỗ Ngồi</div>
            </Fragment>
                :
                <Fragment>
                    <div className={classes.wapperDiv}>
                        <div className={classes.Content}>
                            <div className={classes.nameThear}>
                                <div className={classes.hightline}>
                                    {tenCumRap.trim().slice(0, tenCumRap.trim().indexOf(' '))}
                                </div>
                                {tenCumRap.trim().slice(tenCumRap.trim().indexOf(' '))}
                            </div>
                            <div className={classes.contentRap}>
                                <div className={`${classes.textDefault} ${classes.textSecond}`}>{ngayChieu}</div>
                                <div className={`${classes.textDefault} ${classes.textSecond}`}>{gioChieu}</div>
                                <div className={`${classes.textDefault} ${classes.textSecond}`}>- {tenRap}</div>
                            </div>
                        </div>
                        <div className={classes.timeCountDown}>
                            <Countdown
                                date={dateTime}
                                renderer={renderer}
                            />
                        </div>
                    </div>

                </Fragment>}

        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#000',
        color: '#fff',
        display: ' flex',
        alignItems: 'center',
        position: 'fixed',
        padding: '10px 0',
        height: '40px',
        top: 0,
        left: 0,
        right: 0,
        zIndex: '5',
        boxShadow: '0 0 4px 0px #fff',

    },
    groupBtnBack: {
        color: '#fff',
        marginLeft: '5px',
    },
    btnBack: {
        padding: 0,
        minWidth: ' 1px',
    },
    titleNav: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: '500',
    },
    textDefault: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#fff',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    timeCountDown: {
        color: '#44c020',
        fontSize: theme.spacing(1.7),
        fontFamily: '-webkit-pictograph',
        background: '#0000000d',
        borderRadius: '5px',
        padding: '1px 5px',
    },
    wapperDiv: {
        display: 'flex',
        justifyContent: ' space-between',
        width: '100%',
        padding: '6px',
        alignItems: ' center',
    },
    Content: {
        padding: 0,
    },
    nameThear: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: theme.spacing(1.5),
        textTransform: 'capitalize',
        letterSpacing: '-0.5px',
        margin: '5px 0',
        fontFamily: 'SF Medium',
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    hightline: {
        color: '#9500ff',
        fontFamily: 'SF Medium',

    },
    contentRap: {
        alignItems: 'center',
        display: 'flex',
    },
    textSecond: {
        fontSize: ' 12px',
        marginRight: '5px',
        color: '#cccbcb',
        letterSpacing: 0,
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1),
        },
    },
}));
export default memo(NavBar_BookMovieDetail_Res);