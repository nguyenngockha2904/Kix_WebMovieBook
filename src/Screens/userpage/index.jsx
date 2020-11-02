import { AppBar, Avatar, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, Tab, Tabs, TextField } from '@material-ui/core';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import avatarImg from '../../assets/img/kha.jpg';
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import bottomDop from '../../assets/img/bottomDop.svg';
import topRightDop from '../../assets/img/topRightDop.svg';
import Footer from '../../Layouts/footer';
import bgApp from '../../assets/img/bgApp.jpg';
import UserInfoComponent from '../../Components/user_InfoComponent';
import RepasswordComponent from '../../Components/user_RespassComponent';
import HistoryBookComponent from '../../Components/user_HistoryBookComponent';
import { getInfoUser } from '../../redux/action/userAction';
import { useDispatch } from 'react-redux';
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
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        dispatch(getInfoUser(user.taiKhoan, () => {
            console.log('thanh cong');
        }));
    }, []);
    return (
        <Fragment>
            <Header />
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div className={classes.groupAvatar}>
                        <Avatar alt='avatarImg' src={avatarImg} className={classes.avatarImg} />
                        <div className={`${classes.text} ${classes.name}`}>Nguyễn Ngọc Kha</div>
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
                        <Button style={{ textTransform: 'capitalize', borderTopLeftRadius: '10px', width: '100%' }} >Thoát</Button>
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
        </Fragment>
    );
};
const useStyles = makeStyles((theme) => ({
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