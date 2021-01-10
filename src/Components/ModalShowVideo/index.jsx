import { Box, Button, makeStyles } from '@material-ui/core';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconClose from '../../assets/img/iconCloseButton.svg';
import { createAction } from '../../redux/action';
import { HIRE_MODAL_VIDEO } from '../../redux/action/type';
import { useStyles } from './styles';

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