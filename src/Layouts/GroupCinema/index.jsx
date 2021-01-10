import { Box, Button, makeStyles, Paper, withWidth } from '@material-ui/core';
import React, { Fragment, useCallback, useMemo, useRef, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, memo } from 'react';
import { getALLInfoFollowTheaterSystem } from '../../redux/action/TheaterSystemAction';
import { createAction } from '../../redux/action';
import { SET_DATA_LIST_MOVIE_WITH_THEATER, SET_DATA_MOVIE_WITH_DATE, SET_REQUEST_PAGE_LOGIN } from '../../redux/action/type';
import swal from 'sweetalert';
import { useStyles } from './styles';
//#region Group icon Cinema
import BHDIcon from '../../assets/img/logoTheater/bhd.jpg';
import CGVIcon from '../../assets/img/logoTheater/cgv.jpg';
import CineStarIcon from '../../assets/img/logoTheater/cns.jpg';
import GalaxyIcon from '../../assets/img/logoTheater/glx.jpg';
import LotteCinimaIcon from '../../assets/img/logoTheater/lotte.jpg';
import MegaGSIcon from '../../assets/img/logoTheater/megags.jpg';
import NoImage from '../../assets/img/logoTheater/noImage.jpg';
import { useHistory } from 'react-router-dom';
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


const GroupCine = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const refPhim = useRef(null);
    const refDay = useRef(null);
    const refRap = useRef(null);
    const listTheaterSystem = useSelector((state) => {
        return state.qlTheaterSystem.listTheaterSystem
    });
    // const username = useMemo(() => {
    //     return localStorage.getItem('username');
    // }, [localStorage.getItem('username')]);
    const listRapT = useSelector((state) => {
        return state.qlTheaterSystem.theaterSystemInfo.lstCumRap
    });
    const lstLichChieu = useSelector((state) => {
        return state.qlTheaterSystem.lstLichChieu
    });
    const lstMovieWithDate = useSelector((state) => {
        return state.qlTheaterSystem.lstMovieWithDate
    });
    const listHeThongRap = useMemo(() => {
        let lst = [];
        for (let item of listTheaterSystem) {
            lst.push({ ...item, isActived: false });
        }
        return lst;
    }, [listTheaterSystem]);
    useEffect(() => {
        dispatch(getALLInfoFollowTheaterSystem('BHDStar', () => { }));
        listHeThongRap[0].isActived = true;
    }, []);
    useEffect(() => {
        // console.log(props.width);
    }, [props.width]);

    const listRap = useMemo(() => {
        let lst = [];
        if (listRapT) {
            for (let index in listRapT) {
                lst.push({ ...listRapT[index], isActived: index === 0 ? true : false });
            }
        }
        return lst;
    }, [listRapT]);
    useEffect(() => {
        if (listRap.length !== 0) {
            listRap[0].isActived = true;
        }
    }, [listRap]);

    const listDay = useMemo(() => {
        let listD = [];
        let dayCheck = '';
        let listTest = [];
        // convert
        lstLichChieu.map((item) => {
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

    }, [lstLichChieu]);

    useEffect(() => {
        if (lstLichChieu.length !== 0) {
            let date = new Date(lstLichChieu[0].ngayChieuGioChieu);
            let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
            dispatch(createAction(SET_DATA_MOVIE_WITH_DATE, dayString));
            listDay[0].isActived = true;
        }
    }, [lstLichChieu]);


    const handleClickTabTheaterSystem = useCallback((idTheaterSystem) => () => {
        refDay.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refPhim.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refRap.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

        dispatch(getALLInfoFollowTheaterSystem(idTheaterSystem, () => {
        }));
        for (let item of listHeThongRap) {
            item.isActived = false;
        }
        let index = listHeThongRap.findIndex(i => i.maHeThongRap === idTheaterSystem);
        if (index !== -1) {
            listHeThongRap[index].isActived = true;
        }
    }, [listHeThongRap]);
    const renderHethongRap = useCallback(() => {

        return listHeThongRap.map((item, index) => {
            return (
                <div key={index} className={classes.tabItemRapRespone} style={{ opacity: item.isActived ? '1' : '0.5' }}>
                    <div className={classes.tabItemRap}>
                        <Button variant="contained" color="inherit" className={classes.buttonImg}
                            style={{ boxShadow: item.isActived && '0px 0px 7px 1px #9E9E9E' }}
                            onClick={handleClickTabTheaterSystem(item.maHeThongRap)}
                        ><img src={item.logo} alt={item.biDanh} className={classes.logoCine} /></Button>
                    </div>
                    {(index !== (listHeThongRap.length - 1)) && <div className={classes.line}></div>}
                </div>
            )
        })
    }, [listHeThongRap]);


    const handleClickTabRap = useCallback((value) => () => {
        refPhim.current.scrollIntoView({ block: "nearest", inline: "nearest" });
        refDay.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

        let index = listRap.findIndex(m => m.maCumRap === value.maCumRap);

        for (let item of listRap) {
            item.isActived = false;
        }
        if (index !== -1) {
            listRap[index].isActived = true;
        }
        dispatch(createAction(SET_DATA_LIST_MOVIE_WITH_THEATER, value.danhSachPhim));
    }, [listRap]);
    const renderListRap = useCallback(() => {
        if (listRap) {
            return listRap.map((item, index) => {
                return (
                    <div key={index} onClick={handleClickTabRap(item)} className={classes.tabRapPhimButton}
                        style={{ opacity: item.isActived ? '1' : '0.5' }}
                    >
                        <div className={`${classes.tabRapPhimItem} `}>
                            <div className={classes.divRapImg}>
                                <img src={returnIconTheader(item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' ')))} alt={returnIconTheader(item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' ')))} className={classes.movieTheaterImg} />
                            </div>
                            <div className={classes.RapphimContent}>
                                <div className={classes.nameRapPhim}>
                                    {/* note */}
                                    <div className={classes.hightlineTenRap}>{item.tenCumRap.trim().slice(0, item.tenCumRap.trim().indexOf(' '))}</div>
                                    {item.tenCumRap.trim().slice(item.tenCumRap.trim().indexOf(' '))}
                                </div>
                                <div className={classes.address}>{item.diaChi.substr(0, 24)}{item.diaChi.length > 24 && '...'}</div>
                                <Box textAlign="left">
                                    <Button disabled={!item.isActived} className={classes.btnDetail}>[Chi tiết]</Button>
                                </Box>
                            </div>
                        </div>
                        {(index !== (listRap.length - 1)) && <div className={classes.line}></div>}
                    </div>
                )
            });
        }

    }, [listRap]);


    const handleChooseDay = useCallback((value) => () => {
        refPhim.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        let index = listDay.findIndex(d => d.dateFormat === value.dateFormat);
        for (let i in listDay) {
            listDay[i].isActived = false;
        }
        if (index !== -1) {
            listDay[index].isActived = true;
        }
        dispatch(createAction(SET_DATA_MOVIE_WITH_DATE, value.dateFormat));
        // console.log(value);
    }, [listDay]);

    const renderListDate = useCallback(() => {

        return listDay.map((item, index) => {
            return (
                <Button key={index} variant="contained" color="inherit" className={`${classes.dateItem}`}
                    style={{
                        color: item.isActived ? '#6b00b6' : '#000',
                        backgroundColor: 'transparent',

                    }}
                    onClick={handleChooseDay(item)}

                >
                    <div className={classes.textFomart}>{item.day}</div>
                    <div className={`${classes.textFomart} ${classes.date}`}
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


    const handleClickTimeMovie = useCallback((maLichChieu) => () => {
        let username = localStorage.getItem('username');
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
    const renderListPhim = useCallback(() => {
        if (lstMovieWithDate) {
            return lstMovieWithDate.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={classes.phimItem}>
                            <div className={classes.phimInfo}>
                                <Paper elevation={3} className={classes.divRapImg}>
                                    <img src={item.hinhAnh} alt="CGVMovieTheater" className={classes.movieTheaterImg} />
                                </Paper>
                                <div>
                                    <div className={classes.namePhim}>
                                        <div className={classes.general}>C18</div>
                                        {(item.tenPhim).substr(0, 40)}{item.tenPhim.length > 100 && '...'}
                                    </div>
                                    <div className={classes.totalTime}>91 phút - TIX 7.9 - IMDb 0</div>
                                </div>
                            </div>
                            <div className={classes.Grouptime}>
                                <div className={classes.typeAudio}>
                                    2D lồng tiếng
                                </div>
                                <div className={classes.timeMovie}>
                                    {
                                        item.lstLichChieu.map((lc, index) => {
                                            let d = new Date(lc.ngayChieuGioChieu);
                                            return (
                                                <Button className={classes.timeMovie_Item} key={index}
                                                    onClick={handleClickTimeMovie(lc.maLichChieu)}
                                                >
                                                    <div className={classes.timeStart}>
                                                        {d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}:{d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}
                                                    </div>
                                                    <div>
                                                        ~ {(d.getHours() + 1) > 24 ? ((d.getHours() + 1) - 24) : d.getHours() + 1}:31
                                                </div>
                                                </Button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {(index !== (listRap.length - 1)) && <div className={classes.line} style={{ width: '90%' }}></div>}
                    </div>
                )
            });
        }
    }, [lstMovieWithDate]);
    return (
        <Fragment>
            <Paper elevation={3} className={classes.root}>
                <Paper elevation={1} className={classes.tabRap}>
                    {renderHethongRap()}
                </Paper>
                <div className={classes.contentRap}>
                    <div className={classes.titleTab}>Rạp</div>
                    <div className={classes.tabRapPhim}>
                        <div ref={refRap}></div>
                        {renderListRap()}
                    </div>
                    <div className={classes.titleTab}>Phim</div>
                    <div className={classes.tabContent}>
                        <div className={classes.divDate}>
                            <div ref={refDay}></div>

                            {renderListDate()}
                        </div>
                        <div className={classes.ShowTimeDetail}>
                            <div ref={refPhim}></div>
                            {renderListPhim()}

                        </div>
                    </div>
                </div>
            </Paper>
        </Fragment>
    );
};





export default memo(withWidth()(GroupCine));