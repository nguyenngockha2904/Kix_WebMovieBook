import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    slider: {
        position: 'relative',
    },
    divTop: {
        position: 'relative',
        minHeight: theme.spacing(30),
        height: '100%',
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Carousel: {
        // overflow: 'hidden',
        '& .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus': {

        },
        '& .slick-arrow': {
            zIndex: '95',

            '&::before': {
                // fontSize: '46px',
                display: 'none !important',
            },
            [theme.breakpoints.down(`${960}`)]: {
                display: 'none !important',
            }
        },
        '& .slick-next': {
            right: '2%',
            top: '50%',
            transform: 'translate(0,-50%)',
        },
        '& .slick-prev': {
            left: '1%',
            top: '50%',
            transform: 'translate(0,-50%)',
        },
        '& .slick-dots': {
            bottom: '14%',
            zIndex: '10',
            '& li ': {
                margin: theme.spacing(0, 0.5),
                '& button': {
                    '&::before': {
                        fontSize: theme.spacing(0),
                        color: '#fff',
                        opacity: 1,
                        transition: '.3s',
                        [theme.breakpoints.up(`${768}`)]: {
                            fontSize: theme.spacing(1),
                        },
                        [theme.breakpoints.up(`${978}`)]: {
                            fontSize: theme.spacing(1.4),
                        }
                    }
                }
            },
            '& li.slick-active': {
                '& button': {
                    '&::before': {
                        color: '#6b00b6',
                    }
                }
            },
            [theme.breakpoints.up(`${978}`)]: {
                bottom: '17%',
            },
            [theme.breakpoints.down(`${960}`)]: {
                display: 'none !important',
            }
        }

    },
    slickArrow: {
        height: '40px',
    },
    slide: {
        position: 'relative',
    },
    img: {
        width: '100%',
    },
    divHover: {
        position: 'relative',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        '& img': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: ' translate(-50%, -50%)',
            borderRadius: '50%',
            border: '2px solid #fff',
            transition: '.3s',
            opacity: 0,
            cursor: 'pointer',
            height: theme.spacing(4),
            width: theme.spacing(4),
            '&:hover': {
                opacity: 0.5,
            },
            [theme.breakpoints.up(`${768}`)]: {
                height: theme.spacing(4.6),
                width: theme.spacing(4.6),
            },
            [theme.breakpoints.up(`${978}`)]: {
                height: theme.spacing(6.5),
                width: theme.spacing(6.5),
            }
        },
        '&:hover img': {
            opacity: 1,
        }
    },
    homeTools: {
        maxWidth: theme.spacing(94),
        margin: 'auto',
        top: '100%',
        height: theme.spacing(8),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: '50%',
        transform: ' translate(-50%, 0%)',
        background: '#fff',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: '3',
        [theme.breakpoints.down(`${970}`)]: {
            display: 'none',
        }
    },
    navItem: {
        padding: theme.spacing(0.5, 1),
        borderRight: '1px solid #80808075',
        width: theme.spacing(14.7),
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    buttonGroup: {
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(0, .8),
        height: '100%',
        alignItems: 'center',
    },
    title: {
        textTransform: 'capitalize',
        fontSize: theme.spacing(1.4),
        width: '80%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    dropdownIcon: {
        width: theme.spacing(1.2),

    },
    PayNav: {
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    },
    buttonPay: {
        textTransform: 'uppercase',
        cursor: 'pointer',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
        borderRadius: theme.spacing(0.5),
        fontSize: theme.spacing(1.3),
        color: '#fff',
        letterSpacing: '0.3px',
        transition: 'all 0.4s',
        padding: '10px 15px',
        width: '100%',
        '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
        }
    },
    divBgDropdown: {
        position: 'fixed',
        bottom: '0',
        top: '0',
        right: '0',
        left: '0',
        background: 'transparent',
        zIndex: '2',
    },
    divContent: {
        position: 'absolute',
        top: '0',
        left: '0',
        background: '#fff',
        width: '200%',
        maxWidth: theme.spacing(34.0),
        transform: ' translate(0, 63px)',
        height: 'auto',
        maxHeight: theme.spacing(15),
        borderRadius: theme.spacing(0.5),
        zIndex: '102',
        boxShadow: '1px 2px 8px 1px #80808094',
        padding: theme.spacing(1.8, 0),
        overflow: 'auto',
        '&::-webkit-scrollbar ': {
            width: '5px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'rgb(214 214 214)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'rgba(136, 136, 136, 0.527)',
            borderRadius: '4px',
        },

    },
    divTabPhim: {
        width: '100%',
        transform: ' translate(0, 83px)',
        maxWidth: theme.spacing(62.6),
        maxHeight: theme.spacing(33.3),
    },
    divContentDate: {
        maxWidth: theme.spacing(16.6),
        maxHeight: theme.spacing(42),
    },
    divContentLast: {
        width: theme.spacing(31.6),
    },
    itemContent: {
        fontSize: theme.spacing(1.4),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: theme.spacing(1, 2.6),
        letterSpacing: theme.spacing(0.05),
        color: '#4a4a4a',
        background: 'transparent',
        transition: 'all .3s',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
            background: '#60c5ef',
            '& $date': {
                color: '#fff',
            },
            '& $day': {
                color: '#fff',
            },
        }
    },
    day: {
        margin: '0',
        color: '#000',
        marginBottom: theme.spacing(0.8),
    },
    date: {
        margin: '0',
        fontSize: theme.spacing(1.2),
        color: '#9e9e9e',
        letterSpacing: theme.spacing(0.07),
    }
})
);