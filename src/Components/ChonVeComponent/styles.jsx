import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    //#region Chung
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        '& .MuiAlert-filledWarning': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        },
    },

    GroupLoaiVe: {
        display: 'flex',
        height: '100%',
    },
    textDefault: {
        color: '#fff',
        whiteSpace: 'nowrap',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
    },
    //#endregion

    //#region  groupBannerPhim jss
    groupBannerPhim: {
        width: '25%',
        position: 'relative',
        boxShadow: '0 0 7px 1px #808080ba',
        marginTop: theme.spacing(4.7),
        [theme.breakpoints.down(`${1200}`)]: {
            display: 'none ',
        },
    },
    bgImg: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '25%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'blur(1px)',
    },
    bgBlur: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '25%',
        background: '#00000073',
        zIndex: '4',
    },
    groupImg: {
        zIndex: "5",
        position: 'absolute',
        background: 'transparent',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    },
    filmImg: {
        borderRadius: '5px',
        // boxShadow: '0 0 5px 0px #ffffffe0',
    },
    groupInfoPhim: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: '5',
        padding: theme.spacing(1),
        height: '21%',
        width: '25%',
    },

    groupNameMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    namePhim: {
        fontSize: theme.spacing(1.9),
        whiteSpace: 'inherit',
    },
    general: {
        marginRight: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.4),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.5),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(3.3),
    },
    //#endregion 

    //#region groupChooseVe jss
    groupChooseVe: {
        width: '75%',
        marginTop: theme.spacing(6.8),
        [theme.breakpoints.down(`${1280}`)]: {
            width: '100%',
        },
    },
    ChooseVe_Content: {
        width: '70%',
        margin: 'auto',
        height: '100%',
        [theme.breakpoints.down(`${601}`)]: {
            width: '100%',
        },
    },
    //#region ContentTop jss
    ContentTop: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2.5, 0),
        borderBottom: '1px solid #8080806b',
        maxHeight: '10%',
        height: '100%',
        [theme.breakpoints.down(`${601}`)]: {
            padding: theme.spacing(2.5),
            margin: theme.spacing(0, 0.5),
            width: 'auto',
        },
    },
    GroupImgTheater: {
        marginRight: theme.spacing(1),
        '& .MuiAvatar-root': {
            boxShadow: ' 0 0 1px 2px lavender',
        },
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
    },
    hightline: {
        color: '#FB4226',
        fontFamily: 'SF Medium',

    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& $textDefault': {
            color: '#808080',
            fontFamily: 'unset',
            fontSize: theme.spacing(1.1),
            letterSpacing: '0.5px',
        }
    },
    //#endregion

    // #region contentBody jss
    contentBody: {
        minHeight: theme.spacing(29),
    },
    ticketItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 0),
        borderBottom: '1px solid #8080806b',
        position: 'relative',
        // [theme.breakpoints.down(`${601}`)]: {
        //     display: 'block',
        // },
    },
    divTwoTicket: {
        padding: '10px',
    },
    nameTicket: {
        color: '#000',
        fontSize: theme.spacing(1.3),
    },
    priceTicket: {
        color: '#6b00b6',
        fontSize: theme.spacing(2.1),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: ' absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.4),
        },
        [theme.breakpoints.down(`${601}`)]: {
            position: ' unset',
            justifyContent: 'flex-start',
            transform: 'translateX(0)',
        },
    },
    moneyDefault: {
        color: '#000',
        marginLeft: theme.spacing(0.5),
        fontSize: theme.spacing(1.5),
        textTransform: 'lowercase',
    },
    groupCustomTotal: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customBtn: {
        color: '#9E9E9E',
        fontSize: theme.spacing(2.3),
        cursor: 'pointer',
        padding: theme.spacing(0.5),
        '&:hover': {
            color: '#6b00b6',
        },
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.4),
        },
    },
    totalInput: {
        color: '#000',
        textAlign: 'center',
        width: theme.spacing(4),
        padding: theme.spacing(.3),
        fontSize: theme.spacing(1.3),
        margin: theme.spacing(0, 0.7),
        outline: 'none',
        // borderColor: '#8080806b',
        border: '1px solid #8080806b',
        borderRadius: '5px',
        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        }
    },
    //#endregion

    //#region contentFooter jss
    contentFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down(`${961}`)]: {
            paddingLeft: '10px',
        },
    },
    titleTongTien: {
        color: '#000',
        fontFamily: 'unset',
        fontWeight: '500',
    },
    totalMonney: {
        color: '#6b00b6',
        fontSize: theme.spacing(3.5),
        fontFamily: '-webkit-pictograph',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& $moneyDefault': {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down(`${601}`)]: {
            fontSize: theme.spacing(2),
        },

    },
    btnChonGhe: {
        height: '100%',
        color: '#fff',
        padding: theme.spacing(1.5, 1.8),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        textTransform: 'capitalize',
        '&:hover ': {
            backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        },
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down(`${601}`)]: {

            marginRight: ' 10px',
            padding: theme.spacing(0.9, 1.3),
        },
    },
    //#endregion

    //#endregion

    //#region NoteFooter
    NoteFooter: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down(`${961}`)]: {
            display: 'none ',
        },
    },
    noteText: {
        color: '#808080',
        fontFamily: 'unset',
        fontSize: theme.spacing(1.2),
        letterSpacing: '0.5px',
        textAlign: 'center',
    },
    DivContact: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Contact_title: {
        color: '#808080',
        fontSize: theme.spacing(2),
        textAlign: 'right',
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    Contact_in: {
        fontFamily: 'unset',
        fontSize: theme.spacing(1.2),
        letterSpacing: '0.5px',
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    Contact_Sdt: {
        marginLeft: theme.spacing(1),
        fontSize: theme.spacing(3.6),
        [theme.breakpoints.down(`${1200}`)]: {
            fontSize: theme.spacing(2.6),
        },
    },
    //#endregion
}));