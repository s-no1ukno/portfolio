import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// Style Component Imports
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// Local Component Imports
import BaseLayout from '../src/Components/BaseLayout'
import Card from '../src/Components/Portfolio/Card'



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.light,
    width: '90%',
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },

  title: {
    marginLeft: theme.spacing(4)
  }
}))

export default function portfolio() {

  const classes = useStyles()

  // console.log(json.projects.isp);
  

  return (
    <BaseLayout>
      <Container className={classes.root}>
        <Typography variant='h2' className={classes.title}>
          This Area is Under Construction!
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Card id='mpa' />
          </Grid>
          <Grid item>
            {/* Placeholder */}
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  )
}
