import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://explorer-api.onrender.com',
})
