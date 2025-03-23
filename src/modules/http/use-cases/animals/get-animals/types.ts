
import { PaginationReturn } from '@/shared/http/pagination/types'
import { Animal } from '@/shared/types/models/animal'

export interface GetAnimalsUseCaseReturn {
  pagination: PaginationReturn
  animals: Animal[]
}
