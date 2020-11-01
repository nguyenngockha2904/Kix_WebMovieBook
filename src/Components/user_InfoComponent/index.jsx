import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { Fragment, useCallback, useState } from 'react';

const UserInfoComponent = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isChinhSua, setIsChinhSua] = useState(true);
    const handleClickChinhSua = useCallback(() => {
        setIsChinhSua(!isChinhSua);
    }, [isChinhSua]);
    const handleClickShowPassword = useCallback((value) => () => {
        setShowPassword(!value);
    }, []);
    const handleMouseDownPassword = useCallback((e) => {
        e.preventDefault();
    }, []);
    return (
        <Fragment>
            <div className={classes.divTabTT}>
                <div className={`${classes.textDefault} ${classes.formGroup} ${classes.titleForm}`}>
                    Thông tin cá nhân</div>

                <div className={classes.divflex}>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} >
                        <TextField label="Họ tên :" className={`${classes.textDefault} ${classes.formControl}`} disabled={isChinhSua} />
                    </div>
                </div>
                <div className={classes.divflex}>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                        <TextField label="email :" className={`${classes.textDefault} ${classes.formControl}`} disabled={isChinhSua} />
                    </div>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} >
                        <TextField label="tài khoản :" className={`${classes.textDefault} ${classes.formControl}`} disabled={isChinhSua} />
                    </div>
                </div>
                <div className={classes.divflex}>

                    <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                        <TextField label="số điện thoại :" className={`${classes.textDefault} ${classes.formControl}`} disabled={isChinhSua} />
                    </div>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                        <FormControl className={` ${classes.formControl}`}>
                            <InputLabel >Mật Khẩu:</InputLabel>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword(showPassword)}
                                            onMouseDown={handleMouseDownPassword}
                                            disabled={isChinhSua}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                disabled={isChinhSua}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className={classes.divflex}>
                    <div className={`${classes.formGroup} ${classes.itemInfo} ${classes.groupBtnChinhSua}`} >
                        <Button className={classes.btnChinhSua} onClick={handleClickChinhSua} style={{ background: isChinhSua ? 'rgb(156 156 156)' : ' linear-gradient(45deg, #6b00b6, #440074)' }}>Chỉnh sửa</Button>
                    </div>
                </div>
            </div>
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
            textTransform: 'capitalize',
            fontSize: theme.spacing(1.6),
            fontFamily: 'SF Medium',
            letterSpacing: ' 0.1px',
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
export default UserInfoComponent;