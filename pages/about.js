import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Landing from '../src/Components/Landing'
import BaseLayout from '../src/Components/BaseLayout'
import Services from '../src/textAssets/Services'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}))

export default function about() {
  const classes = useStyles()

  return (
    <div>
      <BaseLayout>
        <Container className={classes.root}>
          <Grid container spacing={3}> 
            <Grid item xs={12} sm={6}>
              <Landing />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Placeholder */}
            </Grid>
          </Grid>
          <Services />
        </Container>
      </BaseLayout>
    </div>
  );
}
