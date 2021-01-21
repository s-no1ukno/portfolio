import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// Style Component Imports
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// Local Component Imports
import BaseLayout from '../src/Components/BaseLayout'
import Card from '../src/Components/Portfolio/Card'



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    width: '90%',
    margin: '0 auto',
    marginTop: theme.spacing(2),
    padding: theme.spacing(4)
  },

  title: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.dark
  },

  subText: {
    color: '#fff',
    marginBottom: theme.spacing(4)
  }

}))

export default function portfolio() {

  const classes = useStyles()  

  return (
    <BaseLayout>
      <Typography
        component='h2'
        variant='h3'
        className={classes.title}
      >
        Portfolio
      </Typography>
      <Paper className={classes.root} elevation={10}>
        <Typography
          component='p'
          className={classes.subText}
        >
          Click on any of the portfolio cards to see them in action!
        </Typography>

        <Grid container spacing={3}>
          <Grid item sm={12} md={4}>
            <Card className={classes.grid} id='mpa' />
          </Grid>
          <Grid item sm={12} md={4}>
            <Card className={classes.grid} id='isp' />
          </Grid>
          <Grid item sm={12} md={4}>
            <Card className={classes.grid} id='qr' />
          </Grid>
        </Grid>
      </Paper>
    </BaseLayout>
  )
}
