import z from 'zod'

import { paginationQueryParamsSchema } from './base-pagination-schemas'

export type PaginationParams = {
  page: number
  pageSize: number
}

export interface PaginationReturn {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type WithPagination<T> = {
  pagination: PaginationReturn
  data: T[]
}

export interface PaginationQueryParams
  extends z.infer<typeof paginationQueryParamsSchema> {}
