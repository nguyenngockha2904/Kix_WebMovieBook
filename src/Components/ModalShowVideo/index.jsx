import { Box, Button, makeStyles } from '@material-ui/core';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconClose from '../../assets/img/iconCloseButton.svg';
import { createAction } from '../../redux/action';
import { HIRE_MODAL_VIDEO } from '../../redux/action/type';
const useStyles = makeStyles((theme) => ({
    wapper: {
        position: 'fixed',
        background: '#efefefa6',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '98',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgRoot: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'transparent',
    },
    root: {
        zIndex: '2',
        background: '#fffffff2',
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5.4),
    },
    divH: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(2, 1),
        alignItems: 'center',
    },
    title: {
        fontFamily: 'SF Text Regular',
        letterSpacing: '0.5px',
        textTransform: 'capitalize',
        width: '100%',
        marginLeft: theme.spacing(2),
    },
    buttonClose: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none !important',
        width: '100%',
        maxWidth: theme.spacing(2),
        '&:hover': {
            background: 'transparent',
        }
    },
    iconClose: {
        width: theme.spacing(1.4),
    },
    divBody: {

    },
    video: {
        borderRadius: theme.spacing(1.2),
        margin: theme.spacing(4),
        marginTop: 0,
    }
}));

const backDrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const ModalVideoMovie = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleHireModal = useCallback(() => {
        dispatch(createAction(HIRE_MODAL_VIDEO, { value: {} }));
    }, []);
    const item = useSelector((state) => {
        return state.qlMovie.ModalVideoMovie.value
    });
    const { tenPhim, trailer } = useMemo(() => {
        return item
    }, []);
    return (
        <div className={classes.wapper}
        >
            <div className={classes.bgRoot} onClick={handleHireModal}>
            </div>
            <div className={classes.root}>
                <div className={classes.divH}>
                    <div className={classes.title}>{tenPhim}</div>
                    <div>
                        <Button variant="contained"
                            color="inherit"
                            className={classes.buttonClose}
                            onClick={handleHireModal}
                        >
                            <img src={iconClose} alt="iconClose"
                                className={classes.iconClose} />
                        </Button>
                    </div>
                </div>
                <div className={classes.divBody}>
                    <iframe width="560" height="315" src={trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.video}></iframe>
                </div>
            </div>
        </div>

    );
};

export default memo(ModalVideoMovie);