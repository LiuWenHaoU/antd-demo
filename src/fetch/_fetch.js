'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('es6-promise').polyfill();
const f = require('isomorphic-fetch');
function fetch(domain, headers) {
  return (path, data) =>
    f(urlJoin(domain, uniqePath(path)), formdata(data, headers))
      .then((res) => {
        if (res.ok) return res.json();
        throw res.statusText;
      })
      .then((data) => {
        if (data.code == '10002') {
          // 此处判断登录token是否失效，由此跳转登录页面
          // return window.location.href = 'login.html';
        }
        return data;
      });
}
exports.default = fetch;
function formdata(data, headers) {
  headers = {
    ...headers,
    Authorization: localStorage.getItem('#Authorization#') || '',
  }
  const options = {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  };
  if (headers) {
    options.headers = headers;
  }
  if (data) {
    options.method = 'POST';
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }
  return options;
}
function uniqePath(path) {
  if (path.indexOf('?') >= 0) return path + `&timestamp=${Date.now()}`;
  return path + `?timestamp=${Date.now()}`;
}
function urlJoin(base, path) {
  switch ([base.slice(-1), path.slice(0, 1)].filter((c) => c === '/').length) {
    case 2:
      return base + path.slice(1);
    case 1:
      return base + path;
    default:
      return base + '/' + path;
  }
}
