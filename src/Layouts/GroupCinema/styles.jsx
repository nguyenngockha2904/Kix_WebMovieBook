import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    //#region test
    root: {
        maxWidth: theme.spacing(94),
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
        borderRadius: theme.spacing(.5),
        [theme.breakpoints.down(`${960}`)]: {
            display: 'block',
            width: '90%',
            height: '100%',
            border: '1px solid #80808080',
            margin: 'auto',
            borderRadius: '5px',
            borderTop: 'none',
            overflow: 'hidden',
            paddingBottom: theme.spacing(2),
        }
    },

    tabRap: {
        width: theme.spacing(8.5),
        maxHeight: theme.spacing(57),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${960}`)]: {
            display: 'flex',
            borderRadius: '5px',
            border: 'none',
            borderTop: '1px solid #80808080',
            width: '100%',
            overflowX: 'scroll',
            '&::-webkit-scrollbar ': {
                width: '3px',
                height: '7px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'rgb(214 214 214)',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#80808080',
                borderRadius: '7px',
            },
            '& $buttonImg': {
                margin: theme.spacing(0, 1),
            },
            '& $line': {
                display: 'none',
            }
        },
    },

    tabItemRap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
    },
    tabItemRapRespone: {
        width: "auto",
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%'
        }
    },
    buttonImg: {
        borderRadius: '50%',
        width: theme.spacing(5),
        height: theme.spacing(5),
        minWidth: theme.spacing(1),
        background: 'transparent',
        '&:hover': {
            background: 'transparent',
        }
    },
    logoCine: {
        width: theme.spacing(5),
    },
    line: {
        background: '#8080805e',
        width: '60%',
        height: '0.5px',
        margin: 'auto',
    },
    contentRap: {
        width: '91%',
        height: theme.spacing(55.8),
        display: 'flex',
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            display: 'block',
            paddingBottom: theme.spacing(3),
        }
    },
    tabRapPhim: {
        width: '30%',
        borderRight: '1px solid rgb(214 214 214)',
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${960}`)]: {
            width: '35%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            width: '96%',
            overflow: 'auto',
            maxHeight: theme.spacing(16.5),
            height: '100%',
            margin: 'auto',
            marginBottom: theme.spacing(1),
            padding: theme.spacing(1.6, 0),
            boxShadow: '0px 5px 16px -4px #80808080',
            borderRadius: '5px',
            borderLeft: 'none',
            borderRight: 'none',
        }
    },
    titleTab: {
        textAlign: 'center',
        fontFamily: 'SF Text Regular',
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.4),
        margin: theme.spacing(1),
        display: 'none',
        [theme.breakpoints.down(`${770}`)]: {
            display: 'block',
        }
    },
    tabRapPhimButton: {
        width: '100%',
        background: 'transparent',
        boxShadow: ' 0 0 black',
        display: 'block',
        transition: 'none',
        '&:hover': {
            background: 'transparent',
            boxShadow: ' 0 0 black',
        }
    },
    tabRapPhimItem: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1.5, 0),
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
    },
    active: {
        opacity: '1',
    },
    divRapImg: {
        display: 'flex',
        alignSelf: 'center',
        margin: theme.spacing(0, 1),
    },
    movieTheaterImg: {
        width: theme.spacing(5),
        height: 'auto',
        borderRadius: theme.spacing(0.5),
    },
    RapphimContent: {
        fontSize: theme.spacing(1.4),
        width: '100%',
    },
    nameRapPhim: {
        display: 'flex',
        color: '#000',
        letterSpacing: theme.spacing(0.05),
        fontFamily: 'SF Text Regular',
        textAlign: 'left',
        fontSize: theme.spacing(1.1),
        width: '75%',
    },
    hightlineTenRap: {
        color: '#FB4226',
    },
    address: {
        fontSize: theme.spacing(1.2),
        width: theme.spacing(21),
        color: '#949494',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        letterSpacing: theme.spacing(0.03),
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',
        lineHeight: '1.7',
    },
    btnDetail: {
        color: '#FB4226 !important',
        fontSize: theme.spacing(1.2),
        background: 'transparent',
        padding: 0,
        margin: theme.spacing(0.1),
        textTransform: 'capitalize',
        '&:hover': {
            background: 'transparent',
            textDecoration: 'underline',
        }

    },
    contentPhim: {
        width: '100%',
        maxHeight: theme.spacing(57),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '3px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808080',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${770}`)]: {
            width: '96%',
            overflow: 'auto',
            maxHeight: theme.spacing(30),
            height: '100%',
            margin: 'auto',
            marginBottom: theme.spacing(1),
            padding: theme.spacing(1.6, 0),
            boxShadow: '0px 5px 16px -4px #80808080',
            borderRadius: '5px',
            border: 'none',
        }
    },
    phimItem: {
        padding: theme.spacing(1.5),
        [theme.breakpoints.down(`${960}`)]: {
            padding: theme.spacing(1.5, 0),
        },
    },
    phimInfo: {
        display: 'flex',
        marginBottom: theme.spacing(1.5),
        alignItems: 'center',
    },
    namePhim: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'SF Text Regular',
        textTransform: 'capitalize',
        width: '100%',
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
            '& $general': {
                fontSize: theme.spacing(1.2),
            },
        },
    },
    general: {
        color: '#fff',
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        padding: theme.spacing(0.4, 0.6),
        display: 'inline-block',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.3),
        marginRight: theme.spacing(1),
        width: theme.spacing(2.3),
        textAlign: 'center',
    },
    totalTime: {
        margin: 0,
        lineHeight: '1.7',
        fontSize: theme.spacing(1.1),
        color: '#9b9b9b',
        textTransform: 'capitalize',

    },
    Grouptime: {
        padding: theme.spacing(0, 1),
    },
    typeAudio: {
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),
        color: '#000',
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    timeMovie: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    timeMovie_Item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        color: '#108f3e',
        margin: theme.spacing(0, 1, 1, 0),
        padding: theme.spacing(0.5, 1),
        transition: 'all 0.5s',
        textAlign: 'center',
        background: 'rgba(246,246,246,.5)',
        borderRadius: '7px',
        color: '#9b9b9b',
        border: '1px solid #e4e4e4',
        cursor: 'pointer',
        letterSpacing: '1px',
        '&:hover ': {
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            '& $timeStart': {
                color: '#6b00b6',

            },
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.1),
            margin: theme.spacing(0, 0.5, 1, 0),
            padding: theme.spacing(0.3, 0.7),
            '& $timeStart': {
                fontSize: theme.spacing(1.2),
            },
        },
    },
    timeStart: {
        fontSize: theme.spacing(1.8),
        fontFamily: 'SF Medium',
        color: '#108f3e',

    },
    //#endregion
    tabContent: {
        width: '70%',
        [theme.breakpoints.down(`${960}`)]: {
            width: '65%',
        },
        [theme.breakpoints.down(`${770}`)]: {
            padding: '16px 0px',
            width: '96%',
            margin: 'auto',
            boxShadow: ' 0px 5px 16px -4px #80808080',
        }
    },
    divDate: {
        display: 'flex',
        overflowX: 'auto',
        '&::-webkit-scrollbar ': {
            width: '4px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
    },
    dateItem: {
        display: 'block',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(12.2),
        padding: theme.spacing(0.8),

        '&:hover': {
            color: 'rgb(107, 0, 182) !important',
            background: 'transparent',
        },
        '&.active': {
            color: '#fb4226',
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.4),
            '& $textFomart': {
                fontSize: theme.spacing(1.3),
            },
            '& $date': {
                fontSize: theme.spacing(1.3),
            },
        },
    },
    textFomart: {
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    date: {
        fontSize: theme.spacing(1.7),
        letterSpacing: '2px',
        fontFamily: 'system-ui',
        display: 'inline',
    },

    ShowTimeDetail: {
        padding: theme.spacing(0, 1.4),
        margin: theme.spacing(1.4, 0),
        overflow: 'auto',
        maxHeight: theme.spacing(45),
        '&::-webkit-scrollbar ': {
            width: '8px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${960}`)]: {
            padding: '0',
        },
        [theme.breakpoints.down(`${770}`)]: {
            maxHeight: theme.spacing(24),
            padding: '0',
            '&::-webkit-scrollbar ': {
                width: '3px',
            },
        }
    },
}));