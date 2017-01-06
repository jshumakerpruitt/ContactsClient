import React from 'react';
import { shallow } from 'enzyme';

import {
  Button,
} from 'rebass';

import { SignUpForm } from '../index';
import expect, {
  createSpy,
} from 'expect';


// TODO: add tests for submitting out form
describe('<SignUpForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderSignUp();
  });

  it('should have a submit button', () => {
    const inner = wrapper.childAt(0);
    expect(inner.find('.submitButton').length)
      .toEqual(1);
  });

  it('should submit on click', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignUp({ handleSubmit });
    wrapper.childAt(0).find(Button).simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should have an email Field', () => {
    expect(wrapper.find('[name="email"]').name()).toEqual('Field');
  });

  it('should submit on keydown in email', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignUp({ handleSubmit });

    const input = wrapper.find('[name="email"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should submit on keydown in password', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignUp({ handleSubmit });

    const input = wrapper.find('[name="password"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should have a password Field', () => {
    expect(wrapper.find('[name="password"]').name())
      .toEqual('Field');
  });

  it('should have an username Field', () => {
    expect(wrapper.find('[name="username"]').name()).toEqual('Field');
  });

  it('should submit on keydown in username', () => {
    const handleSubmit = createSpy();
    wrapper = renderSignUp({ handleSubmit });

    const input = wrapper.find('[name="username"]');
    input.simulate('keyDown', { keyCode: 13 });

    expect(handleSubmit).toHaveBeenCalled();
  });
});

const renderSignUp = (props = { handleSubmit: () => {} }) =>
  shallow(<SignUpForm {...props} />);
