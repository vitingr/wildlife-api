import { Animals } from '@/modules/http/services/animals'
import { GetAnimalsUseCase } from '.'

export const getAnimalsFactory = () => {
  const repository = new Animals()
  const useCase = new GetAnimalsUseCase(repository)

  return useCase
}
