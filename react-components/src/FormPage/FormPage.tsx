import { Form } from '../components/Form/Form';
import './FormPage.scss';

export const FormPage = function FormPage() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">Form</h2>
      <Form />
    </div>
  );
};
