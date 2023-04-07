import './Home.scss';
import { ItemApi, Search } from '../components/Search/Search';
import { Card } from '../components/Card/Card';
import { Key, useState } from 'react';
// import cardsInfo from './cards.json';

interface DataApi {
  author: string;
  // content?: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const Home = function Home() {
  const [infoApi, setInfoApi] = useState<DataApi[]>([]);
  const startSearchHandler = (inputSearchData: DataApi[]) => {
    setInfoApi(inputSearchData);
  };
  const cardElements = infoApi.map((item: DataApi, index) => (
    <Card
      key={index}
      image={item.urlToImage}
      title={item.title}
      description={item.description}
      date={item.publishedAt.slice(0, 10)}
      price={item.author}
    />
  ));
  return (
    <div className="page-wrapper">
      <h2 className="page-title">Home</h2>
      <Search
        onStartSearch={startSearchHandler}
        author={''}
        description={''}
        publishedAt={''}
        title={''}
        urlToImage={''}
      />
      <div className="cards-list">{cardElements}</div>
    </div>
  );
};
