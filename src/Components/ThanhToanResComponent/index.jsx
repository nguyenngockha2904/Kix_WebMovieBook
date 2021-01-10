import { Avatar, Button, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AtmIcon from '../../assets/img/AtmIcon.svg';
import CCIcon from '../../assets/img/CCIcon.svg';
import ZaloPayIcon from '../../assets/img/logoCine/zalopay_icon.png';
import { MovieService } from '../../services';
import swal from 'sweetalert';
import { useStyles } from './styles';
const ThanhToanResComponent = (props) => {
    const classes = useStyles();
    const [thanhToan, setThanhToan] = useState(0);
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });
    const { tenPhim, hinhAnh, maLichChieu } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
    const { handleNext } = useMemo(() => {
        return props
    }, [props]);
    let tongTien = useMemo(() => {
        let tt = 0;
        if (listGheDaDat.length !== 0) {
            for (let item of listGheDaDat) {
                tt += item.giaVe;
            }
        }
        return tt;
    }, [listGheDaDat]);

    const renderListGheDaDat = useCallback(() => {
        let list = [];
        if (listGheDaDat.length !== 0) {

            list = listGheDaDat.sort((sp_tieptheo, sp) => {
                return parseInt(sp_tieptheo.stt) - parseInt(sp.stt);
            });
        }
        return list.map((item, index) => {
            return (
                <div className={classes.grouGheDD} key={index}>
                    <div className={`${classes.textDefault} ${classes.textDef}`}>
                        Ghế {item.tenGhe}
                    </div>
                    <div className={classes.timeSub}>{item.loaiGhe.toLowerCase() === "thuong" ? "(thường)" : " (vip)"} </div>{index !== (list.length - 1) ? ',' : ''}
                </div>
            )
        });

    }, [listGheDaDat]);
    const handleChange = useCallback((event) => {
        setThanhToan(parseInt(event.target.value));
    }, []);
    const us = useSelector((state) => {
        return state.qlUser.credentials
    });
    const { email, soDT } = useMemo(() => {
        return us
    }, [us]);
    const handleBuyTicket = useCallback((listGheDaDat, maLichChieu) => () => {
        let taiKhoanNguoiDung = localStorage.getItem('username');

        let danhSachVe = listGheDaDat.map((item) => {
            return {
                maGhe: item.maGhe,
                giaVe: item.giaVe
            }
        });
        const data = {
            maLichChieu,
            danhSachVe,
            taiKhoanNguoiDung,
        };
        if (listGheDaDat.length !== 0) {
            MovieService.datLich(data).then(res => {
                console.log(res.data);
                handleNext(3);
            }).catch(err => {
                console.log(err);
            });
        } else {
            swal({
                title: 'Vui lòng chọn ghế !!',
                text: "Vui lòng chọn ghế để tiếp tục!",
                icon: "info",
            });
        }

    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.divInfoFilm} style={{ marginTop: '5%' }}>
                    <div className={classes.infoFilm}>
                        <div className={classes.contentFilm}>
                            <p className={`${classes.textDefault} ${classes.namePhim}`}>{tenPhim}</p>
                            <div>
                                <div className={classes.general}>C18</div>
                                <span className={classes.timeSub}>91 phút 2d - Phụ Đề</span>
                            </div>
                        </div>
                        <div className={classes.gheContent}>{listGheDaDat.length !== 0 ? renderListGheDaDat() : '...'}
                        </div>
                    </div>
                    <div className={classes.groupImg}>
                        <img src={hinhAnh} alt={tenPhim} className={classes.imgFilm} />
                    </div>
                </div>
                <div className={`${classes.divInfoFilm} ${classes.groupInfo}`}>
                    <div className={classes.timeSub}>Phone</div>
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>{soDT}</div>
                    <div className={classes.line}></div>
                    <div className={classes.timeSub}>Email</div>
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>{email}</div>
                </div>
                <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`} style={{ padding: '0 6%' }}>Phương thức thanh toán</div>
                <div className={`${classes.divInfoFilm} ${classes.groupInfo}`} style={{ marginBottom: '56px', }}>
                    <div className={classes.hinhThucThanhToan}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="Hình Thức Thanh Toán" name="thanhToan" value={thanhToan} onChange={handleChange}>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={0} />
                                    <Avatar src={ZaloPayIcon} variant="rounded" alt="ZaloPayIcon" />
                                </div>} label="Thanh Toán qua ZaloPay" />
                                <div className={classes.line}></div>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={1} />
                                    <Avatar src={CCIcon} variant="rounded" alt="CCIcon" />
                                </div>} label="Visa, Master, JCB" />
                                <div className={classes.line}></div>
                                <FormControlLabel className={classes.textDefault} control={<div className={classes.radioItem}>
                                    <Radio color="primary" value={2} />
                                    <Avatar src={AtmIcon} variant="rounded" alt="AtmIcon" />
                                </div>} label="Qua thẻ ATM nội địa" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.divBottom}>
                    <div className={classes.ItemBottom}>
                        <div className={`${classes.textDefault} ${classes.totalMonney}`} >
                            {(tongTien).toLocaleString()}đ
                        </div>
                    </div>
                    <div className={classes.ItemBottom}>
                        <Button className={classes.btnNext} onClick={handleBuyTicket(listGheDaDat, maLichChieu)}>Đặt vé
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ThanhToanResComponent);