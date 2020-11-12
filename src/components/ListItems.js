import React from 'react'
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/Help';
import ComputerIcon from '@material-ui/icons/Computer';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StorageIcon from '@material-ui/icons/Storage';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  divider: {
    backgroundColor: 'gray'
  }
}));

function ListItems({anchor, toggleDrawer}) {
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
        <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.open('https://discord.com/oauth2/authorize?client_id=712785958231080990&scope=bot&permissions=1077234752', '_blank')
          }}
        >
          <ListItemIcon>
            <AddIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary='Adicionar'/>
        </ListItem>
        <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.open('https://discord.gg/wDPvreyZTU', '_blank')
          }}
        >
          <ListItemIcon>
            <HelpIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary='Suporte' />
        </ListItem>
        <ListItem
          button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/'
          }}
        >
          <ListItemIcon>
            <NewReleasesIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary='Recursos' />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
      <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/'
          }}
        >
          <ListItemIcon>
            <HomeIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/commands'
          }}
        >
          <ListItemIcon>
            <ComputerIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary='Comandos' />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
      <ListItem 
          button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/authorization'
          }}
        >
          <ListItemIcon>
            {!isLogged ? <DashboardIcon style={{color: 'white'}} /> : <StorageIcon style={{color: 'white'}} />}
          </ListItemIcon>
            <ListItemText primary={!isLogged ? 'Dashboard' : 'Servidores'} />
          </ListItem>
          {isLogged &&
            <ListItem
              button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/commands'
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon style={{color: 'white'}} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          }
      </List>
    </div>
  )
}

export default ListItems 