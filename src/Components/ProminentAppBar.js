import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Appbar imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

//Drawer imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewDayOutlinedIcon from '@material-ui/icons/ViewDayOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    cursor: 'pointer'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeader: {
    textAlign: 'center'
  },
  item: {
    '&:hover': {
      background: theme.palette.secondary.dark
    }
    
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const handleClick = (e) => {
    window.location = '/'
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <h2 className={classes.drawerHeader}>CodeSnow</h2>
      <Divider />
      <List>
        {/* {['About', 'Contact Me', 'Portfolio', 'Blog'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem
          button
          className={classes.item}
          onClick={() => window.location = '/about'}
        >
          <ListItemIcon> <PermIdentityOutlinedIcon /> </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem
          button
          className={classes.item}
          onClick={() => window.location = '/contact'}
        >
          <ListItemIcon> <DraftsOutlinedIcon /> </ListItemIcon>
          <ListItemText>Contact Me</ListItemText>
        </ListItem>
        <ListItem
          button
          disabled
          className={classes.item}
          onClick={() => window.location = '/portfolio'}
        >
          <ListItemIcon> <RecentActorsOutlinedIcon /> </ListItemIcon>
          <ListItemText>Portfolio</ListItemText>
        </ListItem>
        <ListItem
          button
          disabled
          className={classes.item}
          onClick={() => window.location = '/blog'}
        >
          <ListItemIcon> <ViewDayOutlinedIcon /> </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
          className={classes.title}
          variant="h5"
          noWrap
          onClick={handleClick}
          >
            CodeSnow!
          </Typography>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
