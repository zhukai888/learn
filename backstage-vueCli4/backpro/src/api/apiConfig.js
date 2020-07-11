/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-15 17:44:46
 */
import axios from 'axios'; // 引入axios
// import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import {
  message
} from 'element-ui';



// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/apis'
} else if (process.env.NODE_ENV == 'production') {
  // axios.defaults.baseURL = 'http://apitest.mscmchina.com/AdminApiV1/';
  axios.defaults.baseURL = 'ssss';

}

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.timeout = 10000;

// 超时处理
axios.interceptors.request.ontimeout = function handleTimeout() {
  message.error('网络似乎开小差了，请再试一次');
  // 取消请求
};


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(data))
      .then(response => {
        resolve(response.data);
      }).catch((err) => {
        reject(err)
      })
  })
}


axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
  })


//响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    var originalRequest = error.config;
    if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1 && !originalRequest._retry) {
      originalRequest._retry = true
      return axios.request(originalRequest);
    }

    return Promise.reject(error.response);
  }
);