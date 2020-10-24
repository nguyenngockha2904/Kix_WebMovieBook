import React, { Fragment, memo, useCallback, useState } from 'react';
import { AppBar, Box, Button, FormControl, makeStyles, Select, Toolbar } from '@material-ui/core';
import avatarIcon from '../../assets/img/avatarIcon.svg';
import LogoLight from '../../assets/img/LogoLight.svg';
import collapseButton from '../../assets/img/collapseButton.svg';
import iconPosition from '../../assets/img/iconPosition.svg';
import iconClose from '../../assets/img/iconCloseButton.svg';
import iconDown from '../../assets/img/iconDown.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE } from '../../redux/action/type';
const useStyles = makeStyles((theme) => ({
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
        transition: '0.2s all',
    },
    divCollapse: {
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        width: '50%',
        padding: theme.spacing(1.5),
        boxShadow: '0 0 7px 2px #9e9e9e94',
        transition: '0.5s all',
    },
    divCollapseleft: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
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
    iconDown: {
        marginLeft: theme.spacing(2),
        height: theme.spacing(0.8),
    }

}));
const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isShowCollapse, setIsShowCollapse] = useState(false);
    const [isShowModalTT, setIsShowModalTT] = useState(false);
    const [isShowTT, setIsShowTT] = useState(false);
    const [tinhThanh, setTinhThanh] = useState('Hồ Chí Minh');
    let history = useHistory();
    const isPage = useSelector((state) => {
        return state.parent.isPage
    });
    const handleShowCollapse = useCallback((value) => () => {
        setIsShowCollapse(value);
    }, []);
    const handleShowModalTT = useCallback((value) => () => {
        setIsShowModalTT(value);
    }, []);
    const handleClickChooseTT = useCallback((value) => () => {
        setTinhThanh(value);
        setIsShowModalTT(false);
        setIsShowTT(false);
    }, []);
    const handleShowTT = useCallback((value) => () => {
        setIsShowTT(value);
    }, []);
    const handleScrollTo = useCallback((type, x, y) => () => {
        if (isPage.role === 1) {
            window.scrollTo({ top: x, behavior: 'smooth' });
            setIsShowCollapse(false);
        } else {
            dispatch(createAction(SET_REQUEST_PAGE, type));
            history.replace('/');
            // window.scrollTo({ top: x, behavior: 'smooth' }); 
        }
    }, [isPage.role]);
    const handleGoTo = useCallback((value) => () => {
        history.replace(`${value}`);
    }, []);

    return (
        <AppBar color="inherit" className={classes.header}>
            {/* side bar */}
            <div className={classes.sidebar} style={{ width: isShowCollapse ? '100%' : '0%', backgroundColor: !isShowCollapse ? '#77727200' : 'rgb(31 29 29 / 59%)' }}>
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
                                        onClick={handleGoTo('/dangnhap')}
                                    >
                                        <img
                                            src={avatarIcon}
                                            alt="avatarIcon"
                                        />
                                        <p color="inherit"
                                            className={`${classes.navLink} ${classes.login}`}
                                            style={{ padding: '0 10px' }}
                                        >
                                            Đăng nhập
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
                                        onClick={handleScrollTo(1.1, 460, 0)}
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
                                        onClick={handleScrollTo(2.1, 2030, 0)}
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
                            {isPage.role === 1 && <Box
                                className={`${classes.d_Flex_Bet} ${classes.itemColapseGroup1}`}
                                justifyContent="center"
                            >
                                <div
                                    className={classes.navItem}
                                >
                                    <Button
                                        color="inherit"
                                        className={classes.navLink}
                                        onClick={handleShowModalTT(true)}
                                    >
                                        {tinhThanh}
                                    </Button>
                                </div>
                                <div></div>
                            </Box>}
                        </div>
                        {isShowModalTT &&
                            <div className={classes.modalTT}>
                                <div className={classes.bgModalTT} onClick={handleShowModalTT(false)}></div>
                                <div className={classes.ModalContent}>
                                    <div className={classes.TtItem}
                                        onClick={handleClickChooseTT('Hồ Chí Minh')}
                                    >
                                        <p className={classes.navLink}
                                        >Hồ Chí Minh</p>
                                    </div>
                                    <div className={classes.TtItem}
                                        onClick={handleClickChooseTT('Đà Nẵng')}
                                    >
                                        <p className={classes.navLink}

                                        >Đà Nẵng</p>
                                    </div>
                                    <div className={classes.TtItem}
                                        onClick={handleClickChooseTT('Hà Nội')}
                                    >
                                        <p className={classes.navLink}

                                        >Hà Nội</p>
                                    </div>
                                    <div className={classes.TtItem}
                                        onClick={handleClickChooseTT('Vũng Tàu')}
                                    >
                                        <p className={classes.navLink}

                                        >Vũng Tàu</p>
                                    </div>
                                    <div className={classes.TtItem}
                                        onClick={handleClickChooseTT('Cần Thơ')}
                                    >
                                        <p className={classes.navLink}

                                        >Cần Thơ</p>
                                    </div>
                                    <div className={classes.TtItem} style={{ border: 'none' }}
                                        onClick={handleClickChooseTT('Quy nhơn')}
                                    >
                                        <p className={classes.navLink}

                                        >Quy nhơn</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </Fragment>
                }
            </div>




            {/* nav bar */}
            <Toolbar
                className={classes.toolbar}
            >
                <Button
                    className={classes.menuButton}
                    onClick={handleGoTo('/')}
                >
                    <img
                        src={LogoLight}
                        alt="LogoLight"
                        className={classes.logo}
                    />
                </Button>
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
                            onClick={handleScrollTo(1, 500, 0)}

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
                            onClick={handleScrollTo(2, 1700, 0)}
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
                    <Box
                        display="flex"
                        justifyContent="between"
                        className={classes.navItem}
                    >
                        <img
                            src={avatarIcon}
                            alt="avatarIcon" />
                        <Button
                            color="inherit"
                            className={`${classes.navLink} ${classes.login}`}
                            onClick={handleGoTo('/dangnhap')}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                    {isPage.role === 1 && <div
                        className={`${classes.navItem} ${classes.GroupSelect}`}
                        onClick={handleShowTT(true)}
                    >
                        <img
                            src={iconPosition}
                            alt="iconPosition"
                        />
                        <Button
                            color="inherit"
                            className={`${classes.navLink} ${classes.login}`}
                        >
                            {tinhThanh}
                        </Button>
                        <img
                            src={iconDown}
                            alt="iconDown"
                            className={classes.iconDown}

                        />
                    </div>}
                </Box>
                {isShowTT && <div className={`${classes.modalTT} ${classes.ContentTT}`}>
                    <div className={classes.bgModalTT} onClick={handleShowTT(false)}></div>
                    <div className={classes.ModalContent}>
                        <div className={classes.TtItem}
                            onClick={handleClickChooseTT('Hồ Chí Minh')}
                        >
                            <p className={classes.navLink}
                            >Hồ Chí Minh</p>
                        </div>
                        <div className={classes.TtItem}
                            onClick={handleClickChooseTT('Đà Nẵng')}
                        >
                            <p className={classes.navLink}

                            >Đà Nẵng</p>
                        </div>
                        <div className={classes.TtItem}
                            onClick={handleClickChooseTT('Hà Nội')}
                        >
                            <p className={classes.navLink}

                            >Hà Nội</p>
                        </div>
                        <div className={classes.TtItem}
                            onClick={handleClickChooseTT('Vũng Tàu')}
                        >
                            <p className={classes.navLink}

                            >Vũng Tàu</p>
                        </div>
                        <div className={classes.TtItem}
                            onClick={handleClickChooseTT('Cần Thơ')}
                        >
                            <p className={classes.navLink}

                            >Cần Thơ</p>
                        </div>
                        <div className={classes.TtItem} style={{ border: 'none' }}
                            onClick={handleClickChooseTT('Quy nhơn')}
                        >
                            <p className={classes.navLink}

                            >Quy nhơn</p>
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
export default memo(Header);


