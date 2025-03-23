import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { GeneralErrorHandler } from "../../middlewares/general-error-handler"
import { paginationQueryParamsSchema } from "../pagination/base-pagination-schemas"

type BaseControllerOptions = {
  method: 'post' | 'get' | 'put' | 'patch' | 'delete'
  path: string
  /** @default false (all routes are protected by default) */
  isPublicRoute?: boolean
}

export abstract class BaseController {
  constructor(protected options: BaseControllerOptions) {
    this.options = options
  }

  protected abstract execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void>

  register(app: FastifyInstance) {
    const { method, path, isPublicRoute } = this.options

    app[method](
      path,
      {
        errorHandler: GeneralErrorHandler.handle.bind(GeneralErrorHandler),
      },
      this.execute.bind(this)
    )
  }

  protected getPaginationQuery(request: FastifyRequest) {
    const { page, pageSize } = request.query as {
      page?: string
      pageSize?: string
    }

    const parsedQuery = {
      page: page ? parseInt(page, 10) : undefined,
      pageSize: pageSize ? parseInt(pageSize, 10) : undefined
    }

    const pagination = paginationQueryParamsSchema.parse(parsedQuery)

    return pagination
  }
}
