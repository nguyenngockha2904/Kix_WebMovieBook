import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: theme.spacing(56.5),
        width: '60%',
        height: 'auto',
        background: '#fff',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'start',
        margin: 'auto',
        [theme.breakpoints.down(`${1201}`)]: {
            width: 'auto',
            margin: '0% 5%',
        },
        [theme.breakpoints.down(`${960}`)]: {
            display: 'block',
        },


    },
    groupTabs: {
        width: '25%',
        maxHeight: theme.spacing(56.5),
        overflow: 'auto',
        borderRight: '1px solid #80808080',
        '&::-webkit-scrollbar ': {
            width: '5px',
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
            width: '100%',
            justifyContent: ' center',
            borderBottom: '1px solid #80808080',
            '& $line': {
                display: 'none',
            },
            '& $titleTheater': {
                display: 'none',
            },
        },
    },
    tabItemRapRespone: {
        width: 'auto',
        margin: '8px 3%',
    },
    tabItemRap: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing(1),
        width: '100%',
        background: 'transparent',
        boxShadow: ' 0 0 black',
        transition: 'none',
        opacity: '0.7',
        '&:hover': {
            background: 'transparent',
        },
        [theme.breakpoints.down(`${960}`)]: {
            minWidth: '1px',
            padding: '0px',
            borderRadius: '50%',
        },
    },
    groupButtonImg: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down(`${960}`)]: {
            marginRight: '0',
        },
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
    titleTheater: {
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: '1px',
        textAlign: 'left',
    },
    line: {
        background: '#8080805e',
        width: '60%',
        height: '0.5px',
        margin: 'auto',
    },
    tabContent: {
        width: '75%',
        [theme.breakpoints.down(`${960}`)]: {
            width: '100%',
        },
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
        background: 'transparent !important',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(12.2),
        padding: theme.spacing(0.8),

        '&:hover': {
            background: 'transparent',
        },
        '&.active': {
            color: '#fb4226',
        },
        [theme.breakpoints.down(`${960}`)]: {
            '& $textFomart': {
                fontSize: theme.spacing(1.2),
            },
            '& $date': {
                fontSize: theme.spacing(1.4),
            },
        },
    },
    textFomart: {
        fontSize: theme.spacing(1.4),
        fontFamily: 'SF Medium',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
    date: {
        fontSize: theme.spacing(1.6),
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

    },
    ShowTimeDetail_item: {
        borderBottom: '1px solid #8080805e',
        marginBottom: theme.spacing(1.4),
    },
    groupImg: {
        marginRight: theme.spacing(1),
    },
    theatherIcon: {
        width: theme.spacing(5.6),
        height: 'auto',
        borderRadius: '5px',
    },
    theatherInfo: {
        width: '100%',
    },
    group_name: {
        color: '#000',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.6),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.3),
            '& $group_name_address': {
                fontSize: theme.spacing(1.3),
            },
        },
    },
    group_name1: {
        justifyContent: 'space-between',

    },
    hightLine: {
        color: '#FB4226',
        marginRight: '5px',
    },
    dateChoose: {
        color: '#108f3e',
    },
    group_name_address: {
        lineHeight: '1.7',
        margin: theme.spacing(0, 0.5),
        fontSize: theme.spacing(1.7),
        color: ' #6b00b6',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        float: 'left',
        textOverflow: 'ellipsis',
    },
    groupTime: {
        '&::-webkit-scrollbar ': {
            width: '3px',
            height: '8px',
        },
        flexWrap: 'wrap',
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214 / 28%)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#80808047',
            borderRadius: '5px',
        },
        [theme.breakpoints.down(`${414}`)]: {
            flexWrap: 'nowrap',
        },
    },
    itemTime: {
        background: 'rgba(246,246,246,.5)',
        boxShadow: ' 0 0 black',
        transition: 'none',
        minWidth: theme.spacing(11.6),
        color: '#9b9b9b',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        fontWeight: '400',
        padding: theme.spacing(0.5),
        borderRadius: '5px',
        border: '1px solid #e4e4e4',
        margin: theme.spacing(.5, 1.3),
        marginLeft: 0,
        '&:hover': {
            background: 'rgba(246,246,246,.5)',
            '& $timeStart': {
                color: ' #6b00b6',
            }
        },
        [theme.breakpoints.down(`${960}`)]: {
            fontSize: theme.spacing(1.2),

            '& $timeStart': {
                fontSize: theme.spacing(1.4),
            },
        },
    },
    timeStart: {
        fontSize: theme.spacing(1.8),
        fontWeight: '500',
        color: '#108f3e',
    }
}));