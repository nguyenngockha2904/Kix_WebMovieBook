import { Avatar, makeStyles, Step, StepButton, Stepper } from '@material-ui/core';
import React, { memo, useMemo } from 'react';
import { useCallback } from 'react';
import avatar from '../../assets/img/Noavatar.svg';
const NavBarBook = (props) => {
    const classes = useStyles();
    const { activeStep, steps, handleNext } = useMemo(() => {
        return props
    }, [props]);
    const handleChooseStep = useCallback((value) => () => {
        if (activeStep !== 3 && activeStep !== value) {
            handleNext(value);
        }
    }, [activeStep]);
    const username = useMemo(() => {
        return localStorage.getItem('username');
    }, [localStorage.getItem('username')]);
    return (
        <div className={classes.navBar}>
            <Stepper activeStep={activeStep} className={classes.groupStep}>
                {steps.map((label, index) => (
                    <Step key={label} className={classes.stepItem} >
                        <StepButton className={classes.textDefault} onClick={handleChooseStep(index)} style={{ color: activeStep === index ? '#fb4226' : '#000000', transition: 'all 0.5s' }}
                        >{label} <div className={classes.lineHover}></div></StepButton>

                    </Step>
                ))}
            </Stepper>
            <div className={classes.groupUser} style={{ marginRight: activeStep === 1 && '24%' }}>
                <Avatar alt="avatarUser" src={avatar} className={classes.avatarUserIcon} />
                <div className={classes.userName}>{username} </div>
            </div>
        </div>
    );
};
const useStyles = makeStyles((theme) => ({
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 5%',
        boxShadow: '3px 0px 7px 3px #80808042',
        zIndex: 99,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
    },
    groupStep: {
        display: 'flex',
        padding: 0,
        '& .MuiStepIcon-text': {
            fill: '#fff',
            fontSize: ' 13px',
            fontFamily: 'SF Medium',
        }
    },
    stepItem: {
        width: '100%',
        whiteSpace: 'nowrap',
        position: 'relative',
        fontFamily: 'SF Medium',
        fontSize: theme.spacing(1.4),
        textTransform: 'uppercase',
        letterSpacing: '0.3px',
        cursor: 'pointer',
        padding: theme.spacing(1.8),
        '&:hover': {
            color: '#fb4226',
        },
        '& .MuiStepLabel-active $lineHover': {
            width: '96%',
        },
        '& .MuiStepLabel-label': {
            fontSize: '13px',
            fontFamily: 'SF Medium',
        },
    },
    lineHover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '0%',
        height: '1px',
        margin: 'auto',
        background: 'rgb(33, 220, 65)',
    },
    groupUser: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarUserIcon: {
        height: theme.spacing(3.5),
        width: theme.spacing(3.5),
        borderRadius: '50%',
        marginRight: theme.spacing(1.5),
    },
    userName: {
        whiteSpace: 'nowrap',
        position: 'relative',
        fontSize: theme.spacing(1.4),
        textTransform: 'capitalize',
        letterSpacing: '0.3px',
    },
    textDefault: {
        color: '#fff',
        whiteSpace: 'nowrap',
        fontFamily: 'SF Medium !important',
        fontSize: theme.spacing(1.4),
        letterSpacing: '1px',
        textTransform: 'capitalize',
    },
}));
export default memo(NavBarBook);