import { AnimalDoesNotExistError } from '@/shared/http/exceptions/animals'
import { GetAnimalBySlugUseCaseReturn } from './types'
import { Animals } from '@/modules/http/services/animals'

export class GetAnimalBySlugUseCase {
  constructor(private animalsRepository: Animals) {}

  execute = async (slug: string): Promise<GetAnimalBySlugUseCaseReturn> => {
    const animal = await this.animalsRepository.getAnimalBySlug({ slug })

    if (!animal || animal === undefined) {
      throw new AnimalDoesNotExistError()
    }

    return {
      animal
    }
  }
}
