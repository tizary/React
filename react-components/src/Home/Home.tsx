import './Home.scss';
import { Search } from '../components/Search/Search';
import { useEffect, useState } from 'react';
import { Sort } from '../components/Sort/Sort';
import { CardsList } from '../components/CardsList/CardsList';
import CardSkeleton from '../components/CardSkeleton/CardSkeleton';

export interface DataApi {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const Home = function Home() {
  const [infoApi, setInfoApi] = useState<DataApi[]>([]);
  const [sort, setSort] = useState<string>('popularity');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

  const startSearchHandler = (inputSearchData: string) => {
    setSearch(inputSearchData);
  };

  const startSortHandler = (sortItem: string) => {
    setSort(sortItem);
  };

  const getArr = (arr: DataApi[]) => {
    setInfoApi(arr);
    setLoading(false);
  };

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Home</h2>
      <Search onGetSearchInfo={startSearchHandler} sort={sort} onGetSearchArr={getArr} />
      {infoApi.length > 0 && (
        <Sort onGetSortInfo={startSortHandler} search={search} onGetSortArr={getArr} />
      )}
      {!loading && <CardSkeleton />}
      {loading && <CardsList addInfoApi={infoApi} />}
    </div>
  );
};
