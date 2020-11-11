import React from 'react'
import { useCookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import HomePage from './HomePage';
import AuthorizationPage from './Authorization';
import CommandsPage from './CommandsPage';

import Navbar from '../components/Navbar'

/* import CallBack from '../components/FetchUserInfo'; */

const Root = () => {
  let isLogged = false
  
  function RedirectAuth() {
    const url = 'https://discord.com/api/oauth2/authorize?client_id=751630759877672970&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.join'
    window.open(url, '_self')
    return
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [cookies, setCookie] = useCookies(['userToken', 'userRefreshToken']);

  /* function StartCallBack() {
    CallBack(cookies, setCookie, useQuery())
    return(
      <Redirect to="/" />
    )
  } */

  return(
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/commands" component={CommandsPage} />
        <Route exact path="/authorization" component={AuthorizationPage} />
        <Route exact path="/login">
          {isLogged ? <Redirect to='/dashboard' /> : RedirectAuth}
        </Route>
        <Route exact path="/callback">
          {/* <StartCallBack /> */}
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default Root;