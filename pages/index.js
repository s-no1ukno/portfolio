import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import jpgHoriz from '../public/snowglobe.jpg'
import jpgVert from '../public/snowvertical.jpg'

const useStyles = makeStyles(theme => ({

  root: {
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${jpgVert})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },

    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${jpgHoriz})`,
      backgroundSize: '100%',
    },

    overflow: 'hidden',
    margin: '0 auto',
    height: '100vh',
    width: '100vw',
    minWidth: 250
  },

  header: {
    color: theme.palette.primary.light,
    position: 'fixed',
    borderRadius: '20px',
    padding: theme.spacing(2),
    margin: theme.spacing(2),

    [theme.breakpoints.down('md')]: {
      bottom: '5%',
      background: 'rgba(0, 0, 0, 0.6)',
      width: '90vw'
    },

    [theme.breakpoints.up('md')]: {
      top: '20%',
      width: 'auto',
      height: '30vh',
      background: 'transparent'
    }
  },

  header1: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },

  header2: {
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem'
    }
  },

  chevron: {
    position: 'fixed',
    color: theme.palette.primary.light,

    [theme.breakpoints.down('md')]: {
      // visibility: 'hidden'

      width: '5rem',
      height: '5rem',
      bottom: '22%',
      right: '0%'
    },
    
    [theme.breakpoints.up('md')]: {
      width: '10rem',
      height: '10rem',
      right: '0%',
      bottom: '40%',
    },
    

    
  }

}))

export default function Index() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <Typography
          className={classes.header1}
          component='h1'
          variant='h2'
        >
          Jordan Snow
        </Typography>

        <Typography
          className={classes.header2}
          component='h1'
          variant='h2'
        >
          Snow Development
        </Typography>
      </div>

      <MuiLink href='/about'>
        <ChevronRightIcon 
          className={classes.chevron}
        />
      </MuiLink>
    </Container>
  );
}
