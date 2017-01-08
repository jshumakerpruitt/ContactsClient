import Contact from '../index';

import expect from 'expect';
import { render, shallow } from 'enzyme';
import React from 'react';

describe('<Contact />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact contact={{}} />);
  });

  it('should render profile pic', () => {
    expect(wrapper.find('.profile-pic').length)
      .toEqual(1);
  });

  it('should have an edit button', () => {
    expect(wrapper.find('.edit-button').length)
      .toEqual(1);
  });

  it('should have a delete button', () => {
    expect(wrapper.find('.delete-button').length)
      .toEqual(1);
  });

  it('should render the address', () => {
    const fixture = 'myaddress';
    const component =
      renderWrapper({ address: fixture });
    expect(
      component.text().indexOf(fixture)
    ).toBeGreaterThan(-1);
  });
});

const renderWrapper = (fields = {
  name: '',
  email: '',
  phone: '',
  address: '',
  organization: '',
  avatar: '',
}) =>
   render(
     <Contact contact={fields} />
    )
;
