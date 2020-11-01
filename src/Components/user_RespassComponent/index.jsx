import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { Fragment, useCallback, useState } from 'react';
const RepasswordComponent = () => {
    const classes = useStyles();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const handleClickShowPassword = useCallback((type, value) => () => {
        // type : 1 current pass, 2 new pass, 3 confirm pass 

        if (type === 1) {
            setShowCurrentPassword(!value);
        } else if (type === 2) {
            setShowNewPassword(!value);
        } else {
            setShowConfirmNewPassword(!value);
        }
    }, []);
    const handleMouseDownPassword = useCallback((e) => {
        e.preventDefault();
    }, []);
    const handleClickConfirm = useCallback((e) => {

    }, []);
    return (
        <Fragment>
            <div className={classes.divTabTT}>
                <div className={`${classes.textDefault} ${classes.formGroup} ${classes.titleForm}`}>
                    Thay đổi mật khẩu</div>
                <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                    <FormControl className={` ${classes.formControl}`}>
                        <InputLabel >Mật Khẩu hiện tại:</InputLabel>
                        <Input
                            type={showCurrentPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword(1, showCurrentPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                </div>
                <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                    <FormControl className={` ${classes.formControl}`}>
                        <InputLabel >Mật Khẩu mới:</InputLabel>
                        <Input
                            type={showNewPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword(2, showNewPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                </div>
                <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                    <FormControl className={` ${classes.formControl}`}>
                        <InputLabel >xác nhận lại Mật Khẩu:</InputLabel>
                        <Input
                            type={showConfirmNewPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword(3, showConfirmNewPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                </div>
                <div className={classes.divflex}>
                    <div className={`${classes.formGroup} ${classes.itemInfo} ${classes.groupBtnChinhSua}`} >
                        <Button className={classes.btnChinhSua} onClick={handleClickConfirm}>Xác nhận</Button>
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
            fontSize: theme.spacing(1.3),
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
        textAlign: ' right',
    },
    btnChinhSua: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
    },
}));
export default RepasswordComponent;