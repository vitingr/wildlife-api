import { BaseController } from '@/shared/http/controller/base-controller'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getAnimalsFactory } from '../../use-cases/animals/get-animals/factory'

export class GetAnimalsController extends BaseController {
  private useCase = getAnimalsFactory()

  constructor() {
    super({ method: 'get', path: '/animals' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const pagination = this.getPaginationQuery(request)

    const response = await this.useCase.execute(pagination)

    return reply.status(200).send(response)
  }
}

export const getAnimalsController = new GetAnimalsController()
