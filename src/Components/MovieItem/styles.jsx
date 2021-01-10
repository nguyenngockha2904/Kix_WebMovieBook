import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
        cursor: 'pointer',

        '&:hover $bgContent': {
            opacity: 1,
        },
        [theme.breakpoints.down(`${960}`)]: {
            marginBottom: 0,
            '& $bgContent': {
                display: 'none',
            },
        },
        [theme.breakpoints.down(`${460}`)]: {
            marginBottom: 0,
        },
        // [theme.breakpoints.down(`${460}`)]: {

        //     borderRadius: '10px',
        //     background: '#80808026',
        // }
    },
    divContent: {
        marginTop: theme.spacing(1),
        position: 'relative',
        [theme.breakpoints.down(`${460}`)]: {
            display: "none",
        }
    },
    general: {
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        padding: theme.spacing(0.4, 0.6),
        display: 'inline-block',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.7),
        marginRight: theme.spacing(1.3),
        width: theme.spacing(3.3),
        textAlign: 'center',
        fontFamily: 'SF Text Regular',

    },
    nameMovie: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        height: 'auto',
        fontSize: theme.spacing(1.6),
        fontFamily: 'SF Medium',
        color: '#000',
        marginBottom: '0',
        display: '-webkit-box',
        paddingRight: theme.spacing(1.3),

    },
    time: {
        fontSize: theme.spacing(1.3),
        color: '#4a4a4a',
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1.5),
    },
    bgContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        '&:hover $btnBuy': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        }
    },
    btnBuy: {
        width: '100%',
        padding: theme.spacing(0.5, 1.5),
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(0.1),
        fontFamily: 'none',
        transition: 'all 0.3s',
        outline: 'none',
    },
    Paper: {
        height: theme.spacing(31.8),
        borderRadius: theme.spacing(0.5),
        [theme.breakpoints.down(`${460}`)]: {
            height: theme.spacing(24.5),
            borderRadius: '10px',
            boxShadow: '0 0 6px 2px #9e9e9e85',
        },
        [theme.breakpoints.down(`${321}`)]: {
            height: theme.spacing(20),
        },
    }
}))