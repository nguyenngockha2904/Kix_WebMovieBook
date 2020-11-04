import { Box, makeStyles, Button, Hidden, Avatar } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import logoCine from '../../assets/img/logoCine/cgv_logo.png';
import theaterImage from '../../assets/img/CGV_movie_theater.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { FIND_THEATER_SYSTEM_WITH_DATE, SET_DATA_lIST_LICH_CHIEU, SET_REQUEST_PAGE_LOGIN } from '../../redux/action/type';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
//#region Group icon Cinema
import BHDIcon from '../../assets/img/logoTheater/bhd.jpg';
import CGVIcon from '../../assets/img/logoTheater/cgv.jpg';
import CineStarIcon from '../../assets/img/logoTheater/cns.jpg';
import GalaxyIcon from '../../assets/img/logoTheater/glx.jpg';
import LotteCinimaIcon from '../../assets/img/logoTheater/lotte.jpg';
import MegaGSIcon from '../../assets/img/logoTheater/megags.jpg';
import NoImage from '../../assets/img/logoTheater/noImage.jpg';
//#endregion
const returnIconTheader = (value) => {
    switch (value.toLowerCase()) {
        case 'bhd': {
            return BHDIcon;
        }
        case 'cgv': {
            return CGVIcon;
        }
        case 'cns': {
            return CineStarIcon;
        }
        case 'glx': {
            return GalaxyIcon;
        }
        case 'megags': {
            return MegaGSIcon;
        }
        case 'lotte': {
            return LotteCinimaIcon;
        }
        default: {
            return NoImage;
        }
    }
};
const MovieDetailShowTime = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const refDate = useRef();
    const propsMovieSystem = useSelector((state) => {
        return state.qlMovie.movieInfoSystem
    });

    const listLichChieu = useSelector((state) => {
        return state.qlMovie.listLichChieuTheoFilmTheoMaHeThongRap
    });
    const listCumRapTheoPhimVaHeThongRap = useSelector((state) => {
        return state.qlMovie.listCumRapTheoPhimVaHeThongRap
    })
    useEffect(() => {
        if (propsMovieSystem.heThongRapChieu.length !== 0) {
            let maHeThong = propsMovieSystem.heThongRapChieu[0].maHeThongRap;
            dispatch(createAction(SET_DATA_lIST_LICH_CHIEU, maHeThong));
        } else {
            dispatch(createAction(SET_DATA_lIST_LICH_CHIEU, ''));
        }

    }, []);


    const handleChooseTheaterSystem = useCallback((value) => () => {
        let maHeThong = value.maHeThongRap;
        refDate.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        dispatch(createAction(SET_DATA_lIST_LICH_CHIEU, maHeThong));

    }, []);
    const renderListTheaterSystem = useCallback(() => {
        return propsMovieSystem.heThongRapChieu.map((item, index) => {
            return (
                <div className={classes.tabItemRapRespone} key={index}>
                    <Button variant="contained" color="inherit" className={classes.tabItemRap}
                        onClick={handleChooseTheaterSystem(item)} style={{ opacity: item.isActived ? '1' : '0.5' }}
                    >
                        <div className={classes.groupButtonImg}>
                            <div className={classes.buttonImg}
                            ><img src={item.logo} alt={logoCine} className={classes.logoCine} />

                            </div>
                        </div>
                        <div className={classes.titleTheater}>{item.tenHeThongRap}</div>
                    </Button>
                    {index !== (propsMovieSystem.heThongRapChieu.length - 1) && <div className={classes.line}></div>}
                </div>
            )
        });
    }, [propsMovieSystem.heThongRapChieu]);

    const listDay = useMemo(() => {
        //#region  comment
        // let listD = [];
        // let dayCheck = '';
        // let listTest = [];
        // listLichChieu.map((item) => {
        //     let date = new Date(item.ngayChieuGioChieu);
        //     let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
        //     if (dayCheck !== dayString) {
        //         listTest.push(item);
        //     }
        //     dayCheck = dayString;
        // });
        // listTest.map((item) => {
        //     let date = new Date(item.ngayChieuGioChieu);
        //     let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
        //     let day = '';
        //     if (date.getDay() === 0) {
        //         day = 'Chủ Nhật';
        //     }
        //     if (date.getDay() === 1) {
        //         day = 'Thứ 2';
        //     }
        //     if (date.getDay() === 2) {
        //         day = 'Thứ 3';
        //     }
        //     if (date.getDay() === 3) {
        //         day = 'Thứ 4';
        //     }
        //     if (date.getDay() === 4) {
        //         day = 'Thứ 5';
        //     }
        //     if (date.getDay() === 5) {
        //         day = 'Thứ 6';
        //     }
        //     if (date.getDay() === 6) {
        //         day = 'Thứ Bảy';
        //     }
        //     let d = {
        //         day,
        //         da: `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`,
        //         dateFormat: dayString,
        //         isActived: false,
        //     }
        //     listD.push(d);
        // });
        // return listD;
        //#endregion
        let listD = [];
        let dayCheck = '';
        let listTest = [];
        listLichChieu.map((item) => {
            let date = new Date(item.ngayChieuGioChieu);
            let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
            let day = '';
            if (date.getDay() === 0) {
                day = 'Chủ Nhật';
            }
            if (date.getDay() === 1) {
                day = 'Thứ 2';
            }
            if (date.getDay() === 2) {
                day = 'Thứ 3';
            }
            if (date.getDay() === 3) {
                day = 'Thứ 4';
            }
            if (date.getDay() === 4) {
                day = 'Thứ 5';
            }
            if (date.getDay() === 5) {
                day = 'Thứ 6';
            }
            if (date.getDay() === 6) {
                day = 'Thứ Bảy';
            }
            let d = {
                day,
                da: `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`,
                dateFormat: dayString,
                isActived: false,
            }
            listD.push(d);
        });
        let mangSPTheoGia = listD.sort((sp_tieptheo, sp) => {
            return parseInt(sp_tieptheo.da) - parseInt(sp.da);
        });
        mangSPTheoGia.map((item) => {
            if (dayCheck !== item.da) {
                listTest.push(item);
            }
            dayCheck = item.da;
        });

        return listTest;
    }, [listLichChieu]);


    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${d.getDate() > 10 ? d.getDate() : ('0' + d.getDate())}.${(d.getMonth() + 1) > 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}.${d.getFullYear()}`;
        return date;
    }, []);


    useEffect(() => {
        if (listLichChieu.length !== 0) {
            let date = new Date(listLichChieu[0].ngayChieuGioChieu);
            let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
            dispatch(createAction(FIND_THEATER_SYSTEM_WITH_DATE, dayString));
            listDay[0].isActived = true;
        }
    }, [listLichChieu]);

    const handleChooseDay = useCallback((value) => () => {
        let index = listDay.findIndex(d => d.dateFormat === value.dateFormat);
        for (let i in listDay) {
            listDay[i].isActived = false;
        }
        if (index !== -1) {
            listDay[index].isActived = true;
        }
        dispatch(createAction(FIND_THEATER_SYSTEM_WITH_DATE, value.dateFormat));
    }, [listDay]);
    const renderListDate = useCallback(() => {

        return listDay.map((item, index) => {
            return (
                <Button key={index} variant="contained" color="inherit" className={`${classes.dateItem}`}
                    // disabled={index > 5 ? true : false}
                    style={{ color: item.isActived ? '#6b00b6' : '#000', }}
                    onClick={handleChooseDay(item)}
                >
                    <div className={classes.textFomart}>{item.day}</div>
                    <div className={`${classes.textFomart} ${classes.date}`}

                        //                 color: #fff;
                        // background: rgb(107, 0, 182);

                        // border-radius: 50%;
                        // padding: 3px;
                        style={{
                            color: item.isActived && '#fff',
                            background: item.isActived && '#6b00b6',
                            borderRadius: item.isActived && '50%',
                            padding: item.isActived && '3px 4px',
                        }}
                    >{item.da}</div>
                </Button >
            )
        });
    }, [listDay]);

    const handleChooseTime = useCallback((value) => () => {
        // console.log(value);
        // const win = window.open(`/chitietphongve/${value.maLichChieu}`, "_blank");
        // win.focus();
        let username = localStorage.getItem('username');
        let maLichChieu = value.maLichChieu;
        if (maLichChieu) {
            if (username) {
                history.push(`/chitietphongve/${maLichChieu}`);
            } else {
                swal({
                    text: "Vui lòng đăng nhập để tiến hành mua vé !",
                    icon: "info",
                    buttons: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            history.push('/dangnhap');
                            dispatch(createAction(SET_REQUEST_PAGE_LOGIN, { request: 1, maLichChieu }));
                        }
                    });
            }

        }

    }, []);
    const renderCumRap = useCallback(() => {
        if (listCumRapTheoPhimVaHeThongRap) {
            return listCumRapTheoPhimVaHeThongRap.map((item, index) => {
                return (
                    <div className={classes.ShowTimeDetail_item}
                        key={index}>
                        <Box display="flex" justifyContent="flex-start" mb={1}>
                            <div className={classes.groupImg}>

                                <Avatar src={returnIconTheader(item.CumRap.tenCumRap.trim().slice(0, item.CumRap.tenCumRap.trim().indexOf(' ')))} alt={returnIconTheader(item.CumRap.tenCumRap.trim().slice(0, item.CumRap.tenCumRap.trim().indexOf(' ')))} className={classes.theatherIcon} />
                            </div>
                            <div className={classes.theatherInfo}>
                                <div className={classes.group_name}>
                                    <div className={classes.hightLine}>{item.CumRap.tenCumRap.trim().slice(0, item.CumRap.tenCumRap.trim().indexOf(' '))}</div>
                                    <div>{item.CumRap.tenCumRap.trim().slice(item.CumRap.tenCumRap.trim().indexOf(' '))}</div>
                                </div>

                            </div>
                        </Box>
                        <div>
                            <div className={`${classes.group_name} ${classes.group_name1}`}>
                                2D Digital
                                <div className={classes.group_name_address}>{changeFormatDate(item.listTGChieu[0].ngayChieuGioChieu)}</div>

                            </div>
                            <Box display="flex" mb={1.5} overflow="auto" className={classes.groupTime}>
                                {item.listTGChieu.map((dae, index) => {
                                    let date = new Date(dae.ngayChieuGioChieu);
                                    return (
                                        <Button variant="contained" color="inherit" className={classes.itemTime} key={index} onClick={handleChooseTime(dae)}>
                                            <div className={classes.timeStart}>{date.getHours()}:{date.getMinutes()}</div>
                                            <div>~ {(date.getHours() + 2) > 24 ? ((date.getHours() + 2) - 24) : date.getHours() + 1}:{date.getMinutes()}</div>
                                        </Button>
                                    )
                                })}

                            </Box>
                        </div>
                    </div>
                )
            })
        }
    }, [listCumRapTheoPhimVaHeThongRap])
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{ opacity: 1, y: 0, }}

            style={{ overflowX: 'Hidden', width: '100%' }}
        >
            {listLichChieu.length !== 0 ?
                <div className={classes.root}>
                    <div className={classes.groupTabs}>
                        {renderListTheaterSystem()}
                    </div>
                    <div className={classes.tabContent}>
                        <div className={classes.divDate}>
                            <div ref={refDate}></div>
                            {renderListDate()}
                        </div>
                        <div className={classes.ShowTimeDetail}>
                            {renderCumRap()}

                        </div>
                    </div>
                </div>
                :
                <div className={classes.tabContent} style={{ textAlign: 'center', margin: 'auto' }}>
                    <MoodBadIcon style={{ margin: 'auto', fontSize: '55px', color: '#fff' }} />
                    <div className={classes.date} style={{ color: '#fff' }}>
                        xin lỗi nhưng hiện tại phim này chưa có lịch chiếu!
                </div>
                </div>
            }
        </motion.div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: theme.spacing(56.5),
        width: '60%',
        height: 'auto',
        background: '#fff',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'start',
        margin: 'auto',
        [theme.breakpoints.down(`${1201}`)]: {
            width: 'auto',
            margin: '0% 5%',
        },
        [theme.breakpoints.down(`${960}`)]: {
            display: 'block',
        },


    },
    groupTabs: {
        width: '25%',
        maxHeight: theme.spacing(56.5),
        overflow: 'auto',
        borderRight: '1px solid #80808080',
        '&::-webkit-scrollbar ': {
            width: '5px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${960}`)]: {
            display: 'flex',
            width: '100%',
            justifyContent: ' center',
            borderBottom: '1px solid #80808080',
            '& $line': {
                display: 'none',
            },
            '& $titleTheater': {
                display: 'none',
            },
        },
    },
    tabItemRapRespone: {
        width: 'auto',
        margin: '8px 3%',
    },
    tabItemRap: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing(1),
        width: '100%',
        background: 'transparent',
        boxShadow: ' 0 0 black',
        transition: 'none',
        opacity: '0.7',
        '&:hover': {
            background: 'transparent',
        },
        [theme.breakpoints.down(`${960}`)]: {
            minWidth: '1px',
            padding: '0px',
            borderRadius: '50%',
        },
    },
    groupButtonImg: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down(`${960}`)]: {
            marginRight: '0',
        },
    },
    buttonImg: {
        borderRadius: '50%',
        width: theme.spacing(5),
        height: theme.spacing(5),
        minWidth: theme.spacing(1),
        background: 'transparent',
        '&:hover': {
            background: 'transparent',
        }
    },
    logoCine: {
        width: theme.spacing(5),
    },
    titleTheater: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: '1px',
        textAlign: 'left',
    },
    line: {
        background: '#8080805e',
        width: '60%',
        height: '0.5px',
        margin: 'auto',
    },
    tabContent: {
        width: '75%',
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%',
        },
    },
    divDate: {
        display: 'flex',
        overflowX: 'auto',
        '&::-webkit-scrollbar ': {
            width: '4px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
    },
    dateItem: {
        display: 'block',
        background: 'transparent !important',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(12.2),
        padding: theme.spacing(0.8),

        '&:hover': {
            background: 'transparent',
        },
        '&.active': {
            color: '#fb4226',
        },
        [theme.breakpoints.down(`${960}`)]: {
            '& $textFomart': {
                fontSize: theme.spacing(1.2),
            },
            '& $date': {
                fontSize: theme.spacing(1.4),
            },
        },
    },
    textFomart: {
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    date: {
        fontSize: theme.spacing(1.6),
        letterSpacing: '2px',
        fontFamily: 'system-ui',
        display: 'inline',
    },
    ShowTimeDetail: {
        padding: theme.spacing(0, 1.4),
        margin: theme.spacing(1.4, 0),
        overflow: 'auto',
        maxHeight: theme.spacing(45),
        '&::-webkit-scrollbar ': {
            width: '8px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },

    },
    ShowTimeDetail_item: {
        borderBottom: '1px solid #8080805e',
        marginBottom: theme.spacing(1.4),
    },
    groupImg: {
        marginRight: theme.spacing(1),
    },
    theatherIcon: {
        width: theme.spacing(5.6),
        height: 'auto',
        borderRadius: '5px',
    },
    theatherInfo: {
        width: '100%',
    },
    group_name: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.3),
            '& $group_name_address': {
                fontSize: theme.spacing(1.3),
            },
        },
    },
    group_name1: {
        justifyContent: 'space-between',

    },
    hightLine: {
        color: '#FB4226',
        marginRight: '5px',
    },
    dateChoose: {
        color: '#108f3e',
    },
    group_name_address: {
        lineHeight: '1.7',
        margin: theme.spacing(0, 0.5),
        fontSize: theme.spacing(1.7),
        color: ' #6b00b6',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        float: 'left',
        textOverflow: 'ellipsis',
    },
    groupTime: {
        '&::-webkit-scrollbar ': {
            width: '3px',
            height: '8px',
        },
        flexWrap: 'wrap',
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${414}`)]: {
            flexWrap: 'nowrap',
        },
    },
    itemTime: {
        background: 'rgba(246,246,246,.5)',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(11.6),
        color: '#9b9b9b',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        fontWeight: '400',
        padding: theme.spacing(0.5),
        borderRadius: '5px',
        border: '1px solid #e4e4e4',
        margin: theme.spacing(.5, 1.3),
        marginLeft: 0,
        '&:hover': {
            background: 'rgba(246,246,246,.5)',
            '& $timeStart': {
                color: ' #6b00b6',
            }
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),

            '& $timeStart': {
                fontSize: theme.spacing(1.4),
            },
        },
    },
    timeStart: {
        fontSize: theme.spacing(1.8),
        fontWeight: '500',
        color: '#108f3e',
    }
}));

export default memo(MovieDetailShowTime);