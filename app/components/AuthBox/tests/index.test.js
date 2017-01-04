import AuthBox from '../index';
import SignInBox from 'components/SignInBox';
import SignUpBox from 'components/SignUpBox';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

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
      wrapper.containsMatchingElement(<SignInBox />)
    ).toEqual(true);
  });

  it('It should not show a SignUp box in signIn state', () => {
    wrapper.setState({ signIn: true });
    expect(
      wrapper.containsMatchingElement(<SignUpBox />)
    ).toEqual(false);
  });

  it('It should show a SignUpBox when in signUp state', () => {
    wrapper.setState({ signIn: false });
    expect(
      wrapper.containsMatchingElement(<SignUpBox />)
    ).toEqual(true);
  });

  it('It should not show a SignIn box in signUp state', () => {
    wrapper.setState({ signIn: false });
    expect(
      wrapper.containsMatchingElement(<SignInBox />)
    ).toEqual(false);
  });

  it('It should transition from SignUpBox to SignInBox', () => {
    wrapper.setState({ signIn: false });
    const toggle = wrapper.childAt(0)
                          .shallow()
                          .find('.toggle')
                          .first();

    toggle.simulate('click');

    expect(wrapper.state('signIn')).toEqual(true);
  });

  it('It should transition from SignInBox to SignUpBox', () => {
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

