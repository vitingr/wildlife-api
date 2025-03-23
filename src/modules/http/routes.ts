import { FastifyInstance } from 'fastify'
import { animalsRoutes } from './animals/routes'

export const accountRoutes = (app: FastifyInstance) => {
  app.register(animalsRoutes)
}
