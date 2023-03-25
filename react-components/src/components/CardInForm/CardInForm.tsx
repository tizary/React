import React from 'react';
import { FormCards } from '../Form/Form';
import './CardInForm.scss';

class CardInForm extends React.Component<FormCards> {
  render() {
    return (
      <div className="card-form">
        <img className="card-form-img" src={this.props.url} alt="image" />
        <p className="card-form-desc desc-title">{this.props.title}</p>
        <p className="card-form-desc">{this.props.name}</p>
        <p className="card-form-desc">{this.props.country}</p>
        <p className="card-form-desc">{this.props.date}</p>
        <p className="card-form-desc small-desc">Personal Data: {`${this.props.personalData}`}</p>

        <p className="card-form-desc small-desc">Promo: {`${this.props.promo}`}</p>
      </div>
    );
  }
}

export default CardInForm;
