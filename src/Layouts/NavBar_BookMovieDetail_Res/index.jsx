import { Button, makeStyles } from '@material-ui/core';
import React, { useMemo } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
const NavBar_BookMovieDetail_Res = (props) => {
    const classes = useStyles();
    const texttitle = useMemo(() => {
        switch (props.activeStep) {
            case 0: {
                return 'Chọn Chỗ Ngồi'
            }
        }
    }, [props.activeStep]);
    return (
        <div className={classes.root}>
            <div className={classes.groupBtnBack}>
                <Button className={classes.btnBack}><ArrowBackIosRoundedIcon style={{ color: '#fff', }} /></Button>
            </div>
            <div className={` ${classes.textDefault} ${classes.titleNav}`}>{texttitle}</div>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#000',
        color: '#fff',
        display: ' flex',
        alignItems: 'center',
        position: 'fixed',
        padding: '10px 0',
        height: '35px',
        top: 0,
        left: 0,
        right: 0,
        zIndex: '5',
        boxShadow: '0 0 4px 0px #fff',
    },
    groupBtnBack: {
        color: '#fff',
        marginLeft: '5px',
    },
    btnBack: {
        padding: 0,
        minWidth: ' 1px',
    },
    titleNav: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: '500',
    },
    textDefault: {
        whiteSpace: 'nowrap',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        color: '#fff',
        fontFamily: 'unset',
        letterSpacing: '0.5px',

    },

}));
export default NavBar_BookMovieDetail_Res;