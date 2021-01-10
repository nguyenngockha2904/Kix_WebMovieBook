import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        width: '60%',
        margin: 'auto',
        [theme.breakpoints.down(`${1201}`)]: {
            width: 'auto',
            margin: '5%',
        },
        [theme.breakpoints.down(`${620}`)]: {
            display: 'block',
        },
    },
    groupInfo: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        alignItems: 'center',

    },
    defaultText: {
        color: '#e9e9e9',
        fontSize: theme.spacing(1.4),
        letterSpacing: '0.5px',
        [theme.breakpoints.down(`${620}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    title: {
        color: "#fff",
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: '1px',
        [theme.breakpoints.down(`${620}`)]: {
            fontSize: theme.spacing(1.1),
        },
    },
    w100: {
        width: '100%',
    },
    groupVideo: {
        width: '60%',
        margin: 'auto',
        [theme.breakpoints.down(`${1201}`)]: {
            width: 'auto',
            margin: '5%',
        },
        [theme.breakpoints.down(`${620}`)]: {
            display: 'block',
        },
    },
    divVideo: {
        width: '66%',
        margin: 'auto',
        height: '300px',
        marginTop: '13px',
        [theme.breakpoints.down(`${620}`)]: {
            width: '100%',
            height: '265px',
        },
    },
    video: {
        borderRadius: theme.spacing(1.2),
        width: '100%',
        height: '100%',
    }
}));