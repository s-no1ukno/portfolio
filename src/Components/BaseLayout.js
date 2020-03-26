import React from 'react';
import ProminentAppBar from './ProminentAppBar'
import Copyright from './Copyright'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

  cw: {
    position: 'fixed',
    bottom: '0%'
  }
}))

export default function About(props) {
  const classes = useStyles()

  return (
    <div>
      <ProminentAppBar />
        {props.children}
      <Copyright className={classes.cw}/>
    </div>
  );
}