import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { FaDiscord, FaFlag } from 'react-icons/fa';

import StreamingImage from '../Assets/Streaming.PNG'
import PlaylistImage from '../Assets/Playlist.PNG'

import '../styles/Main.css'
import '../styles/Drawer.css'
import '../styles/HomePage.css'
import '../styles/AlternateModal.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButtom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
    width: '270px',
    backgroundColor: '#7289da',
    textTransform: 'none',
    color: 'white'
  },
  icon: {
    margin: '7px'
  },
  title: {
    flexGrow: 1,
    color: 'white',
    margin: '10px'
  },
  subTitle: {
    color: '#DCDDDE',
    margin: '5px;'
  },
  cardTitle: {
    color: 'white',
    marginBottom: '30px'
  },
  cardSubTitle: {
    color: '#DCDDDE',
    marginBottom: '30px'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


const HomePage = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      /* onClick={toggleDrawer(anchor, false)} */
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* <List>
        {['Adicionar', 'Suporte', 'Recursos', 'Comandos', 'Dashboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><GolfCourseIcon style={{color: 'white'}} /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

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
          <ListItemText primary='Dashboard' />
        </ListItem>
      </List>
    </div>
  );

  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#root');
  
      if(anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return(
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.homeButtom}>
          {children}
        </div>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return(
    <div className="container">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)}><MenuIcon /></MenuIcon>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </IconButton>
            <Typography variant="h6" className={classes.title}>
             Grove
            </Typography>
           <Button href="/authorization" color="inherit">Dashboard</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className="homePageContainer">
        <div className="homePageContent">
          <Typography className={classes.title} variant="h2">
            Grove
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            O Melhor Bot de música do Discord
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            className={classes.margin}
            href="https://discord.com/oauth2/authorize?client_id=712785958231080990&scope=bot&permissions=37047360"
            target="_blank"
            rel="norrefer"
          >
            <FaDiscord className={classes.icon} /> Adicionar ao Discord
          </Button>
          <Button 
            variant="contained" 
            size="large"
            className={classes.margin}
            href="#botRecurses"
          >
            <FaFlag className={classes.icon} /> Ver recursos
          </Button>
        </div>
      </div>
      <div id="botRecurses">
        <div className="leftContent">
          <div className="leftContentText">
            <Typography 
              variant="h3"
              className={classes.cardTitle}
            >
              Streaming
            </Typography>
            <Typography 
              variant="h5"
              className={classes.cardSubTitle}
            >
              Ótima qualidade de streaming,
              suportando músicas, playlists e lives de diversas
              plataformas como <span style={{color: '#c4302b'}}>YouTube</span>, 
              <span style={{color: '#6441a5'}}> Twitch</span>, 
              <span style={{color: '#ff7700'}}> SoundCloud</span>,
              <span style={{color: '#81b71a'}}> Spotify</span> e muito mais!
            </Typography>
          </div>
          <div className="leftContentImage">
            <img 
              src={StreamingImage} 
              alt="Streaming example"
            />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <div className="rightContentImage">
          <img 
            src={PlaylistImage} 
            alt="Playlist example"
          />
        </div>
        <div className="rightContentText">
          <Typography 
            variant="h3"
            className={classes.cardTitle}
          >
            Playlists
          </Typography>
          <Typography 
            variant="h5"
            className={classes.cardSubTitle}
          >
            Carregue todas as suas playlists favoritas
            de uma vez quantas vezes você quiser e sem limite de músicas!
          </Typography>
          <Typography 
            variant="h5"
            className={classes.cardSubTitle}
          >
            OBS: Você pode colocar quantas playlists quiser e
            quantas vezes quiser, de qualquer plataforma de streaming!
          </Typography>
        </div>
      </div>
      <div className="leftContent">
        <div className="leftContentText">
          <Typography 
            variant="h3"
            className={classes.cardTitle}
          >
            Controle pela web
          </Typography>
          <Typography 
            variant="h5"
            className={classes.cardSubTitle}
          >
            Você pode controlar as músicas que estão tocando,
            mover as músicas de posição na fila,
            remover música, tudo isso pelo Discord e pelo site,
            de forma simples, fácil e rápido!
          </Typography>
        </div>
        <div className="leftContentImage">
          <img 
            src={StreamingImage} 
            alt="Streaming example"
          />
        </div>
      </div>
      <ScrollTop {...props}>
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default HomePage;