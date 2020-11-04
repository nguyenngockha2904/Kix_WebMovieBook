import { Avatar, Box, Button, makeStyles, withWidth, } from '@material-ui/core';
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
const Carousel = (props) => {
    const classes = useStyle();
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
                <div className={classes.homeTools}>
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
                            <Button className={classes.buttonPay} onClick={handleBuyTicket(suatChieu.maLichChieu)}>
                                Mua vé ngay
                        </Button>
                        </div>

                    </Box>

                </div>


            }
            {(isShowTabPhim || isShowTabRap || isShowTabNgayXem || isShowTabXuatChieu) && <div className={classes.divBgDropdown} onClick={handleClickBgClose}>

            </div>}

            {isShowModalVideoMovie.isShow && isShowModalVideoMovie.role === 1 && <ModalVideoMovie />}
        </div>
    );
};

const useStyle = makeStyles((theme) => ({
    slider: {
        position: 'relative',
    },
    divTop: {
        position: 'relative',
        minHeight: theme.spacing(30),
        height: '100%',
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Carousel: {
        // overflow: 'hidden',
        '& .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus': {

        },
        '& .slick-arrow': {
            zIndex: '95',

            '&::before': {
                // fontSize: '46px',
                display: 'none !important',
            },
            [theme.breakpoints.down(`${960}`)]: {
                display: 'none !important',
            }
        },
        '& .slick-next': {
            right: '2%',
            top: '50%',
            transform: 'translate(0,-50%)',
        },
        '& .slick-prev': {
            left: '1%',
            top: '50%',
            transform: 'translate(0,-50%)',
        },
        '& .slick-dots': {
            bottom: '14%',
            zIndex: '10',
            '& li ': {
                margin: theme.spacing(0, 0.5),
                '& button': {
                    '&::before': {
                        fontSize: theme.spacing(0),
                        color: '#fff',
                        opacity: 1,
                        transition: '.3s',
                        [theme.breakpoints.up(`${768}`)]: {
                            fontSize: theme.spacing(1),
                        },
                        [theme.breakpoints.up(`${978}`)]: {
                            fontSize: theme.spacing(1.4),
                        }
                    }
                }
            },
            '& li.slick-active': {
                '& button': {
                    '&::before': {
                        color: '#6b00b6',
                    }
                }
            },
            [theme.breakpoints.up(`${978}`)]: {
                bottom: '17%',
            },
            [theme.breakpoints.down(`${960}`)]: {
                display: 'none !important',
            }
        }

    },
    slickArrow: {
        height: '40px',
    },
    slide: {
        position: 'relative',
    },
    img: {
        width: '100%',
    },
    divHover: {
        position: 'relative',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        '& img': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: ' translate(-50%, -50%)',
            borderRadius: '50%',
            border: '2px solid #fff',
            transition: '.3s',
            opacity: 0,
            cursor: 'pointer',
            height: theme.spacing(4),
            width: theme.spacing(4),
            '&:hover': {
                opacity: 0.5,
            },
            [theme.breakpoints.up(`${768}`)]: {
                height: theme.spacing(4.6),
                width: theme.spacing(4.6),
            },
            [theme.breakpoints.up(`${978}`)]: {
                height: theme.spacing(6.5),
                width: theme.spacing(6.5),
            }
        },
        '&:hover img': {
            opacity: 1,
        }
    },
    homeTools: {
        maxWidth: theme.spacing(94),
        margin: 'auto',
        top: '100%',
        height: theme.spacing(8),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: '50%',
        transform: ' translate(-50%, 0%)',
        background: '#fff',
        borderRadius: '5px',
        boxShadow: '0px 6px 8px -1px #80808094',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: '3',
        [theme.breakpoints.down(`${970}`)]: {
            display: 'none',
        }
    },
    navItem: {
        padding: theme.spacing(0.5, 1),
        borderRight: '1px solid #80808075',
        width: theme.spacing(14.7),
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    buttonGroup: {
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(0, .8),
        height: '100%',
        alignItems: 'center',
    },
    title: {
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.4),
        width: '80%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    dropdownIcon: {
        width: theme.spacing(1.2),

    },
    PayNav: {
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    },
    buttonPay: {
        textTransform: 'uppercase',
        cursor: 'pointer',
        textAlign: 'center',
        padding: theme.spacing(1, 1.8),
        backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.3),
        color: '#fff',
        letterSpacing: '0.3px',
        transition: 'all 0.4s',
        '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        }
    },
    divBgDropdown: {
        position: 'fixed',
        bottom: '0',
        top: '0',
        right: '0',
        left: '0',
        background: 'transparent',
        zIndex: '2',
    },
    divContent: {
        position: 'absolute',
        top: '0',
        left: '0',
        background: '#fff',
        width: '200%',
        maxWidth: theme.spacing(34.0),
        transform: ' translate(0, 63px)',
        height: 'auto',
        maxHeight: theme.spacing(15),
        borderRadius: theme.spacing(0.5),
        zIndex: '102',
        boxShadow: '1px 2px 8px 1px #80808094',
        padding: theme.spacing(1.8, 0),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '5px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'rgba(136, 136, 136, 0.527)',
            borderRadius: '4px',
        },

    },
    divTabPhim: {
        width: '100%',
        transform: ' translate(0, 83px)',
        maxWidth: theme.spacing(62.6),
        maxHeight: theme.spacing(33.3),
    },
    divContentDate: {
        maxWidth: theme.spacing(16.6),
        maxHeight: theme.spacing(42),
    },
    divContentLast: {
        width: theme.spacing(31.6),
    },
    itemContent: {
        fontSize: theme.spacing(1.4),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: theme.spacing(1, 2.6),
        letterSpacing: theme.spacing(0.05),
        color: '#4a4a4a',
        background: 'transparent',
        transition: 'all .3s',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
            background: '#60c5ef',
            '& $date': {
                color: '#fff',
            },
            '& $day': {
                color: '#fff',
            },
        }
    },
    day: {
        margin: '0',
        color: '#000',
        marginBottom: theme.spacing(0.8),
    },
    date: {
        margin: '0',
        fontSize: theme.spacing(1.2),
        color: '#9e9e9e',
        letterSpacing: theme.spacing(0.07),
    }
})
);

export default memo(withWidth()(Carousel));