import { IconButton, makeStyles, useTheme } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from "prop-types";
export const TablePaginationActions = (props) => {
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