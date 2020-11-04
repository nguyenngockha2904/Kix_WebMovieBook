import { Avatar, Button, makeStyles, Paper } from '@material-ui/core';
import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import iconSuccess from '../../assets/img/iconSuccess.svg';
import { SET_REQUEST_PAGE_USER } from '../../redux/action/type';
import { createAction } from '../../redux/action';
const ComponentAlertThanhCong = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleGoto = useCallback(() => {
        history.replace('/thongtincanhan');
        dispatch(createAction(SET_REQUEST_PAGE_USER, 1));
    }, []);
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.wrapper}>
                <Avatar src={iconSuccess} alt="iconSuccess" />
                <div className={classes.groupContent}>
                    <div className={classes.title}>
                        Đặt vé thành công !
                    </div>
                    <div className={classes.text}>
                        Bạn có thể xem thông tin tại lịch sử đặt vé !
                    </div>
                </div>
                <div className={classes.groupBtn}>
                    <Button className={classes.btnGoTo} onClick={handleGoto}>
                        Đến trang lịch sử đặt vé
                    </Button>
                </div>
            </Paper>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
    },
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
        borderRadius: '10px',
        width: '30%',
        '& .MuiAvatar-root': {
            width: '50%',
            height: '50%',
            margin: ' 10% auto',
        },
        [theme.breakpoints.down(`${961}`)]: {
            width: '50%',
        },
        [theme.breakpoints.down(`${601}`)]: {
            width: '60%',
        },
        [theme.breakpoints.down(`${465}`)]: {
            width: '85%',
        },
    },
    groupContent: {

    },
    title: {
        fontSize: theme.spacing(2),
        textTransform: 'capitalize',
        letterSpacing: '0.5px',
        fontFamily: 'SF Medium',
        textAlign: 'center',
    },
    text: {
        fontSize: theme.spacing(1.5),
        letterSpacing: '0.5px',
        fontFamily: 'SF Medium',
        textAlign: 'center',
        color: '#9a9999',
        margin: '20px',
        [theme.breakpoints.down(`${465}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    groupBtn: {
        width: '100%',
        textAlign: ' center',
        padding: '12px 0',
    },
    btnGoTo: {
        minWidth: '1px',
        width: '80%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
        [theme.breakpoints.down(`${465}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
}));
export default memo(ComponentAlertThanhCong);