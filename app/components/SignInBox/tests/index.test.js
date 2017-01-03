import SignInBox from '../index';
import {
  Button,
} from 'rebass'

import expect, {
  createSpy,
} from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<SignInBox />', () => {
  it('should have a submit button', () => {
    const wrapper = renderSignIn()
    expect(wrapper.find('.submitButton').length)
      .toEqual(1);
  });

  it('it should submit on click', () => {
    const onSubmit = createSpy()
    const wrapper = renderSignIn({onSubmit,})
    wrapper.find(Button).simulate('click')
    expect(onSubmit).toHaveBeenCalled();
  });

  it('it should have a password Input', () => {
    const wrapper = renderSignIn()
    expect(wrapper.find('[label="Password"]').name()).toEqual('Input');
  });

  it('it should have an email Input', () => {
    const wrapper = renderSignIn()
    expect(wrapper.find('[label="Email"]').name()).toEqual('Input');
  });


});

const renderSignIn = (props = {}) =>
  shallow(<SignInBox {...props} />)
