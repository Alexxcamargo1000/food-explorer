import axios from 'axios'

const URL: string = import.meta.env.VITE_URL_DATABASE_API

export const api = axios.create({
  baseURL: URL,
})
