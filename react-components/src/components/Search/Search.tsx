import { FormEvent } from 'react';
import './Search.scss';
import img from '../../assets/search.png';
import { handleChange, handleSubmit } from '../../store/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Search = function Search() {
  const saveValue = useSelector((state: RootState) => state.rootReducer.saveValue);

  const dispatch = useDispatch();

  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (saveValue) {
      dispatch(handleSubmit(saveValue));
    }
  };

  return (
    <form action="#" name="form" className="search" onSubmit={searchSubmit}>
      <input
        type="text"
        value={saveValue || ''}
        onChange={(event) => dispatch(handleChange(event.target.value))}
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
