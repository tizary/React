import { DataApi } from '../../Home/Home';
import { Card } from '../Card/Card';

export const CardsList = function CardsList(props: { addInfoApi: DataApi[] }) {
  const arr = props.addInfoApi;

  const cardElements = arr.map((item: DataApi, index) => (
    <Card
      key={index}
      image={item.urlToImage}
      title={item.title}
      description={item.description}
      date={item.publishedAt.slice(0, 10)}
      price={item.author}
    />
  ));

  return <div className="cards-list">{cardElements}</div>;
};
