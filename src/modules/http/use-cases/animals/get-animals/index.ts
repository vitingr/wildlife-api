import { PaginationQueryParams } from '@/shared/http/pagination/types'
import { GetAnimalsUseCaseReturn } from './types'
import { Animals } from '@/modules/http/services/animals'

export class GetAnimalsUseCase {
  constructor(private animalsRepository: Animals) {}

  execute = async (
    paginationQueryParams: PaginationQueryParams
  ): Promise<GetAnimalsUseCaseReturn> => {
    const { data, pagination } = await this.animalsRepository.getAllAnimals({
      paginationParams: paginationQueryParams
    })

    return {
      animals: data,
      pagination
    }
  }
}
