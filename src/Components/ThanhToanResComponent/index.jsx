import { makeStyles } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

const ThanhToanResComponent = () => {
    const classes = useStyles();
    const phongVeInfo = useSelector((state) => {
        return state.qlMovie.PhongVeItemByMaLichChieu
    });
    const listGheDaDat = useSelector((state) => {
        return state.qlMovie.listGheDaDat
    });
    const { tenPhim, hinhAnh } = useMemo(() => {
        return phongVeInfo.thongTinPhim
    }, [phongVeInfo.thongTinPhim]);
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
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>0329457486</div>
                    <div className={classes.line}></div>
                    <div className={classes.timeSub}>Email</div>
                    <div className={`${classes.textDefault} ${classes.namePhim} ${classes.infoText}`}>khanguyen1000@gmail.com</div>
                </div>
            </div>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: '#e4e4e4',
        // '& .MuiAlert-standardWarning': {
        //     boxShadow: ' 0 0 3px 1px #fff',
        // },
    },
    wrapper: {
        height: 'auto',
        marginTop: '55px',
        overflow: 'auto',
    },
    textDefault: {
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },
    namePhim: {
        margin: 0,
        letterSpacing: '0',
        fontFamily: 'SF Medium',
    },
    divInfoFilm: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 5%',
        background: '#fff',
        borderRadius: ' 10px',
        marginBottom: '1px',
    },
    infoFilm: {
        width: '70%',
        padding: '5% 0 5% 5%',
    },
    contentFilm: {

    },
    timeSub: {
        color: '#808080',
        letterSpacing: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(0.9),
        textTransform: 'capitalize',
        fontFamily: 'unset',
    },
    general: {
        marginRight: theme.spacing(0.6),
        backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        color: '#fff',
        fontSize: theme.spacing(1.1),
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.3),
        display: 'inline-block',
        textAlign: 'center',
        minWidth: theme.spacing(2.5),
    },
    gheContent: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5% 0',
    },
    textDef: {
        fontFamily: 'SF Medium',
        color: '#000',
        fontSize: theme.spacing(1),
    },
    grouGheDD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        marginTop: '5px',
    },
    groupImg: {
        width: '30%',
        padding: '5%',
        textAlign: ' center',
        paddingBottom: '7%',
        borderRadius: ' 10px',
    },
    imgFilm: {
        minWidth: '60px',
        maxWidth: '100px',
        width: '100%',
        borderRadius: ' 5px',
    },
    groupInfo: {
        display: "block",
        padding: '3% 5%',
    },
    infoText: {
        letterSpacing: '0.5px',
        margin: '5px 0',
        textTransform: ' lowercase',
        fontSize: '11px',
    },
    line: {

        width: '100%',
        height: '1px',
        borderBottom: ' 0.5px dotted #808080c9',
        margin: '8px auto',

    },
}));
export default ThanhToanResComponent;