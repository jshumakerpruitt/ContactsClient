import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import {
  Button,
} from 'rebass';
import { Flex } from 'reflexbox';

import SignInBox from '../index';
import expect, {
  createSpy,
} from 'expect';


describe('<SignInBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderSignIn();
  });

  it('should have a submit button', () => {
    expect(wrapper.find('.submitButton').length)
      .toEqual(1);
  });

  it('should submit on click', () => {
    const onSubmit = createSpy();
    wrapper = renderSignIn({ onSubmit });
    wrapper.find(Button).simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in email', () => {
    const onSubmit = createSpy();
    wrapper = mountComponent({ onSubmit });

    const input = wrapper.find('[name="email"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in password', () => {
    const onSubmit = createSpy();
    wrapper = mountComponent({ onSubmit });

    const input = wrapper.find('[name="password"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should have a password Input', () => {
    expect(wrapper.find('[label="Password"]').name()).toEqual('Input');
  });

  it('should have an email Input', () => {
    expect(wrapper.find('[label="Email"]').name()).toEqual('Input');
  });

  it('should have a button to SignUp', () => {
    expect(wrapper.containsAllMatchingElements([
      <Flex>{"Don't have an account?"}</Flex>, // eslint-disable
      <button>Sign up.</button>,
    ])).toBe(true);
  });
});

const renderSignIn = (props = {}) =>
  shallow(<SignInBox {...props} />);

const mountComponent = (props = {}) =>
  mount(
    <IntlProvider locale="en">
      <SignInBox {...props} />
    </IntlProvider>);
