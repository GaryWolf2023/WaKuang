import axios from "axios";

const instance = axios.create({
    timeout: 5000, // 请求超时时间
    baseURL: ConfigBaseURL,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
})

/**
 * ========================================================
 * 请求拦截器设置
 * ========================================================
 */
instance.interceptors.request.use(config => {
  console.log("发起了请求================以下为请求参数");
  console.log(config);
  return config
})
/**
 * ========================================================
 * 响应拦截器设置:只返回响应后的响应体;
 * ========================================================
 */
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('Response: error', error)
  const msg = error.Message !== undefined ? error.Message : ''
  // alert(msg)
  return Promise.reject(error)
})

/**
 * ========================================================
 * 考虑将axios请求封装为一个函数（暂时无复杂需求，暂时不弄）
 * ========================================================
 */

export default service;

