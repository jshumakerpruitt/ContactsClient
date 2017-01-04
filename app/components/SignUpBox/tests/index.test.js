import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import {
  Button,
} from 'rebass';
import { Flex } from 'reflexbox';

import expect, {
  createSpy,
} from 'expect';

import SignUpBox from '../index';

describe('<SignUpBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderSignUp();
  });

  it('should have a submit button', () => {
    expect(wrapper.find('.submitButton').length)
      .toEqual(1);
  });

  it('it should submit on click', () => {
    const onSubmit = createSpy();
    wrapper = renderSignUp({ onSubmit });
    wrapper.find(Button).simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });


  it('it should have a password Input', () => {
    expect(wrapper.find('[label="Password"]').name())
      .toEqual('Input');
  });

  it('it should have an email Input', () => {
    expect(wrapper.find('[label="Email"]').name())
      .toEqual('Input');
  });

  it('it should have an username Input', () => {
    expect(wrapper.find('[label="Username"]').name())
      .toEqual('Input');
  });

  it('should submit on keydown in email', () => {
    const onSubmit = createSpy();
    wrapper = mountComponent({ onSubmit });

    const input = wrapper.find('[name="email"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in username', () => {
    const onSubmit = createSpy();
    wrapper = mountComponent({ onSubmit });

    const input = wrapper.find('[name="username"]');
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

  it('it should have a link to SignIn', () => {
    expect(wrapper.containsAllMatchingElements([
      <Flex>Have an account?</Flex>,
      <button>Log in.</button>,
    ])).toBe(true);
  });
});

const renderSignUp = (props = {}) =>
  shallow(<SignUpBox {...props} />);

const mountComponent = (props = {}) =>
  mount(
    <IntlProvider locale="en">
      <SignUpBox {...props} />
    </IntlProvider>);
