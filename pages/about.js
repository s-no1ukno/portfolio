import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
import Link from '../src/Components/Link';
import Landing from '../src/Components/Landing'
import ProminentAppBar from '../src/Components/ProminentAppBar'
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0)
  },
  container: {
    height: '100vh',
    margin: theme.spacing(0),
  }
}))

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

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ProminentAppBar />
      <Container className={classes.container}>
        <Grid container spacing={3}> 
          <Grid item xs={12} sm={6}>
            <Landing />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Landing /> */}
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </div>
  );
}
