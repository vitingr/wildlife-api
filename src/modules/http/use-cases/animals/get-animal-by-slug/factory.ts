import { Animals } from '@/modules/http/services/animals'
import { GetAnimalBySlugUseCase } from '.'

export const getAnimalBySlugFactory = () => {
  const repository = new Animals()
  const useCase = new GetAnimalBySlugUseCase(repository)

  return useCase
}
