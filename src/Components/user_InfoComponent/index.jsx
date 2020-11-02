import { Button, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, makeStyles, Switch, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/action/userAction';

const UserInfoComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isChinhSua, setIsChinhSua] = useState(false);
    const [userInfo, setUserInfo] = useState({
        taiKhoan: '',
        hoTen: '',
        email: '',
        soDT: '',
    });
    const us = useSelector((state) => {
        return state.qlUser.credentials
    });
    useEffect(() => {
        setUserInfo(us);
    }, [us]);
    const handleChangeSwitch = useCallback((e) => {
        setIsChinhSua(e.target.checked);
    }, []);
    const handleChange = useCallback((e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }, [userInfo]);
    const handleSubmit = useCallback((value) => (e) => {
        e.preventDefault();
        const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = value;
        let data = {
            taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen
        }
        // dispatch(updateUser(data));
        console.log(data);
    }, []);

    return (
        <Fragment>
            <form className={classes.divTabTT} onSubmit={handleSubmit(userInfo)}>

                <div className={`${classes.textDefault} ${classes.formGroup} ${classes.titleForm}`}>
                    Thông tin cá nhân</div>

                <div className={`${classes.divflex}`} style={{ justifyContent: 'flex-end' }}>
                    <div className={`${classes.textDefault}`} style={{ marginRight: '10px' }}>Chỉnh sửa</div>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isChinhSua}
                                onChange={handleChangeSwitch}
                                color="primary"
                                name="isChinhSua"
                            />
                        }
                        style={{
                            margin: 0,
                            padding: 0,
                        }}
                    />
                </div>
                <div className={`${classes.formGroup} ${classes.itemInfo}`} style={{ marginTop: 0, paddingTop: 0, }}>
                    <TextField label="Họ tên :" className={`${classes.textDefault} ${classes.formControl}`} disabled={!isChinhSua}
                        value={userInfo.hoTen}
                        onChange={handleChange}
                        name="hoTen"

                    />
                </div>
                <div className={`${classes.formGroup} ${classes.divflex} ${classes.itemInfo}`}>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} style={{ marginLeft: 0, }} >
                        <TextField label="tài khoản :" className={`${classes.textDefault} ${classes.formControl}`} disabled={true}
                            value={userInfo.taiKhoan}
                            onChange={handleChange}
                            name="taiKhoan" />
                    </div>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} style={{ marginRight: 0, }}>
                        <TextField label="số điện thoại :" className={`${classes.textDefault} ${classes.formControl}`} disabled={!isChinhSua}
                            value={userInfo.soDT}
                            onChange={handleChange}
                            name="soDT" />
                    </div>
                </div>

                <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                    <TextField label="email :" className={`${classes.textDefault} ${classes.formControl}`} disabled={!isChinhSua}
                        value={userInfo.email}
                        onChange={handleChange}
                        name="email" />
                </div>
                <div className={classes.divflex} style={{ opacity: isChinhSua ? '1' : '0' }}>
                    <div className={`${classes.formGroup} ${classes.itemInfo} ${classes.groupBtnChinhSua}`} >
                        <Button type="submit" className={classes.btnChinhSua} disabled={!isChinhSua} >Cập nhật</Button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};
const useStyles = makeStyles((theme) => ({

    divflex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divTabTT: {
        position: ' absolute',
        left: '50%',
        top: '50%',
        width: '70%',
        transform: 'translate(-50%, -50%)',
    },
    textDefault: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.1),
    },
    titleForm: {
        fontSize: theme.spacing(2.3),
        textAlign: 'center',
        color: '#000',
    },
    formGroup: {
        width: '80%',
        margin: 'auto',
        padding: '10px 0',
        [theme.breakpoints.down(`${1250}`)]: {
            padding: '17px 0',
        },
        [theme.breakpoints.down(`${461}`)]: {
            width: '90%',
        }
    },
    formControl: {
        width: '100%',
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#6B00B6',
        },
        '& .MuiInput-underline:after': {
            border: 'none',
        },
        '& .MuiInputLabel-formControl': {

            color: '#000',
            fontSize: theme.spacing(1.6),
            textTransform: 'capitalize',
            fontFamily: 'SF Medium',
            letterSpacing: '0.5px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #440074',
        },
        '& .MuiInputBase-input': {
            paddingLeft: '10%',
            width: '74%',
            marginRight: 'auto',
            textAlign: 'center',
            fontSize: '16px',
            letterSpacing: '1px',
            color: '#440074',
        }
    },
    itemInfo: {
        width: '100%',
        margin: '1%',
    },
    groupBtnChinhSua: {
        textAlign: ' center',
    },
    twoForm: {
        padding: 0,
    },
    btnChinhSua: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
        transition: 'all 0.5s',
    },
}));
export default memo(UserInfoComponent);