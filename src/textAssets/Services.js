import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 auto'
    }
  },

  title: {
    paddingBottom: theme.spacing(2)
  }
}))

export default function Services() {
  const classes = useStyles()

  return (
    <Paper elevation={10} className={classes.root}>
      <Typography
        component='h2'
        variant='h4'
        className={classes.title}
      >
        Services
      </Typography>

      <Typography
        component='p'
        variant='body1'
      >
        I offer many services, tailored to growing the digital footprint of small businesses. My approach is very modern, and there's not a business model too big or small. I don't charge per hour rates, as I have found that every service deserves a different approach - therefore, after discussing what your business needs are, we can decide on a service plan that will be the most beneficial.
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12} sm={6}>
          <ul>
            <li>Social Media Management</li>
            <li>Splash Page Development/Design</li>
            <li>Contact Forms Integrated to Your Services</li>
            <li>Website Refresh/Add New Functionality</li>
            <li>Server/Database Implementation</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul>
            <li>Deployment</li>
            <li>Upkeep/Management Services</li>
            <li>Web Hosting</li>
            <li>Much More...Get in Touch!</li>
          </ul>
        </Grid>
      </Grid>
      <Typography
        component='p'
        variant='body1'
      >
        If you don't see a service on this list that you are interested in, give me a call anyway!  Chances are that I will be able to help out!  
      </Typography>
      
    </Paper>
  )
}
