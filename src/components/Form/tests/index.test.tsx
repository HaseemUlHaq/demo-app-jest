import React from 'react';
import { mount, shallow } from 'enzyme';
import Form, { sendToApi } from '..';
import toJson from 'enzyme-to-json';

describe('components/Form', () => {
  it('shoudld render without crash', () => {
    shallow(<Form />);
  });

  it('should render with empty fields', () => {
    const wrapper = mount(<Form />);
    const form = wrapper.find('input');

    //name field
    expect(form.at(0).prop('value')).toEqual('');
    //age field
    expect(form.at(1).prop('value')).toEqual(0);
    // header should be initialised by default state
    expect(wrapper.find('FormHeader h1').text()).toEqual('Hello  0');
  });

  it('should create correct snapshot for form', () => {
    const wrapper = mount(<Form />);
    expect(toJson(wrapper.find('form'))).toMatchSnapshot();
  });

  it('should return true when values are passed', () => {
    const body = { name: 'haseem', age: 23 };
    expect(sendToApi(body)).toEqual(body);
  });

  it('should pass correct values to API', () => {
    const wrapper = mount(<Form />);
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Onyx' },
    });
    wrapper.find('input[name="age"]').simulate('change', {
      target: { name: 'age', value: 10 },
    });
    wrapper.find('form').simulate('submit');
    // expect(form.at(1).prop('name')).toEqual('age');

    expect(wrapper.find('FormHeader h1').text()).toEqual('Hello Onyx 10');
  });

  // send correct data to API
});
