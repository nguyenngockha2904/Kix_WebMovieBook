import { Avatar, Button, Grid, makeStyles } from '@material-ui/core';
import React, { Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_IS_ACTVED_GHE_ITEM } from '../../redux/action/type';

//#region Ghe SVG
const ChangeGheSVG = (color, number, disable, type = 0) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="307.5" height="283" viewBox="0 0 307.5 283">

            <defs>
                <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#f0a22b" />
                    <stop offset="1" stop-color="#f7a928" />
                </linearGradient>
            </defs>
            <g id="gheIcon1" transform="translate(-170 -1017)">
                <path id="gheIcon" d="M382.9,194.5V156.2a42.593,42.593,0,0,0-42.5-42.5H172.9a42.593,42.593,0,0,0-42.5,42.5v38.3a42.643,42.643,0,0,0-27.5,39.7V396.7h25V374.2H385.4v22.5h25V234.2A42.4,42.4,0,0,0,382.9,194.5Zm-210-55.8H340.4a17.584,17.584,0,0,1,17.5,17.5v35.6a42.51,42.51,0,0,0-40,42.4v45H195.4v-45a42.51,42.51,0,0,0-40-42.4V156.2A17.584,17.584,0,0,1,172.9,138.7Z" transform="translate(67.1 1022.3)" fill={`${color}`} />
                <text id="_50" data-name="50" transform={`${number < 99 ? 'translate(266 1125)' : 'translate(237 1125)'}`} fill={`${color}`} fontSize="100" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">{number}</tspan></text>
                {disable && <Fragment>
                    <line id="Line_19" data-name="Line 19" x2="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#fff" stroke-width="20" />
                    <line id="Line_20" data-name="Line 20" x1="253" y2="180" transform="translate(197.5 1192.5)" fill="none" stroke="#fff" stroke-width="20" />
                </Fragment>}
                {type === 1 && <Fragment>
                    <g id="layer1" transform="translate(412.001 297.522)">
                        <path id="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-2" data-name="layer1" transform="translate(188.001 297.522)">
                        <path id="path4512-3-2" data-name="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-3" data-name="layer1" transform="translate(299.001 297.522)">
                        <path id="path4512-3-3" data-name="path4512-3" d="M-29.2,84.243c-1.711,1.152-12.686-6.151-14.788-6.167s-13.2,7.119-14.892,5.941,2.284-13.278,1.651-15.168-11.26-9.639-10.595-11.519,14.1-2.055,15.809-3.207,6.242-13.076,8.344-13.06,6.429,12.008,8.12,13.186S-20.43,55.806-19.8,57.7s-10.125,9.476-10.79,11.356,3.1,14.039,1.391,15.191Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                    <g id="layer1-4" data-name="layer1" transform="translate(260.001 130.522)">
                        <path id="path4512-3-4" data-name="path4512-3" d="M34.274,155.144C29.755,158.188.757,138.892-4.8,138.85s-34.878,18.809-39.345,15.7,6.034-35.079,4.361-40.073S-69.53,89.009-67.771,84.042s37.247-5.429,41.766-8.473S-9.514,41.021-3.96,41.064,13.025,72.788,17.492,75.9s39.942,4.114,41.615,9.107-26.749,25.035-28.508,30,8.194,37.09,3.674,40.134Z" transform="translate(68.849 996.022)" fill="url(#linear-gradient)" />
                    </g>
                </Fragment>}
            </g>
        </svg>
    )


}
//#endregion




const ChonGheResp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });

    const renderDayGhe = useCallback(() => {
        let list = phongVeInfo.danhSachGhe;
        let solan = list.length % 12 !== 0 ? (list.length / 12 + 1) : list.length / 12;
        let listrender = [];
        for (let i = 0; i < solan + 1; i++) {
            listrender.push(i);
        }
        return listrender.map((item, index) => {
            return (
                <Grid item xs={12} key={index} className={classes.dayGheItem}>
                    <span>{String.fromCharCode(65 + index)}</span>
                </Grid>
            )
        })
    }, []);
    const handleChooseGhe = useCallback((item) => () => {
        dispatch(createAction(SET_IS_ACTVED_GHE_ITEM, item));
    }, []);
    const renderListGhe = useCallback(() => {
        return phongVeInfo.danhSachGhe.map((item, index) => {
            return (
                <Grid item xs={1} key={index}>
                    <Button className={classes.getItem} disableElevation={item.daDat} disabled={item.daDat} onClick={handleChooseGhe(item)}>
                        <Avatar variant="square" className={classes.GheIcon}>{
                            !item.isActived ?
                                ChangeGheSVG((!item.daDat ? '#92a0a9' : '#CFD3D7'), (item.stt), item.daDat, item.loaiGhe !== "Thuong" && 1)
                                :
                                ChangeGheSVG('#6b00b6', (item.stt), false, item.loaiGhe !== "Thuong" && 1)
                        }</Avatar>
                    </Button>
                </Grid>

            )
        });
    }, [phongVeInfo.danhSachGhe]);


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.GroupManHinh}>
                    <div className={classes.manHinh}>
                    </div>
                    <div className={classes.anhSangManHinh}>
                        Màn hình
                    </div>
                </div>
                <div className={classes.GroupGhe}>
                    <Grid container className={classes.listDayGhe}>
                        {renderDayGhe()}
                    </Grid>
                    <Grid container className={classes.listGhe}>
                        {renderListGhe()}
                    </Grid>
                </div>
            </div>
            <div className={classes.GroupDiscriptionGhe}>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#B7B7B7', '', true)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        có người chọn
                    </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#B7B7B7', '', false, 1)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        vip
                                </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#6b00b6', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        đang chọn
                                </div>
                </div>
                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('#B7B7B7', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        thường
                                </div>
                </div>

                <div className={classes.DcirpItem}>
                    <Avatar variant="square" className={classes.GheIcon} >
                        {ChangeGheSVG('rgb(183,183,183,39%)', '', false)}
                    </Avatar>
                    <div className={classes.textDefault}>
                        không thể chọn
                                </div>

                </div>

            </div>
            <div className={classes.divInfo}>
                hi im kha
            </div>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: '#020202',
    },
    wrapper: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        height: 'auto',
        marginTop: '55px',
        background: '#020202',
        overflow: 'auto',
    },
    GroupManHinh: {
        minWidth: '750px',
        width: '100%',
    },
    manHinh: {
        height: theme.spacing(1.1),
        background: '#03a9f4',
    },
    anhSangManHinh: {
        height: theme.spacing(3.5),
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#2196f3c7, transparent)',
        color: '#03a9f4',
        fontSize: theme.spacing(1.3),
        letterSpacing: '1.3px',
    },
    GroupGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '0',
        minWidth: '750px',
        width: '100%',
        minHeight: '285px',
        height: '50px',
        '& .MuiGrid-spacing-xs-1 > .MuiGrid-item ': {
            display: 'flex',
            alignItems: 'center',
        }

    },
    listDayGhe: {
        width: '5%',
        height: '714px',
    },
    listGhe: {
        width: '90%',
        margin: 'auto',
    },
    dayGheItem: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
        color: '#3E515D',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
    getItem: {
        minWidth: theme.spacing(0.5),
        width: 'auto',
        height: 'auto',
        padding: theme.spacing(0.3, 0.6),
    },
    GheIcon: {
        background: 'transparent',
        width: theme.spacing(2),
        height: theme.spacing(4.5),
    },
    GroupDiscriptionGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        padding: '0 5px',
        textAlign: 'center',
        borderTop: '1px solid #ffffff5e',
        marginBottom: '5px',
        borderRadius: '10px',
    },
    DcirpItem: {
        '& $GheIcon': {
            margin: 'auto',
            width: '16px',
            height: '37px',
        },
        '& $textDefault': {
            fontSize: theme.spacing(0.9),
        }
    },
    textDefault: {
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#fff',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    divInfo: {
        height: '100%',
        background: '#fff',
        borderRadius: '5px',
    },
}));
export default ChonGheResp;