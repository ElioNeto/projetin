import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import ListItems from './ListItems'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButtom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    margin: '10px'
  }
}));


 function Navbar() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu" 
          onClick={toggleDrawer('left', true)}
        >
          <MenuIcon />
          <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            <ListItems anchor={'left'} toggleDrawer={toggleDrawer}/>
          </SwipeableDrawer>
        </IconButton>
          <Typography variant="h6" className={classes.title}>
            Grove
          </Typography>
          <Button href="/authorization" color="inherit">Dashboard</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
