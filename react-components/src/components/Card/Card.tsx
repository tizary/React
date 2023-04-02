import './Card.scss';

type MyProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  price: string;
};

export const Card = function Card(props: MyProps) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img className="card-img" src={props.image} alt="card-img" />
        <h3 className="card-title">{props.title}</h3>
        <div className="card-description">
          <p className="card-description-text">{props.description}</p>
          <span className="card-description-date">{props.date}</span>
          <span className="card-description-price">${props.price}</span>
        </div>
      </div>
    </div>
  );
};
