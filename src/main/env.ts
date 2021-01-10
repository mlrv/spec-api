import secrets from "../../resources/secrets.json"

const CLIENT_ID = secrets.spotify.client_id
const CLIENT_SECRET = secrets.spotify.client_secret
const REDIRECT_URI = secrets.spotify.redirect_uri
const SERVER_PORT = secrets.spotify.server_port
const SCOPES = secrets.spotify.scopes
const STATE = secrets.spotify.state

export {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SERVER_PORT,
  SCOPES,
  STATE,
}