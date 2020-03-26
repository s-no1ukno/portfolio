import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import { BusSolPara1 } from '../textAssets/BusSolParagraphs'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 0, 8, 0),
    height: 'auto',
    padding: theme.spacing(8),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 2, 4, 2)
    }
  },
  header: {
    textAlign: 'center',
    color: theme.palette.secondary.dark
  },
  body: {
    margin: theme.spacing(10, 2, 0, 2),
  }
}))

export default function Landing() {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography 
        className={classes.header}
        color="primary"
        component="h2"
        variant="h4">
          Business Solutions Through Web Development
      </Typography>
      <Typography
        className={classes.body}
        component='p'
      >
        <BusSolPara1 />
      </Typography>
    </Paper>
  )
}