import axios from 'axios'
import querystring from 'querystring'

function FetchUserInfo(cookies) {
  const token = cookies.userToken
  
  if(!token) return null;

  axios({
    method: 'GET',
    url: 'https://discord.com/api/users/@me',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(async (response) => {
    const json = await response.data

    return json
  })    
}

function CallBack(cookies, setCookie, query) {
  console.log(query)

  if(!query.get('code')) return console.log(new Error('NoCodeProvided'))

  axios({
    method: 'POST',
    url: 'https://discord.com/api/oauth2/token',
    data: querystring.stringify({
      'client_id': '751630759877672970',
      'client_secret': 'mosLTWanNmS7A7l6G3Vbff3MhdYX1gCL',
      'grant_type': 'authorization_code',
      'code': query.get('code'),
      'redirect_uri': 'http://localhost:3000/callback',
      'scope': 'identify'
    })
  }).then(async (response) => {
    const json = await response.data

    setCookie('userToken', json.access_token)
    setCookie('userRefreshToken', json.refresh_token)

    FetchUserInfo()

    return console.log(cookies)
  })
}

export default CallBack;