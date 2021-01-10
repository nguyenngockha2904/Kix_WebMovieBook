import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    wapper: {
        position: 'fixed',
        background: '#efefefa6',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '98',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgRoot: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'transparent',
    },
    root: {
        zIndex: '2',
        background: '#fffffff2',
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5.4),
    },
    divH: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(2, 1),
        alignItems: 'center',
    },
    title: {
        fontFamily: 'SF Text Regular',
        letterSpacing: '0.5px',
        textTransform: 'capitalize',
        width: '100%',
        marginLeft: theme.spacing(2),
    },
    buttonClose: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none !important',
        width: '100%',
        maxWidth: theme.spacing(2),
        '&:hover': {
            background: 'transparent',
        }
    },
    iconClose: {
        width: theme.spacing(1.4),
    },
    divBody: {

    },
    video: {
        borderRadius: theme.spacing(1.2),
        margin: theme.spacing(4),
        marginTop: 0,
    }
}));