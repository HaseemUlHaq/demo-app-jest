import React, { useState } from 'react';
import './form.css';
import FormHeader, { defaultHeaderProps } from './FormHeader';

export interface FormProps {
  username: string;
  age: number;
}

export const sendToApi = (body: FormProps) => {
  console.log('body :: ', body);
  return true;
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
    <form onSubmit={handleSubmit}>
      <FormHeader form={form} />
      <p>Enter your name:</p>
      <input type="text" name="username" onChange={handleChange} />
      <p>Enter your age:</p>
      <input type="number" name="age" onChange={handleChange} />
      <button title="Submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
