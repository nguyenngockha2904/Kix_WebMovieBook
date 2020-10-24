import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    breakpoints: {

    },
    palette: {
        primary: {
            main: '#6b00b6',
        },
    },
    typography: {
        h1: {
            fontSize: 50,
            fontWeight: 600,
            letterSpacing: '1px',
        },
        h2: {
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '1px',
        },
        h4: {
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: '1px',
        }
    },
    spacing: 10,
});

export default theme;