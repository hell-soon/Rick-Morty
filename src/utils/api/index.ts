import axios from 'axios'
import CharacterApi from './services/character'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const api = {
  character: CharacterApi(instance),
}
