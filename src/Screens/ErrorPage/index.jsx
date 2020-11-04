import { Button, makeStyles } from '@material-ui/core';
import React, { Fragment, useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import bgApp from '../../assets/img/bgApp.jpg';
const ErrorPage = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { role } = useMemo(() => {
        return props;
    }, [props]);
    useEffect(() => {
        if (role === 0) {
            setTitle('404 -Không tìm thấy trang !');
        } else {
            setTitle('404 -Không thể truy cập !');
        }

    }, []);
    const handleDangNhap = useCallback(() => {
        if (role === 0) {
            history.replace('/');
        } else {
            history.replace('/dangnhap');
        }

    }, []);
    const setTitle = useCallback((title) => {
        const prevTitle = document.title;
        document.title = title;
        return () => document.title = prevTitle;
    }, []);
    return (
        <div className={classes.root}>
            <div className="container">
                <div className="row">
                    <div className="xs-12 md-6 mx-auto">
                        <div id="countUp">
                            <div className={classes.number}>404</div>
                            <div className="text">{role === 1 ? 'Không thể truy cập!' : 'Không tìm thấy trang !'}</div>
                            <div className="text">{role === 1 ? 'Bạn chưa đăng nhập!' : 'Đường dẫn không tồn tại!'}</div>
                            <div className="text">{role === 1 ? 'Bạn cần phải đăng nhập để truy cập trang này !.' : ''}</div>
                        </div>
                        <div className={classes.groupBtn}>
                            <Button className={classes.btnDangNhap} onClick={handleDangNhap}>{role === 1 ? 'Đến trang đăng nhập' : 'Trở về trang chủ'}</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
const useStyles = makeStyles(() => ({
    root: {
        backgroundImage:
            `url(${bgApp})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
        fontFamily: '"Roboto Mono", "Liberation Mono", Consolas, monospace',
        color: "rgba(255,255,255,.87)",
        '& .container': {
            width: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        "& .mx-auto": { marginLeft: "auto", marginRight: "auto" },
        "& #countUp": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",

            ".text": { fontWeight: 300, textAlign: "center" }
        }
    },
    number: {
        fontSize: "30px",
        fontWeight: 500,
        "+ .text": { margin: "0 0 1rem" }
    },
    groupBtn: {
        width: "100%",
        textAlign: 'center',
        margin: '5% 5px',
    },
    btnDangNhap: {
        minWidth: '1px',
        width: '50%',
        color: '#fff',
        textTransform: 'capitalize',
        background: ' linear-gradient(45deg, #6b00b6, #440074)',
        borderRadius: '6px',
    },

}))
export default ErrorPage;