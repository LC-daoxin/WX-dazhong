import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: '',
  // request timeout
  timeout: 300000
})
const localStorage = window.localStorage
// request interceptor
service.interceptors.request.use(config => {
  const paiToken = localStorage.getItem('PAI-token')
  console.log(config)
  if (paiToken) {
  }
  return config
}, error => {
  // Do something with request error
  console.log(error)
  Promise.reject(error)
})

export default service
