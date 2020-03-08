import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';
import Landing from '../src/Landing'
import ProminentAppBar from '../src/ProminentAppBar'
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
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

export default function Index() {
  const classes = useStyles()
  return (
    <>
      <ProminentAppBar />
      <Container className={classes.root} maxWidth="sm">
        <Box my={4}>
          {/* <Typography variant="h4" component="h1" gutterBottom>
            Welcome to CodeSnow!
          </Typography> */}
          {/* <Link href="/about" color="secondary">
            Go to the about page
          </Link> */}
          <Landing />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
