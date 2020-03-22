import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  subtitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    borderBottom: 'solid'
  },

  subtitle2: {
    color: '#fff'
  },

  popout: {
    background: theme.palette.secondary.dark,
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },

  popoutBody: {
    color: '#fff',
    paddingTop: theme.spacing(2)
  }
}))

function BusSolPara1() {
  const classes = useStyles()
  return (
    <div>
      <Typography
        component='h2'
        variant='h5'
        className={classes.subtitle}
      >
        Web to the Rescue!
      </Typography>

      <Typography
        component='p'
        variant='body1'
      >
        I started CodeSnow to offer customized and ideal web solutions to small business owners in Colorado. As a startup myself, I can offer excellent (and fitting) options to push your business to the next level. Whether your business just started out, has been going strong for a year, or even if it has been up and running well for a decade, I guarantee that a new website (or a refreshed one!) will jump up your sales metrics exponentially. 
      </Typography>

      <Typography
        component='h2'
        variant='h5'
        className={classes.subtitle}
      >
        New Website Development
      </Typography>

      <Typography
        component='p'
        variant='body1'
      >
        The decision to create a new website, and start generating an online presence for your business, is a hard one to make. There are so many different options to get your name out there that it can be absolutely overwhelming for someone that isn't very tech-savvy. 
      </Typography>

      <Paper className={classes.popout} elevation={10}>
        <Typography
          component='h3'
          variant='body1'
          className={classes.subtitle2}
        >
          Enter CodeSnow
        </Typography>

        <Typography
          component='p'
          variant='body2'
          className={classes.popoutBody}
        >
          Your business requires a web campaign that is as unique and personal as the hand that built it. You won't ever find a one-price-fits-all approach here - I believe in doing business a little differently. After discussing and agreeing on a direction, CodeSnow will then quote options to accomplish your goals. 
        </Typography>
      </Paper>
    </div>
  )
}

export { BusSolPara1 }