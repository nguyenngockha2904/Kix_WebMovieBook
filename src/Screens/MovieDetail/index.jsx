import { AppBar, Box, Button, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../../Layouts/footer';
import 'react-circular-progressbar/dist/styles.css';
import MovieDetailContent from '../../Components/MovieDetailContent';
import { useParams } from 'react-router-dom';
import { getMovieInfoWithMovieId } from '../../redux/action/movieAction';
import Loading from '../../Layouts/Loading';
import { useDispatch, useSelector } from 'react-redux';
import ModalVideoMovie from '../../Components/ModalShowVideo';
import MovieDetailInfo from '../../Components/MovieDetailInfo';
import MovieDetailShowTime from '../../Components/MovieDetailShowTime';
import { createAction } from '../../redux/action';
import { SET_TYPE_PAGE } from '../../redux/action/type';
import Header from '../../Layouts/Header';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6.4),
        width: '100%',
        minHeight: theme.spacing(140),
        height: '100%',
        background: 'rgb(10, 32, 41)',
    },
    divTop: {
        position: 'relative',
        minHeight: theme.spacing(30),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            fontSize: theme.spacing(2.3),
        },
        '& $img': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down(`${960}`)]: {
            '&:hover $navLink': {
                fontSize: theme.spacing(1.8),
            },
        },
    },
    divContent: {
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
        },
        '& .MuiTab-textColorPrimary': {
            color: '#fff',
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
            color: '#6b00b6 !important',
        }
    },
    navItem_active: {

        '&:hover $navLink': {
            color: '#6b00b6',
        },
        '& $navLink': {
            color: '#6b00b6',
            fontSize: theme.spacing(2.3),
        },
        [theme.breakpoints.down(`${960}`)]: {
            '& $navLink': {
                fontSize: theme.spacing(1.8),
            },
        },
    },
    navLink: {
        fontSize: theme.spacing(1.7),
        fontWeight: '700',
        cursor: 'pointer',
        textTransform: 'capitalize',
        transition: 'all 0.3s',
        letterSpacing: theme.spacing(0.1),
        // transition: '0.3s all',
        color: '#fff',
        whiteSpace: 'nowrap',

    },
    tabContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

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




const MovieDetail = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const refMuaVe = useRef();
    const [isLoading, setIsloadding] = useState(true);
    const [isTabLichChieu, setIsTabLichChieu] = useState(true);
    const [value, setValue] = React.useState(0);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);
    const request = useSelector((state) => {
        return state.parent.request
    });
    useEffect(() => {
        dispatch(getMovieInfoWithMovieId(params.maPhim, () => {
            dispatch(createAction(SET_TYPE_PAGE, 2));
            setTimeout(() => {
                if (request === 3) {
                    refMuaVe.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

            }, 300);
            setIsloadding(false);
        }))

    }, []);
    const handleShowTabLichChieu = useCallback((value) => () => {
        refMuaVe.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        setIsTabLichChieu(value);
    }, []);
    const isShowModalVideoMovie = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.isShow
    });
    return (
        <Fragment >
            {isLoading ? <Loading /> :
                <Fragment>

                    <Header />
                    <div className={classes.root}>
                        <motion.div className={classes.divTop}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >
                            <MovieDetailContent role={2} item={{}} refMuaVe={refMuaVe} handleShowTabLichChieu={setIsTabLichChieu} />

                        </motion.div>

                        <div className={classes.divContent}>
                            <div ref={refMuaVe} style={{ padding: '35px' }}></div>
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
                                    <Tab label="Lịch Chiếu" {...a11yProps(0)} style={{ textTransform: 'capitalize' }} />
                                    <Tab label="Thông Tin" {...a11yProps(1)} style={{ textTransform: 'capitalize' }} />
                                </Tabs>
                            </AppBar>
                            <Fragment>
                                <TabPanel value={value} index={0} className={classes.tabContent}>
                                    <MovieDetailShowTime />
                                </TabPanel>
                                <TabPanel value={value} index={1} className={classes.tabContent}>
                                    <MovieDetailInfo />
                                </TabPanel>
                            </Fragment>
                        </div>
                    </div>
                    <Footer />
                    {isShowModalVideoMovie && <ModalVideoMovie />}
                </Fragment>}
        </Fragment>
    );
};

export default memo(MovieDetail);