import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import { BusSolParagraphs } from '../textAssets/BusSolParagraphs'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    height: 'auto',
    padding: theme.spacing(2, 2, 2, 2),
  },
  header: {
    textAlign: 'center',
    color: theme.palette.secondary.dark
  },
  body: {
    margin: theme.spacing(20, 2, 0, 2),
    
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
          Business Solutions Through Web Development
      </Typography>
      <Typography
        className={classes.body}
        color='textPrimary'
        component='p'  
      >
        <BusSolParagraphs />
      </Typography>
    </Paper>
  )
}