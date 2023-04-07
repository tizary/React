import { DataApi } from '../../Home/Home';
import { getRequest } from '../../services/getRequest';
import './Sort.scss';
import { useEffect, useState } from 'react';

export const Sort = function Sort(props: {
  onGetSortInfo: (arg0: string) => void;
  search: string;
  onGetSortArr(arr: DataApi[]): unknown;
}) {
  const [sortItem, setSortItem] = useState<string>('');

  const dataArr = async (inputValue: string, sort: string) => {
    const arr = await getRequest(inputValue, sort);
    props.onGetSortArr(arr);
  };

  const sortByHandler = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortItem(e.target.value);
    props.onGetSortInfo(e.target.value);
    dataArr(props.search, e.target.value);
  };

  useEffect(() => {
    props.onGetSortInfo(sortItem);
  });

  return (
    <div className="sort">
      <select name="sort-field" onChange={sortByHandler} className="sort-field">
        <option value="popularity">Popularity</option>
        <option value="publishedAt">Date</option>
        <option value="relevancy">Relevancy</option>
      </select>
    </div>
  );
};
