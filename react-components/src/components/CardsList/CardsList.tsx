import { useState } from 'react';
import { Card } from '../Card/Card';
import Modal from '../Modal/Modal';

interface DataApi {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
}

export const CardsList = function CardsList(props: { addInfoApi: DataApi[] }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState<number | null>(null);

  const arr = props.addInfoApi;

  const cardHandler = (id: number) => {
    setModalActive(true);
    setModalId(id);
  };

  const cardElements = arr.map((item: DataApi, index) => (
    <Card
      onHandlerCard={cardHandler}
      key={index}
      id={index}
      image={item.urlToImage}
      title={item.title}
      description={item.description}
      date={item.publishedAt.slice(0, 10)}
      author={item.author}
    />
  ));

  return (
    <div className="cards-list" role="list">
      {cardElements}
      {modalId !== null && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          image={arr[modalId].urlToImage}
          title={arr[modalId].title}
          description={arr[modalId].description}
          date={arr[modalId].publishedAt.slice(0, 10)}
          author={arr[modalId].author}
          content={arr[modalId].content}
        />
      )}
    </div>
  );
};
