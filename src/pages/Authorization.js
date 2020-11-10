import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../styles/HomePage.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  }
}));


const AuthorizationPage = () => {
  const classes = useStyles();

  return(
    <div className="container">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Grove
            </Typography>
           <Button href="/login" color="inherit">Dashboard</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className="homePageContainer">
        <div className="homePageContent">
          <Typography className={classes.title} variant="h2">
            Cookies
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Nós usamos Cookies para melhorar a experiência do usuário...
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            className={classes.margin}
            href="/login"
          >
            Autorizar
          </Button>
          <Button 
            variant="contained" 
            size="large"
            className={classes.margin}
            href="/"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AuthorizationPage;