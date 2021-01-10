import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => {
    return {
        silder: {
            '& .slick-arrow': {
                zIndex: '10',
                transition: '.2s',
                // display: 'none !important',
                '&::before': {
                    display: 'none !important',
                },
                [theme.breakpoints.down(`${1100}`)]: {
                    display: 'none !important',
                },

            },
            '& .slick-next': {
                right: ' -4%',
                top: '43%',
                transform: 'translate(0, -50%)',
            },
            '& .slick-prev': {
                left: '-25px',
                top: '43%',
                transform: 'translate(-20px,-50%)',
            },
        },
        divGrid: {
            outline: 'none',
            padding: theme.spacing(0, 0.5),

        },
        slickArrow: {
            height: '40px',
        },
    }

});