import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './Search.scss';
import img from '../../assets/search.png';

export const Search = function Search() {
  const [inputValue, setValue] = useState(localStorage.getItem('inputValue') || '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
