import { app } from './app'
import { env } from './shared/config/env'

const PORT = env.PORT

app
  .listen({
    port: PORT,
    host: '0.0.0.0'
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running on port ${PORT}`)
  })
