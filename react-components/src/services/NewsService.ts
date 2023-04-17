import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiKey from './apiKey';

interface DataApiItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

interface DataApiObj {
  length: number;
  status: string;
  totalresult: number;
  articles: DataApiItem[];
}

export const newsAPI = createApi({
  reducerPath: 'newsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://newsapi.org/v2' }),
  endpoints: (builder) => ({
    getAllNews: builder.query<DataApiObj, { search: string; sort: string }>({
      query: (arg) => {
        const { search, sort } = arg;
        return {
          url: `everything?q=${search}&sortBy=${sort}&apiKey=${apiKey}`,
          params: { search, sort },
        };
      },
    }),
  }),
});

export const { useGetAllNewsQuery } = newsAPI;
