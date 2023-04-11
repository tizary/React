import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://newsapi.org',
  timeout: 10000,
});

export default axiosInstance;
