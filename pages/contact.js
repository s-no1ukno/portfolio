import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import BaseLayout from '../src/Components/BaseLayout'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },

  paper: {
    width: '80%',
    margin: '0 auto',
    marginTop: theme.spacing(8),
    color: '#fff',
    background: theme.palette.secondary.dark
  }
}))

export default function contact() {

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
      </Paper>
    </BaseLayout>
  )
}
