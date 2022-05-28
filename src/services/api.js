import axios from 'axios';

//Base URL: https://free.currconv.com/api/v7/
// convert: convert?q=USD_BRL&compact=ultra&apiKey=816e8cb0a3f21a040d3e
const api = axios.create({
  baseURL: 'https://free.currconv.com/api/v7/',
});
export default api;
