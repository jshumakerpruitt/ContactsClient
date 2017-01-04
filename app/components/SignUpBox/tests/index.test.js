import SignUpBox from '../index';
import {
  Button,
} from 'rebass';
import { Flex } from 'reflexbox';

import expect, {
  createSpy,
} from 'expect';

import { shallow } from 'enzyme';
import React from 'react';

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

  it('it should have a link to SignIn', () => {
    expect(wrapper.containsAllMatchingElements([
      <Flex>Have an account?</Flex>,
      <button>Log in.</button>,
    ])).toBe(true);
  });
});

const renderSignUp = (props = {}) =>
  shallow(<SignUpBox {...props} />);
