import axios from 'axios'

let URL: string = import.meta.env.VITE_URL_DATABASE_API

if (!URL) {
  URL = 'http://localhost:3333'
}

export const api = axios.create({
  baseURL: URL,
})
