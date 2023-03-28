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
  selectErr: boolean;
  promoErr: boolean;
  urlErr: boolean;
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
  timeout: ReturnType<typeof setTimeout> | undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      components: [],
      errors: {
        titleErr: false,
        nameErr: false,
        dateErr: false,
        personalDataErr: false,
        selectErr: false,
        promoErr: false,
        urlErr: false,
      },
      validation: false,
    };
    this.url = '';
    this.timeout;

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

    if (!title || title.length < 3 || title[0] !== title[0].toUpperCase()) {
      this.setState((state) => ({
        errors: { ...state.errors, titleErr: true },
      }));
    } else if (!name || name.length < 3 || name[0] !== name[0].toUpperCase()) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: true,
          dateErr: false,
          personalDataErr: false,
          selectErr: false,
          promoErr: false,
          urlErr: false,
        },
      });
    } else if (!date) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: false,
          dateErr: true,
          personalDataErr: false,
          selectErr: false,
          promoErr: false,
          urlErr: false,
        },
      });
    } else if (!country) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: false,
          dateErr: false,
          personalDataErr: false,
          selectErr: true,
          promoErr: false,
          urlErr: false,
        },
      });
    } else if (!personalData) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: false,
          dateErr: false,
          personalDataErr: true,
          selectErr: false,
          promoErr: false,
          urlErr: false,
        },
      });
    } else if (!promo) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: false,
          dateErr: false,
          personalDataErr: false,
          selectErr: false,
          promoErr: true,
          urlErr: false,
        },
      });
    } else if (!this.url) {
      this.setState({
        errors: {
          titleErr: false,
          nameErr: false,
          dateErr: false,
          personalDataErr: false,
          selectErr: false,
          promoErr: false,
          urlErr: true,
        },
      });
    } else {
      this.setState(
        (state) => ({
          components: state.components.concat([
            { title, name, date, country, url: this.url, personalData, promo },
          ]),
          errors: {
            titleErr: false,
            nameErr: false,
            dateErr: false,
            personalDataErr: false,
            selectErr: false,
            promoErr: false,
            urlErr: false,
          },
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

  createDate() {
    const date = new Date();
    if (date.getMonth() < 9) {
      return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

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
        <form className="form" name="form-page" ref={this.form} onSubmit={this.handleSubmit}>
          {this.state.validation && <p className="save-message">✅ SAVE INFORMATION</p>}
          <label>
            Title<span className="required">*</span>:
            <input className="form-title input-text" type="text" ref={this.title} />
            {this.state.errors.titleErr && (
              <span className="error">
                Enter the correct product name (capitalized, more than 3 characters)
              </span>
            )}
          </label>
          <label>
            Name<span className="required">*</span>:
            <input className="form-name input-text" type="text" ref={this.name} />
            {this.state.errors.nameErr && (
              <span className="error">Enter full name (capitalized, more than 3 characters)</span>
            )}
          </label>
          <label>
            Date of delivery<span className="required">*</span>:
            <input className="form-date" type="date" ref={this.date} min={this.createDate()} />
            {this.state.errors.dateErr && <span className="error">Enter a future date</span>}
          </label>
          <label>
            Country<span className="required">*</span>:
            <select className="form-select" ref={this.select}>
              <option value=""></option>
              <option value="Belarus">Belarus</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Latvia">Latvia</option>
            </select>
            {this.state.errors.selectErr && <span className="error">Choose country</span>}
          </label>
          <label className="form-label">
            <input className="form-checkbox" type="checkbox" ref={this.checkbox} /> I consent to my
            personal data<span className="required">*</span>
            {this.state.errors.personalDataErr && <span className="error">Сheck this box</span>}
          </label>
          <label className="form-label">
            <input className="switch form-switch" type="checkbox" ref={this.switch} /> I want to
            receive notifications about promo, sales, etc.<span className="required">*</span>
          </label>
          {this.state.errors.promoErr && <span className="error">Сheck this switch</span>}
          <label className="file-label">
            <span className="file-upload">Upload image</span>
            <input
              className="hidden"
              type="file"
              onChange={this.handleClick}
              accept="image/*,.png,.jpg,.gif,.web"
            />
            {this.state.errors.urlErr && <span className="error">Load image</span>}
          </label>
          <input className="form-btn" type="submit" value="Submit" />
        </form>
        <div className="form-cards">{elements}</div>
      </div>
    );
  }
}

export default Form;
