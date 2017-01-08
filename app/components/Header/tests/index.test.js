import React from 'react';
import expect from 'expect';
// import { Flex } from 'reflexbox';

import Icon from 'react-geomicons';
import { shallow, render } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  let wrapper;
  let authWrapper;
  beforeEach(() => {
    wrapper = getShallow();
    authWrapper = getShallow({ loggedIn: true });
  });

  it('contains the logo', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.text())
      .toEqual('CodeContacts');
  });

  it('contains a hamburger when logged in', () => {
    expect(authWrapper.containsMatchingElement(
      <Icon name="grid" />
    ))
      .toEqual(true);
  });

  it('does not contain a hamburger when logged out', () => {
    expect(wrapper.containsMatchingElement(
      <Icon name="grid" />
    )).toEqual(false);
  });
});

const getShallow = (props = {}) =>
  shallow(<Header {...props} />);

const renderComponent = (props = {
  loggedIn: true,
  toggleDrawer: () => {},
}) =>
  render(<Header {...props} />);
