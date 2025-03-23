import { PaginationParams } from "@/shared/http/pagination/types";

export interface GetAllAnimalsData {
  paginationParams: PaginationParams
}

export interface GetAnimalBySlugData {
  slug: string
}