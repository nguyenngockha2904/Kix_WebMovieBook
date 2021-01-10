import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#222',
        minHeight: '300px',
        width: '100%',
    },
    groupFooter: {
        minHeight: '300px',
        width: '940px',

        margin: 'auto',
        padding: theme.spacing(2, 0),
        [theme.breakpoints.down(`${940}`)]: {
            width: '96%',
        },
    },
    divTop: {
        borderBottom: '1px solid #949494',
        padding: theme.spacing(2, 0),
    },
    Container: {

    },
    navItem: {
        [theme.breakpoints.down(`${970}`)]: {
            display: 'none',
        }
    },
    navItemResponsive: {
        display: 'none',
        justifyContent: 'center',
        [theme.breakpoints.down(`${970}`)]: {
            display: 'flex',
        }
    },
    title: {
        color: '#fff',
        fontSize: '80%',
        fontFamily: 'SF Medium',
    },
    contentD: {
        fontSize: theme.spacing(1.2),
        color: '#949494',
        transition: 'all .2s',
        lineHeight: '2.3',
    },
    contentSubtitle: {
        fontWeight: '700',
        cursor: 'pointer',
        '&:hover ': {
            color: '#fff',
        }
    },
    groupDoiTac: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    logoDoiTac: {
        width: theme.spacing(3),
        height: 'auto',
        margin: theme.spacing(0.5, 2.5, 0.5, 0),
        borderRadius: '50%',
        cursor: 'pointer',
    },
    logoSocial: {
        borderRadius: '0',
        margin: theme.spacing(0.5, 1),
    },
    divBottom: {
        padding: theme.spacing(2, 0),
    },
    subtitle: {
        color: '#FB4226',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
        }
    },
    gridCenter: {
        [theme.breakpoints.down(`${600}`)]: {
            textAlign: 'center',
        }
    },
    gridEmail: {
        [theme.breakpoints.down(`${600}`)]: {
            justifyContent: 'center',
        }
    },
    logoBottom1: {
        width: theme.spacing(8),
        height: 'auto',
        borderRadius: '8px',
    },
    logoBottom2: {
        width: theme.spacing(13.0),
    }
}));