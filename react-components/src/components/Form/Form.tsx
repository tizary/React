import React, { FormEvent } from 'react';
import CardInForm from '../CardInForm/CardInForm';
import './Form.scss';

export interface FormCard {
  title: string;
  name: string;
  date: string;
  country: string;
  url: string;
  personalData: boolean;
  promo: boolean;
}
interface ErrorState {
  titleErr: boolean;
  nameErr: boolean;
  dateErr: boolean;
  personalDataErr: boolean;
}

interface FormState {
  components: Array<FormCard>;
  errors: ErrorState;
  validation: boolean;
}

class Form extends React.Component<object, FormState> {
  form = React.createRef<HTMLFormElement>();
  title = React.createRef<HTMLInputElement>();
  name = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  select = React.createRef<HTMLSelectElement>();
  checkbox = React.createRef<HTMLInputElement>();
  switch = React.createRef<HTMLInputElement>();
  url: string;
  timeout: number;
  constructor(props: object) {
    super(props);
    this.state = {
      components: [],
      errors: { titleErr: false, nameErr: false, dateErr: false, personalDataErr: false },
      validation: false,
    };
    this.url = '';
    this.timeout = 0;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps: object, prevState: Readonly<FormState>): void {
    if (prevState.validation !== this.state.validation) {
      this.timeout = setTimeout(() => {
        this.setState({ validation: false });
      }, 1000);
    }
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeout);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = this.title.current?.value || '';
    const name = this.name.current?.value || '';
    const date = this.date.current?.value || '';
    const country = this.select.current?.value || '';
    const personalData = this.checkbox.current?.checked;
    const promo = this.switch.current?.checked || false;

    const calendar = date.split('-');
    const calendarYear = +calendar[0];
    const calendarMonth = +calendar[1] - 1;
    const calendarDay = +calendar[2];

    const dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();

    if (!title || title.length < 3) {
      this.setState((state) => ({
        errors: { ...state.errors, titleErr: true },
      }));
    } else if (!name || title.length < 3) {
      this.setState({
        errors: { titleErr: false, nameErr: true, dateErr: false, personalDataErr: false },
      });
    } else if (
      !date ||
      calendarYear < year ||
      (calendarYear <= year && calendarMonth < month) ||
      (calendarYear <= year && calendarMonth <= month && calendarDay <= day)
    ) {
      this.setState({
        errors: { titleErr: false, nameErr: false, dateErr: true, personalDataErr: false },
      });
    } else if (!personalData) {
      this.setState({
        errors: { titleErr: false, nameErr: false, dateErr: false, personalDataErr: true },
      });
    } else {
      this.setState(
        (state) => ({
          components: state.components.concat([
            { title, name, date, country, url: this.url, personalData, promo },
          ]),
          errors: { titleErr: false, nameErr: false, dateErr: false, personalDataErr: false },
          validation: true,
        }),
        () => {
          this.url = '';
        }
      );
      this.form.current?.reset();
    }
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
        <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
          {this.state.validation && <p className="save-message">✅ SAVE INFORMATION</p>}
          <label>
            Title<span className="required">*</span>:
            <input className="form-title input-text" type="text" ref={this.title} />
            {this.state.errors.titleErr && (
              <span className="error">Enter the correct product name</span>
            )}
          </label>
          <label>
            Name<span className="required">*</span>:
            <input className="form-name input-text" type="text" ref={this.name} />
            {this.state.errors.nameErr && <span className="error">Enter full name</span>}
          </label>
          <label>
            Date of delivery<span className="required">*</span>:
            <input className="form-date" type="date" ref={this.date} min={Date.now()} />
            {this.state.errors.dateErr && <span className="error">Enter a future date</span>}
          </label>
          <label>
            Country<span className="required">*</span>:
            <select className="form-select" ref={this.select}>
              <option value="Belarus">Belarus</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Latvia">Latvia</option>
            </select>
          </label>
          <label className="form-label">
            <input className="form-checkbox" type="checkbox" ref={this.checkbox} /> I consent to my
            personal data<span className="required">*</span>
            {this.state.errors.personalDataErr && <span className="error">Сheck this box</span>}
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
