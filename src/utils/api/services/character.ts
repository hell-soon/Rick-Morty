import type { AxiosInstance, AxiosPromise } from 'axios'
import type { Character, FilterParams, Response } from '@/types/models/index'

export default (instance: AxiosInstance) => ({
  getCharacterList(params?: FilterParams): AxiosPromise<Response<Character>> {
    return instance.get('/character', { params })
  },
})
