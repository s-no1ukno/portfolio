import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import DraftsIcon from '@material-ui/icons/Drafts';
import MuiLink from '@material-ui/core/Link'

import BaseLayout from '../src/Components/BaseLayout'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  paper: {
    width: '80%',
    margin: '0 auto',
    marginTop: theme.spacing(8),
    color: '#fff',
    background: theme.palette.secondary.dark
  },

  container: {
    width: '80%',
  },

  icon: {
    width: '5rem',
    height: '5rem'
  },

  body: {
    padding: theme.spacing(4),
    margin: '0 auto',
    
  },

  list: {
    listStyleType: 'none',
    color: '#fff'
  },

  listI: {
    color: '#fff'
  }
}))

export default function contact() {

  const myURL = 'https://www.facebook.com/jordan.snow.71',
    busURL = 'https://www.facebook.com/DesignbySnow',
    twitURL = 'https://twitter.com/snowstorm427',
    ghURL = 'https://github.com/s-no1ukno',
    email = 'cjordan.snow@gmail.com'

  const classes = useStyles()
  return (
    <BaseLayout className={classes.root} >
      <Paper elevation={10} className={classes.paper}>
        <Typography
        component='h2'
        variant='h4'
        align='center'
        className={classes.title}
        >
          Forms of Contact
        </Typography>
       
        {/* Start of responsive grid */}
        <Grid container spacing={1} className={classes.container}>
          <Grid item sm={6} md={3}>
            <Typography
              component='h3'
              variant='h5'
              className={classes.body}
              >
                <FacebookIcon className={classes.icon} /> Facebook
            </Typography>
          </Grid>
          <Grid item sm={6} md={3}>
            <ul className={classes.list}>
              <MuiLink href={myURL}>
                <li className={classes.listI}>My Personal Facebook Page</li>
              </MuiLink>
              <hr />
              <MuiLink href={busURL}>
                <li className={classes.listI}>My business' Facebook Page - Snow Development</li>
              </MuiLink>
            </ul>
          </Grid>
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='h5'
              className={classes.body}
            >
              <TwitterIcon className={classes.icon} /> Twitter
            </Typography>
            
          </Grid>
          <Grid item md={3}>
          <ul className={classes.list}>
            <MuiLink href={twitURL} className={classes.listI}>
              <li className={classes.listI}>My Twitter Account</li>
            </MuiLink>
          </ul>
            
          </Grid>
        </Grid>
        
        {/* Second row of container */}
        <Grid container spacing={1} className={classes.container}>
          <Grid item sm={6} md={3}>
            <Typography
              component='h3'
              variant='h5'
              className={classes.body}
              >
                <GitHubIcon className={classes.icon} /> Github
            </Typography>
          </Grid>
          <Grid item sm={6} md={3}>
            <ul className={classes.list}>
              <MuiLink href={ghURL}>
                <li className={classes.listI}>My Github Profile</li>
              </MuiLink>
            </ul>
          </Grid>
          <Grid item md={3}>
            <Typography
              component='h3'
              variant='h5'
              className={classes.body}
            >
              <DraftsIcon className={classes.icon} /> Email
            </Typography>
            
          </Grid>
          <Grid item md={3}>
            <ul className={classes.list}>
              <li className={classes.listI}>cjordan.snow@gmail.com</li>
            </ul>
            
          </Grid>
        </Grid>
        <hr />

        {/* Bottom Paragraph */}
        <Typography
          component='p'
          variant='body1'
          className={classes.body}
        >
          You can also feel free to call my cell at (303) 304-4721. I hope to hear from you soon!
        </Typography>
      </Paper>
    </BaseLayout>
  )
}
