import { makeStyles } from '@material-ui/core';

export const useRowStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
        [theme.breakpoints.down(`${961}`)]: {
            '& $thead': {
                fontSize: ' 13px',
                padding: '1% 1px',
            },
            '& .MuiTableCell-root': {
                fontSize: ' 12px',
            },
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    titleDiv: {
        padding: '0px 10px',
        fontSize: ' 14px',
        letterSpacing: '0.1px',
        fontFamily: 'SF Medium',
        fontSize: ' 16px',
        color: '#000',
        textTransform: ' capitalize',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: ' 12px',
        },
    },
    thead: {
        color: '#000',
        textTransform: ' capitalize',
    }
}));


export const useStylesHistoryBookComponent = makeStyles((theme) => ({
    root: {
        height: '100%',
        background: '#fff',
        minHeight: '450px',
        borderRadius: '10px',
        '& .MuiTableContainer-root': {
            height: '100%',
            '&::-webkit-scrollbar ': {
                width: '0px',
                height: '0px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'rgb(214 214 214)',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#80808080',
                borderRadius: '5px',
            },
        },
        '& .MuiTable-root': {
            height: '100%',
        },
        '& .MuiTableCell-root': {
            padding: 0,
            fontSize: ' 14px',
            letterSpacing: '0.1px',
            fontFamily: 'SF Medium',
            color: 'rgba(0, 0, 0, 0.72)',
            padding: '5px',
        },
        '& $thead': {
            fontSize: ' 17px',
            color: '#000',
            textTransform: ' capitalize',
            padding: '10px',
        },
        [theme.breakpoints.down(`${961}`)]: {
            '& $thead': {
                fontSize: ' 13px',
                padding: '1% 1px',
            },
            '& .MuiTableCell-root': {
                fontSize: ' 12px',
            },
        },
    },
    table: {
        minWidth: 500,
        '& .MuiTablePagination-caption': {
            fontSize: '13px',
        }

    },
    thead: {

    },
    wraper: {
        position: ' absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
    textInfomation: {
        color: '#000',
        fontSize: theme.spacing(1.8),
        textTransform: 'capitalize',
        fontFamily: 'SF Medium',
        letterSpacing: '0.5px',
        marginBottom: '26px',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.3),
        },
    },
    groupBtnDatVe: {

    },
    btnDatVe: {
        minWidth: '1px',
        width: '100%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
        transition: 'all 0.5s',
        [theme.breakpoints.down(`${961}`)]: {
            fontSize: theme.spacing(1.2),
        },
    },
}));