
import React, { memo, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Box, Button, Collapse, TableHead, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../redux/action';
import { SET_REQUEST_PAGE } from '../../redux/action/type';
import { useHistory } from 'react-router-dom';
const useRowStyles = makeStyles((theme) => ({
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
const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const Row = (props) => {
    const { row } = useMemo(() => {
        return props
    }, []);
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${(d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}.${d.getDate() > 9 ? d.getDate() : ('0' + d.getDate())}.${d.getFullYear()} -  ${d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}:${d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}`;
        return date;
    }, []);
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="center">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="center" className={classes.thead}>{row.tenPhim}</TableCell>
                <TableCell align="center">{changeFormatDate(row.ngayDat)}</TableCell>
                <TableCell align="center">{row.maVe}</TableCell>
                <TableCell align="center">{row.giaVe.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={0.3}>
                            <div className={classes.titleDiv}>
                                Danh Sách ghế đặt
                            </div>
                            <Table size="small" aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center" className={classes.thead}>Mã ghế</StyledTableCell>
                                        <StyledTableCell align="center" className={classes.thead}>Tên ghế</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.danhSachGhe.map((item, index) => (
                                        <StyledTableRow key={item.maGhe} style={{ borderBottom: index === (row.danhSachGhe.length - 1) && 'unset' }}>
                                            <StyledTableCell align="center">
                                                {item.maGhe}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{item.tenGhe}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

//#region TablePaginationActions 
const TablePaginationActions = (props) => {
    const classes = useStylesTablePaginationActions();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = useMemo(() => {
        return props
    }, [props]);

    const handleFirstPageButtonClick = useCallback((event) => {
        onChangePage(event, 0);
    }, []);

    const handleBackButtonClick = useCallback((event) => {
        onChangePage(event, page - 1);
    }, [page]);

    const handleNextButtonClick = useCallback((event) => {
        onChangePage(event, page + 1);
    }, [page]);

    const handleLastPageButtonClick = useCallback((event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }, [count, rowsPerPage]);

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

const useStylesTablePaginationActions = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),

    },
}));
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
//#endregion


const HistoryBookComponent = () => {
    const classes = useStylesHistoryBookComponent();
    const dispatch = useDispatch();
    const history = useHistory();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const rows = useSelector((state) => {
        return state.qlUser.listHistory
    });
    const emptyRows = useMemo(() => {
        return rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    }, [rowsPerPage, page]);

    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    }, []);

    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);
    const handleGoToDatVe = useCallback(() => {
        dispatch(createAction(SET_REQUEST_PAGE, 2));
        history.replace('/');
    }, []);
    return (
        <div className={classes.root}>
            {rows.length !== 0 ? <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="  table" style={{
                    height: '500px',
                    maxHeight: '500px'
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center" className={classes.thead}>Tên phim</TableCell>
                            <TableCell align="center" className={classes.thead}>Ngày đặt</TableCell>
                            <TableCell align="center" className={classes.thead}> Mã Vé</TableCell>
                            <TableCell align="center" className={classes.thead}>Giá vé</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <Row key={row.maVe} row={row} />
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={12}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                labelRowsPerPage="số vé trên trang"
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer> :
                <div className={classes.wraper}>
                    <div className={classes.textInfomation}>
                        Không có vé nào cả !
                    </div>
                    <div className={classes.groupBtnDatVe}>
                        <Button className={classes.btnDatVe} onClick={handleGoToDatVe}>Đặt vé ngay</Button>
                    </div>
                </div>}
        </div>


    );
}
const useStylesHistoryBookComponent = makeStyles((theme) => ({
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
export default memo(HistoryBookComponent);