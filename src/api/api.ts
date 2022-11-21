import Axios, { AxiosRequestConfig } from 'axios'

export const API = {
  getRandomImages() {
    const config: AxiosRequestConfig = {
      url: 'https://api.unsplash.com/photos/random',
      method: 'get',
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
        count: 30,
      },
    }

    return Axios(config)
  },
}
