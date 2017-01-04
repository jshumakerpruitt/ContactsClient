import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Flex } from 'reflexbox';
import { Text } from 'rebass';

import ContactGrid from '../index';
import ContactCard from 'components/ContactCard';

describe('<ContactGrid />', () => {
  let wrapper;
  let emptyWrapper;
  beforeEach(() => {
    wrapper = getShallow({ contacts: [1, 2] });
    emptyWrapper = getShallow();
  });

  it('should not render ContactCards if contacts empty', () => {
    expect(emptyWrapper.containsMatchingElement(<ContactCard />))
      .toEqual(false);
  });

  it('should render a message if contacts empty', () => {
    expect(emptyWrapper.containsMatchingElement(<Flex><Text>No Contacts Found.</Text></Flex>))
    .toEqual(true);
  });

  it('should render ContactCards if it has contacts', () => {
    expect(wrapper.containsMatchingElement(<ContactCard />))
      .toEqual(true);
  });
});

const getShallow = (props = { contacts: [] }) =>
  shallow(<ContactGrid {...props} />);
