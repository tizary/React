import { FormCard } from '../Form/Form';
import './CardInForm.scss';

export const CardInForm = function CardInForm(props: FormCard) {
  return (
    <div className="card-form">
      <img className="card-form-img" src={props.url} alt="image" />
      <p className="card-form-desc desc-title">{props.title}</p>
      <p className="card-form-desc">{props.name}</p>
      <p className="card-form-desc">{props.country}</p>
      <p className="card-form-desc">{props.date}</p>
      <p className="card-form-desc small-desc">Personal Data: {`${props.personalData}`}</p>

      <p className="card-form-desc small-desc">Promo: {`${props.promo}`}</p>
    </div>
  );
};
