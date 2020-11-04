import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from 'react';
import { AppBar, Avatar, Box, Button, FormControl, makeStyles, Select, Toolbar, withWidth } from '@material-ui/core';
import avatarIcon from '../../assets/img/avatarIcon.svg';
import LogoLight from '../../assets/img/LogoLight.svg';
import collapseButton from '../../assets/img/collapseButton.svg';
import iconClose from '../../assets/img/iconCloseButton.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE } from '../../redux/action/type';

const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isShowCollapse, setIsShowCollapse] = useState(false);
    const [openToolUser, setOpenToolUser] = useState(false);
    let history = useHistory();
    const isPage = useSelector((state) => {
        return state.parent.isPage
    });
    const handleShowCollapse = useCallback((value) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsShowCollapse(value);
    }, []);

    const handleScrollTo = useCallback((type, ref) => () => {
        if (isPage.role === 1) {
            setIsShowCollapse(false);
            ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        } else {
            dispatch(createAction(SET_REQUEST_PAGE, type));
            history.replace('/');

        }
    }, [isPage.role]);
    const handleCLickLogo = useCallback(() => {
        if (isPage.role === 1) {
            setIsShowCollapse(false);
            props.refNav.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        } else {
            dispatch(createAction(SET_REQUEST_PAGE, 0));

            history.replace('/');

        }
    }, [isPage.role]);
    const width = useMemo(() => {
        return props.width;
    }, [props.width]);
    const username = localStorage.getItem('username');
    const handleClickUser = useCallback((value) => () => {
        if (username) {
            setOpenToolUser(value);

        } else {
            history.replace('/dangnhap');
        }

    }, [username]);
    const handleClickTTCN = useCallback(() => {
        history.replace('/thongtincanhan');
        setOpenToolUser(false);
    }, []);
    const handleLogout = useCallback(() => {
        setOpenToolUser(false);
        localStorage.setItem('username', '');
        localStorage.setItem('maLoaiNguoiDung', '');
        history.replace('/');
        setIsShowCollapse(false);
    }, []);
    return (
        <AppBar color="inherit" className={classes.header}>
            {/* side bar */}
            <div
                className={classes.sidebar} style={{ width: isShowCollapse ? '100%' : '0%', backgroundColor: !isShowCollapse ? '#77727200' : 'rgb(31 29 29 / 59%)' }}>
                {isShowCollapse &&
                    <Fragment>
                        <div className={classes.divCollapseleft} onClick={handleShowCollapse(false)}></div>
                        <div className={classes.divCollapse}
                        >
                            <div
                                className={classes.d_Flex_Bet}
                            >
                                <div>
                                    <Button
                                        onClick={() => {
                                            if (username) {
                                                history.replace('/thongtincanhan');
                                            } else {
                                                history.replace('/dangnhap');
                                            }
                                        }}
                                    >
                                        <img
                                            src={avatarIcon}
                                            alt="avatarIcon"
                                        />
                                        <p color="inherit"
                                            className={`${classes.navLink} ${classes.login}`}
                                            style={{ padding: '0 10px' }}
                                        >
                                            {username ? username : 'Đăng Nhập'}
                                        </p>
                                    </Button>
                                </div>
                                <Button
                                    onClick={handleShowCollapse(false)}
                                >
                                    <img
                                        src={iconClose}
                                        alt="iconClose"
                                        className={classes.iconClose}
                                    />
                                </Button>
                            </div>
                            <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                        onClick={handleScrollTo(1, props.refHomeMovie)}
                                    >
                                        Lịch Chiếu
                            </Button>
                                </div>
                                <div></div>
                            </Box>
                            <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                        onClick={handleScrollTo(2, props.refGroupCine)}
                                    >
                                        Cụm rạp
                            </Button>
                                </div>
                                <div></div>
                            </Box>
                            <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                    >
                                        Tin tức
                            </Button>
                                </div>
                                <div></div>
                            </Box>
                            <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                    >
                                        Ứng dụng
                                    </Button>
                                </div>
                                <div></div>
                            </Box>
                            <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </Button>
                                </div>
                                <div></div>
                            </Box>

                        </div>
                    </Fragment>
                }
            </div>




            {/* nav bar */}
            <Toolbar
                className={classes.toolbar}
            >
                <Button
                    className={classes.menuButton}
                    onClick={handleCLickLogo}
                >
                    <img
                        src={LogoLight}
                        alt="LogoLight"
                        className={classes.logo}
                    />
                </Button>
                {(width === 'md' || width === 'lg' || width === 'xl') && <Fragment>
                    <Box
                        display="flex" justifyContent="between"
                        className={classes.tabControl}
                    >
                        <div
                            className={classes.navItem}
                        >
                            <Button
                                color="inherit"
                                className={classes.navLink}
                                onClick={handleScrollTo(1, props.refHomeMovie)}

                            >
                                Lịch Chiếu
                        </Button>
                        </div>
                        <div
                            className={classes.navItem}
                        >
                            <Button
                                color="inherit"
                                className={classes.navLink}
                                onClick={handleScrollTo(2, props.refGroupCine)}
                            >
                                Cụm rạp
                        </Button>
                        </div>
                        <div
                            className={classes.navItem}
                        >
                            <Button
                                color="inherit"
                                className={classes.navLink}
                            >
                                Tin tức
                        </Button>
                        </div>
                        <div
                            className={classes.navItem}
                        >
                            <Button
                                color="inherit"
                                className={classes.navLink}
                            >
                                Ứng dụng
                        </Button>
                        </div>
                    </Box>
                    <Box
                        display="flex"
                        className={classes.divRight}
                    >
                        <Button
                            className={`${classes.navItem} ${classes.buttonDN}`}
                            onClick={handleClickUser(true)}
                        >
                            <Avatar
                                src={avatarIcon}
                                alt="avatarIcon" className={classes.avatarUser} />
                            <div
                                color="inherit"
                                className={`${classes.navLink} ${classes.login}`}

                            >
                                {username ? username : 'Đăng Nhập'}
                            </div>
                        </Button>

                    </Box>
                </Fragment>}
                {openToolUser && <div className={classes.boxUser}>
                    <div className={classes.bgUser} onClick={() => {
                        setOpenToolUser(false);
                    }}></div>
                    <div className={classes.contentBoxUser}>
                        <div className={classes.navItem}>
                            <Button className={`${classes.navLink} ${classes.btnUser}`}
                                onClick={handleClickTTCN}
                            >
                                Thông tin cá nhân
                            </Button>
                        </div>
                        <div className={classes.navItem}>
                            <Button className={`${classes.navLink} ${classes.btnUser}`}
                                onClick={handleLogout}
                            >
                                Đăng xuất
                        </Button>
                        </div>
                    </div>
                </div>}
                <div
                    className={classes.collapse}
                >
                    <Button
                        onClick={handleShowCollapse(true)}
                    >
                        <img
                            src={collapseButton}
                            alt="collapseButton"
                            className={classes.collapseButton}
                        />
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme) => ({
    //#region  done
    header: {
        position: 'fixed',
        background: '#ffffffe8',
        height: '64px',
        zIndex: '99',
    },
    d_Flex_Bet: {
        display: 'flex',
        justifyContent: 'space-between',
    }
    ,

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        padding: theme.spacing(0, 0.7),
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        cursor: 'pointer',
        "&:hover ": {
            outline: 'none',
            backgroundColor: 'transparent',
        }
    },
    logo: {
        maxWidth: theme.spacing(4), //40px
        width: '100%',
        height: 'auto',
        padding: '0.12em',
        borderRadius: theme.spacing(1.5), //15px
        transition: '0.3s all',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(5)
        },
    },
    tabControl: {
        position: 'absolute',
        left: "50%",
        transform: "translate(-50%, 0)",
        display: 'none',
        // --- responsive 
        [theme.breakpoints.up(`${978}`)]: {
            display: 'flex',
        }
    },
    navItem: {
        margin: theme.spacing(0, 0.5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover $navLink': {
            background: 'none',
            color: '#6B00B6',
        },
    },
    navLink: {
        fontSize: theme.spacing(1.3),
        fontWeight: '500',
        cursor: 'pointer',
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.02),
        transition: '0.3s all',
        whiteSpace: 'nowrap',
    },
    divRight: {
        display: 'none',
        // --- responsive 
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    login: {
        color: '#9b9b9b',
        fontWeight: '400',

    },
    formControl: {
        display: 'flex',
    },
    select: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.07),
        border: 'none',
        color: '#9b9b9b',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        outline: 'none',
        cursor: 'pointer',
        background: 'none',
    },
    collapse: {
        display: 'flex',
        // --- responsive 
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    collapseButton: {
        maxWidth: theme.spacing(3), //35px
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(3)
        },
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '0%',
        zIndex: '100',
        backgroundColor: '#77727296',
    },
    divCollapse: {
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        width: 'auto',
        padding: theme.spacing(1.5),
        boxShadow: '0 0 7px 2px #9e9e9e94',
    },
    divCollapseleft: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    modalTT: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: 'rgb(31 29 29 / 30%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgModalTT: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: 'rgb(31 29 29 / 0%)',
    },
    ModalContent: {
        zIndex: '102',
        background: '#fff',
        borderRadius: theme.spacing(1.1),
        width: '50%',
        maxHeight: '400px',
        overflow: 'auto',
        padding: theme.spacing(2),
        transform: ' scale(4px, 4px)',
        boxShadow: '0 0 7px 2px #9e9e9e94',
    },
    TtItem: {
        cursor: 'pointer',
        borderBottom: '1px solid #80808075',
        transition: 'all 0.3s',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            background: '#c7b9b96b',

        }
    },
    iconClose: {
        maxWidth: theme.spacing(1.2),
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(1.2)
        },
    },
    itemColapseGroup1: {
        justifyContent: 'flex-start',
        margin: theme.spacing(5.4, 0),
    },
    itemColapseGroup2: {
        justifyContent: 'center',
    },
    ContentTT: {
        background: 'rgb(255 255 255 / 0%)',
        position: 'fixed',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        '& $ModalContent': {
            marginTop: theme.spacing(6.5),
            marginRight: theme.spacing(1),
            width: theme.spacing(14.5),
        }
    },
    //#endregion
    iconDown: {
        marginLeft: theme.spacing(2),
        height: theme.spacing(0.8),
    },
    buttonDN: {

    },
    avatarUser: {
        width: '25px',
        height: '25px',
        marginRight: '11px',
        borderRadius: '50%',
        border: '1px dotted #ececec',
    },
    boxUser: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    bgUser: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: '101',
    },
    contentBoxUser: {
        zIndex: '102',
        background: '#fff',
        borderRadius: theme.spacing(0.7),
        maxHeight: '400px',
        overflow: 'auto',
        boxShadow: '0 0 7px 2px #9e9e9e94',
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: ' translateY(69px)',
        [theme.breakpoints.down(`${961}`)]: {
            left: 0,
        }
    },
    UserItem: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.07),
        border: 'none',
        color: '#9b9b9b',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        '&:hover': {
            background: '#c7b9b96b',

        }
    },
    btnUser: {
        width: '100%',
    },
}));

export default memo(withWidth()(Header));


