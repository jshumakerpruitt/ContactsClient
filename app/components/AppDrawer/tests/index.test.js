import AppDrawer from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Icon from 'react-geomicons';

describe('<AppDrawer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWrapper();
  });

  it('it should have a default prop of open: false', () => {
    expect(wrapper.prop('open')).toEqual(false);
  });

  it('should have a dismiss button', () => {
    expect(wrapper.containsMatchingElement(<Icon name="close" />))
    .toBe(true);
  });
});

const renderWrapper = (props = {}) =>
  shallow(<AppDrawer {...props} />);
