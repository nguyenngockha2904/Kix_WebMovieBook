import { Avatar, Box, Fab, makeStyles, useTheme, withWidth, Zoom, } from '@material-ui/core';
import React, { Fragment, memo, useCallback, useMemo, useState, } from 'react';
import NavBarBook from '../../Layouts/NavBar_BookMovieDetail';
import ChonVeComponent from '../../Components/ChonVeComponent';
import ChonGheComponent from '../../Components/ChonGheComponent';
//#region Group icon Cinema
import BHDIcon from '../../assets/img/logoCine/BHD_logo.png';
import CGVIcon from '../../assets/img/logoCine/cgv_logo.png';
import CineStarIcon from '../../assets/img/logoCine/s3img_logo.png';
import GalaxyIcon from '../../assets/img/logoCine/galaxy_logo.png';
import LotteCinimaIcon from '../../assets/img/logoCine/lotte_logo.png';
import MegaGSIcon from '../../assets/img/logoCine/megaLogo.png';
import NoImage from '../../assets/img/logoCine/noImage.svg';
//#endregion
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhongVeItem_byMaLichChieu } from '../../redux/action/movieAction';
import Loader from '../../Layouts/Loading';
import { SET_IS_ACTVED_GHE_ITEM, SET_TYPE_PAGE } from '../../redux/action/type';
import { createAction } from '../../redux/action';
import ChonGheResp from '../../Components/ChonGheResp';
import NavBar_BookMovieDetail_Res from '../../Layouts/NavBar_BookMovieDetail_Res';
import ThanhToanResComponent from '../../Components/ThanhToanResComponent';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx';
import LogoLight from '../../assets/img/LogoDark.svg';
import ComponentAlertThanhCong from '../../Components/ComponentThongBaoThanhCong';
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

const BookMovieDetail = (props) => {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const theme = useTheme();
    const history = useHistory();
    const [isloading, setIsLoading] = useState(true);
    const [activeStep, setActiveStep] = React.useState(4);
    const [logoCine, setLogoCine] = useState(returnIconTheader(''));
    const steps = useMemo(() => {
        return ['Chọn loại vé', 'Chọn ghế & Thanh Toán', 'Kết quả đặt vé']
    }, []);

    useEffect(() => {
        //  console.log(params.maLichChieu);
        dispatch(getPhongVeItem_byMaLichChieu(params.maLichChieu, (title) => {

            setTitle(title);
            let logo = title.trim().slice(0, title.trim().indexOf(' '));
            setLogoCine(returnIconTheader(logo));
            setIsLoading(false);
        }));
        dispatch(createAction(SET_TYPE_PAGE, 3));
    }, []);
    const handleNext = useCallback((value) => {

        setActiveStep(value);

    }, [activeStep]);
    const setTitle = useCallback((title) => {
        const prevTitle = document.title;
        document.title = title;
        return () => document.title = prevTitle;
    }, []);
    const width = useMemo(() => {
        return props.width;
    }, [props.width]);
    useEffect(() => {
        return () => {
            dispatch(createAction(SET_IS_ACTVED_GHE_ITEM, ''));
        }
    }, []);
    const dateTime = useMemo(() => {
        return Date.now() + 285000;
    }, []);
    const renderer = useCallback(({ hours, minutes, seconds, completed }) => {
        if (completed) {
            history.replace('/');
            return <span>hết giờ</span>;

        } else {
            return <span>{(minutes < 10 ? '0' + minutes : minutes) + ':'}{seconds < 10 ? '0' + seconds : seconds}</span>;
        }
    }, []);
    const getStepContent = useCallback((stepIndex, width) => {
        // 
        switch (stepIndex) {
            case 0: //tab chọn loại vé
                return (
                    <ChonVeComponent handleNext={handleNext} logoCine={logoCine} />
                );
            case 1:
                return (
                    <Box my={8}>
                        <ChonGheComponent handleNext={handleNext} logoCine={logoCine} />
                    </Box>
                );
            case 2:
                return (
                    <Box my={8}>
                        thanhcong
                    </Box>
                );
            default: {
                return (
                    <ComponentAlertThanhCong />
                );
            }
        }
    }, [logoCine]);
    const getStepContentRes = useCallback((stepIndex, width) => {
        // 
        switch (stepIndex) {
            case 0: //tab chọn loại vé
                return (
                    <ChonVeComponent handleNext={handleNext} logoCine={logoCine} />

                );
            case 1:
                return (
                    <ChonGheResp handleNext={handleNext} dateTime={dateTime} renderer={renderer} />

                );
            case 2:
                return (
                    <ThanhToanResComponent handleNext={handleNext} />
                );
            default:
                return (
                    <ComponentAlertThanhCong />
                );
        }

    }, [logoCine]);
    const transitionDuration = useMemo(() => {
        return {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        }
    });
    const handleCLickGotoHome = useCallback(() => {
        history.replace('/');
    }, []);
    return (
        <Fragment>

            {isloading ? <Loader /> : <Fragment>
                {(width === 'md' || width === 'lg' || width === 'xl') ? <Fragment>
                    <NavBarBook activeStep={activeStep} steps={steps} handleNext={handleNext} />
                    {getStepContent(activeStep, width)}
                    <div className={classes.divTool} style={{ right: activeStep === 0 && '0' }}>

                        <Zoom
                            in={true}
                            timeout={transitionDuration}
                            style={{
                                transitionDelay: `${transitionDuration.exit}ms`,
                            }}
                            unmountOnExit
                        >
                            <Fab aria-label='Home' color='primary' onClick={handleCLickGotoHome}>
                                <Avatar src={LogoLight} alt='LogoLight' />
                            </Fab>
                        </Zoom>
                    </div>
                </Fragment>
                    :
                    <Fragment>
                        {(activeStep == 0 || activeStep == 1 || activeStep == 2) && <NavBar_BookMovieDetail_Res activeStep={activeStep} steps={steps} handleNext={handleNext} dateTime={dateTime} renderer={renderer} />}
                        {getStepContentRes(activeStep, width)}
                    </Fragment>

                }
            </Fragment>}

        </Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    divTool: {
        position: 'fixed',
        bottom: 0,
        margin: '10px',
        zIndex: '10',
    }

}));
export default memo(withWidth()(BookMovieDetail));
