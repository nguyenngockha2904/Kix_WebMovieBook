import { makeStyles } from "@material-ui/core";
import bgApp from '../../assets/img/bgApp.jpg';
export const useStyles = makeStyles((theme) => ({
    sideBar: {
        top: 0,
        position: 'sticky',
        height: '100vh',
        // padding: 15,
        background: `#fff url(${bgApp}) 0 0 no-repeat`,
        backgroundPosition: 'top',
    },
    sideBarItem: {
        width: '100%',
        padding: 8,
        color: '#fff',
    },
    btnSide: {
        minWidth: 1,
        minHeight: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: ' transparent',
        boxShadow: ' none',
        '&$activeStep': {
            backgroundColor: '#6b00b6',
            boxShadow: '0 10px 35px #6b00b6b0',
        }
    },
    activeStep: {},
    iconSiderbar: {
        width: '20%',
    },
    textSideBar: {

        width: '90%',
        textTransform: 'capitalize',
        lineHeight: '2.1',
        letterSpacing: 0.5,
        fontWeight: 300,
        textAlign: 'left',
        paddingLeft: 8,
    },
    logo: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: theme.spacing(0.5),
    },
    textTitle: {
        fontSize: ' larger',
        fontWeight: 400,
        letterSpacing: '1px',
        lineHeight: '2.2',
        color: 'rgb(0 0 0)'
    },
    textDefault: {

    },

    appBar: {
        background: 'transparent',
        color: '#000',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
    },
    divFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchGroup: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
    }
})) 