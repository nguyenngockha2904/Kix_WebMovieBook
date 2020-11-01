import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_TYPE_PAGE } from '../../redux/action/type';
import Loader from '../../Layouts/Loading';
import signInBanner from '../../assets/img/signInBanner.svg';
import topRightDop from '../../assets/img/topRightDop.svg';
import logoLight from '../../assets/img/LogoLight.svg';
import bottomRightDop from '../../assets/img/bottomRightDop.svg';
import bottomDop from '../../assets/img/bottomDop2.svg';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Login } from '../../redux/action/userAction';
const SignIn = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const [isloading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        taiKhoan: "",
        matKhau: "",
    });
    useEffect(() => {
        dispatch(createAction(SET_TYPE_PAGE, 4));
        setTitle('Kix - Đăng nhập ');
    }, []);
    const handleClickShowPassword = useCallback((value) => () => {
        setShowPassword(!value);
    }, []);
    const handleMouseDownPassword = useCallback((e) => {
        e.preventDefault();
    }, []);
    const handleClickGoto = useCallback((value) => () => {
        history.replace(`${value}`);
    }, []);
    const setTitle = useCallback((title) => {
        const prevTitle = document.title;
        document.title = title;
        return () => document.title = prevTitle;
    }, []);
    const handleChange = useCallback((e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }, [credentials]);
    const handleSubmit = useCallback((value) => (e) => {
        e.preventDefault();
        console.log(value);
        dispatch(Login(value, () => {
            swal({
                title: "Thành công !",
                icon: "success",
            })
            history.replace(`/thongtincanhan`);
        }, () => {
            swal({
                title: "Đăng nhập thất bại !",
                text: "Có thể tài khoản hoặc mật khẩu bạn không chính xác!",
                icon: "warning",
                dangerMode: true,
            })
        }))

    }, []);
    return (
        <Fragment>
            {isloading ? <Loader /> :
                <div
                    className={classes.root}>
                    <div className={classes.groupBg}>
                        <img src={signInBanner} alt="signInBanner" className={classes.bgMain} />
                        <img src={topRightDop} alt="topRightDop" className={classes.TopRightDop} />
                        <img src={bottomRightDop} alt="bottomRightDop" className={classes.bottomRightDop} />
                        <img src={bottomDop} alt="bottomDop" className={classes.bottomLeftDop} />
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.content}>
                            <Button className={`${classes.textDefault} ${classes.groupLogo}  `}
                                onClick={handleClickGoto('/')}
                            >

                                <div className={classes.logoG}>
                                    <img src={logoLight} alt="logoLight" className={classes.logoLight} />
                                    <div className={classes.nameLogo}> Kix </div>
                                </div>

                                <div style={{ marginTop: '4px' }}>
                                    Hệ Thống Đặt Vé Xem Phim Nhanh Nhất !
                                </div>
                            </Button>

                            <form className={classes.formStyle} onSubmit={handleSubmit(credentials)}>
                                <div className={`${classes.textDefault} ${classes.formGroup} ${classes.titleForm}`}>
                                    Đăng nhập</div>
                                <div className={classes.formGroup}>
                                    <TextField label="tài khoản :" className={`${classes.textDefault} ${classes.formControl}`}
                                        value={credentials.taiKhoan}
                                        onChange={handleChange}
                                        name="taiKhoan"
                                    />
                                </div>

                                <div className={classes.formGroup}>
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
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            value={credentials.matKhau}
                                            onChange={handleChange}
                                            name="matKhau"
                                        />
                                    </FormControl>
                                </div>
                                <div className={classes.formGroup}>
                                    <div className={classes.textDefault} style={{ textAlign: 'center' }}>
                                        Bạn chưa có tài khoản ?
                                            <Button className={`${classes.textDefault} ${classes.btnGoto}`}
                                            onClick={handleClickGoto('/dangky')}
                                        >Đăng ký ngay !</Button>
                                    </div>
                                </div>
                                <div className={`${classes.formGroup} ${classes.groupBtnSubmit}`}>
                                    <Button type="submit" className={`${classes.textDefault} ${classes.BtnSubmit}`}>Đăng nhập
                                </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};
const useStyles = makeStyles((theme) => ({

    //#region Chung
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    textDefault: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.1),
    },
    //#region 
    //#region bg
    groupBg: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    bgMain: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '87%',
        [theme.breakpoints.down(`${1250}`)]: {
            display: 'none',
        }
    },
    bottomLeftDop: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: '2',
        width: '10%',
        display: 'none',
        [theme.breakpoints.down(`${1250}`)]: {
            display: 'block',
        },
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }

    },
    bottomRightDop: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: '2',
        width: '7%',
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }
    },
    TopRightDop: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: '2',
        width: '7%',
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }
    },
    //#endregion

    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '5',
        overflow: 'hidden',
    },
    content: {
        width: '83%',
        margin: 'auto',
        height: '100%',
        paddingTop: '25px',
        [theme.breakpoints.down(`${1250}`)]: {
            width: '70%',
        },
        [theme.breakpoints.down(`${907}`)]: {
            width: '90%',
        },
        [theme.breakpoints.down(`${461}`)]: {
            width: '100%',
        }
    },
    //#region groupLogo
    groupLogo: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        margin: 'auto',
        [theme.breakpoints.down(`${321}`)]: {
            display: 'block',
            textAlign: 'center',
        },
        '& .MuiButton-label': {
            display: 'block',
        },
    },
    logoG: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down(`${321}`)]: {
            alignItems: 'center',
        }
    },
    logoLight: {
        width: theme.spacing(3.8),
        height: 'auto',
    },
    nameLogo: {
        fontSize: theme.spacing(2.3),
        marginRight: '5px',
        [theme.breakpoints.down(`${321}`)]: {
            display: 'block',
            fontSize: theme.spacing(1.8),
        }
    },
    //#endregion
    //#region  formStyle
    formStyle: {
        width: '40%',
        marginTop: '0',
        position: 'absolute',
        top: '50%',
        right: '5%',
        transform: 'translate(-0%, -50%)',
        [theme.breakpoints.down(`${1250}`)]: {
            top: '50%',
            left: '50%',
            width: '60%',
            transform: 'translate(-50%, -50%)',
        },
        [theme.breakpoints.down(`${770}`)]: {
            width: '80%',

        },
        [theme.breakpoints.down(`${610}`)]: {
            width: '100%',

        },
        [theme.breakpoints.down(`${319}`)]: {
            top: '55%',
        }
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
            fontSize: theme.spacing(1.4),
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
    btnGoto: {
        color: '#6B00B6',
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.1),
        padding: '6px 8px 10px',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    groupBtnSubmit: {
        textAlign: 'center',
    },
    BtnSubmit: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
    },
    //#endregion
}));

export default SignIn;