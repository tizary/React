import './Card.scss';

type MyProps = {
  onHandlerCard(arg0: number): unknown;
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
};

export const Card = function Card(props: MyProps) {
  const cardOpen = () => {
    props.onHandlerCard(props.id);
  };
  return (
    <>
      <div className="card" id={props.id.toString()} onClick={cardOpen}>
        <div className="card-wrapper">
          <img className="card-img" src={props.image} alt="card-img" />
          <h3 className="card-title">{props.title}</h3>
          <div className="card-description">
            <p className="card-description-text">{props.description}</p>
            <span className="card-description-date">{props.date}</span>
            <span className="card-description-price">{props.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};
