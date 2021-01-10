import { Avatar, Button, makeStyles, Paper } from '@material-ui/core';
import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import iconSuccess from '../../assets/img/iconSuccess.svg';
import { SET_REQUEST_PAGE_USER } from '../../redux/action/type';
import { createAction } from '../../redux/action';
import { useStyles } from './styles';
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

export default memo(ComponentAlertThanhCong);