import axios from "axios"

export const baseURL = 'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api'

const api = axios.create({
  baseURL
})

export default api
