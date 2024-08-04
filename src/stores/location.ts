import type { FilterParams, Location, Response } from '@/types/models'

//* --- State ----------------------------------------------- *//
interface LocationListState {
  res: Response<Location> | null
  locationList: Location[] | null
  params: FilterParams
  error: unknown
}

//* --- Store ----------------------------------------------- *//
export const useLocationListStore = defineStore('location', {
  state: (): LocationListState => ({
    res: null,
    locationList: null,
    params: {
      page: 1,
    },
    error: null,
  }),

  actions: {
    async fetchLocationList(params?: FilterParams) {
      try {
        const response = await api.location.getLocationList(params)
        this.res = response.data
        this.locationList = response.data.results
      }
      catch (error) {
        this.error = error
      }
    },
  },
})
