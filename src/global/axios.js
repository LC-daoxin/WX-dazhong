import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
// create an axios instance
const service = axios.create({
  baseURL: '',
  // request timeout
  timeout: 300000
})
const localStorage = window.localStorage
// request interceptor 请求处理
service.interceptors.request.use(config => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  const paiToken = localStorage.getItem('PAI-token')
  console.log(config)
  if (paiToken) {
  }
  return config
}, error => {
  // Do something with request error
  // 请求错误 状态码 401超时 404 not found
  console.log('request' + error)
  return Promise.reject(error)
})
// 响应处理
service.interceptors.response.use(res => {
  console.log(res)
  Toast.clear()
  return res
}, error => {
  // 响应错误处理
  // http 状态码 500 系统错误 502 系统重启
  console.log('response' + error)
  Toast.clear()
  return Promise.reject(error)
})
export default service
