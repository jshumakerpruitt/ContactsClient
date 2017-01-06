import { ContactForm } from '../index';

import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import {
  Button,
} from 'rebass';

describe('<ContactForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWrapper();
  });

  it('should have a submit button', () => {
    const inner = wrapper.childAt(0);
    expect(inner.find('.submitButton').length)
      .toEqual(1);
  });

  it('should submit on click', () => {
    const handleSubmit = createSpy();
    wrapper = renderWrapper({ handleSubmit });
    wrapper.childAt(0).find(Button).simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should have a name Field', () => {
    expect(wrapper.find('[name="name"]').name())
      .toEqual('Field');
  });

  it('should have an email Field', () => {
    expect(wrapper.find('[name="email"]').name()).toEqual('Field');
  });

  it('should have an phone Field', () => {
    expect(wrapper.find('[name="phone"]').name()).toEqual('Field');
  });

  it('should have an address Field', () => {
    expect(wrapper.find('[name="address"]').name()).toEqual('Field');
  });

  it('should have an organization Field', () => {
    expect(wrapper.find('[name="organization"]').name()).toEqual('Field');
  });

  it('should have an birthday Field', () => {
    expect(wrapper.find('[name="birthday"]').name()).toEqual('Field');
  });


  it('should submit on keydown', () => {
    const handleSubmit = createSpy();
    wrapper = renderWrapper({ handleSubmit });

    const input = wrapper.find('form');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });
});

const renderWrapper = (props = { handleSubmit: () => {} }) =>
  shallow(<ContactForm {...props} />);
