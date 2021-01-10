import { Box, Grid, makeStyles, withWidth } from '@material-ui/core';
import React, { Fragment, memo } from 'react';
//#region import logo
import cgvLogo from '../../assets/img/logoCine/cgv_logo.png';
import bhdLogo from '../../assets/img/logoCine/BHD_logo.png';
import galaxyLogo from '../../assets/img/logoCine/galaxy_logo.png';
import s3Logo from '../../assets/img/logoCine/s3img_logo.png';
import lotteLogo from '../../assets/img/logoCine/lotte_logo.png';
import megaLogo from '../../assets/img/logoCine/megaLogo.png';
import betaLogo from '../../assets/img/logoCine/bt_logo.jpg';
import ddcLogo from '../../assets/img/logoCine/DDC_logo.png';
import touchLogo from '../../assets/img/logoCine/TOUCH_logo.png';
import cnxLogo from '../../assets/img/logoCine/cnx_logo.jpg';
import startLogo from '../../assets/img/logoCine/STARLIGHT_logo.png';
import dCineLogo from '../../assets/img/logoCine/Dcine_logo.jpg';
import zaloPayLogo from '../../assets/img/logoCine/zalopay_icon.png';
import payooLogo from '../../assets/img/logoCine/payoo_logo.jpg';
import vcbLogo from '../../assets/img/logoCine/VCB_logo.png';
import agrlogo from '../../assets/img/logoCine/AGRIBANK_logo.png';
import vtbLogo from '../../assets/img/logoCine/VIETTINBANK_logo.png';
import ivbLogo from '../../assets/img/logoCine/IVB_logo.png';
import go123Logo from '../../assets/img/logoCine/123go_logo.png';
import laBanLogo from '../../assets/img/logoCine/laban_logo.png';
import appleLogo from '../../assets/img/logoCine/apple-logo.png';
import androidLogo from '../../assets/img/logoCine/android-logo.png';
import fbLogo from '../../assets/img/logoCine/facebook-logo.png';
import zaloLogo from '../../assets/img/logoCine/zalo-logo.png';
import zionLogo from '../../assets/img/logoCine/zion-logo.jpg';
import imgFooter from '../../assets/img/logoCine/imgFooter.png';
import { useStyles } from './styles';
//#endregion


const Footer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.groupFooter}>
                <div className={classes.divTop}>
                    <Grid container className={classes.Container}>
                        <Grid item sm={4} className={classes.navItem}>
                            <div className={classes.title}>Kix</div>
                            <Box display="flex" justifyContent="between">
                                <div style={{ width: '100%' }}>
                                    <div className={`${classes.contentD} ${classes.contentSubtitle}`}>FAQ</div>
                                    <div className={`${classes.contentD} ${classes.contentSubtitle}`}>Brand Guidelines</div>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div className={`${classes.contentD} ${classes.contentSubtitle}`}>Thoả thuận sử dụng</div>
                                    <div className={`${classes.contentD} ${classes.contentSubtitle}`}>Chính sách bảo mật</div>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item sm={4} className={classes.navItem}>
                            <div className={classes.title}>Đối tác</div>
                            <div className={classes.groupDoiTac}>
                                <img src={cgvLogo} alt="cgvLogo" className={classes.logoDoiTac} />
                                <img src={bhdLogo} alt="bhdLogo" className={classes.logoDoiTac} />
                                <img src={galaxyLogo} alt="galaxyLogo" className={classes.logoDoiTac} />
                                <img src={s3Logo} alt="s3Logo" className={classes.logoDoiTac} />
                                <img src={lotteLogo} alt="lotteLogo" className={classes.logoDoiTac} />
                            </div>
                            <div className={classes.groupDoiTac}>
                                <img src={megaLogo} alt="megaLogo" className={classes.logoDoiTac} />
                                <img src={betaLogo} alt="betaLogo" className={classes.logoDoiTac} />
                                <img src={ddcLogo} alt="ddcLogo" className={classes.logoDoiTac} />
                                <img src={touchLogo} alt="touchLogo" className={classes.logoDoiTac} />
                                <img src={cnxLogo} alt="cnxLogo" className={classes.logoDoiTac} />
                            </div>
                            <div className={classes.groupDoiTac}>
                                <img src={startLogo} alt="startLogo" className={classes.logoDoiTac} />
                                <img src={dCineLogo} alt="dCineLogo" className={classes.logoDoiTac} />
                                <img src={zaloPayLogo} alt="zaloPayLogo" className={classes.logoDoiTac} />
                                <img src={payooLogo} alt="payooLogo" className={classes.logoDoiTac} />
                                <img src={vcbLogo} alt="vcbLogo" className={classes.logoDoiTac} />
                            </div>
                            <div className={classes.groupDoiTac}>
                                <img src={agrlogo} alt="agrlogo" className={classes.logoDoiTac} />
                                <img src={vtbLogo} alt="vtbLogo" className={classes.logoDoiTac} />
                                <img src={ivbLogo} alt="ivbLogo" className={classes.logoDoiTac} />
                                <img src={go123Logo} alt="go123Logo" className={classes.logoDoiTac} />
                                <img src={laBanLogo} alt="laBanLogo" className={classes.logoDoiTac} />
                            </div>
                        </Grid>
                        <Grid item sm={4} className={classes.navItem}>
                            <Box display="flex" justifyContent="space-evenly">
                                <Box textAlign="center">
                                    <div className={classes.title}>Mobile App</div>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="54px">
                                        <img src={appleLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                                        <img src={androidLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                                    </Box>
                                </Box>
                                <Box textAlign="center">
                                    <div className={classes.title}>Social</div>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="54px">
                                        <img src={fbLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                                        <img src={zaloLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} width="100%" className={`${classes.navItem} ${classes.navItemResponsive}`} >
                            <Box display="flex" justifyContent="space-evenly" width="100%" alignItems="center">
                                <div className={`${classes.contentD} ${classes.contentSubtitle}`}>Thoả thuận sử dụng</div>
                                <div className={`${classes.contentD} ${classes.contentSubtitle}`}>Chính sách bảo mật</div>
                            </Box>
                        </Grid>
                        <Grid item xs={6} width="100%" className={`${classes.navItem} ${classes.navItemResponsive}`}  >
                            <Box display="flex" justifyContent="center" alignItems="center" height="54px">
                                <img src={fbLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                                <img src={zaloLogo} alt="logo" className={`${classes.logoDoiTac} ${classes.logoSocial}`} />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.divBottom}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={2} className={classes.gridCenter}>
                            <img src={zionLogo} alt="zionLogo" className={classes.logoBottom1} />
                        </Grid>
                        <Grid item xs={12} sm={7} className={classes.gridCenter}>
                            <div className={classes.title}>
                                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                            </div>
                            <div className={classes.contentD}>
                                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                            </div>
                            <div className={classes.contentD}>
                                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                            </div>
                            <div className={classes.contentD}>
                                Số Điện Thoại (Hotline): 0329457486
                            </div>
                            <Box className={`${classes.contentD} ${classes.gridEmail}`} display="flex">
                                Email:
                            <Box className={classes.subtitle} ml={1}>
                                    khanguyen1000@gmail.com</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box width="100%" textAlign="right" className={classes.gridCenter}>
                                <img src={imgFooter} alt="imgFooter" className={classes.logoBottom2} />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};
export default memo(Footer);