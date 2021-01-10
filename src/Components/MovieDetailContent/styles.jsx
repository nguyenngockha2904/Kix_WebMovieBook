import { makeStyles } from '@material-ui/core';
export
    const useStyles = makeStyles((theme) => ({

        topBg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            filter: 'blur(10px)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backdropFilter: 'brightness(0.5)',
            backgroundPosition: 'center',
        },
        WraperContent: {
            zIndex: 6,
            width: '60%',
            // background: '#ffe9e996',

            // borderTopRightRadius: '33px',
            // borderBottomRightRadius: '33px',
            // boxShadow: '0 0 8px 1px #fff',
            margin: '5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            [theme.breakpoints.down(`${1201}`)]: {
                width: '80%',
            },
            [theme.breakpoints.down(`${1025}`)]: {
                width: '100%',
            },
            [theme.breakpoints.down(`${620}`)]: {
                width: '100%',
                borderRadius: '33px',
                padding: '5%',
            }
        },
        filmInfo: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            [theme.breakpoints.down(`${620}`)]: {
                display: 'block',
            },
        },
        groupImgFilm: {
            position: 'relative',
            width: theme.spacing(21.4),
            height: theme.spacing(32.3),
            marginRight: theme.spacing(1.4),
            '&:hover $groupPlayVideo': {
                opacity: '1',
            },
            [theme.breakpoints.down(`${620}`)]: {
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                height: 'auto',
                margin: 'auto',
                minWidth: '200px',
                minHeight: '100px',
            },


        },
        CircularProgressDiv: {
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'none',
            margin: '5px',
            [theme.breakpoints.down(`${769}`)]: {
                display: 'block',

            },
        },
        groupImgContent: {
            width: '100%',
            height: theme.spacing(32.3),
            borderRadius: '10px',
            boxShadow: '0 0 8px 1px #fff',
            [theme.breakpoints.down(`${620}`)]: {
                height: theme.spacing(28.8),
            },

        },
        imgFilm: {
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            minWidth: '200px',
            minHeight: '100px',
        },
        groupPlayVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.4s',
            [theme.breakpoints.down(`${737}`)]: {
                display: 'none',
            },
        },
        play_videoIcon: {
            minWidth: theme.spacing(1),
            width: theme.spacing(6.9),
            height: theme.spacing(6.9),
            borderRadius: '50%',
            background: '#312f2fa3',
            '&:hover': {
                background: '#312f2f33',
            }

        },
        videoIcon: {
            width: theme.spacing(6.9),
            height: 'auto',
            borderRadius: '50%',
            border: '2px solid #fff',
        },
        filmInfoContent: {
            [theme.breakpoints.down(`${620}`)]: {
                margin: theme.spacing(1, 0),
            },
        },
        defaultText: {
            color: '#fff',
            fontSize: theme.spacing(1.4),
            fontFamily: 'SF Medium',
            letterSpacing: '1px',
            [theme.breakpoints.down(`${960}`)]: {
                fontSize: theme.spacing(1.1),
            },
        },
        GroupName: {
            display: 'flex',
            width: '100%',
            alignItems: 'baseline',
            [theme.breakpoints.down(`${769}`)]: {
                width: '100%',
            },
        },
        general: {
            marginRight: theme.spacing(0.6),
            marginTop: theme.spacing(0.6),
            backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
            color: '#fff',
            fontSize: theme.spacing(1.6),
            borderRadius: theme.spacing(0.5),
            padding: theme.spacing(0.5),
            display: 'inline-block',
            textAlign: 'center',
            minWidth: theme.spacing(3.3),
            [theme.breakpoints.down(`${960}`)]: {
                fontSize: theme.spacing(1.3),
            },
        },
        nameFilm: {
            fontSize: theme.spacing(2.4),
            fontFamily: 'SF Medium',
            color: '#fff',
            whiteSpace: 'pre-wrap',
            width: '90%',
            [theme.breakpoints.down(`${960}`)]: {
                fontSize: theme.spacing(1.6),
            },
        },
        groupBtnPay: {

        },
        BtnPay: {
            fontSize: theme.spacing(1.6),
            borderRadius: theme.spacing(0.4),
            textAlign: 'center',
            background: '0 0',
            padding: theme.spacing(0.6, 1.6),
            textTransform: 'capitalize',
            transition: 'all .2s',
            marginTop: theme.spacing(2.5),
            marginBottom: theme.spacing(2),
            backgroundImage: 'linear-gradient(45deg, #440074,#440074)',
            border: 'none',
            letterSpacing: '0.2px',
            fontFamily: 'SF Medium',
            color: '#fff',
            boxShadow: ' 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            '&:hover': {
                backgroundImage: 'linear-gradient(45deg, #6b00b6, #440074)',
            },
            [theme.breakpoints.down(`${960}`)]: {
                fontSize: theme.spacing(1.2),
            },
            [theme.breakpoints.down(`${620}`)]: {
                margin: theme.spacing(1, 0),
            },
        },
        groupStar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '154px',
        },
        progressBar: {
            width: '50%',
            height: 'auto',
            minWidth: theme.spacing(10),
        },
        rating: {
            [theme.breakpoints.down(`${769}`)]: {
                display: 'none'
            },
        },
        CircularProgress: {
            width: '60px',

        },
        CircularProgressText: {
            color: 'rgb(169 255 68)',
        },
    }))
