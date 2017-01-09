import { App } from '../index';
import Header from 'components/Header';
import AppDrawer from 'components/AppDrawer';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';


describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App clearErrors={() => {}} />
    );
  });
  it('should render the header', () => {
    expect(wrapper.find(Header).length)
      .toEqual(1);
  });

  it('should render the Drawer', () => {
    expect(wrapper.find(AppDrawer).length)
      .toEqual(1);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App clearErrors={() => {}}>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
