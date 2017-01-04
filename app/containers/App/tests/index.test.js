import App from '../index';
import Header from 'containers/Header';
import AppDrawer from 'components/AppDrawer';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';


describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Header).length)
      .toEqual(1);
  });

  it('should render the Drawer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(AppDrawer).length)
      .toEqual(1);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
