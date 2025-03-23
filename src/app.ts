import 'dotenv/config'

import fastify from 'fastify'

import fastifyCors from '@fastify/cors'
import { animalsRoutes } from './modules/http/animals/routes'

export const app = fastify({
  logger: {
    enabled: true
  }
})

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Cookie'
  ],
  credentials: true,
  exposedHeaders: ['Set-Cookie']
})

app.register(animalsRoutes)

app.get('/', (_, reply) => {
  return reply.send({
    name: 'ifsp',
    status: 'healthy'
  })
})
