import { AppBar, Badge, Box, Button, IconButton, InputBase, MenuItem, Tabs, Toolbar, Typography } from '@material-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import { Fragment } from 'react';
import { useStyles } from './styles';
import Logo from '../../assets/img/LogoDark.svg';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import MoviePage from '../MoviesPage';
function AdminPage(props) {
    const classes = useStyles();
    const [active, setActive] = useState(1);
    const title = useMemo(() => {
        switch (active) {
            case 1:
                // movies
                return "Movie";
            case 2:
                // users
                return "Users";
            case 3:
                // timeshow
                return "Time shows";
            default:
                return "Dashboard";
        }
    }, [active]);
    const getContent = useCallback((activeStep) => {
        switch (activeStep) {
            case 1:
                // movies
                return <Fragment><MoviePage /></Fragment>
            case 2:
                // users
                return <Fragment>users page</Fragment>
            case 3:
                // timeshow
                return <Fragment>timeshow page</Fragment>
            default:
                return <Fragment>dashboard</Fragment>
        }
    }, []);
    const handleActiveTab = useCallback((active) => (e) => {
        // console.log(e.target);
        setActive(active);
    }, []);
    const handleGetActive = useCallback((active) => {

    }, []);
    return (
        <Box display="flex" >
            <Box width="15%" maxWidth="15%">
                <div className={classes.sideBar}>
                    <div className={classes.sideBarItem} style={{ marginLeft: 6 }}>
                        <Button className={classes.Btnlogo} fullWidth={true} variant="text" color="primary" onClick={handleActiveTab(0)} > <img src={Logo} alt="logo" className={`${classes.logo} ${classes.iconSiderbar}`} /> <i style={{ color: '#fff', letterSpacing: 3, fontWeight: '800' }} className={classes.textSideBar}> Kix Admin </i> </Button>
                    </div>
                    <div className={classes.sideBarItem}>
                        <Button className={`${classes.btnSide} ${active === 0 && classes.activeStep}`} fullWidth={true} variant="contained" color="primary" onClick={handleActiveTab(0)}><DashboardRoundedIcon className={classes.iconSiderbar} /> <span className={classes.textSideBar}> Dashboard </span></Button>
                    </div>
                    <div className={classes.sideBarItem}>
                        <Button className={`${classes.btnSide} ${active === 1 && classes.activeStep}`} fullWidth={true} variant="contained" color="primary" onClick={handleActiveTab(1)}><LocalMoviesRoundedIcon className={classes.iconSiderbar} /> <span className={classes.textSideBar}> Danh sách phim </span></Button>
                    </div>
                    <div className={classes.sideBarItem}>
                        <Button className={`${classes.btnSide} ${active === 2 && classes.activeStep}`} fullWidth={true} variant="contained" color="primary" onClick={handleActiveTab(2)}><PeopleRoundedIcon className={classes.iconSiderbar} />  <span className={classes.textSideBar}> Người dùng</span></Button>

                    </div>
                    <div className={classes.sideBarItem}>
                        <Button className={`${classes.btnSide} ${active === 3 && classes.activeStep}`} fullWidth={true} variant="contained" color="primary" onClick={handleActiveTab(3)}>  <DateRangeRoundedIcon className={classes.iconSiderbar} /> <span className={classes.textSideBar}> Lịch chiếu</span></Button>

                    </div>
                </div>

            </Box>
            <Box width="85%" maxWidth="85%" p={2} style={{ backgroundColor: '#eee' }}>
                <div className={classes.appBar}>
                    <div className={classes.sectionDesktop}>
                        <Button color="default" variant="text" className={classes.textTitle}>
                            {title}
                        </Button>
                    </div>
                    <div className={classes.divFlex}>
                        <div className={classes.searchGroup}>
                            <InputBase
                                placeholder="Search…"
                                style={{ border: '0.5px solid #fff ', borderRadius: 10, padding: 3, paddingLeft: 20 }}
                            />
                            <IconButton
                                color="inherit"
                                style={{ background: '#fff', transform: 'translateX(-20px)' }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                            <Badge badgeContent={11} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <AccountBoxRoundedIcon />
                        </IconButton>
                    </div>

                </div>
                <Box my={3} minHeight="150vh">
                    {getContent(active)}
                </Box>
                <Box>Footer</Box>
            </Box>
        </Box>

    );
}

export default AdminPage;