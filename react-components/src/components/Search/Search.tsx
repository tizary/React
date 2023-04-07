import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './Search.scss';
import img from '../../assets/search.png';
import axiosInstance from '../../services/api';
import apiKey from '../../services/apiKey';

export interface ItemApi {
  onStartSearch(art: ItemApi[]): unknown;
  author: string;
  // content?: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const Search = function Search(props: ItemApi) {
  const [inputValue, setValue] = useState(localStorage.getItem('inputValue') || '');
  const [art, setArt] = useState<ItemApi[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.get(`v2/everything?q=${inputValue}&apiKey=${apiKey}`);
      setArt(response.data.articles);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue || '');
    props.onStartSearch(art);
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
