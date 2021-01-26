import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Card from "../../Components/Card/Card.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardBody from "../../Components/Card/CardBody.js";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
// core components
import styles from "../../marterialsStyles/tableStyle.js";
import { Box, Collapse, IconButton } from "@material-ui/core";

const useStyles = makeStyles(styles);

const TableComponent = (props) => {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes[tableHeaderColor + "TableHeader"]}  >
                        <TableRow className={classes.tableHeadRow} >
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <Row key={key} row={prop} />
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

const useStyless = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    Row: {
        "&:hover": {
            background: '#eee',
            cursor: 'pointer',
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    divFlex: {
        display: 'flex',
        alignItems: 'center',
    },
    textDefault: {
        padding: '12px 8px',
        fontSize: ' 0.9rem',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans - serif",
        fontWeight: 300,
        lineHeight: 1.42857143,
        verticalAlign: 'middle',
        letterSpacing: '0.3px',
    }
}));

function Row(props) {
    const classes = useStyless();
    const table = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow className={`${table.tableHeadRow} ${classes.Row}`} onClick={() => setOpen(!open)}>

                <TableCell className={table.tableCell} align="center" >1</TableCell>
                <TableCell className={table.tableCell} align="center">1464</TableCell>
                <TableCell className={table.tableCell} align="center">The Longest Ride</TableCell>
                <TableCell className={table.tableCell} align="center">5</TableCell>
                <TableCell className={table.tableCell} align="center">
                    <IconButton aria-label="expand row" size="small" >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit  >
                        <Box display="flex" p={2} alignItems="center">
                            <Box mr={4}>
                                <Box height="35vh" width="30vh" style={{ background: 'url(http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.png)', borderRadius: 10 }}>
                                </Box>
                            </Box>
                            <Box pr={3}>

                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Mã Nhóm: </b> <p className={classes.textDefault} style={{ width: '80%' }}>GP01</p>
                                </div>
                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Bí Danh: </b> <p className={classes.textDefault} style={{ width: '80%' }}>13-reasons-why</p>
                                </div>



                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Ngày Khởi Chiếu: </b> <p className={classes.textDefault} style={{ width: '80%' }}>10/010/2020</p>
                                </div>
                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Mô Tả: </b> <p className={classes.textDefault} style={{ width: '80%' }}>Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero a</p>
                                </div>

                            </Box>
                            <Box alignSelf="center"  >
                                <div>

                                    <Tooltip title="Xem lịch chiếu" TransitionComponent={Fade}>
                                        <IconButton color="primary" fontSize="large" style={{ color: '#43a047' }}>
                                            <DateRangeRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <Box my={3}>
                                    <Tooltip title="Chỉnh sửa" TransitionComponent={Fade}>
                                        <IconButton color="inherit" fontSize="large" style={{ color: '#fb8c00' }}>
                                            <EditRoundedIcon />
                                        </IconButton>
                                    </Tooltip>

                                </Box>
                                <div>

                                    <Tooltip title="Xóa" TransitionComponent={Fade}>
                                        <IconButton color="secondary" fontSize="large" style={{ color: '#e53935' }} >
                                            <RemoveCircleOutlineRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
        </>
    );
}


export default function CustomTable(props) {

    return (<div>
        <Card>
            <CardHeader color="primary" style={{ position: 'relative' }}>
                <h3 style={{ display: 'flex', alignItems: 'center' }} ><LocalMoviesRoundedIcon style={{ marginRight: 15 }} /> Danh sách phim</h3>
                <p >
                    số lượng phim hiện tại : 17
                 </p>
                <Tooltip title="Thêm mới">
                    <IconButton fontSize="large" color="primary" style={{

                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        color: '#6b00b6',
                        background: '#fff',
                    }} >
                        <AddRoundedIcon />
                    </IconButton>
                </Tooltip>
            </CardHeader>
            <CardBody>
                <TableComponent

                    tableHeaderColor="primary"
                    tableHead={["No.", "Mã phim", "Tên phim", "Đánh giá", '']}
                    tableData={[
                        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                    ]}
                />
            </CardBody>
        </Card>

    </div>
    );
}

CustomTable.defaultProps = {
    tableHeaderColor: "gray"
};

CustomTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
