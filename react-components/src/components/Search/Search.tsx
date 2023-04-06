import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './Search.scss';
import img from '../../assets/search.png';
import axiosInstance from '../../services/api';
import apiKey from '../../services/apiKey';

interface ItemApi {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export const Search = function Search() {
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
  console.log(art);

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
