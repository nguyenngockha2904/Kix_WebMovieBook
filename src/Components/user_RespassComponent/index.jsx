import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { updateUser } from '../../redux/action/userAction';
import { useStyles } from './styles';
const RepasswordComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [userInfo, setUserInfo] = useState({
        taiKhoan: '',
        hoTen: '',
        email: '',
        soDT: '',
    });
    const [passwordObject, setPasswordObject] = useState({
        currentPassword: '',
        newPassword: '',
        comfirmPassword: '',
    });
    const [validate, setValidate] = useState({
        currentPassword_V: false,
        currentPassword_T: 'mật khẩu không đúng',
        newPassword_V: false,
        newPassword_T: 'Phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 5 ký tự trở lên',
        comfirmPassword_V: false,
        comfirmPassword_T: 'Không trùng khớp',
    });
    const validateInput = useCallback((pattern) => (e) => {
        const { value } = e.target;
        let name = `${e.target.name}_V`;
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
    const handleChangePas = useCallback((e) => {
        const { name, value } = e.target;
        setPasswordObject({ ...passwordObject, [name]: value })

    }, [passwordObject]);
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
    const us = useSelector((state) => {
        return state.qlUser.credentials
    });
    useEffect(() => {
        setUserInfo(us);

    }, [us]);
    const handleMouseDownPassword = useCallback((e) => {
        e.preventDefault();
    }, []);
    const handleClickConfirm = useCallback((user, pass) => (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, comfirmPassword } = pass;
        const { taiKhoan, matKhau, email, soDT, maNhom, hoTen, maLoaiNguoiDung } = user;
        let check1 = false;
        let check2 = false;
        let check3 = false;
        if (currentPassword === matKhau) {
            check1 = true;
            if (newPassword !== matKhau) {
                check2 = true;
                if (comfirmPassword === newPassword) {
                    check3 = true;
                } else {
                    check3 = false;
                    swal({
                        title: 'Lỗi !!',
                        text: "Mật khẩu xác nhận của bạn không khớp với mật khẩu mới!",
                        icon: "warning",
                        dangerMode: true,
                    });
                }
            } else {
                check2 = false;
                swal({
                    title: 'Lỗi !!',
                    text: "Mật khẩu mới không trùng với mật khẩu cũ!",
                    icon: "warning",
                    dangerMode: true,
                });
            }

        } else {
            check1 = false;
            swal({
                title: 'Lỗi !!',
                text: "Mật khẩu không đúng!",
                icon: "warning",
                dangerMode: true,
            });
        }
        let data = {
            taiKhoan, matKhau: pass.comfirmPassword, email, soDt: soDT, maNhom, maLoaiNguoiDung, hoTen
        }
        if (check1 && check2 && check3) {
            dispatch(updateUser(data, () => {
                swal({
                    title: "Thành công !",
                    text: "Vui lòng ghi nhớ mật khẩu của mình!",
                    icon: "success",
                });
                props.handleSetValue(0);
            }, () => {
                swal({
                    title: "Thất bại!",
                    icon: "info",
                });
            }));
        }
        console.log(data);

    }, []);
    return (
        <Fragment>
            <form className={classes.divTabTT} onSubmit={handleClickConfirm(userInfo, passwordObject)}>
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
                            onChange={handleChangePas}
                            value={passwordObject.currentPassword}
                            name="currentPassword"
                            onBlur={validatecomfirmPassword(userInfo.matKhau)}
                        />
                    </FormControl>
                    {validate.currentPassword_V && <div className={classes.messageErr}>{validate.currentPassword_T}</div>}
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
                            onChange={handleChangePas}
                            value={passwordObject.newPassword}
                            name="newPassword"
                            onBlur={validateInput("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,}")}
                        />
                    </FormControl>
                    {validate.newPassword_V && <div className={classes.messageErr}>{validate.newPassword_T}</div>}
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
                            onChange={handleChangePas}
                            value={passwordObject.comfirmPassword}
                            name="comfirmPassword"
                            onBlur={validatecomfirmPassword(passwordObject.newPassword)}
                        />
                    </FormControl>
                    {validate.comfirmPassword_V && <div className={classes.messageErr}>{validate.comfirmPassword_T}</div>}
                </div>
                <div className={classes.divflex}>
                    <div className={`${classes.formGroup} ${classes.itemInfo} ${classes.groupBtnChinhSua}`} >
                        <Button type="submit" className={classes.btnChinhSua}
                        >Xác nhận</Button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default memo(RepasswordComponent);