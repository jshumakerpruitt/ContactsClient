import AuthBox from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

describe('<AuthBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getShallowWrapper();
  });

  it('it should have an initial state of signin=true', () => {
    expect(wrapper.state('signIn')).toBe(true);
  });

  it('It should show a SignIn box in signIn state', () => {
    wrapper.setState({ signIn: true });
    expect(
      wrapper.containsMatchingElement(<SignInForm />)
    ).toEqual(true);
  });

  it('It should not show a SignUpForm in signIn state', () => {
    wrapper.setState({ signIn: true });
    expect(
      wrapper.containsMatchingElement(<SignUpForm />)
    ).toEqual(false);
  });

  it('It should show a SignUpForm when in signUp state', () => {
    wrapper.setState({ signIn: false });
    expect(
      wrapper.containsMatchingElement(<SignUpForm />)
    ).toEqual(true);
  });

  it('It should not show a SignIn box in signUp state', () => {
    wrapper.setState({ signIn: false });
    expect(
      wrapper.containsMatchingElement(<SignInForm />)
    ).toEqual(false);
  });

  it('it should have a link to SignIn when in SignUp state', () => {
    wrapper.setState({ signIn: false });
    const toggle = wrapper.childAt(0)
                          .shallow()
                          .find('.toggle')
                          .first();

    expect(toggle.text())
      .toEqual('Log in.');
  });

  it('it should have a link to SignUp when in SignIn state', () => {
    wrapper.setState({ signIn: true });
    const toggle = wrapper.childAt(0)
                          .shallow()
                          .find('.toggle')
                          .first();

    expect(toggle.text())
      .toEqual('Sign up.');
  });

  it('It should transition from SignUpForm to SignInForm', () => {
    wrapper.setState({ signIn: false });
    const toggle = wrapper.childAt(0)
                          .shallow()
                          .find('.toggle')
                          .first();

    toggle.simulate('click');

    expect(wrapper.state('signIn')).toEqual(true);
  });

  it('It should transition from SignInForm to SignUpForm', () => {
    wrapper.setState({ signIn: true });
    const toggle = wrapper.childAt(0)
                          .shallow()
                          .find('.toggle')
                          .first();

    toggle.simulate('click');

    expect(wrapper.state('signIn')).toEqual(false);
  });
});

const getShallowWrapper = () =>
  shallow(<AuthBox />);
