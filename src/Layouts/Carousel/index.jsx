import { Avatar, Box, Button, makeStyles, Paper, withWidth, } from '@material-ui/core';
import React, { useCallback, useMemo, useState, memo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgPrevD from '../../assets/img/btnPrevDark.svg';
import ImgNextD from '../../assets/img/btnNextDark.svg';
import dropdownIcon from '../../assets/img/iconDown.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfoWithMovieId } from '../../redux/action/movieAction';
import { useHistory } from 'react-router-dom';
import MovieDetailContent from '../../Components/MovieDetailContent';
import ModalVideoMovie from '../../Components/ModalShowVideo';
import swal from 'sweetalert';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE_LOGIN } from '../../redux/action/type';
import { useStyles } from './styles';
const Carousel = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [isShowTabPhim, setIsShowTabPhim] = useState(false);
    const [isShowTabRap, setIsShowTabRap] = useState(false);
    const [isShowTabNgayXem, setIsShowTabNgayXem] = useState(false);
    const [isShowTabXuatChieu, setIsShowXuatChieu] = useState(false);
    const [movie, setNameMovie] = useState("Phim");
    const [theater, setTheater] = useState({ tenCumRap: 'Rạp', lichChieuPhim: [] });
    const [dateTime, setDateTime] = useState('Ngày Xem');
    const [suatChieu, setSuatChieu] = useState({ ngayChieuGioChieu: '', maLichChieu: '' });

    const propMovie = useSelector((state) => {
        return state.qlMovie
    });
    const listMovies = useSelector((state) => {
        return state.qlMovie.listMoviePhanTrang
    });
    const isShowModalVideoMovie = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie
    });
    let history = useHistory();
    const handleShowTabPhim = useCallback((value) => () => {
        setIsShowTabPhim(value);
        if (isShowTabRap) {
            setIsShowTabRap(false);
        }
        if (isShowTabNgayXem) {
            setIsShowTabNgayXem(false);
        }
        if (isShowTabXuatChieu) {
            setIsShowXuatChieu(false);
        }
    }, [isShowTabRap, isShowTabNgayXem, isShowTabXuatChieu]);
    const handleShowTabRap = useCallback((value) => () => {
        setIsShowTabRap(value);
        if (isShowTabPhim) {
            setIsShowTabPhim(false);
        }
        if (isShowTabNgayXem) {
            setIsShowTabNgayXem(false);
        }
        if (isShowTabXuatChieu) {
            setIsShowXuatChieu(false);
        }

    }, [isShowTabPhim, isShowTabNgayXem, isShowTabXuatChieu]);
    const handleShowTabNgayXem = useCallback((value) => () => {
        if (isShowTabPhim) {
            setIsShowTabPhim(false);
        }
        if (isShowTabRap) {
            setIsShowTabRap(false);
        }
        if (isShowTabXuatChieu) {
            setIsShowXuatChieu(false);
        }
        setIsShowTabNgayXem(value);
    }, [isShowTabPhim, isShowTabRap, isShowTabXuatChieu]);
    const handleShowTabXuatChieu = useCallback((value) => () => {
        if (isShowTabPhim) {
            setIsShowTabPhim(false);
        }
        if (isShowTabRap) {
            setIsShowTabRap(false);
        }
        if (isShowTabNgayXem) {
            setIsShowTabNgayXem(false);
        }
        setIsShowXuatChieu(value);
    }, [isShowTabPhim, isShowTabRap, isShowTabNgayXem]);
    const handleClickBgClose = useCallback(() => {
        if (isShowTabPhim) {
            setIsShowTabPhim(false);
        }
        if (isShowTabRap) {
            setIsShowTabRap(false);
        }
        if (isShowTabNgayXem) {
            setIsShowTabNgayXem(false);
        }
        if (isShowTabXuatChieu) {
            setIsShowXuatChieu(false);
        }
    }, [isShowTabPhim, isShowTabRap, isShowTabNgayXem, isShowTabXuatChieu]);
    const SlickArrowLeft = useCallback(({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <img src={ImgPrevD} alt='ImgPrevD' className={classes.slickArrow} />
        </button>
    ), []);
    const SlickArrowRight = useCallback(({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <img src={ImgNextD} alt='ImgNextD' className={classes.slickArrow} />
        </button>
    ), []);
    const settings = useMemo(() => ({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        fade: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    }), []);
    const renderCarousel = useCallback(() => {

        if (listMovies[0].length !== 0) {
            return listMovies[0].slice(1, 8).map((item, index) => {
                return (
                    <div className={classes.divTop} key={index}>
                        <MovieDetailContent role={1} item={item} />
                    </div>
                )
            })
        }
    }, []);

    const handleClickChooseMovie = useCallback((value) => () => {
        // console.log(value);
        dispatch(getMovieInfoWithMovieId(value.maPhim, () => {
            setNameMovie(value.tenPhim);
            setIsShowTabPhim(false);
            setTheater({ tenCumRap: 'Rạp', lichChieuPhim: [] });
            setDateTime('Ngày Xem');
            setSuatChieu({ ngayChieuGioChieu: '', maLichChieu: '' });
        }));
    }, []);
    const renderListMovie = useCallback(() => {
        let listMovie = propMovie.listMovie;
        if (listMovie) {
            return listMovie.map((item, index) => {
                let m = { maPhim: item.maPhim, tenPhim: item.tenPhim };
                return (
                    <div className={classes.itemContent} key={index} onClick={handleClickChooseMovie(m)}>
                        {item.tenPhim}
                    </div>
                )
            });
        }
    }, [propMovie.listMovie]);


    const handleClickChooseTheater = useCallback((value) => () => {
        // console.log(value);
        setTheater(value);
        setIsShowTabRap(false);
        setDateTime('Ngày Xem');
        setSuatChieu({ ngayChieuGioChieu: '', maLichChieu: '' });

    }, []);
    const renderListTheater = useCallback(() => {
        let listTheater = [];
        console.log(propMovie.movieInfoSystem.heThongRapChieu);
        if (propMovie.movieInfoSystem.heThongRapChieu) {
            for (let htr of propMovie.movieInfoSystem.heThongRapChieu) {
                for (let r of htr.cumRapChieu) {
                    listTheater.push(r);
                }
            }
        }
        if (listTheater) {
            return listTheater.map((item, index) => {
                return (
                    <div className={classes.itemContent} key={index} onClick={handleClickChooseTheater(item)}>
                        {item.tenCumRap}
                    </div>
                )
            });
        }
    }, [propMovie.movieInfoSystem.heThongRapChieu]);

    const handleClickChooseDateTime = useCallback((value) => () => {
        // console.log(value);
        setDateTime(converDayFormat(value.ngayChieuGioChieu));
        setIsShowTabNgayXem(false);
        setSuatChieu({ ngayChieuGioChieu: '', maLichChieu: '' });
    }, []);
    const converDayFormat = useCallback((value) => {
        let item = new Date(value);
        let d = `${item.getDate() < 10 ? `0${item.getDate()}` : item.getDate()}/${((item.getMonth() + 1) < 10 ? '0' + (item.getMonth() + 1) : (item.getMonth() + 1))}/${item.getFullYear()}`;
        return d;
    }, []);
    const covertDateFormat = useCallback(value => {
        let item = new Date(value);
        if (item.getDay() === 0) {
            return 'Chủ Nhật';
        }
        if (item.getDay() === 1) {
            return 'Thứ 2';
        }
        if (item.getDay() === 2) {
            return 'Thứ 3';
        }
        if (item.getDay() === 3) {
            return 'Thứ 4';
        }
        if (item.getDay() === 4) {
            return 'Thứ 5';
        }
        if (item.getDay() === 5) {
            return 'Thứ 6';
        }
        if (item.getDay() === 6) {
            return 'Thứ Bảy';
        }
    }, []);
    const renderListDate = useCallback(() => {
        let listTam = [];
        let dateString = '';
        for (let item of theater.lichChieuPhim) {
            let day = converDayFormat(item.ngayChieuGioChieu);
            if (day !== dateString) {
                listTam.push(item);
            }
            dateString = day;
        };
        // console.log(listTam);

        return listTam.map((item, index) => {
            return (
                <div className={classes.itemContent} key={index} onClick={handleClickChooseDateTime(item)}>
                    <p className={classes.day}>{covertDateFormat(item.ngayChieuGioChieu)}</p>
                    <p className={classes.date}>{converDayFormat(item.ngayChieuGioChieu)}</p>
                </div>
            )
        });

    }, [theater.lichChieuPhim]);
    const covertTimeFormat = useCallback((value) => {
        let d = new Date(value);
        return `${d.getHours()}:${d.getMinutes()}`;
    }, []);

    const handleClickChooseSuaChieu = useCallback((value) => () => {
        setSuatChieu(value);
        console.log(value);
        setIsShowXuatChieu(false);
    }, []);
    const renderListLichChieu = useCallback(() => {
        // console.log(theater.lichChieuPhim);
        if (theater.lichChieuPhim) {
            let day = dateTime;
            let list = theater.lichChieuPhim.filter(lc => converDayFormat(lc.ngayChieuGioChieu) === day);
            return list.map((item, index) => {
                let d = new Date(item.ngayChieuGioChieu);
                return (
                    <div className={classes.itemContent} key={index} onClick={handleClickChooseSuaChieu(item)}>
                        {d.getHours()}:{d.getMinutes()} - {converDayFormat(item.ngayChieuGioChieu)}
                    </div>
                )
            });
        }
    }, [theater.lichChieuPhim, dateTime]);

    const handleBuyTicket = useCallback((maLichChieu) => () => {
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
    const width = useMemo(() => {
        return props.width;
    }, [props.width]);
    return (
        <div
            className={classes.slider}
        >   <Slider {...settings} className={classes.Carousel}>
                {renderCarousel()}
            </Slider>
            {(width === 'md' || width === 'lg' || width === 'xl') &&
                <Paper elevation={3} className={classes.homeTools}>
                    <Box display="flex" width="30%" justifyContent="between" height="40px" >
                        <div className={classes.navItem} style={{ position: 'inherit', width: '266px' }}>
                            <div className={classes.buttonGroup} onClick={handleShowTabPhim(!isShowTabPhim)}>
                                <span className={classes.title}>
                                    {movie}
                                </span>
                                <img src={dropdownIcon} alt="dropdownIcon" className={classes.dropdownIcon} />
                            </div>
                            {isShowTabPhim &&
                                <div className={`${classes.divContent} ${classes.divTabPhim}`}>
                                    {renderListMovie()}
                                </div>
                            }
                        </div>
                    </Box>
                    <Box display="flex" width="70%" justifyContent="between" height="40px">
                        <div className={classes.navItem} style={{ paddingLeft: '15px' }}>
                            <div className={classes.buttonGroup} onClick={handleShowTabRap(!isShowTabRap)}>
                                <span className={classes.title}>
                                    {theater.tenCumRap}
                                </span>
                                <img src={dropdownIcon} alt="dropdownIcon" className={classes.dropdownIcon} />
                            </div>
                            {isShowTabRap &&
                                <div className={classes.divContent}>
                                    {(propMovie.movieInfoSystem.heThongRapChieu.length !== 0) ? renderListTheater() : <div className={classes.itemContent}>
                                        Vui lòng chọn phim
                                    </div>

                                    }
                                </div>
                            }
                        </div>
                        <div className={classes.navItem}>
                            <div className={classes.buttonGroup} onClick={handleShowTabNgayXem(!isShowTabNgayXem)}>
                                <span className={classes.title}>
                                    {dateTime}
                                </span>
                                <img src={dropdownIcon} alt="dropdownIcon" className={classes.dropdownIcon} />
                            </div>
                            {isShowTabNgayXem &&
                                <div className={`${classes.divContent} ${classes.divContentDate}`}>
                                    {movie !== 'Phim' ? (
                                        theater.tenCumRap !== 'Rạp' ? renderListDate() :
                                            <div className={classes.itemContent} >
                                                Chọn Rạp
                                        </div>

                                    ) :
                                        <div className={classes.itemContent} >
                                            Chọn Phim và Rạp
                                   </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className={classes.navItem}>
                            <div className={classes.buttonGroup} onClick={handleShowTabXuatChieu(!isShowTabXuatChieu)}>
                                <span className={classes.title}>
                                    {!suatChieu.ngayChieuGioChieu ? 'Suất chiếu' : covertTimeFormat(suatChieu.ngayChieuGioChieu)}
                                </span>
                                <img src={dropdownIcon} alt="dropdownIcon" className={classes.dropdownIcon} />
                            </div>
                            {isShowTabXuatChieu &&
                                <div className={`${classes.divContent} ${classes.divContentLast}`}>
                                    {renderListLichChieu()}

                                </div>
                            }
                        </div>
                        <div className={`${classes.navItem} ${classes.PayNav}`}>
                            <Paper elevation={3}>
                                <Button className={classes.buttonPay} onClick={handleBuyTicket(suatChieu.maLichChieu)}>
                                    Mua vé ngay
                                </Button>
                            </Paper>
                        </div>

                    </Box>

                </Paper>


            }
            {(isShowTabPhim || isShowTabRap || isShowTabNgayXem || isShowTabXuatChieu) && <div className={classes.divBgDropdown} onClick={handleClickBgClose}>

            </div>}

            {isShowModalVideoMovie.isShow && isShowModalVideoMovie.role === 1 && <ModalVideoMovie />}
        </div>
    );
};



export default memo(withWidth()(Carousel));