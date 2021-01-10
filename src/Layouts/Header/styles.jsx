import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    //#region  done
    header: {
        position: 'fixed',
        background: '#ffffffe8',
        height: '64px',
        zIndex: '99',
    },
    d_Flex_Bet: {
        display: 'flex',
        justifyContent: 'space-between',
    }
    ,

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        padding: theme.spacing(0, 0.7),
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        cursor: 'pointer',
        "&:hover ": {
            outline: 'none',
            backgroundColor: 'transparent',
        }
    },
    logo: {
        maxWidth: theme.spacing(4), //40px
        width: '100%',
        height: 'auto',
        padding: '0.12em',
        borderRadius: theme.spacing(1.5), //15px
        transition: '0.3s all',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(5)
        },
    },
    tabControl: {
        position: 'absolute',
        left: "50%",
        transform: "translate(-50%, 0)",
        display: 'none',
        // --- responsive 
        [theme.breakpoints.up(`${978}`)]: {
            display: 'flex',
        }
    },
    navItem: {
        margin: theme.spacing(0, 0.5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover $navLink': {
            background: 'none',
            color: '#6B00B6',
        },
    },
    navLink: {
        fontSize: theme.spacing(1.3),
        fontWeight: '500',
        cursor: 'pointer',
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.02),
        transition: '0.3s all',
        whiteSpace: 'nowrap',
    },
    divRight: {
        display: 'none',
        // --- responsive 
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    login: {
        color: '#9b9b9b',
        fontWeight: '400',

    },
    formControl: {
        display: 'flex',
    },
    select: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.07),
        border: 'none',
        color: '#9b9b9b',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        outline: 'none',
        cursor: 'pointer',
        background: 'none',
    },
    collapse: {
        display: 'flex',
        // --- responsive 
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    collapseButton: {
        maxWidth: theme.spacing(3), //35px
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(3)
        },
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '0%',
        zIndex: '100',
        backgroundColor: '#77727296',
    },
    divCollapse: {
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        width: 'auto',
        padding: theme.spacing(1.5),
        boxShadow: '0 0 7px 2px #9e9e9e94',
    },
    divCollapseleft: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    modalTT: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: 'rgb(31 29 29 / 30%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgModalTT: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: 'rgb(31 29 29 / 0%)',
    },
    ModalContent: {
        zIndex: '102',
        background: '#fff',
        borderRadius: theme.spacing(1.1),
        width: '50%',
        maxHeight: '400px',
        overflow: 'auto',
        padding: theme.spacing(2),
        transform: ' scale(4px, 4px)',
        boxShadow: '0 0 7px 2px #9e9e9e94',
    },
    TtItem: {
        cursor: 'pointer',
        borderBottom: '1px solid #80808075',
        transition: 'all 0.3s',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            background: '#c7b9b96b',

        }
    },
    iconClose: {
        maxWidth: theme.spacing(1.2),
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            maxWidth: theme.spacing(1.2)
        },
    },
    itemColapseGroup1: {
        justifyContent: 'flex-start',
        margin: theme.spacing(5.4, 0),
    },
    itemColapseGroup2: {
        justifyContent: 'center',
    },
    ContentTT: {
        background: 'rgb(255 255 255 / 0%)',
        position: 'fixed',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        '& $ModalContent': {
            marginTop: theme.spacing(6.5),
            marginRight: theme.spacing(1),
            width: theme.spacing(14.5),
        }
    },
    //#endregion
    iconDown: {
        marginLeft: theme.spacing(2),
        height: theme.spacing(0.8),
    },
    buttonDN: {

    },
    avatarUser: {
        width: '25px',
        height: '25px',
        marginRight: '11px',
        borderRadius: '50%',
        border: '1px dotted #ececec',
    },
    boxUser: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    bgUser: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: '101',
    },
    contentBoxUser: {
        zIndex: '102',
        background: '#fff',
        borderRadius: theme.spacing(0.7),
        maxHeight: '400px',
        overflow: 'auto',
        boxShadow: '0 0 7px 2px #9e9e9e94',
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: 'translate(-8px,104px)',
        [theme.breakpoints.down(`${961}`)]: {
            left: 0,
        }
    },
    UserItem: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: theme.spacing(0.07),
        border: 'none',
        color: '#9b9b9b',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        '&:hover': {
            background: '#c7b9b96b',

        }
    },
    btnUser: {
        width: '100%',
    },
}));