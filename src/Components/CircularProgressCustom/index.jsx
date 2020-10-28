import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { memo } from 'react';

const CircularProgressCustom = (props) => {
    const classes = useStylesCircularProgress();
    return (
        <div className={classes.root} style={{ background: `${props.colorBg}` }}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={props.size}
                thickness={props.thickness}
                {...props}
                value={100}
                style={{ color: `${props.colorBottom}` }}
            />
            <CircularProgress
                variant="determinate"

                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                size={props.size}
                value={props.value}
                thickness={props.thickness}
                {...props}
                style={{ color: `${props.colorTop}` }}
            />
            <div className={classes.label} style={{ fontSize: props.fontsizelabel, color: `${props.colorTop}` }}>{props.value / 10}</div>
        </div>
    );
};
const useStylesCircularProgress = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'inline-flex',
        borderRadius: '50%',
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
        fontFamily: 'SF Medium',
    },
}));
export default memo(CircularProgressCustom);