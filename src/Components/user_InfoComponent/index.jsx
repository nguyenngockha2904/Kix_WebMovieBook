import { Button, FormControlLabel, makeStyles, Switch, TextField } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/action/userAction';
import swal from 'sweetalert';
const UserInfoComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isChinhSua, setIsChinhSua] = useState(false);
    const [isChange, setIsChange] = useState(false);
    const [userInfo, setUserInfo] = useState({
        taiKhoan: '',
        hoTen: '',
        email: '',
        soDT: '',
    });
    const [validate, setValidate] = useState({
        taiKhoan_V: false,
        taiKhoan_T: '6 ký tự trở lên',
        hoTen_V: false,
        hoTen_T: '5 ký tự trở lên',
        email_V: false,
        email_T: 'Email không hợp lệ ',
        soDT_V: false,
        soDT_T: 'phải có 10 - 11 chữ số',
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
    useEffect(() => {
        const { hoTen, email, soDT } = userInfo;
        if (hoTen !== us.hoTen || email !== us.email || soDT !== us.soDT) {
            setIsChange(true);
        } else {
            setIsChange(false);
        }
    }, [userInfo]);
    const handleSubmit = useCallback((value, validate, isChange) => (e) => {
        e.preventDefault();
        // const { taiKhoan, matKhau, email, soDT, maNhom, hoTen, maLoaiNguoiDung } = userInfo;
        const { taiKhoan_V, hoTen_V, email_V, soDT_V } = validate;
        const { taiKhoan, matKhau, email, soDT, maNhom, hoTen, maLoaiNguoiDung } = value;

        let data = {
            taiKhoan, matKhau, email, soDt: soDT, maNhom, maLoaiNguoiDung, hoTen
        }
        if (isChange) {
            if (!hoTen_V && !email_V && !soDT_V) {
                dispatch(updateUser(data, () => {
                    swal({
                        title: "Thành công!",
                        icon: "success",
                    });
                    setIsChinhSua(false);
                }, () => {
                    swal({
                        title: "Thất bại!",
                        icon: "info",
                    });
                }));
            }

        } else {
            swal({
                title: "Vui lòng thay đổi dữ liệu nếu bạn muốn cập nhật!",
                icon: "info",
            });
        }

    }, []);

    return (
        <Fragment>
            <form className={classes.divTabTT} onSubmit={handleSubmit(userInfo, validate, isChange)}>

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
                    <TextField label="Họ tên :" className={`${classes.textDefault} ${classes.formControl} ${classes.textName}`}
                        disabled={!isChinhSua}
                        value={userInfo.hoTen}
                        onChange={handleChange}
                        name="hoTen"
                        onBlur={validateInput('.{5,}')}
                    />
                    {validate.hoTen_V && <div className={classes.messageErr}>{validate.hoTen_T}</div>}
                </div>
                <div className={`${classes.formGroup} ${classes.divTwo} ${classes.itemInfo}`}>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} style={{ marginLeft: 0, }} >
                        <TextField label="tài khoản :" className={`${classes.textDefault} ${classes.formControl}`} disabled={true}
                            value={userInfo.taiKhoan}
                            onChange={handleChange}
                            name="taiKhoan"
                            onBlur={validateInput('.{8,}')}
                        />
                        {validate.taiKhoan_V && <div className={classes.messageErr}>{validate.taiKhoan_T}</div>}
                    </div>
                    <div className={`${classes.formGroup} ${classes.itemInfo}`} style={{ marginRight: 0, }}>
                        <TextField label="số điện thoại :" className={`${classes.textDefault} ${classes.formControl}`} disabled={!isChinhSua}
                            value={userInfo.soDT}
                            onChange={handleChange}
                            name="soDT"
                            onBlur={validateInput(/^\d{10,11}$/)}



                        />
                        {validate.soDT_V && <div className={classes.messageErr}>{validate.soDT_T}</div>}
                    </div>
                </div>

                <div className={`${classes.formGroup} ${classes.itemInfo}`}>
                    <TextField label="email :" className={`${classes.textDefault} ${classes.formControl}`} disabled={!isChinhSua}
                        value={userInfo.email}
                        onChange={handleChange}
                        name="email"
                        onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                    />
                    {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>}
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
        width: '70%',
        margin: '5% auto',
    },
    textDefault: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.1),
    },
    titleForm: {
        fontSize: theme.spacing(2.3),
        textAlign: 'center',
        color: '#000',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.8),
        },
    },
    divTwo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(`${800}`)]: {
            display: 'block',
        },
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
    textName: {
        '& .MuiInputBase-input': {
            textTransform: 'capitalize',
        },
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
    messageErr: {
        marginTop: '5px',
        color: '#ff0000',
        fontSize: theme.spacing(1.1),
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        letterSpacing: '0.5px',
    },
}));
export default memo(UserInfoComponent);