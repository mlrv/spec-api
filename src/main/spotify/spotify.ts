import SpotifyWebApi from "spotify-web-api-node"
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../env"

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
})

export const auth = (token: string): Promise<{
  accessToken: string,
  refreshToken: string
}> => {
  return spotifyApi.authorizationCodeGrant(token)
    .then(
      res => ({
        accessToken: res.body.access_token,
        refreshToken: res.body.refresh_token
      })
    )
}