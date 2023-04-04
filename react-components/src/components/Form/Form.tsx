import React, { FormEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardInForm } from '../CardInForm/CardInForm';
import './Form.scss';
import { createDate } from '../../utils/createDate';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCard>();

  const [components, setComponents] = useState<FormCard[]>([]);

  const [validation, setValidation] = useState(false);

  const onSubmit = (value: FormCard) => {
    const file = value.url[0];
    const blob = new Blob([file], { type: 'img/png' });

    setComponents((prevData) => [
      ...prevData,
      {
        title: value.title,
        name: value.name,
        date: value.date,
        country: value.country,
        url: URL.createObjectURL(blob),
        personalData: value.personalData,
        promo: value.promo,
      },
    ]);
    setValidation(true);
    reset();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidation(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

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
      <form className="form" name="form-page" onSubmit={handleSubmit(onSubmit)}>
        {validation && <p className="save-message">✅ SAVE INFORMATION</p>}
        <label>
          Title<span className="required">*</span>:
          <input
            className="form-title input-text"
            type="text"
            {...register('title', {
              required: {
                value: true,
                message: 'Enter the correct product name (more than 3 characters)',
              },
            })}
          />
          {errors.title && <span className="error">{errors.title.message}</span>}
        </label>
        <label>
          Name<span className="required">*</span>:
          <input
            className="form-name input-text"
            type="text"
            {...register('name', {
              required: 'Enter full name (capitalized, more than 3 characters)',
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>
        <label>
          Date of delivery<span className="required">*</span>:
          <input
            className="form-date"
            type="date"
            min={`${createDate()}`}
            {...register('date', { required: 'Enter a future date' })}
          />
          {errors.date && <span className="error">{errors.date.message}</span>}
        </label>
        <label>
          Country<span className="required">*</span>:
          <select className="form-select" {...register('country', { required: 'Choose country' })}>
            <option value=""></option>
            <option value="Belarus">Belarus</option>
            <option value="Poland">Poland</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Latvia">Latvia</option>
          </select>
          {errors.country && <span className="error">{errors.country.message}</span>}
        </label>
        <label className="form-label">
          <input
            className="form-checkbox"
            type="checkbox"
            {...register('personalData', { required: 'Сheck this box' })}
          />{' '}
          I consent to my personal data
          <span className="required">*</span>
          {errors.personalData && <span className="error">{errors.personalData.message}</span>}
        </label>
        <label className="form-label">
          <input
            className="switch form-switch"
            type="checkbox"
            {...register('promo', { required: 'Сheck this switch' })}
          />{' '}
          I want to receive notifications about promo, sales, etc.
          <span className="required">*</span>
        </label>
        {errors.promo && <span className="error">{errors.promo.message}</span>}
        <label className="file-label">
          <span className="file-upload">Upload image</span>
          <input
            className="hidden"
            type="file"
            // onChange={fileHandler}
            accept="image/*,.png,.jpg,.gif,.web"
            {...register('url', { required: 'Load image' })}
          />
          {errors.url && <span className="error">{errors.url.message}</span>}
        </label>
        <input className="form-btn" type="submit" value="Submit" />
      </form>
      <div className="form-cards">{elements}</div>
    </div>
  );
};
