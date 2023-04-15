import './Home.scss';
import { Search } from '../components/Search/Search';
import { useEffect, useState } from 'react';
import { Sort } from '../components/Sort/Sort';
import { CardsList } from '../components/CardsList/CardsList';
import CardSkeleton from '../components/CardSkeleton/CardSkeleton';
import apiKey from '../services/apiKey';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { saveInfoApi } from '../store/appSlice';
import axiosInstance from '../services/api';

export interface DataApi {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const Home = function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  const searchValue = useSelector((state: RootState) => state.rootReducer.searchValue);
  const searchArr = useSelector((state: RootState) => state.rootReducer.searchArr);
  const sortValue = useSelector((state: RootState) => state.rootReducer.sortValue);

  const dispatch = useDispatch();

  useEffect(() => {
    const getRequest = async () => {
      try {
        setLoading(false);

        const response = await axiosInstance.get(
          `v2/everything?q=${searchValue || 'news'}&sortBy=${sortValue}&apiKey=${apiKey}`
        );
        dispatch(saveInfoApi(response.data.articles));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(true);
      }
    };
    getRequest();
  }, [dispatch, searchValue, sortValue]);

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Home</h2>
      <Search />
      {searchArr && searchArr.length > 0 && <Sort />}
      {!loading && <CardSkeleton />}
      {loading && <CardsList addInfoApi={searchArr} />}
    </div>
  );
};
