import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { useStyles } from './styles';
const CircularProgressCustom = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ background: `${props.colorbg}` }}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={props.size}
                thickness={props.thickness}
                {...props}
                value={100}
                style={{ color: `${props.colorbottom}` }}
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
                style={{ color: `${props.colortop}` }}
            />
            <div className={classes.label} style={{ fontSize: props.fontsizelabel, color: `${props.colortop}` }}>{props.value / 10}</div>
        </div>
    );
};

export default memo(CircularProgressCustom);