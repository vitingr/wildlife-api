import { ControllerError } from '@/shared/middlewares/general-error-handler'

export class AnimalDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Animal does not exist.')
  }
}
