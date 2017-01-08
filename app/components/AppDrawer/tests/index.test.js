import AppDrawer from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { Button } from 'rebass';
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

  it('should have a logout button', () => {
    expect(wrapper.containsMatchingElement(
      <Button>
        Log Out
      </Button>
    ))
    .toBe(true);
  });

  it('should log the user out on logout click', () => {
    const handleLogOut = expect.createSpy();
    const toggleDrawer = expect.createSpy();
    const wrapperWithLogOut = renderWrapper({
      handleLogOut,
      toggleDrawer,
    });
    const button = wrapperWithLogOut.find('.logout');
    button.simulate('click');
    expect(handleLogOut).toHaveBeenCalled();
    expect(toggleDrawer).toHaveBeenCalled();
  });
});

const renderWrapper = (props = {}) =>
  shallow(<AppDrawer {...props} />);
