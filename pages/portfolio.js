import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import BaseLayout from '../src/Components/BaseLayout'

const useStyles = makeStyles(theme => ({

  title: {
    marginLeft: theme.spacing(4)
  }
}))

export default function portfolio() {

  const classes = useStyles()

  return (
    <BaseLayout>
      <Typography variant='h2' className={classes.title}>
        Hello from Portfolio Page
      </Typography>
    </BaseLayout>
  )
}
