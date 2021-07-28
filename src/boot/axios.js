import axios from 'axios'
import qs from 'qs'

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json;'
  }
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
