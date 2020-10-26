

import React, { Fragment, memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MovieList from '../../Components/MovieList';
import { useSelector } from 'react-redux';

import ModalVideoMovie from '../../Components/ModalShowVideo';
import { withWidth } from '@material-ui/core';
import TabDangChieu from '../../Components/TabDangChieu';
import TabSapChieu from '../../Components/TabSapChieu';
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

const MovieHome = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    const isShow = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.isShow
    });
    const role = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.role
    });
    let width = useMemo(() => {
        return props.width;
    }, [props.width]);
    console.log(width);
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Đang Chiếu" {...a11yProps(0)} style={{ textTransform: 'capitalize' }} />
                    <Tab label="Sắp Chiếu" {...a11yProps(1)} style={{ textTransform: 'capitalize' }} />
                </Tabs>
            </AppBar>
            {width === 'md' || width === 'lg' || width === 'xl' ?
                <Fragment>
                    <TabPanel value={value} index={0} className={classes.tabContent}>
                        <MovieList index={0} />
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.tabContent}>
                        <MovieList index={1} />
                    </TabPanel>
                </Fragment>
                : <Fragment>
                    <TabPanel value={value} index={0} className={classes.tabContent}>
                        <TabDangChieu currentPage={0} />
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.tabContent}>
                        <TabDangChieu currentPage={2} />
                    </TabPanel>

                </Fragment>}
            {isShow && role === 2 && < ModalVideoMovie />}
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '940px',
        margin: 'auto',
        minHeight: '700px',
        height: '100%',
        [theme.breakpoints.down(`${970}`)]: {
            width: '92%',
        },
        '& .MuiAppBar-colorDefault': {
            backgroundColor: 'transparent',
        },
        '& .MuiTab-fullWidth': {
            maxWidth: 'max-content',
        },
        '& .MuiPaper-elevation4': {
            boxShadow: 'none',
        },
        '& .MuiTabs-flexContainer': {
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    tabTitle: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1),
        alignItems: 'center',
    },
    navItem: {
        margin: theme.spacing(0, 0.5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none',
        position: 'relative',
        '&:hover $navLink': {
            color: '#4C00A9',
        },

    },
    tagActive: {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '0%',
        height: '2px',
        transition: 'all .3s',
        background: '#4C00A9',
        borderRadius: '2px',

    },
    navItem_active: {
        '&:hover $navLink': {
            color: '#4C00A9',
        },
        '& $navLink': {
            color: '#4C00A9',
        },
        '& $tagActive': {
            width: '100%',
        }
    },
    navLink: {
        fontSize: theme.spacing(1.9),
        fontWeight: '500',
        cursor: 'pointer',
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.1),
        // transition: '0.3s all',
        color: '#000',
        whiteSpace: 'nowrap',

    },
    tabContent: {
        marginTop: theme.spacing(2),
    },
}));


export default memo(withWidth()(MovieHome));