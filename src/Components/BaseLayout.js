import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import ProminentAppBar from './ProminentAppBar'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Jordan Snow
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About(props) {
  return (
    <div>
      <ProminentAppBar />
      {props.children}
      <Copyright />
    </div>
  );
}