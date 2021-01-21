import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import { BusSolPara1 } from '../textAssets/BusSolParagraphs'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 0, 8, 0),
    height: 'auto',
    padding: theme.spacing(8),
    

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 2, 4, 2)
    },

    [theme.breakpoints.up('md')]: {
      background: theme.palette.dark.main,
      color: '#fff',
    },

    [theme.breakpoints.down('md')]: {
      background: theme.palette.background
    }
  },

  header: {
    textAlign: 'center',
    
    [theme.breakpoints.up('md')]: {
      color: theme.palette.secondary.main,
    },

    [theme.breakpoints.down('md')]: {
      color: theme.palette.secondary.dark
    }
  },

  subheader: {
    marginTop: theme.spacing(4)
  },

  list: {
    listStyleType: 'none',
    padding: 0,
  },
  
  body: {
    margin: theme.spacing(10, 2, 0, 2),
  },

  image: {
    width: '100%',
    borderRadius: '25%',
    
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    }
  }
}))

function Stack() {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <img className={classes.image} src='./coding.jpg' />
      <Grid item md={6} sm={12}>
        <Typography
          className={classes.subheader}
          component='h3'
          variant='h5'
          align='center'
        >
          Frontend
        </Typography>

        <Typography
          component='p'
          variant='body2'
          align='center'
        >
          <ul className={classes.list}>
            <li>Vanilla HTML/CSS/JS</li>
            <li>React</li>
            <li>Material UI</li>
            <li>Bootstrap 4</li>
          </ul>
        </Typography>
      </Grid>

      <Grid item md={6} sm={12}>
        <Typography
          className={classes.subheader}
          component='h3'
          variant='h5'
          align='center'
        >
          Backend
        </Typography>
        <Typography
          component='p'
          variant='body2'
          align='center'
        >
          <ul className={classes.list}>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Monk/Mongoose</li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function TechStack() {
  const classes = useStyles()

  return (
    <Paper
      elevation={3}
      className={classes.root}
    >
      <Typography 
        className={classes.header}
        component="h2"
        variant="h4">
          Tech Stack Experience
      </Typography>
      <Stack />
    </Paper>
  )
}