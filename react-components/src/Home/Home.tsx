import './Home.scss';
import { Search } from '../components/Search/Search';
import { useState } from 'react';
import { Sort } from '../components/Sort/Sort';
import { CardsList } from '../components/CardsList/CardsList';

export interface DataApi {
  author: string;
  // content?: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const Home = function Home() {
  const [infoApi, setInfoApi] = useState<DataApi[]>([]);
  const [sort, setSort] = useState<string>('popularity');
  const [search, setSearch] = useState<string>('');

  const startSearchHandler = (inputSearchData: string) => {
    setSearch(inputSearchData);
  };

  const startSortHandler = (sortItem: string) => {
    setSort(sortItem);
  };

  const getArr = (arr: DataApi[]) => {
    setInfoApi(arr);
  };
  console.log(sort);
  console.log(search);

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Home</h2>
      <Search onGetSearchInfo={startSearchHandler} sort={sort} onGetSearchArr={getArr} />
      {infoApi.length > 0 && (
        <Sort onGetSortInfo={startSortHandler} search={search} onGetSortArr={getArr} />
      )}
      <CardsList addInfoApi={infoApi} />
    </div>
  );
};
