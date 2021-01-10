import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#e4e4e4',
        // '& .MuiAlert-standardWarning': {
        //     boxShadow: ' 0 0 3px 1px #fff',
        // },
    },
    wrapper: {
        marginTop: '55px',
        overflow: 'auto',
        background: '#e4e4e4',
    },
    textDefault: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    totalMonney: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.7),
    },
    namePhim: {
        margin: 0,
        letterSpacing: '0',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),

    },
    divInfoFilm: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 5%',
        background: '#fff',
        borderRadius: ' 10px',
        marginBottom: '1px',
    },
    divBottom: {
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        marginBottom: '1px',
        position: ' fixed',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        boxShadow: '0 0 5px 1px #9E9E9E',
        borderRadius: '5px',
    },
    infoFilm: {
        width: '70%',
        padding: '5% 0 5% 5%',
    },
    contentFilm: {

    },
    timeSub: {
        color: '#808080',
        letterSpacing: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.2),
        textTransform: 'capitalize',
        fontFamily: 'unset',
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(0.9),
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
        justifyContent: 'end',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5% 0',
    },
    textDef: {
        fontFamily: 'SF Medium',
        color: '#000',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1),
        },
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        marginTop: '5px',
    },
    groupImg: {
        width: '30%',
        padding: '5%',
        textAlign: ' center',
        paddingBottom: '7%',
        borderRadius: ' 10px',
    },
    imgFilm: {
        minWidth: '60px',
        maxWidth: '100px',
        width: '100%',
        borderRadius: ' 5px',
    },
    groupInfo: {
        display: "block",
        padding: '3% 5%',
    },
    infoText: {
        letterSpacing: '0.5px',
        margin: '5px 0',
        textTransform: ' lowercase',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${600}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    line: {

        width: '100%',
        height: '1px',
        borderBottom: ' 0.5px dotted #808080c9',
        margin: '8px auto',

    },
    hinhThucThanhToan: {
        '& $textDefault': {
            fontFamily: 'SF Medium',
            fontSize: theme.spacing(1.1),
        },
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiFormControlLabel-label': {
            fontSize: theme.spacing(1.4),
            color: '#2B3A51',
            fontFamily: 'SF Medium',
            letterSpacing: '-0.5px',
            [theme.breakpoints.down(`${600}`)]: {
                fontSize: theme.spacing(1.2),
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
            width: ' 25px',
            height: '25px',
        },
        '& .MuiAvatar-img': {
            'object-fit': 'unset',
        }
    },
    ItemBottom: {
        width: '100%',
        textAlign: ' center',
    },
    btnNext: {
        width: '100%',
        padding: ' 7px',
        textTransform: 'capitalize',
        background: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        'border-top-left-radius': 0,
        'border-bottom-left-radius': 0,
    },
}));