import axios from './axios.js'

export default {
  /**
   * http get 请求
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  get: function (url, params) {
    return axios.get(url, { params: params }).then( data =>[null, data]).catch( err => [err]);
  },
  /**
   * http post 请求
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  post: function (url, params) {
    return axios.post(url, params).then( data =>[null, data]).catch( err => [err]);
  },
  /**
   * http delete 请求
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  delete: function (url) {
    return axios.delete(url).then( data =>[null, data]).catch( err => [err]);
  },
  /**
   * http put 请求
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  put: function (url, params) {
    return axios.put(url, params).then( data =>[null, data]).catch( err => [err]);
  }
}
