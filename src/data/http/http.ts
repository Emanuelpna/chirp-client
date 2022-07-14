import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL ?? 'http://localhost:4000/'
})

export const http = {
  get: async <DataModel>(endpoint: string, query?: Record<string, unknown>) => {
    const response = await api.get<DataModel>(endpoint, {
      params: query
    })

    return response.data
  },
  put: async <DataModel>(
    endpoint: string,
    payload?: Record<string, unknown>
  ) => {
    const response = await api.put<DataModel>(endpoint, payload)

    return response.data
  }
}
