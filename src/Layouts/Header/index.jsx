import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from 'react';
import { AppBar, Avatar, Box, Button, FormControl, makeStyles, Paper, Select, Toolbar, withWidth } from '@material-ui/core';
import avatarIcon from '../../assets/img/Noavatar.svg';
import LogoLight from '../../assets/img/LogoLight.svg';
import collapseButton from '../../assets/img/collapseButton.svg';
import iconClose from '../../assets/img/iconCloseButton.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE, SET_REQUEST_PAGE_USER } from '../../redux/action/type';
import { useStyles } from './styles';
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
    const handleClickGotoLSDV = useCallback(() => {
        history.replace('/thongtincanhan');
        dispatch(createAction(SET_REQUEST_PAGE_USER, 1));
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
                                            style={{ borderRadius: '50%' }}
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
                    <Paper elevation={3} className={classes.contentBoxUser}>
                        <div className={classes.navItem}>
                            <Button className={`${classes.navLink} ${classes.btnUser}`}
                                onClick={handleClickTTCN}
                            >
                                Thông tin cá nhân
                            </Button>
                        </div>
                        <div className={classes.navItem}>
                            <Button className={`${classes.navLink} ${classes.btnUser}`}
                                onClick={handleClickGotoLSDV}
                            >
                                Lịch sử đặt vé
                        </Button>
                        </div>
                        <div className={classes.navItem}>
                            <Button className={`${classes.navLink} ${classes.btnUser}`}
                                onClick={handleLogout}
                            >
                                Đăng xuất
                        </Button>
                        </div>
                    </Paper>
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



export default memo(withWidth()(Header));


