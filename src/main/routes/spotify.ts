import express from "express"
import { auth } from "../spotify/spotify"

export const spotifyRouter = express.Router()

spotifyRouter.use(express.json())

spotifyRouter
  .post("/auth", (req, res) => {
    auth(req.body.token).then(
      data => res.send(data)
    )
  })
