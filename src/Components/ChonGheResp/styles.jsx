import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    //#region done
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: '#020202',
        '& .MuiAlert-standardWarning': {
            boxShadow: ' 0 0 3px 1px #fff',
        },
    },
    wrapper: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        height: 'auto',
        marginTop: '55px',
        background: 'rgb(17 20 24)',
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
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.3),
        letterSpacing: '-0.7px',
    },
    groupGheDay: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
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
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#fff',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    //#endregion
    divInfo: {
        height: 'auto',
        background: '#e4e4e4',
        borderRadius: '10px',
        padding: '8px',
    },
    wrapperInfo: {
        background: '#fff',
        borderRadius: '10px',
        padding: '6px',
        height: '160px',
        overflow: 'auto',
    },
    filmInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $textDefault': {
            color: '#000',
        }
    },
    contentFilm: {
    },
    namePhim: {
        margin: 0,
        letterSpacing: '0',
        fontFamily: 'SF Medium',
    },
    timeSub: {
        color: '#808080',
        letterSpacing: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.1),
        textTransform: 'capitalize',
        fontFamily: 'unset',
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
    timeCountDown: {
        color: '#44c020',
        fontSize: theme.spacing(2),
        fontFamily: '-webkit-pictograph',
        background: '#0000000d',
        borderRadius: '5px',
        padding: '1px 5px',
    },
    nameThear: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        letterSpacing: '-0.5px',
        fontSize: theme.spacing(1.3),
        textTransform: 'capitalize',
        margin: '5px 0',
    },
    hightline: {
        color: '#440074',
        fontFamily: 'SF Medium',

    },
    infoTimeShow: {
        display: 'flex',
        margin: '5px 0',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    infoDivItem: {
    },
    textDef: {
        fontFamily: 'SF Medium',
        color: '#000',
    },
    gheContent: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        marginTop: '5px',
    },
    gheType: {
        fontSize: theme.spacing(1.2),
        margin: theme.spacing(0, 0.5),
    },
    priceTotal: {
        marginTop: '2px',
        background: '#fff',
        borderRadius: '10px',
        padding: '10px 6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $timeSub': {
            fontSize: theme.spacing(1.4),
        }
    },
    totalMonney: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.9),
    },
    GroupButtonNext: {
        background: '#fff',
        borderRadius: '10px',
        marginTop: '6px',
    },
    buttonNext: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
    },
}));