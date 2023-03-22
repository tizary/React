import React from 'react';
import './Card.scss';

type MyProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  price: string;
};

class Card extends React.Component<MyProps> {
  render() {
    return (
      <div className="card">
        <div className="card-wrapper">
          <img className="card-img" src={this.props.image} alt="card-img" />
          <h3 className="card-title">{this.props.title}</h3>
          <div className="card-description">
            <p className="card-description-text">{this.props.description}</p>
            <span className="card-description-date">{this.props.date}</span>
            <span className="card-description-price">${this.props.price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
