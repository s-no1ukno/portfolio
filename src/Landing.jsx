import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    height: '50vh',
    padding: theme.spacing(2, 2, 2, 2),
  },
  header: {
    textAlign: 'center'
  },
  body: {
    margin: theme.spacing(20, 2, 0, 2)
  }
}))

export default function Landing() {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography 
        className={classes.header}
        color="primary"
        component="h1"
        variant="h5">
          Welcome to my Landing Page!
      </Typography>
      <Typography
        className={classes.body}
        color='textPrimary'
        component='p'  
      >
        My name's Jordan! Come on in, stay awhile...let me show you what I can do for you!
      </Typography>
    </Paper>
  )
}