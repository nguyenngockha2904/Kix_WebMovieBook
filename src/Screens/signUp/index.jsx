import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../../Layouts/Loading';
import { createAction } from '../../redux/action';
import { SET_TYPE_PAGE } from '../../redux/action/type';
//#region img
import signUpBanner from '../../assets/img/signUpbanner.svg';
import bottomDop from '../../assets/img/bottomDop.svg';
import topRightDop from '../../assets/img/topRightDop.svg';
import logoLight from '../../assets/img/LogoLight.svg';
//#endregion
import { Avatar, Button, Fab, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField, useTheme, Zoom } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { signUp } from '../../redux/action/userAction';
import LogoLight from '../../assets/img/LogoDark.svg';
const SignUp = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [Repas, setRepas] = useState(false);
    const [userInfo, setUserInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP06",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
        comfirmPassword: '',
    });
    const [validate, setValidate] = useState({
        taiKhoan_V: false,
        taiKhoan_T: '6 ký tự trở lên',
        hoTen_V: false,
        hoTen_T: '5 ký tự trở lên',
        email_V: false,
        email_T: 'Email không hợp lệ ',
        soDt_V: false,
        soDt_T: 'phải có 10 - 11 chữ số',
        matKhau_V: false,
        matKhau_T: 'Phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 5 ký tự trở lên',
        comfirmPassword_V: false,
        comfirmPassword_T: 'Không trùng khớp',
    });
    useEffect(() => {
        dispatch(createAction(SET_TYPE_PAGE, 4));
        setTitle('Kix - Đăng ký thật nhanh !! ');
    });
    const handleClickShowPassword = useCallback((type, value) => () => {
        if (type === 1) {
            setShowPassword(!value);
        } else {
            setShowRePassword(!value);
        }

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

    const validateInput = useCallback((pattern) => (e) => {
        const { value } = e.target;
        let name = `${e.target.name}_V`;
        // const check = pattern.exec(value);
        const check = value.match(pattern);
        if (check === null) {
            setValidate({
                ...validate, [name]: true,
            })
        } else {
            setValidate({
                ...validate, [name]: false,
            })
        }
    }, [validate]);
    const validatecomfirmPassword = useCallback((newPassword) => (e) => {
        const { value } = e.target;
        let name = `${e.target.name}_V`;
        if (newPassword !== value) {
            setValidate({
                ...validate, [name]: true,
            })
        } else {
            setValidate({
                ...validate, [name]: false,
            })
        }
    }, [validate]);
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }, [userInfo]);
    const handleSubmit = useCallback((userInfo, validate) => (e) => {
        e.preventDefault();
        const { taiKhoan_V, hoTen_V, email_V, soDt_V, matKhau_V, comfirmPassword_V } = validate;
        const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen, } = userInfo;
        const data = { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen };
        if (!taiKhoan_V && !hoTen_V && !email_V && !soDt_V && !matKhau_V && !comfirmPassword_V) {
            dispatch(signUp(data, () => {
                swal({
                    title: "Đăng ký thành công !",
                    icon: "success",
                });
                history.replace(`/dangnhap`);
            }, () => {
                swal({
                    title: "Đăng ký thất bại !",
                    text: "Có thể hệ thống gập 1 số lỗi nào đó!",
                    icon: "info",
                })
            }));

        }
    }, []);
    const transitionDuration = useMemo(() => {
        return {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        }
    });
    const handleCLickGotoHome = useCallback(() => {
        history.replace('/');
    }, []);
    return (
        <Fragment>
            <div

                className={classes.root}>
                <div className={classes.groupBg}>
                    <img src={signUpBanner} alt="signUpBanner" className={classes.bgMain} />
                    <img src={bottomDop} alt="bottomLeftDop" className={classes.bottomLeftDop} />
                    <img src={topRightDop} alt="topRightDop" className={classes.TopRightDop} />
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

                        <form className={classes.formStyle} onSubmit={handleSubmit(userInfo, validate)}>
                            <div className={`${classes.textDefault} ${classes.formGroup} ${classes.titleForm}`}>
                                Đăng ký</div>
                            <div className={classes.formGroup}>
                                <TextField label="tài khoản :" className={`${classes.textDefault} ${classes.formControl}`}
                                    value={userInfo.taiKhoan}
                                    onChange={handleChange}
                                    name="taiKhoan"
                                    onBlur={validateInput('.{8,}')}
                                />
                                {validate.taiKhoan_V && <div className={classes.messageErr}>{validate.taiKhoan_T}</div>}
                            </div>

                            <div className={classes.formGroup}>
                                <FormControl className={` ${classes.formControl}`}>
                                    <InputLabel >Mật Khẩu</InputLabel>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword(1, showPassword)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        value={userInfo.matKhau}
                                        onChange={handleChange}
                                        name="matKhau"
                                        onBlur={validateInput("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,}")}
                                    />
                                </FormControl>
                                {validate.matKhau_V && <div className={classes.messageErr}>{validate.matKhau_T}</div>}
                            </div>
                            <div className={classes.formGroup}>
                                <FormControl className={` ${classes.formControl}`}>
                                    <InputLabel >nhập lại mật khẩu</InputLabel>
                                    <Input
                                        type={showRePassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword(2, showRePassword)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showRePassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>

                                        }
                                        onChange={handleChange}
                                        onBlur={validatecomfirmPassword(userInfo.matKhau)}
                                        value={userInfo.comfirmPassword}
                                        name="comfirmPassword"
                                    />
                                </FormControl>
                                {validate.comfirmPassword_V && <div className={classes.messageErr}>{validate.comfirmPassword_T}</div>}
                            </div>

                            <div className={classes.formGroup}>
                                <TextField label="Họ tên :" className={`${classes.textDefault} ${classes.formControl}`}
                                    value={userInfo.hoTen}
                                    onChange={handleChange}
                                    name="hoTen"
                                    onBlur={validateInput('.{5,}')}
                                />
                                {validate.hoTen_V && <div className={classes.messageErr}>{validate.hoTen_T}</div>}
                            </div>
                            <div className={`${classes.formGroup} ${classes.formGroupTwo}`}>
                                <div className={`${classes.formGroup} ${classes.formLeft}`}>
                                    <TextField label="Email :" className={`${classes.textDefault} ${classes.formControl}`}
                                        value={userInfo.email}
                                        onChange={handleChange}
                                        name="email"
                                        onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                                    />
                                    {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>}
                                </div>
                                <div className={`${classes.formGroup} ${classes.formRight}`}>
                                    <TextField label="Số điện thoại :" className={`${classes.textDefault} ${classes.formControl}`}
                                        value={userInfo.soDt}
                                        onChange={handleChange}
                                        name="soDt"
                                        onBlur={validateInput(/^\d{10,11}$/)}
                                    />
                                    {validate.soDt_V && <div className={classes.messageErr}>{validate.soDt_T}</div>}
                                </div>
                            </div>

                            <div className={classes.formGroup}>
                                <div className={classes.textDefault} style={{ textAlign: 'center' }}>
                                    Bạn đã có tài khoản ?
                                            <Button className={`${classes.textDefault} ${classes.btnGoto}`} onClick={handleClickGoto('/dangnhap')} >Đăng nhập !</Button>
                                </div>
                            </div>
                            <div className={`${classes.formGroup} ${classes.groupBtnSubmit}`}>
                                <Button type="submit" className={`${classes.textDefault} ${classes.BtnSubmit}`}
                                >Đăng ký
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={classes.divTool}>
                <Zoom
                    in={true}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${transitionDuration.exit}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label='Home' color='inherit' onClick={handleCLickGotoHome}>
                        <Avatar src={LogoLight} alt='LogoLight' />
                    </Fab>
                </Zoom>
            </div>
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
        top: 0,
        right: 0,
        height: '100%',
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
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }

    },
    TopRightDop: {
        position: 'absolute',
        top: 0,
        right: 0,
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
    //#endregion

    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '5',
        overflow: 'hidden',
        [theme.breakpoints.down(`${769}`)]: {
            overflow: 'auto',
        },
        [theme.breakpoints.down(`${461}`)]: {
            marginTop: '10%',
        }
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
            paddingTop: '0',
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
        [theme.breakpoints.down(`${500}`)]: {
            display: 'block',
            textAlign: 'center',
            fontSize: theme.spacing(1.1),
        },
        '& .MuiButton-label': {
            display: 'block',
        },
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }
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
        width: '60%',
        marginTop: '10px',
        [theme.breakpoints.down(`${1250}`)]: {
            width: '100%',
        },

    },
    titleForm: {
        fontSize: theme.spacing(2.3),
        textAlign: 'center',
        color: '#000',
    },
    formGroup: {
        width: '80%',
        margin: 'auto',
        padding: '5px 0',
        [theme.breakpoints.down(`${907}`)]: {
            width: '90%',
            padding: '3px 0 ',
        },
        [theme.breakpoints.down(`${461}`)]: {
            width: '90%',
        }
    },
    formGroupTwo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down(`${769}`)]: {
            display: 'block',
        }
    },
    formRight: {
        marginLeft: '5px',
        width: '100%',
        [theme.breakpoints.down(`${769}`)]: {
            marginLeft: '0',
        }
    },
    formLeft: {
        marginRight: '5px',
        width: '100%',
        [theme.breakpoints.down(`${769}`)]: {
            marginRight: '0',
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
            fontSize: '15px',
            letterSpacing: '1px',
            color: '#440074',
            fontFamily: 'SF Medium',
        },
        '& .MuiSvgIcon-root': {
            width: '0.7em',
            height: '0.7em',
        },
        [theme.breakpoints.down(`${961}`)]: {

            '& .MuiInputBase-input': {
                fontSize: theme.spacing(1.2),
            },
        },
        [theme.breakpoints.down(`${768}`)]: {
            '& .MuiInputLabel-formControl': {
                fontSize: theme.spacing(1.3),

            },
        },
    },
    btnGoto: {
        color: '#6B00B6',
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.1),
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
    messageErr: {
        marginTop: '5px',
        color: '#ff0000',
        fontSize: theme.spacing(1.1),
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        letterSpacing: '0.5px',
    },
    divTool: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: '10px',
        zIndex: '10',
        [theme.breakpoints.down(`${1250}`)]: {
            '& .MuiFab-root': {
                width: '40px',
                height: ' 40px',
            },
        },
    }
    //#endregion
}));
export default memo(SignUp);