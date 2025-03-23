import { env } from '@/shared/config/env'
import axios, { AxiosInstance } from 'axios'
import { GetAllAnimalsData, GetAnimalBySlugData } from './types'
import { WithPagination } from '@/shared/http/pagination/types'
import { Animal } from '@/shared/types/models/animal'

export type GetAnimalsReturn = WithPagination<Animal>

export class Animals {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: env.API_BASE_URL,
      headers: {
        'x-api-key': env.API_KEY
      }
    })
  }

  // OBS: ESSA ROTA FOI REMOVIDA DA API ORIGINAL DOS CARAS (POR FAVOR DESCARTAR)
  getAllAnimals = async ({
    paginationParams
  }: GetAllAnimalsData): Promise<GetAnimalsReturn> => {
    try {
      const { data, status } = await this.instance.get('/animals')

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getAllAnimalsErr) {
      console.error({
        getAllAnimalsErrMessage: 'Não foi possível obter todos os animais'
      })

      return {
        data: [],
        pagination: { page: 1, pageCount: 0, pageSize: 0, total: 0 }
      }
    }
  }

  getAnimalBySlug = async ({
    slug
  }: GetAnimalBySlugData): Promise<Animal | undefined> => {
    try {
      console.log(`${env.API_BASE_URL}/animals?name=${slug}`)
      const { data, status } = await this.instance.get(`/animals?name=${slug}`)

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getAllAnimalsErr) {
      console.error({
        getAllAnimalsErrMessage: 'Não foi possível encontrar esse animal'
      })
    }
  }
}
