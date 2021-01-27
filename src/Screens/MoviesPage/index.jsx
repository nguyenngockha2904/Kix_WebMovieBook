import React, { useCallback, useMemo, useState } from "react";
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
import CardFooter from '../../Components/Card/CardFooter.js';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import TablePagination from '@material-ui/core/TablePagination';
// core components
import styles from "../../marterialsStyles/tableStyle.js";
import { Box, Button, Collapse, IconButton, Input, TableFooter, TextField } from "@material-ui/core";
import { TablePaginationActions } from '../../Components/TablePagination';
import { useDispatch, useSelector } from "react-redux";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { createAction } from "../../redux/action/index.js";
import { SHOW_MODAL_VIDEO } from "../../redux/action/type.js";
import ModalVideoMovie from '../../Components/ModalShowVideo';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
const useStyles = makeStyles(styles);

const TableComponent = (props) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { tableHead, tableData, tableHeaderColor } = props;
    const handleChangePage = useCallback((event, newPage) => {

        setPage(newPage);
    }, []);
    const emptyRows = useMemo(() => {
        return rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    }, [rowsPerPage, page]);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);

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

                    {(rowsPerPage > 0
                        ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : tableData
                    ).map((item, index) => (
                        <Row key={index} index={index + 1} item={item} />
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
                            colSpan={5}
                            count={15}
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
        </div>
    )
}

const useStylesRow = makeStyles((theme) => ({
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
    divImg: {
        '&:hover $trailerDiv': {
            opacity: 1,
            transition: 'all 0.3s ease',
        }
    },
    trailerDiv: {
        opacity: 0,
    },
    textDefault: {
        padding: '12px 8px',
        fontSize: ' 0.9rem',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans - serif",
        fontWeight: 300,
        lineHeight: 1.42857143,
        verticalAlign: 'middle',
        letterSpacing: '0.3px',
    },
    trailer: {
        color: '#fff',
        border: '1px solid #fff',
    }
}));

function Row(props) {
    const classes = useStylesRow();
    const table = useStyles();
    const dispatch = useDispatch();
    const { item, index } = props;
    const [open, setOpen] = React.useState(false);
    const { maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia } = item;
    const handleShowModalVideo = useCallback((value) => () => {
        dispatch(createAction(SHOW_MODAL_VIDEO, { value, role: 2 }));
    }, []);
    return (
        <>
            <TableRow className={`${table.tableHeadRow} ${classes.Row}`} onClick={() => setOpen(!open)}>

                <TableCell className={table.tableCell} align="center" >{index}</TableCell>
                <TableCell className={table.tableCell} align="center">{maPhim}</TableCell>
                <TableCell className={table.tableCell} align="center">{tenPhim}</TableCell>
                <TableCell className={table.tableCell} align="center"> {danhGia} </TableCell>
                <TableCell className={table.tableCell} align="center">
                    <IconButton aria-label="expand row" size="small" >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit  >
                        <Box display="flex" p={2} alignItems="center" position="relative" >
                            <Box mr={4}>
                                <Box height="35vh" width="30vh" style={{ background: `url(${hinhAnh})`, borderRadius: 10, position: 'relative' }} overflow="hidden" className={classes.divImg} >
                                    <Box position="absolute" top="0" width="100%" height="100%" left="0" bgcolor="rgb(0 0 0 / 53%)" display="flex" alignItems="center" justifyContent="center" className={classes.trailerDiv} >
                                        <IconButton className={classes.trailer} fontSize="large" onClick={handleShowModalVideo(item)}>
                                            <PlayArrowRoundedIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                            <Box pr={8} width="100%">

                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Mã Nhóm: </b> <p className={classes.textDefault} style={{ width: '80%' }}>{maNhom}</p>
                                </div>
                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Bí Danh: </b> <p className={classes.textDefault} style={{ width: '80%' }}>${biDanh}</p>
                                </div>



                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Ngày Khởi Chiếu: </b> <p className={classes.textDefault} style={{ width: '80%' }}>{ngayKhoiChieu}</p>
                                </div>
                                <div className={classes.divFlex}>
                                    <b style={{ width: '20%' }}>Mô Tả: </b> <p className={classes.textDefault} style={{ width: '80%' }}>{moTa}</p>
                                </div>

                            </Box>
                            <Box alignSelf="center" position="absolute" right="42px" >
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

const useStylesModal = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: '0px !important',
        borderRadius: 5,
    },
    iconCard: {
        background: '#fff',
        color: '#43a047',
        padding: 5,
        borderRadius: '50%',
        position: 'absolute',
        right: 0,
        top: 0,
        transform: ' translate(7px, -16px)',
        '&:hover': {
            background: '#fff',
            color: '#43a047',
        }
    },
    formGroup: {
        width: '90%',
        margin: 'auto',
        padding: '5px 0',
        [theme.breakpoints.down(`${907}`)]: {
            width: '90%',
            padding: '3px 0 ',
        },
        [theme.breakpoints.down(`${461}`)]: {
            width: '90%',
        }
    },
    formGroupTwo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down(`${769}`)]: {
            display: 'block',
        }
    },
    formRight: {
        marginLeft: '5px',
        width: '100%',
        [theme.breakpoints.down(`${769}`)]: {
            marginLeft: '0',
        }
    },
    formLeft: {
        marginRight: '5px',
        width: '100%',
        [theme.breakpoints.down(`${769}`)]: {
            marginRight: '0',
        }

    },

    formControl: {
        width: '100%',
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#43a047',
        },
        '& .MuiInput-underline:after': {
            border: 'none',
        },
        '& .MuiInputLabel-formControl': {

            color: '#000',
            fontSize: theme.spacing(1.6),
            textTransform: 'capitalize',
            letterSpacing: '0.5px',
            fontSize: ' 0.8125rem',
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans- serif",
            fontWeight: 300,
            verticalAlign: 'middle',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #43a047',
        },
        '& .MuiInputBase-input': {
            paddingLeft: '10%',
            width: '74%',
            marginRight: 'auto',
            textAlign: 'center',
            fontSize: '15px',
            letterSpacing: '1px',
            color: '#43a047',
        },
        '& .MuiSvgIcon-root': {
            width: '0.7em',
            height: '0.7em',
        },
        [theme.breakpoints.down(`${961}`)]: {

            '& .MuiInputBase-input': {
                fontSize: theme.spacing(1.2),
            },
        },
        [theme.breakpoints.down(`${768}`)]: {
            '& .MuiInputLabel-formControl': {
                fontSize: theme.spacing(1.3),

            },
        },
    },
    inputFile: {

    },
}));
export default function CustomTable(props) {
    const listMovies = data;
    const classes = useStylesModal();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const isShowModalVideoMovie = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.isShow
    });
    const handleClose = () => {
        setOpen(false);
    };
    return (<div>
        <Card>
            <CardHeader color="primary" style={{ position: 'relative' }}>
                <h3 style={{ display: 'flex', alignItems: 'center' }} ><LocalMoviesRoundedIcon style={{ marginRight: 15 }} /> Danh sách phim</h3>
                <p >
                    số lượng phim hiện tại : {listMovies.length}
                </p>
                <Tooltip title="Thêm mới">
                    <IconButton fontSize="large" color="primary" style={{

                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        color: '#6b00b6',
                        background: '#fff',
                    }}
                        onClick={handleOpen}
                    >
                        <AddRoundedIcon />
                    </IconButton>
                </Tooltip>
            </CardHeader>
            <CardBody>
                <TableComponent

                    tableHeaderColor="primary"
                    tableHead={["No.", "Mã phim", "Tên phim", "Đánh giá", '']}
                    tableData={listMovies}
                />
            </CardBody>
        </Card>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            className={classes.modal}
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open} >

                <Card style={{ width: '50%' }}>
                    <CardHeader color="primary" style={{
                        background: "linear-gradient(60deg, #43a047, #43a047)",
                        positon: 'relative',
                        padding: '0 10px',
                    }} >
                        <p style={{
                            fontSize: '20px',
                            letterSpacing: '0.3px',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                        }} >
                            <b><i>Thêm một phim mới</i></b>
                        </p>
                        <Tooltip title="đóng">
                            <IconButton onClick={handleClose} className={classes.iconCard}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Tooltip>


                    </CardHeader>
                    <CardBody style={{
                        height: '60vh',
                        overflow: 'auto'
                    }}>

                        <div className={`${classes.formGroup} ${classes.formGroupTwo}`}>
                            <div className={`${classes.formGroup} ${classes.formLeft}`}>
                                <TextField label="Mã nhóm :" className={`${classes.textDefault} ${classes.formControl}`}
                                // value={userInfo.email}
                                // onChange={handleChange}
                                // name="email"
                                // onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                                />
                                {/* {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>} */}
                            </div>
                            <div className={`${classes.formGroup} ${classes.formRight}`}>
                                <TextField label="Mã phim :" className={`${classes.textDefault} ${classes.formControl}`}
                                // value={userInfo.soDt}
                                // onChange={handleChange}
                                // name="soDt"
                                // onBlur={validateInput(/^\d{10,11}$/)}
                                />
                                {/* {validate.soDt_V && <div className={classes.messageErr}>{validate.soDt_T}</div>} */}
                            </div>
                        </div>
                        <div className={`${classes.formGroup} `}>
                            <TextField label="Tên phim :" className={`${classes.textDefault} ${classes.formControl}`}
                            // value={userInfo.soDt}
                            // onChange={handleChange}
                            // name="soDt"
                            // onBlur={validateInput(/^\d{10,11}$/)}
                            />
                            {/* {validate.soDt_V && <div className={classes.messageErr}>{validate.soDt_T}</div>} */}
                        </div>

                        <div className={`${classes.formGroup}`}>
                            <p>Hình ảnh :</p>
                            <Input className={classes.inputFile} type="file"
                            // value={userInfo.email}
                            // onChange={handleChange}
                            // name="email"
                            // onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                            >
                                hi
                            </Input>
                            {/* {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>} */}
                        </div>
                        <div className={`${classes.formGroup} ${classes.formGroupTwo}`}>
                            <div className={`${classes.formGroup} ${classes.formLeft}`}>
                                <TextField label="Đánh giá :" className={`${classes.textDefault} ${classes.formControl}`}
                                    // value={userInfo.email}
                                    // onChange={handleChange}
                                    name="email"
                                // onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                                />
                                {/* {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>} */}
                            </div>
                            <div className={`${classes.formGroup} ${classes.formRight}`}>
                                <TextField label="Ngày khởi chiếu :" className={`${classes.textDefault} ${classes.formControl}`}
                                    // value={userInfo.soDt}
                                    // onChange={handleChange}
                                    name="soDt"
                                // onBlur={validateInput(/^\d{10,11}$/)}
                                />
                                {/* {validate.soDt_V && <div className={classes.messageErr}>{validate.soDt_T}</div>} */}
                            </div>
                        </div>
                        <div className={`${classes.formGroup}`}>
                            <TextField label="Mô tả :" className={`${classes.textDefault} ${classes.formControl}`}
                                // value={userInfo.email}
                                // onChange={handleChange}
                                name="email"
                            // onBlur={validateInput("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")}
                            />
                            {/* {validate.email_V && <div className={classes.messageErr}>{validate.email_T}</div>} */}
                        </div>

                    </CardBody>
                    <CardFooter >
                        <div className={`${classes.formGroup}`} style={{ textAlign: 'right' }}>
                            <Button variant="contained" color="inherit" style={{ background: '#43a047', textTransform: "capitalize", marginRight: 5, color: '#fff' }} >
                                <i >Thêm </i>
                            </Button>
                            <Button variant="outlined" color="inherit" style={{ color: " #e53935", textTransform: "capitalize" }} >
                                <i >Hủy </i>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>


            </Fade>
        </Modal>
        { isShowModalVideoMovie && <ModalVideoMovie />}
    </div >
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

const data = [
    {
        "maPhim": 1314,
        "tenPhim": "13 Reasons Why",
        "biDanh": "13-reasons-why",
        "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.png",
        "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.fxcbcvxbxc",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2020-10-10T00:00:00",
        "danhGia": 10
    },
    {
        "maPhim": 1329,
        "tenPhim": "dao kinh tom",
        "biDanh": "dao-kinh-tom",
        "trailer": "https://www.youtube.com/embed/IHNzOHi8sJs",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang-12_gp01.jpg",
        "moTa": "Người càng xinh đẹp, càng dễ lừa dối người khác",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2020-10-10T00:00:00",
        "danhGia": 10
    },
    {
        "maPhim": 1344,
        "tenPhim": "Gia dinh",
        "biDanh": "gia-dinh",
        "trailer": "string",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/gia-dinh_gp01.png",
        "moTa": "gfhfghg",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2021-01-19T16:06:30.027",
        "danhGia": 10
    },
    {
        "maPhim": 1359,
        "tenPhim": "Vợ ba",
        "biDanh": "vo-ba",
        "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.jpg",
        "moTa": "Mắt lác quá á á á đau quá ",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2020-10-10T00:00:00",
        "danhGia": 10
    },
    {
        "maPhim": 1374,
        "tenPhim": "Natra Two",
        "biDanh": "natra-two",
        "trailer": "https://www.youtube.com/embed/U-MxFzqU3QA",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.png",
        "moTa": "abcd",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2021-01-16T22:03:02.233",
        "danhGia": 10
    },
    {
        "maPhim": 1389,
        "tenPhim": "Diep Van",
        "biDanh": "diep-van",
        "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/diep-van_gp01.jpg",
        "moTa": "Mắt hút",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2020-04-30T00:00:00",
        "danhGia": 9
    },
    {
        "maPhim": 1404,
        "tenPhim": "Mắt biếc",
        "biDanh": "mat-biec",
        "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/mat-biec_gp01.png",
        "moTa": "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần cậu cơ <3",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2019-07-29T00:00:00",
        "danhGia": 9
    },
]
