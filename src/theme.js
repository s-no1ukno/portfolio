import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#ffb300',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#dedede',
    },
  },
});

export default theme;
