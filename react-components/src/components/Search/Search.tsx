import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './Search.scss';
import img from '../../assets/search.png';
import { DataApi } from '../../Home/Home';
import { getRequest } from '../../services/getRequest';

export const Search = function Search(props: {
  onGetSearchArr(arr: DataApi[]): unknown;
  sort: string;
  onGetSearchInfo: (arg0: string) => void;
}) {
  const [inputValue, setValue] = useState(localStorage.getItem('inputValue') || '');

  const dataArr = async (inputValue: string, sort: string) => {
    const arr = await getRequest(inputValue, sort);
    props.onGetSearchArr(arr);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      props.onGetSearchInfo(inputValue);
      dataArr(inputValue, props.sort);
    }
  };

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue || '');
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form action="#" name="form" className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        name="search"
        className="search-input"
        placeholder="Search"
      />
      <img className="search-ico" src={img} alt="ico" />
      <button type="submit" className="search-btn">
        search
      </button>
    </form>
  );
};
