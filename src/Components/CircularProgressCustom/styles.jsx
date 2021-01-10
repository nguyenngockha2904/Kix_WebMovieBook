import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'inline-flex',
        borderRadius: '50%',
    },
    bottom: {
        color: '#eeeeee91',
    },
    top: {
        color: 'rgb(169 255 68)',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
    label: {
        color: 'rgb(169 255 68)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%,-50%)',
        fontSize: '34px',
        fontFamily: 'SF Medium',
    },
}));