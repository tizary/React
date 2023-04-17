import { useDispatch } from 'react-redux';
import { handleSort } from '../../store/appSlice';
import './Sort.scss';

export const Sort = function Sort() {
  const dispatch = useDispatch();

  return (
    <div className="sort">
      <select
        name="sort-field"
        onChange={(event) => dispatch(handleSort(event.target.value))}
        className="sort-field"
      >
        <option value="popularity">Popularity</option>
        <option value="publishedAt">Date</option>
        <option value="relevancy">Relevancy</option>
      </select>
    </div>
  );
};
