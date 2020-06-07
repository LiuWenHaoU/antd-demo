// import fetch from 'hife/fetch';
import fetch from './_fetch';
const authKey = '#Authorization#';
let Authorization = localStorage.getItem(authKey); //请求加入用户请求头信息

// let o = 'http://112.74.87.91';
let o = 'http://192.168.0.115';
export const domain = `${o}:9102/hik-mediate/`;
export const origin = o;
// export const domain = 'http://120.79.193.119:9000/mediate-backend/';
// export const domain = 'http://yyyyi.nat123.net/mediate-backend/';
// export const domain = ' http://localhost:9000/mediate-backend/';
export const fetchO = fetch(`${origin}:9002`, {Authorization});

export default fetch(domain, { Authorization });