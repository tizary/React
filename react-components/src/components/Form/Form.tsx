import React, { FormEvent, RefObject } from 'react';
import CardInForm from '../CardInForm/CardInForm';
import './Form.scss';

export interface FormCards {
  title: string;
  name: string;
  date: string;
  country: string;
  url: string;
  personalData: boolean;
  promo: boolean;
}

interface FormState {
  components: Array<FormCards>;
  titleErr: boolean;
  nameErr: boolean;
}

class Form extends React.Component<object, FormState> {
  title = React.createRef<HTMLInputElement>();
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  switch: React.RefObject<HTMLInputElement>;
  url: string;
  constructor(props: object) {
    super(props);
    // this.title = React.createRef();
    this.name = React.createRef();
    this.date = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.switch = React.createRef();
    this.state = { components: [], titleErr: false, nameErr: false };
    this.url = '';

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = this.title.current?.value;
    const name = this.name.current?.value;
    const date = this.date.current?.value;
    const country = this.select.current?.value;
    const personalData = this.checkbox.current?.checked;
    const promo = this.switch.current?.checked;

    this.setState((state: { components: Array<FormCards> }) => ({
      components: state.components.concat([
        { title, name, date, country, url: this.url, personalData, promo },
      ]),
    }));
  }

  handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      this.url = URL.createObjectURL(event.target.files[0]);
    }
  };

  render() {
    const elements = this.state.components.map((item, index) => {
      return (
        <CardInForm
          key={index}
          title={item.title}
          name={item.name}
          date={item.date}
          country={item.country}
          url={item.url}
          personalData={item.personalData}
          promo={item.promo}
        />
      );
    });
    return (
      <div className="form-page">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input className="form-title input-text" type="text" ref={this.title} />
            {this.state.titleErr && <span>error</span>}
          </label>
          <label>
            Name:
            <input className="form-name input-text" type="text" ref={this.name} />
            {this.state.nameErr && <span>error</span>}
          </label>
          <label>
            Date of delivery:
            <input className="form-date" type="date" ref={this.date} />
          </label>
          <label>
            Country:
            <select className="form-select" ref={this.select}>
              <option value="Belarus">Belarus</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Latvia">Latvia</option>
            </select>
          </label>
          <label className="form-label">
            <input className="form-checkbox" type="checkbox" ref={this.checkbox} /> I consent to my
            personal data
          </label>
          <label className="form-label">
            <input className="switch form-switch" type="checkbox" ref={this.switch} /> I want to
            receive notifications about promo, sales, etc.
          </label>
          <label className="file-label">
            <span className="file-upload">Upload image</span>
            <input
              className="hidden"
              type="file"
              onChange={this.handleClick}
              accept="image/*,.png,.jpg,.gif,.web"
            />
          </label>
          <input className="form-btn" type="submit" value="Submit" />
        </form>

        <div className="form-cards">{elements}</div>
      </div>
    );
  }
}

export default Form;
