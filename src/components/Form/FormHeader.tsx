import React from 'react';
import { FormProps } from '.';

export interface HeaderProps {
  form: FormProps;
}

/** default props for Header */
export const defaultHeaderProps = {
  form: {
    username: '',
    age: 0,
  },
};

const FormHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { form } = props;
  return (
    <h1>
      Hello {form.username} {form.age}
    </h1>
  );
};
FormHeader.defaultProps = defaultHeaderProps;
export default FormHeader;
