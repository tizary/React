import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://newsapi.org',
  timeout: 5000,
});

export default axiosInstance;
