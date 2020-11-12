import axios from 'axios';

async function FetchUserInfo(cookies) {
  const token = cookies.userToken
  if(!token) return null;

  const response = await axios(`https://discord.com/api/users/@me`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const json = response.data

  const responseGuilds = await axios(`https://discord.com/api/users/@me/guilds`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  json.guilds = responseGuilds.data

  return json
}

export default FetchUserInfo;