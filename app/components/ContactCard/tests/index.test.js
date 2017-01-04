import ContactCard from '../index';
import React from 'react';
import { shallow } from 'enzyme';
import {
  Card,
  CardImage,
  Heading,
} from 'rebass';

import expect from 'expect';

describe('<ContactCard />', () => {
  let wrapper;
  const contact = {
    name: 'John Doe',
    avatar: 'http://placehold.it/320/08e/fff',
  };

  beforeEach(() => {
    wrapper = getShallow({ contact });
  });

  it('should render a Card', () => {
    expect(wrapper.containsMatchingElement(Card)).toBe(true);
  });

  it('should render the contact name', () => {
    const name = wrapper.find(Heading);
    expect(name.containsMatchingElement(<Heading>John Doe</Heading>))
                        .toEqual(true);
  });

  it('should render the contact avatar', () => {
    expect(wrapper.containsMatchingElement(CardImage)).toBe(true);
  });
});

const getShallow = (props = {}) =>
  shallow(<ContactCard {...props} />);
