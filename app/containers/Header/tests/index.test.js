import React from 'react';
import expect from 'expect';
// import { Flex } from 'reflexbox';

import Icon from 'react-geomicons';
import { shallow } from 'enzyme';
import {
  Heading,
} from 'rebass';

import { Header } from '../index';

describe('<Header />', () => {
  let wrapper;
  let authWrapper;
  beforeEach(() => {
    wrapper = getShallow();
    authWrapper = getShallow({loggedIn: true});
  });

  it('contains the logo', () => {
    expect(wrapper.containsMatchingElement(
      <Heading
        level={1}
        size={1}
        color="white"
      >
          CodeContacts
      </Heading>
    )).toEqual(true);
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

  it('has an initial state of drawerClosed', () => {
    expect(wrapper.state('drawerOpen')).toBe(false)
  })

  it('transitions to drawerOpen on hamburger click', () => {
    const hamburger = authWrapper.find(Icon)
    hamburger.simulate('click')
    expect(authWrapper.state('drawerOpen'))
     .toEqual(true)
  })

});

const getShallow = (props = {}) =>
  shallow(<Header {...props} />);
