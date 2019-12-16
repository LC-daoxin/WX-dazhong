import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
// create an axios instance
const service = axios.create({
  baseURL: '',
  // request timeout
  timeout: 10000
})

// const localStorage = window.localStorage
// request interceptor 请求处理
service.interceptors.request.use(config => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  // const paiToken = localStorage.getItem('token')
  // if (paiToken) {
  // }
  return config
}, error => {
  // Do something with request error
  // 请求错误 状态码 401超时 404 not found
  Toast.clear()
  if (error.response) {
    console.log(error)
    switch (error.response.status) {
      case 400:
        Toast.fail('当前操作引发未知错误，请联系管理员')
        break
      case 401:
        Toast.fail('没有权限访问，请联系管理员')
        break
      case 404:
        Toast.fail('找不到访问的资源')
        break
      case 405:
        Toast.fail('访问失败，请联系管理员')
        break
      default:
        Toast.fail('访问失败，请联系管理员')
        break
    }
  } else {
    Toast.fail('未知错误')
  }
  return Promise.reject(error)
})
// 响应处理
service.interceptors.response.use(res => {
  // 请求成功
  Toast.clear()
  return res.data
}, error => {
  // 响应错误处理
  // http 状态码 500 系统错误 502 系统重启
  Toast.clear()
  if (error.response) {
    switch (error.response.status) {
      case 500:
        Toast.fail('请求服务器被拒绝，请清空浏览器缓存后重试')
        break
      default:
        Toast.fail('访问失败，请联系管理员')
        break
    }
  } else {
    Toast.fail('未知错误')
  }
  return Promise.reject(error)
})
export default service
