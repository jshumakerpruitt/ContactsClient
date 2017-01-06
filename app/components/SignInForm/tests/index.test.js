import React from 'react';
import { shallow } from 'enzyme';

import {
  Button,
} from 'rebass';

import { SignInForm } from '../index';
import expect, {
  createSpy,
} from 'expect';

describe('<SignInForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderSignIn();
  });

  it('should have a submit button', () => {
    const inner = wrapper.childAt(0);
    expect(inner.find('.submitButton').length)
      .toEqual(1);
  });

  it('should submit on click', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignIn({ handleSubmit });
    wrapper.childAt(0).find(Button).simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in email', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignIn({ handleSubmit });

    const input = wrapper.find('[name="email"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in password', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignIn({ handleSubmit });

    const input = wrapper.find('[name="password"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should have a password Field', () => {
    expect(wrapper.find('[name="password"]').name())
      .toEqual('Field');
  });

  it('should have an email Field', () => {
    expect(wrapper.find('[name="email"]').name()).toEqual('Field');
  });
});

const renderSignIn = (props = { handleSubmit: () => {} }) =>
  shallow(<SignInForm {...props} />);
