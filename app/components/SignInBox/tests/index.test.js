import SignInBox from '../index';
import {
  Button,
} from 'rebass';
import { Flex } from 'reflexbox';

import expect, {
  createSpy,
} from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<SignInBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderSignIn();
  });

  it('should have a submit button', () => {
    expect(wrapper.find('.submitButton').length)
      .toEqual(1);
  });

  it('it should submit on click', () => {
    const onSubmit = createSpy();
    wrapper = renderSignIn({ onSubmit });
    wrapper.find(Button).simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });

  it('it should have a password Input', () => {
    expect(wrapper.find('[label="Password"]').name()).toEqual('Input');
  });

  it('it should have an email Input', () => {
    expect(wrapper.find('[label="Email"]').name()).toEqual('Input');
  });

  it('it should have a button to SignUp', () => {
    expect(wrapper.containsAllMatchingElements([
      <Flex>{"Don't have an account?"}</Flex>, // eslint-disable
      <button>Sign up.</button>,
    ])).toBe(true);
  });
});

const renderSignIn = (props = {}) =>
  shallow(<SignInBox {...props} />);
