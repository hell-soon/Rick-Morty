export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Point
  location: Point
  image: string
  episode: string[]
  url: string
  created: string
}

interface Point {
  name: string
  url: string
}
