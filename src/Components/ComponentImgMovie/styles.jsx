import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    divImg: {
        position: 'relative',
        width: '100%',
        '&:hover $bgDivImg': {
            opacity: 1,
        },
    },

    img: {
        width: '100%',
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
    },
    groupRating: {
        position: 'absolute',
        top: 0,
        right: 0,
        [theme.breakpoints.down(`${460}`)]: {
            '& $rating': {
                display: 'none',
            },
        }
    },
    CircularProgressCustomdiv: {
        display: 'none',
        [theme.breakpoints.down(`${460}`)]: {
            display: 'block',
            margin: '5px',
        }
    },
    rating: {
        background: '#2b3a51d1',
        margin: theme.spacing(1.5),
        textAlign: 'center',
        padding: theme.spacing(.4, .8),
        borderRadius: theme.spacing(0.5),
        height: theme.spacing(4.1),
        width: theme.spacing(5.5),
    },
    point: {
        margin: 0,
        textAlign: 'center',
        fontSize: '16px',
        color: '#fff',
        marginBottom: theme.spacing(.4),
        letterSpacing: theme.spacing(.1),
    },
    ratingStar: {
        display: 'flex',
        justifyContent: 'center',
    },
    starIcon: {
        width: theme.spacing(1),
        height: 'auto',
    },
    bgDivImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        transition: 'all 0.3s',
        borderRadius: theme.spacing(0.5),
        backgroundImage: 'linear-gradient(transparent, #000000ad)',
        [theme.breakpoints.down(`${960}`)]: {
            display: 'none',
        },
    },
    ngayKhoiChieu: {
        display: 'none',
        [theme.breakpoints.down(`${460}`)]: {
            display: 'block',
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            color: '#fff',
            background: '#31434cb8',
            padding: '5px 3px',
            borderRadius: '4px',
            fontSize: '14px',
            lineHeight: '1',
            fontWeight: '400',
            fontFamily: 'SF Medium',
        }
    },
    bgDetail: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        [theme.breakpoints.up(`${960}`)]: {
            display: 'none',
        }
    },
    play_videoIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: ' translate(-50%, -50%)',
        transition: 'all 0.3s',
        zIndex: '5',
        width: theme.spacing(7),
        minWidth: theme.spacing(1),
        height: theme.spacing(7),
        borderRadius: '50%',
        background: '#312f2fa3',
        '&:hover': {
            opacity: '0.7',
            background: '#312f2f33',
        },
        [theme.breakpoints.down(`${460}`)]: {
            display: 'none',
        }
    },
    videoIcon: {
        width: theme.spacing(7),
        border: '2px solid #fff',
        borderRadius: '50%',
    },
}));