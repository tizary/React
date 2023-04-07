import axiosInstance from './api';
import apiKey from './apiKey';

export const getRequest = async (search: string, sort: string) => {
  try {
    const response = await axiosInstance.get(
      `v2/everything?q=${search}&sortBy=${sort}&apiKey=${apiKey}`
    );
    console.log(response);
    return response.data.articles;
  } catch (e) {
    console.error(e);
  }
};
