import axios from 'axios';

// https://www.kancloud.cn/yunye/axios/234845 文档
let ajax = axios.create({
  // baseURL: 'http://192.168.1.62:3333/', // 请求地址
  timeout: 60000, // 请求超时的毫秒数(0 表示无超时时间)
  retry:3, // 请求失败重新请求次数
  // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, // 设置headers 信息
  withCredentials: true,  // 是否携带cookie信息
  // changeOrigin:true, // 解决跨域   服务器的请求头不能为 *  header("Access-Control-Allow-Origin", "http://192.168.0.1:3000");
});

// 添加请求拦截器
ajax.interceptors.request.use( config => {
    // 在发送请求之前做些什么
    return config;
  }, error => {
     console.error('request  error',error)
    // 对请求错误做些什么
    return Promise.reject([error]);
  });

// 添加响应拦截器
ajax.interceptors.response.use( response => {
    // 将数据统一处理并返回
    let a = response.data || {}
    a = Object.assign(a, {
      $response: {
        status: response.status,
        statusText: response.statusText,
        headers: Object.assign({}, response.headers)
      }
    }, {$ok: true})
    return a;
  }, error => {
    console.error('response  error',error.response)
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        // 需要登录
        case 401:
          
          // if(window.location.pathname !== '/login'){
          //   window.location.href='/login';
          // }
          
          break
        case 404:
          // console.error(404)
          break
      }
    }

    return Promise.reject([error]);
  });
export default ajax