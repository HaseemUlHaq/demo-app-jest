import React from 'react';
import { FormProps } from '.';
import './form.css';
export interface HeaderProps {
  form: FormProps;
}

/** default props for Header */
export const defaultHeaderProps = {
  form: {
    name: '',
    age: 0,
  },
};

const FormHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { form } = props;
  return (
    <h1 className="first-lt-color" style={{ textAlign: 'center' }}>
      {form.name} {form.age}
    </h1>
  );
};
FormHeader.defaultProps = defaultHeaderProps;
export default FormHeader;
