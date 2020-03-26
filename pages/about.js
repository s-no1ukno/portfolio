import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Landing from '../src/Components/Landing'
import BaseLayout from '../src/Components/BaseLayout'
import Services from '../src/textAssets/Services'
import CreateIcon from '@material-ui/icons/Create'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  },

  fab: {
    position: 'fixed',
    bottom: '5%',
    right: '5%'
  }
}))

export default function about() {
  const classes = useStyles()

  return (
    <div>
      <BaseLayout>
        <Container className={classes.root}>
          <Landing />
          {/* <Grid container spacing={3}> 
            <Grid item xs={12} sm={6}>
              <Landing />
            </Grid>
            <Grid item xs={12} sm={6}>
              Placeholder
            </Grid>
          </Grid> */}
          <Services />
        </Container>
        <Fab
          color='primary'
          className={classes.fab}
          href='/contact'
        >
          <CreateIcon />
        </Fab>
      </BaseLayout>
    </div>
  );
}
