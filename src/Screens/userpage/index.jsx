import { AppBar, Avatar, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, Tab, Tabs, TextField } from '@material-ui/core';
import React, { Fragment, useCallback, useState } from 'react';
import Header from '../../Layouts/Header';
import avatarImg from '../../assets/img/kha.jpg';
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import bottomDop from '../../assets/img/bottomDop.svg';
import topRightDop from '../../assets/img/topRightDop.svg';
import { motion } from 'framer-motion';
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div

            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            style={{ overflow: 'hidden' }}
        >
            {value === index && (
                <Fragment>
                    {children}
                </Fragment>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const UserInfo = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [isChinhSua, setIsChinhSua] = useState(true);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);
    const handleClickShowPassword = useCallback((value) => () => {
        setShowPassword(!value);
    }, []);
    const handleMouseDownPassword = useCallback((e) => {
        e.preventDefault();
    }, []);
    const handleClickChinhSua = useCallback(() => {
        setIsChinhSua(!isChinhSua);
    }, [isChinhSua]);
    return (
        <Fragment>
            <Header />
            <div className={classes.root}>
                <div className={classes.groupAvatar}>
                    <Avatar alt='avatarImg' src={avatarImg} className={classes.avatarImg} />
                    <div className={`${classes.text} ${classes.name}`}>Nguyễn Ngọc Kha</div>
                    <div className={`${classes.text} ${classes.textInfo}`}>khanguyen1000@gmail.com</div>
                    <div className={`${classes.text} ${classes.textInfo}`}>0329457486</div>
                </div>
                <div className={classes.groupTab}>
                    <AppBar position="static" color="default" style={{
                        marginBottom: ' 10px',
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Lịch sử đặt vé" {...a11yProps(0)} style={{ textTransform: 'capitalize', 'border-top-left-radius': '10px', }} />
                            <Tab label="Thông tin cá nhân" {...a11yProps(1)} style={{ textTransform: 'capitalize', 'border-top-right-radius': '10px', }} />
                        </Tabs>
                    </AppBar>
                    <Fragment>
                        <TabPanel value={value} index={0} className={classes.tabContent}>
                            <div className={classes.divTabTT}>
                                div 1
                            </div>
                        </TabPanel>
                        <TabPanel
                            value={value} index={1} className={`${classes.divflex} ${classes.tabContent}`}>
                            <div className={classes.bgTab}>
                                <img src={topRightDop} alt="topRightDop" className={classes.TopRightDop} />
                                <img src={bottomDop} alt="bottomDop" className={classes.bottomLeftDop} />
                            </div>
                            <div

                                className={classes.divTabTT}>
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
                                        <Button className={classes.btnChinhSua} onClick={handleClickChinhSua} style={{ width: isChinhSua ? 'auto' : '100%', background: isChinhSua ? 'rgb(156 156 156)' : ' linear-gradient(45deg, #6b00b6, #440074)' }}>Chỉnh sửa</Button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Fragment>
                </div>
            </div>
        </Fragment>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6.4),
        background: '#e4e4e4',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        display: 'flex',
        '& .MuiAppBar-colorDefault': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-fullWidth': {
            maxWidth: 'max-content',
            background: '#fff',
        },
        '& .MuiPaper-elevation4': {
            boxShadow: 'none',
        },
        '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    },
    groupAvatar: {
        background: '#fff',
        width: '25%',
        margin: '0.5%',
        borderRadius: '10px',
        height: ' 380px',
        '& .MuiAvatar-root': {
            width: ' 200px',
            height: '200px',
            margin: '21px auto',
        }
    },
    avatarImg: {

    },
    text: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.5),
    },
    name: {
        textAlign: ' center',
        fontSize: theme.spacing(2),
        marginTop: '25px',
    },
    textInfo: {
        textAlign: 'left',
        marginTop: '25px',
        marginLeft: '20px',
        fontFamily: 'unset',
        letterSpacing: '0.5px',
        fontSize: ' 13px',
    },
    groupTab: {
        width: '100%',
        margin: '0.5%',
        borderRadius: '10px',
        position: 'relative',
    },
    tabContent: {
        position: 'absolute',
        background: '#fff',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        marginTop: ' 48px',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        'border-bottom-left-radius': '10px',
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
    bgTab: {
        position: 'absolute',
        background: '#fff',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
    },
    bottomLeftDop: {
        position: 'absolute',
        bottom: '1%',
        left: "1%",
        zIndex: '2',
        width: '10%',

    },
    bottomRightDop: {
        position: 'absolute',
        bottom: '1%',
        right: '1%',
        zIndex: '2',
        width: '7%',
    },
    TopRightDop: {
        position: 'absolute',
        top: '1%',
        right: '1%',
        zIndex: '2',
        width: '7%',
        [theme.breakpoints.down(`${461}`)]: {
            display: 'none',
        }
    },
    divTabTT: {
        width: '65%',
        position: 'absolute',
        background: '#fff',
        left: '50%',
        top: '50%',
        transform: ' translate(-50%, -50%)',
        zIndex: '5',
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
            transform: 'translate(0, 1.5px) scale(0.75)',
            transformOrigin: ' top left',
            fontWeight: 'bold',
            color: '#000',
            letterSpacing: '1px',
            fontSize: theme.spacing(1.6),
            textTransform: 'capitalize',
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
    divflex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        transition: 'all 0.5s',
    },
}));
export default UserInfo;