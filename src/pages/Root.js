import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HomePage from './HomePage';
import AuthorizationPage from './Authorization';
import CommandsPage from './CommandsPage';

import Navbar from '../components/Navbar'
import ScrollTop from '../components/ScrollTop'

import '../styles/Main.css'
import '../styles/Drawer.css'
import '../styles/HomePage.css'
import '../styles/AlternateModal.css'

import {GetUser} from '../functions/GetUser'

const Root = () => {
  let isLogged = false
  
  function RedirectAuth() {
    const url = 'https://discord.com/api/oauth2/authorize?client_id=751630759877672970&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.join'
    window.open(url, '_self')
    return
  }

  return(
    <>
    <Navbar />
    <ScrollTop />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/commands" component={CommandsPage} />
          <Route exact path="/authorization" component={AuthorizationPage} />
          <Route exact path="/callback" component={GetUser} />
          <Route exact path="/login">
            {isLogged ? <Redirect to='/dashboard' /> : RedirectAuth}
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Root;