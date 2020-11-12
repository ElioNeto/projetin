import axios from 'axios'
import querystring from 'querystring'
import { useCookies } from 'react-cookie';

import FetchUserInfo from './FetchUserInfo'
import dotenv from 'dotenv'

async function GetUser() {
  dotenv.config()
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  const [cookies, setCookie] = useCookies(['userToken', 'userRefreshToken']);

  const response = await axios('https://discord.com/api/oauth2/token', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      'client_id': process.env.ID,
      'client_secret': process.env.SECRET,
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': 'http://localhost:3000/callback',
      'scope': 'identify guilds guilds.join'
    })
  })

  const json = response.data
  console.log(response.data)

  await setCookie('userToken', json.acess_token)
  await setCookie('userRefreshToken', json.refresh_token)

  const user = await FetchUserInfo({ "userToken": json.access_token, "userRefreshToken": json.refresh_token })
  console.log(user.username + '#' + user.discriminator + ' logado com sucesso!')

  return user
}

export default GetUser;