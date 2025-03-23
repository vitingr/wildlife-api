import { BaseController } from '@/shared/http/controller/base-controller'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getAnimalBySlugParamsSchema } from './schemas'
import { getAnimalBySlugFactory } from '../../use-cases/animals/get-animal-by-slug/factory'

export class GetAnimalBySlugController extends BaseController {
  private useCase = getAnimalBySlugFactory()

  constructor() {
    super({ method: 'get', path: '/animals/:slug' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { slug } = getAnimalBySlugParamsSchema.parse(request.params)

      const response = await this.useCase.execute(slug)

      return reply.status(200).send(response)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error during validation or use case execution:', err)
        return reply
          .status(400)
          .send({ message: 'Invalid request format', details: err.message })
      } else {
        console.error('An unknown error occurred:', err)
        return reply
          .status(400)
          .send({ message: 'Invalid request format', details: 'Unknown error' })
      }
    }
  }
}

export const getAnimalBySlugController = new GetAnimalBySlugController()
