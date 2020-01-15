import axios from 'axios'

const getRequestData = response => response.data

const getErrorData = error => {
  const data = {
    message: error.message,
    status: error.response.status,
    data: error.response.data
  }

  throw data
}

const createApiInstance = url => {
  const api = axios.create({
    baseURL: url,
    timeout: 5000
  })

  api.interceptors.response.use(getRequestData, getErrorData)

  return api
}

export default createApiInstance
