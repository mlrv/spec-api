import express from "express"
import { SERVER_PORT } from "./env"
import { appRouter } from "./routes/routes"

// https://github.com/akheron/typera ??

export const app = express()

app.use('/', appRouter)
app.listen(SERVER_PORT)

console.log('Listening...')