import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing(2)
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
        This is body text...
      </Typography>
      
    </Paper>
  )
}
