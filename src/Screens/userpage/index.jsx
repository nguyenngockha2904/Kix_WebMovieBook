import { AppBar, Avatar, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, Tab, Tabs, TextField } from '@material-ui/core';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../Layouts/Header';
import avatarImg from '../../assets/img/kha.jpg';
import PropTypes from 'prop-types';
import Footer from '../../Layouts/footer';
import UserInfoComponent from '../../Components/user_InfoComponent';
import RepasswordComponent from '../../Components/user_RespassComponent';
import HistoryBookComponent from '../../Components/user_HistoryBookComponent';
import { getInfoUser } from '../../redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TYPE_PAGE } from '../../redux/action/type';
import { createAction } from '../../redux/action';
import { useHistory } from 'react-router-dom';
import Loader from '../../Layouts/Loading';
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
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState(0);
    const refUser = useRef(null);
    const [loading, setLoading] = useState(true);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
        refUser.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }, []);
    const us = useSelector((state) => {
        return state.qlUser.credentials
    });
    useEffect(() => {
        let username = localStorage.getItem('username');
        dispatch(getInfoUser(username, () => {
            setLoading(false);
            refUser.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }));
        dispatch(createAction(SET_TYPE_PAGE, 4));
    }, []);
    const handleLogout = useCallback(() => {
        localStorage.setItem('username', '');
        history.replace('/');
    }, []);
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>

                    <div ref={refUser} className={classes.divRef}></div>
                    <Header />
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <div className={classes.groupAvatar}>
                                <Avatar alt='avatarImg' src={avatarImg} className={classes.avatarImg} />
                                <div className={`${classes.text} ${classes.name}`}>{us.hoTen}</div>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textcolor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="Thông tin cá nhân" {...a11yProps(0)} style={{ textTransform: 'capitalize', borderTopRightRadius: '10px', }} />
                                    <Tab label="Thay đổi mật khẩu" {...a11yProps(1)} style={{ textTransform: 'capitalize', borderTopLeftRadius: '10px', }} />
                                    <Tab label="Lịch sử đặt vé" {...a11yProps(2)} style={{ textTransform: 'capitalize', borderTopLeftRadius: '10px', }} />
                                </Tabs>
                                <Button style={{ textTransform: 'capitalize', borderTopLeftRadius: '10px', width: '100%' }}
                                    onClick={handleLogout}
                                >Đăng xuất</Button>
                            </div>
                            <div className={classes.groupTab}>
                                <Fragment>
                                    <TabPanel
                                        value={value} index={0} className={` ${classes.tabContent}`}>
                                        <UserInfoComponent />

                                    </TabPanel>
                                    <TabPanel value={value} index={1} className={classes.tabContent}>
                                        <RepasswordComponent />
                                    </TabPanel>
                                    <TabPanel value={value} index={2} className={classes.tabContent}>
                                        <HistoryBookComponent />
                                    </TabPanel>
                                </Fragment>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </Fragment>}
        </Fragment>

    );
};
const useStyles = makeStyles((theme) => ({
    divRef: {

        position: ' absolute',
        top: 0,
        right: 0,
        left: 0,
    },
    root: {
        marginTop: theme.spacing(6.4),
        background: 'rgb(10, 32, 41)',
        padding: '2% 4%',
        paddingBottom: ' 20%',
    },
    wrapper: {

        minHeight: '510px',
        display: 'flex',
        '& .MuiAppBar-colorDefault': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-fullWidth': {
            width: '100%',
            background: '#fff',
            minHeight: ' 35px',
        },
        '& .MuiPaper-elevation4': {
            boxShadow: 'none',
        },
        '& .MuiTabs-flexContainer': {
            display: 'block !important',
        },
        '& .MuiTabs-scroller': {
            whiteSpace: 'pre-wrap',
        },
        '& .PrivateTabIndicator-colorPrimary': {
            display: 'none !important',
        },
        '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-wrapper': {
            fontSize: ' 14px',
            letterSpacing: '0.1px',
            fontFamily: 'SF Medium',
        },
        '& .MuiButton-label': {
            fontSize: ' 14px',
            letterSpacing: '0.1px',
            fontFamily: 'SF Medium',
        },
        '& .Mui-selected': {
            color: '#6b00b6'
        },
    },
    groupAvatar: {
        background: '#fff',
        width: '25%',
        margin: '0.5%',
        borderRadius: '10px',
        height: ' 427px',
        '& .MuiAvatar-root': {
            width: ' 160px',
            height: '160px',
            margin: '21px auto',
        },
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
        margin: '25px 0',
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
        height: '100%',
        background: '#fff',
        borderRadius: '10px',
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
    divTabTT: {
        position: ' absolute',
        left: '50%',
        top: '50%',
        width: '70%',
        transform: 'translate(-50%, -50%)',
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