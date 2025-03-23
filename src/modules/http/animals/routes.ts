import { FastifyInstance } from 'fastify'
import { getAnimalsController } from './get-all-animals'
import { getAnimalBySlugController } from './get-animal-by-slug'

export const animalsRoutes = async (app: FastifyInstance) => {
  getAnimalsController.register(app)
  getAnimalBySlugController.register(app)
}
