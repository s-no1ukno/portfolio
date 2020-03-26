import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#439889',
      main: '#00695c',
      dark: '#003d33'
    },
    secondary: {
      light: '#ffe54c',
      main: '#ffb300',
      dark: '#c68400',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ccc',
    },
    dark: {
      main: '#424858'
    }
  },
});

export default theme;
