import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gif from '../../../public/MealPlanner.gif'

const json = require('./portfolio.json')


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  const { projects } = json
  const { id } = props
  console.log(projects[id].name);
  
  
    
  return (
    <Card className={classes.root} elevation={15}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={projects[id].media}
          title={projects[id].name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projects[id].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {projects[id].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;