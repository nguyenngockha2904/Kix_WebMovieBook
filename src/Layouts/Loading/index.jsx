import { Avatar, Fab, makeStyles, useTheme, Zoom } from '@material-ui/core';
import React, { memo, useMemo } from 'react';
import logoLight from '../../assets/img/logoCine/LogoLight.jpg';
const useStyles = makeStyles(() => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '86',
    },
    logoLight: {
        animation: 'shake 1s linear infinite',
        width: 100,
        height: 100,
    }
}));
const Loading = () => {
    const classes = useStyles();
    const theme = useTheme();
    const transitionDuration = useMemo(() => {
        return {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        }
    });
    return (
        <div className={classes.root}
        >
            <Zoom
                in={true}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${transitionDuration.exit}ms`,
                }}
                unmountOnExit
            >
                <Avatar variant="square" src={logoLight} className={classes.logoLight} />
            </Zoom>
        </div>
    );
};

export default memo(Loading);