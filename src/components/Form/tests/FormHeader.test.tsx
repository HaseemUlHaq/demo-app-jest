import React from 'react';
import { mount, shallow } from 'enzyme';
import FormHeader from '../FormHeader';

describe('components/Form', () => {
  const defaultFormProp = { name: '', age: 0 };
  it('shoudld render without crash', () => {
    shallow(<FormHeader form={defaultFormProp} />);
  });

  it('should render with default values', () => {
    const wrapper = mount(<FormHeader form={defaultFormProp} />);
    // header should be initialised by default state
    expect(wrapper.find('FormHeader h1').text()).toEqual('Hello  0');
  });

  it('should map with correct values', () => {
    const formProp = { name: 'dump', age: 20 };
    const wrapper = mount(<FormHeader form={formProp} />);
    expect(wrapper.find('FormHeader h1').text()).toEqual('Hello dump 20');
  });
});
