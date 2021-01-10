import express from "express"
import { spotifyRouter } from "./spotify"

export const appRouter = express.Router()

appRouter
  .use('/spotify', spotifyRouter)