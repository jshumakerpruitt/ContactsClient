import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { ContactGrid } from '../index';
import ContactCard from 'components/ContactCard';

describe('<ContactGrid />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getShallow({ contacts: [1, 2] });
  });

  it('should render an Overlay', () => {
    expect(
      wrapper.childAt(0).name()
    ).toEqual('Overlay');
  });

  it('should render ContactCards if it has contacts', () => {
    expect(wrapper.containsMatchingElement(<ContactCard />))
      .toEqual(true);
  });
});

const getShallow = (props = {
  contacts: [],
  requestContacts: () => {},
}) =>
  shallow(<ContactGrid {...props} />);

