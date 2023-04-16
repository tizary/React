import './Home.scss';
import { Search } from '../components/Search/Search';
import { Sort } from '../components/Sort/Sort';
import { CardsList } from '../components/CardsList/CardsList';
import CardSkeleton from '../components/CardSkeleton/CardSkeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetAllNewsQuery } from '../services/NewsService';

export const Home = function Home() {
  const searchValue = useSelector((state: RootState) => state.appReducer.searchValue);
  const sortValue = useSelector((state: RootState) => state.appReducer.sortValue);

  const { data, isFetching } = useGetAllNewsQuery({ search: searchValue, sort: sortValue });
  return (
    <div className="page-wrapper">
      <h2 className="page-title">Home</h2>
      <Search />
      {data && data.articles && data.articles.length > 0 && <Sort />}
      {isFetching && <CardSkeleton />}
      {data && <CardsList addInfoApi={data.articles} />}
    </div>
  );
};
