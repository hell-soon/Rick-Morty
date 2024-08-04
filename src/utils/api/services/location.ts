import type { AxiosInstance, AxiosPromise } from 'axios'
import type { FilterParams, Location, Response } from '@/types/models/index'

export default (instance: AxiosInstance) => ({
  getLocationList(params?: FilterParams): AxiosPromise<Response<Location>> {
    return instance.get('/location', { params })
  },
})
