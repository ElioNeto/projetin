import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export function ListItems({anchor, toggleDrawer}) {
  const classes = useStyles();
  const isLogged = false
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItem button>
          <ListItemIcon>
            <GolfCourseIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText 
            primary='Adicionar' 
            onClick={(e) => {
              e.preventDefault();
              alert('Adicionar')
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GolfCourseIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText 
            primary='Suporte' 
            onClick={(e) => {
              e.preventDefault();
              alert('Suporte')
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GolfCourseIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText 
            primary='Recursos' 
            onClick={(e) => {
              e.preventDefault();
              alert('Recursos')
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GolfCourseIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText 
            primary='Comandos' 
            onClick={(e) => {
              e.preventDefault();
              alert('Comandos')
            }}
          />
        </ListItem>
        <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/authorization'
          }}
        >
          <ListItemIcon>
            <GolfCourseIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary={!isLogged ? 'Dashboard' : 'Servidores'} />
        </ListItem>
      </List>
    </div>
  )
}

/* export default ListItem */


/* 
const list = (anchor) => (
    
  );
*/