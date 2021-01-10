import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({

    divflex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divTabTT: {
        width: '70%',
        margin: '5% auto',
    },
    textDefault: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.1),
    },
    titleForm: {
        fontSize: theme.spacing(2.3),
        textAlign: 'center',
        color: '#000',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.8),
        },
    },
    divTwo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(`${800}`)]: {
            display: 'block',
        },
    },
    formGroup: {
        width: '80%',
        margin: 'auto',
        padding: '10px 0',
        [theme.breakpoints.down(`${1250}`)]: {
            padding: '17px 0',
        },
        [theme.breakpoints.down(`${461}`)]: {
            width: '90%',
        }
    },
    formControl: {
        width: '100%',
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#6B00B6',
        },
        '& .MuiInput-underline:after': {
            border: 'none',
        },
        '& .MuiInputLabel-formControl': {

            color: '#000',
            fontSize: theme.spacing(1.6),
            textTransform: 'capitalize',
            fontFamily: 'SF Medium',
            letterSpacing: '0.5px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #440074',
        },
        '& .MuiInputBase-input': {
            paddingLeft: '10%',
            width: '74%',
            marginRight: 'auto',
            textAlign: 'center',
            fontSize: '15px',
            letterSpacing: '1px',
            color: '#440074',
            fontFamily: 'SF Medium',
        },
        '& .MuiSvgIcon-root': {
            width: '0.7em',
            height: '0.7em',
        },
        [theme.breakpoints.down(`${961}`)]: {

            '& .MuiInputBase-input': {
                fontSize: theme.spacing(1.2),
            },
        },
        [theme.breakpoints.down(`${768}`)]: {
            '& .MuiInputLabel-formControl': {
                fontSize: theme.spacing(1.3),

            },
        },
    },
    textName: {
        '& .MuiInputBase-input': {
            textTransform: 'capitalize',
        },
    },
    itemInfo: {
        width: '100%',
        margin: '1%',
    },
    groupBtnChinhSua: {
        textAlign: ' center',
    },
    twoForm: {
        padding: 0,
    },
    btnChinhSua: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
        transition: 'all 0.5s',

    },
    messageErr: {
        marginTop: '5px',
        color: '#ff0000',
        fontSize: theme.spacing(1.1),
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        letterSpacing: '0.5px',
    },
}));