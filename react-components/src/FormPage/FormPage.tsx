import React from 'react';
import Form from '../components/Form/Form';
import './FormPage.scss';

class FormPage extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <h2 className="page-title">Form</h2>
        <Form />
      </div>
    );
  }
}

export default FormPage;
