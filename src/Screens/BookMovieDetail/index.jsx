import { Box, makeStyles, withWidth, } from '@material-ui/core';
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
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPhongVeItem_byMaLichChieu } from '../../redux/action/movieAction';
import Loader from '../../Layouts/Loading';
import { SET_IS_ACTVED_GHE_ITEM, SET_TYPE_PAGE } from '../../redux/action/type';
import { createAction } from '../../redux/action';
import ChonGheResp from '../../Components/ChonGheResp';
import NavBar_BookMovieDetail_Res from '../../Layouts/NavBar_BookMovieDetail_Res';

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
    const [isloading, setIsLoading] = useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    const [logoCine, setLogoCine] = useState(returnIconTheader(''));
    const steps = useMemo(() => {
        return ['Chọn loại vé', 'Chọn ghế & Thanh Toán', 'Kết quả đặt vé']
    }, []);
    useEffect(() => {
        //  console.log(params.maLichChieu);
        dispatch(getPhongVeItem_byMaLichChieu(params.maLichChieu, (title) => {
            setIsLoading(false);
            setTitle(title);
            let logo = title.trim().slice(0, title.trim().indexOf(' '));
            setLogoCine(returnIconTheader(logo));
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
    const getStepContent = useCallback((stepIndex, width) => {
        // 
        if (width === 'md' || width === 'lg' || width === 'xl') {
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
                            Kết quả đặt vé
                        </Box>
                    );

                default:
                    return (
                        <Box my={8}>
                            Thành công !!
                        </Box>
                    );
            }
        } else {
            switch (stepIndex) {
                case 0: //tab chọn loại vé
                    return (
                        <ChonGheResp />
                    );
                case 1:
                    return (
                        <Box my={8}>

                        </Box>
                    );

                case 2:
                    return (
                        <Box my={8}>
                            Kết quả đặt vé
                        </Box>
                    );

                default:
                    return (
                        <Box my={8}>
                            Thành công !!
                        </Box>
                    );
            }
        }

    }, [logoCine]);
    return (
        <Fragment>
            {(width === 'md' || width === 'lg' || width === 'xl') ? <NavBarBook activeStep={activeStep} steps={steps} handleNext={handleNext} /> : <NavBar_BookMovieDetail_Res activeStep={activeStep} steps={steps} handleNext={handleNext} />}
            {isloading ? <Loader /> : <Fragment>
                {getStepContent(activeStep, width)}
            </Fragment>}

        </Fragment>
    );
}
const useStyles = makeStyles((theme) => ({


}));
export default memo(withWidth()(BookMovieDetail));
