import React from 'react'
/* import cors from 'cors' */

import axios from 'axios'
import querystring from 'querystring'
/* import { useCookies } from 'react-cookie'; */

import FetchUserInfo from './FetchUserInfo'
/* import dotenv from 'dotenv' */

export function GetUser() {
/*   dotenv.config() */
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  /* const [cookies, setCookie] = useCookies(['userToken', 'userRefreshToken']); */

  console.log(process.env.REACT_APP_ID)
  console.log(process.env.REACT_APP_SECRET)
  console.log(process.env.REACT_APP_TOKEN)
  console.log(code)

  var config =  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': process.env.REACT_APP_TOKEN
    } 
  }

  var body = {
    body: {
    'client_id': process.env.REACT_APP_ID,
    'client_secret': process.env.REACT_APP_SECRET,
    'grant_type': 'authorization_code',
    'code': code,
    'redirect_uri': 'http://localhost:3000/callback',
    'scope': 'identify'
    }
  }
  

  axios.post('https://discord.com/api/oauth2/token', body, config)
  .then((res) => {
    console.log('sucesso')
  })
  .catch((err) => {
    console.log(err)
  })

  /* const json = response.data
  console.log(response.data) */
/* 
  await setCookie('userToken', json.acess_token)
  await setCookie('userRefreshToken', json.refresh_token) */
/* 
  const user = await FetchUserInfo({ "userToken": json.access_token, "userRefreshToken": json.refresh_token })
  console.log(user.username + '#' + user.discriminator + ' logado com sucesso!') */

 /*  return user */
 return (
   <>Sucesso</>
 )
}