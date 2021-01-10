import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    //#region Chung
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        // [theme.breakpoints.down(`${900}`)]: {
        //     fontSize: theme.spacing(1.2),
        // },
    },
    textDefault: {
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#808080',
        fontFamily: 'unset',
        letterSpacing: '0.5px',
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.1),
        },

    },
    //#endregion
    //#region divChonGhe jss
    divChonGhe: {
        width: '80%',
        marginTop: theme.spacing(6.3),
    },
    WrapperContent: {
        width: '75%',
        margin: 'auto',
    },
    //#region  ContentTop jss
    ContentTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // #region groupInfoThearter jss
    groupInfoThearter: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(1, 0),
        maxHeight: '10%',
    },
    GroupImgTheater: {
        marginRight: theme.spacing(1),
    },
    logoCine: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        boxShadow: '0 0 4px 0px #808080',
        borderRadius: '50%',
    },
    theaterContent: {

    },
    nameThear: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        letterSpacing: '0.5px',
        fontSize: theme.spacing(1.3),
        textTransform: 'capitalize',
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    hightline: {
        color: '#fb4226',
        fontFamily: 'SF Medium',

    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& $textDefault': {
            fontSize: theme.spacing(1.1),
        }
    },
    //#endregion

    //#region GroupTimeCountDown jss
    GroupTimeCountDown: {
        textAlign: 'center',
        '& $textDefault': {
            fontSize: theme.spacing(.9),
            fontWeight: '400',
            letterSpacing: 0,
        }
    },
    timeCountDown: {
        color: '#44c020',
        fontSize: theme.spacing(2.7),
        fontFamily: '-webkit-pictograph',
    },
    //#endregion

    //#endregion

    //#region   ContentBody jss
    contentBody: {
        position: 'relative',
    },
    GroupManHinh: {

    },
    manHinh: {
        height: theme.spacing(1.1),
        background: '#3E515D',
        'border-top-right-radius': '5px',
        'border-top-left-radius': '5px',
    },
    anhSangManHinh: {
        height: theme.spacing(5.2),
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#3e515d73, transparent)',
        color: '#3E515D',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.5),
        letterSpacing: '-0.7px  ',
    },

    GroupGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5%',
        paddingBottom: '0',
        maxHeight: '410px',
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        '& .MuiGrid-spacing-xs-1 > .MuiGrid-item ': {
            display: 'flex',
            alignItems: 'center',
        }

    },
    groupGheDay: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },

    dayGheItem: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
        color: '#3E515D',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: '0%',
        paddingBottom: '9px',
        width: '0%',
    },
    groupGheitem: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listGhe: {
        width: '100%',
        marginBottom: ' 50px',
    },
    getItem: {
        minWidth: theme.spacing(0.5),
        width: 'auto',
        height: 'auto',
        width: '100%',
        padding: theme.spacing(0.3, 0.6),
    },
    GheIcon: {
        background: 'transparent',
        width: theme.spacing(2.5),
        height: theme.spacing(4.5),
    },
    GroupDiscriptionGhe: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        borderTop: ' 1px solid #ececec',
        padding: '2px 7px',
        zIndex: ' 5',
    },
    DcirpItem: {

        '& $GheIcon': {
            margin: 'auto',
            width: '18px',
            height: '27px',
        },
        '& $textDefault': {
            marginTop: theme.spacing(0.5),
            fontSize: theme.spacing(1),
        }
    },
    //#endregion



    //#endregion

    //#region divThanhToan jss
    divThanhToan: {
        width: '25%',

    },
    divThanhToan_content: {
        position: 'fixed',
        top: 0,
        width: '25%',
        bottom: 0,
        right: 0,
        zIndex: '99',
        background: '#fff',
        boxShadow: '3px 0px 7px 3px #80808042',
        paddingTop: '1%',
    },
    //#region divThanhToan_body jss
    wapperBody: {
        maxHeight: theme.spacing(46.5),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
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
    divThanhToan_body: {
        width: '80%',
        margin: 'auto',
        height: '100%',
    },
    priceTotal: {
        padding: theme.spacing(0.4),
        borderBottom: '1px dotted #8080806b',
        height: '55px',
        position: ' absolute',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        zIndex: '50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    lineDotted: {
        height: '1px',
        width: '100%',
        margin: theme.spacing(1, 0),
        borderBottom: '1px dotted #8080806b',
    },
    totalMonney: {
        color: '#44c020',
        fontSize: theme.spacing(3.5),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& $moneyDefault': {
            fontSize: theme.spacing(2),
        },
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(2.5),
        },
    },
    moneyDefault: {
        color: '#44c020',
        marginLeft: theme.spacing(0.5),
        fontSize: theme.spacing(1.5),
        textTransform: 'lowercase',
    },
    groupNameMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: ' 65px',
    },
    namePhim: {
        fontSize: theme.spacing(1.5),
        color: '#000',
        fontFamily: 'SF Medium',
        whiteSpace: 'inherit',
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    general: {
        marginRight: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.1),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.3),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(2.5),
    },
    gheContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
        position: 'relative',
        '& $textDefault': {
            color: '#000',
            fontFamily: 'SF Medium',
        },
        '& $totalMonney': {
            color: '#44c020',
            fontFamily: '-webkit-pictograph',
            fontSize: theme.spacing(1.6),
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.1),
            },
        },
        '& $moneyDefault': {
            fontSize: theme.spacing(1.3),
        },
        cursor: 'pointer',
        '&:hover': {
            background: '#4cc32a1c',
        }
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gheType: {
        fontSize: theme.spacing(1.2),
        margin: theme.spacing(0, 0.5),
        [theme.breakpoints.down(`${1220}`)]: {
            fontSize: theme.spacing(0.9),
        },
    },
    btnCancel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
        textTransform: 'capitalize',
        transition: 'all 0.3s',
        '&:hover': {
            color: '#fb4226',
        },
    },
    groupInput: {
        '& $textDefault': {
            fontSize: theme.spacing(1.1),
            fontFamily: 'SF Medium',
        },
        '& $inputContent': {
            fontSize: theme.spacing(1.4),
            textTransform: 'none',
            margin: theme.spacing(0.5, 0),
            fontFamily: 'unset',
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.2),
            },
        }
    },
    inputContent: {
    },
    hinhThucThanhToan: {
        marginBottom: theme.spacing(11.9),
        '& $textDefault': {
            fontFamily: 'SF Medium',
            fontSize: theme.spacing(1.1),
        },
        '& .MuiFormControl-root': {
        },
        '& .MuiFormControlLabel-label': {
            fontSize: theme.spacing(1.4),
            color: '#2B3A51',
            fontFamily: 'SF Medium',
            [theme.breakpoints.down(`${1220}`)]: {
                fontSize: theme.spacing(1.1),
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1.1rem',
        }
    },
    radioItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiAvatar-root': {
            marginRight: theme.spacing(0.5),
            [theme.breakpoints.down(`${1220}`)]: {
                width: '30px',
                height: '30px',
            },
        },
        '& .MuiAvatar-img': {
            'object-fit': 'unset',
        }
    },
    //#endregion

    divThanhToan_footer: {
        bottom: 0,
        right: 0,
        left: 0,
        position: ' absolute',
        background: '#fff',
        borderTop: '1px dotted #c3c3c3',
    },
    footerNote: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'unset',
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 1.5,
        width: '90%',
        margin: 'auto',
        padding: theme.spacing(2, 0),
        marginBottom: ' 44px',
        '& $hightline': {
            margin: '0 5px',
        },

    },
    iconWarning: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        margin: theme.spacing(0, 0.5),
    },
    FooterButton: {
        position: 'absolute',
        bottom: 0,
        height: theme.spacing(5),
        left: 0,
        width: '100%',
    },
    btnDatVe: {
        background: '#AFAFAF',
        width: '100%',
        height: '100%',
        '& $textDefault': {
            color: '#fff',
            fontSize: theme.spacing(1.9),
        },
        '&:hover': {
            boxShadow: '0px 0px 8px 2px #AFAFAF',
            '& $textDefault': {
                color: '#AFAFAF',
            }
        }


    },
    //#endregion



}));
