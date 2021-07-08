import React, { useState } from 'react';
import './form.css';
import FormHeader, { defaultHeaderProps } from './FormHeader';

export interface FormProps {
  name: string;
  age: number;
}

export const sendToApi = (body: FormProps) => {
  return body;
};

const Form: React.FC = () => {
  const [form, setForm] = useState<FormProps>(defaultHeaderProps.form);

  const handleChange = (e: { target: { name: string; value: string | number } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendToApi(form);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <FormHeader form={form} />
        <p style={{ textAlign: 'left' }}>Enter your name:</p>
        <input
          type="text"
          name="name"
          className="inputStyles"
          value={form.name}
          onChange={handleChange}
        />
        <p>Enter your age:</p>
        <input
          type="number"
          min="0"
          max="100"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <div className="btn-wrapper">
          <button className="submit-btn" title="Submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
