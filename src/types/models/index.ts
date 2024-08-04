import type { Character } from './character'
import type { Location } from './location'
import type { Episode } from './episode'
import type { FilterParams } from './filter'

interface Response<T> {
  info: info
  results: T[]
}

interface info {
  count: number
  pages: number
  next: string
  prev: string
}

export type { Response, Character, Location, Episode, FilterParams }
