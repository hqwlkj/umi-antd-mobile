import axios from 'axios';

// 基本配置
axios.defaults.baseURL = 'https://379c-114-86-93-78.jp.ngrok.io/'; //api前缀

const rest = axios.create({
  xsrfCookieName: 'xsrf-token', // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  timeout: 1000, // 如果请求话费了超过 `timeout` 的时间，请求将被中断
});

rest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

rest.interceptors.response.use(
  function (response) {
    return response; // 下节详述
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default rest;
