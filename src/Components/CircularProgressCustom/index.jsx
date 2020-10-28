import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { memo } from 'react';

const CircularProgressCustom = (props) => {
    const classes = useStylesCircularProgress();
    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={100}
                thickness={2.6}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="determinate"

                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                size={100}
                value={props.value}
                thickness={2.6}
                {...props}
            />
            <div className={classes.label}>{props.value / 10}</div>
        </div>
    );
};
const useStylesCircularProgress = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    bottom: {
        color: '#eeeeee91',
    },
    top: {
        color: 'rgb(169 255 68)',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
    label: {
        color: 'rgb(169 255 68)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%,-50%)',
        fontSize: '34px',
    },
}));
export default memo(CircularProgressCustom);