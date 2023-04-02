import React, { FormEvent, useEffect, useState } from 'react';
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

export const Form = function Form() {
  const [data, setData] = useState({
    title: '',
    name: '',
    date: '',
    country: '',
    url: '',
    personalData: false,
    promo: false,
  });

  const [components, setComponents] = useState<FormCard[]>([]);

  const [error, setError] = useState({
    titleErr: false,
    nameErr: false,
    dateErr: false,
    personalDataErr: false,
    selectErr: false,
    promoErr: false,
    urlErr: false,
  });

  const [validation, setValidation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValidation(false);
    }, 2000);
  });

  const addErr = (errorName: string) => {
    setError((prevErr) => ({
      ...prevErr,
      [`${errorName}`]: true,
    }));
  };

  const removeErr = (errorName: string) => {
    setError((prevErr) => ({
      ...prevErr,
      [`${errorName}`]: false,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!data.title || data.title.length < 3 || data.title[0] !== data.title[0].toUpperCase()) {
      addErr('titleErr');
    } else {
      removeErr('titleErr');
    }
    if (!data.name || data.name.length < 3 || data.name[0] !== data.name[0].toUpperCase()) {
      addErr('nameErr');
    } else {
      removeErr('nameErr');
    }
    if (!data.date) {
      addErr('dateErr');
    } else {
      removeErr('dateErr');
    }

    if (!data.country) {
      addErr('selectErr');
    } else {
      removeErr('selectErr');
    }

    if (!data.personalData) {
      addErr('personalDataErr');
    } else {
      removeErr('personalDataErr');
    }

    if (!data.promo) {
      addErr('promoErr');
    } else {
      removeErr('promoErr');
    }

    if (!data.url) {
      addErr('urlErr');
    } else {
      removeErr('urlErr');
    }

    if (
      data.title &&
      data.title.length >= 3 &&
      data.title[0] === data.title[0].toUpperCase() &&
      data.name &&
      data.name.length >= 3 &&
      data.name[0] === data.name[0].toUpperCase() &&
      data.date &&
      data.country &&
      data.personalData &&
      data.promo &&
      data.url
    ) {
      setComponents((prevData) => [...prevData, data]);

      setData({
        title: '',
        name: '',
        date: '',
        country: '',
        url: '',
        personalData: false,
        promo: false,
      });

      setValidation(true);
    }
  };

  const inputTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const inputNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };

  const inputDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      date: event.target.value,
    }));
  };

  const selectCountryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData((prevData) => ({
      ...prevData,
      country: event.target.value,
    }));
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      personalData: event.target.checked,
    }));
  };

  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      promo: event.target.checked,
    }));
  };

  const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setData((prevData) => ({
        ...prevData,
        url: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  const createDate = () => {
    const date = new Date();
    if (date.getMonth() < 9 && date.getDate() < 10) {
      return `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
    } else if (date.getMonth() < 9) {
      return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    } else if (date.getDate() < 10) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const elements = components.map((item: FormCard, index) => {
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
      <form className="form" name="form-page" onSubmit={handleSubmit}>
        {validation && <p className="save-message">✅ SAVE INFORMATION</p>}
        <label>
          Title<span className="required">*</span>:
          <input
            className="form-title input-text"
            value={data.title}
            onChange={inputTitleHandler}
            type="text"
          />
          {error.titleErr === true && (
            <span className="error">
              Enter the correct product name (capitalized, more than 3 characters)
            </span>
          )}
        </label>
        <label>
          Name<span className="required">*</span>:
          <input
            className="form-name input-text"
            value={data.name}
            onChange={inputNameHandler}
            type="text"
          />
          {error.nameErr && (
            <span className="error">Enter full name (capitalized, more than 3 characters)</span>
          )}
        </label>
        <label>
          Date of delivery<span className="required">*</span>:
          <input
            className="form-date"
            value={data.date}
            onChange={inputDateHandler}
            type="date"
            min={`${createDate()}`}
          />
          {error.dateErr && <span className="error">Enter a future date</span>}
        </label>
        <label>
          Country<span className="required">*</span>:
          <select value={data.country} onChange={selectCountryHandler} className="form-select">
            <option value=""></option>
            <option value="Belarus">Belarus</option>
            <option value="Poland">Poland</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Latvia">Latvia</option>
          </select>
          {error.selectErr && <span className="error">Choose country</span>}
        </label>
        <label className="form-label">
          <input
            className="form-checkbox"
            checked={data.personalData}
            onChange={checkboxHandler}
            type="checkbox"
          />{' '}
          I consent to my personal data
          <span className="required">*</span>
          {error.personalDataErr && <span className="error">Сheck this box</span>}
        </label>
        <label className="form-label">
          <input
            className="switch form-switch"
            checked={data.promo}
            onChange={switchHandler}
            type="checkbox"
          />{' '}
          I want to receive notifications about promo, sales, etc.
          <span className="required">*</span>
        </label>
        {error.promoErr && <span className="error">Сheck this switch</span>}
        <label className="file-label">
          <span className="file-upload">Upload image</span>
          <input
            className="hidden"
            type="file"
            onChange={fileHandler}
            accept="image/*,.png,.jpg,.gif,.web"
          />
          {error.urlErr && <span className="error">Load image</span>}
        </label>
        <input className="form-btn" type="submit" value="Submit" />
      </form>
      <div className="form-cards">{elements}</div>
    </div>
  );
};
