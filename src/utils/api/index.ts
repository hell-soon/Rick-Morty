import axios from 'axios'
import CharacterApi from './services/character'
import LocationApi from './services/location'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const api = {
  character: CharacterApi(instance),
  location: LocationApi(instance),
}
