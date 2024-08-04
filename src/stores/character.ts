import type { Character, FilterParams, Response } from '@/types/models'

//* --- State ----------------------------------------------- *//
interface CharacterListState {
  res: Response<Character> | null
  characterList: Character[] | null
  params: FilterParams
  error: unknown
}

//* --- Store ----------------------------------------------- *//
export const useCharacterListStore = defineStore('character', {
  state: (): CharacterListState => ({
    res: null,
    characterList: null,
    params: {
      page: 1,
    },
    error: null,
  }),

  actions: {
    async fetchCharacterList(params?: FilterParams) {
      try {
        const response = await api.character.getCharacterList(params)
        this.res = response.data
        this.characterList = response.data.results
      }
      catch (error) {
        this.error = error
      }
    },
  },
})
