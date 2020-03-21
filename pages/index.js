import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link';
import Landing from '../src/Components/Landing'
import ProminentAppBar from '../src/Components/ProminentAppBar'
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    overflow: 'hidden',
    height: '100vh',
    width: '80vw',
    minWidth: 250,
  },

  header: {
    textAlign: 'center',
    background: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    fontWeight: 'bold',
    
    [theme.breakpoints.up('xs')]: {
      marginTop: '10vh',
      fontSize: '4vh',
      paddingTop: theme.spacing(8)
    },

    [theme.breakpoints.up('sm')]: {
      marginTop: '25vh',
      fontSize: '6vw',
      paddingTop: theme.spacing(5),
    },
    
    // borderTop: 'solid',
    // borderColor: theme.palette.secondary.light

  },

  subheader: {
    // paddingBottom: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.primary.main,
    background: theme.palette.secondary.light,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vh',
      padding: theme.spacing(10, 2, 8, 2),
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '4vw',
      padding: theme.spacing(2, 0, 5, 0),
    },
    
    // borderBottom: 'solid',
    // borderColor: theme.palette.secondary.light,
  },

  button: {
    width: '100%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2, 0, 2, 0),
    
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vh'
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '3vw',
    }
  }
}))

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" component="p">
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
    <Container className={classes.root}>
      <div>
        <Typography
          className={classes.header}
          // color='primary'
          component='h1'
          variant='h2'
        >
          Jordan Snow
        </Typography>
        <Typography
          className={classes.subheader}
          component='p'
          variant='h4'
        >
          Web Developer / Web Designer
        </Typography>
      </div>
      <Button className={classes.button} variant='contained' color='primary' href='/about'>
        CodeSnow
      </Button>
      <Copyright className={classes.copyright}/>
    </Container>
  );
}
