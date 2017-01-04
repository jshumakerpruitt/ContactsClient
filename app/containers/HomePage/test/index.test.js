/**
 * Testing the HomePage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

// import { FormattedMessage } from 'react-intl';
import { HomePage } from '../index';
import AuthBox from 'components/AuthBox';

describe('<HomePage />', () => {
  it('should render a AuthBox if not logged in', () => {
    const wrapper = shallow(<HomePage signedIn={false} />);
    expect(wrapper.find(AuthBox).length).toEqual(1);
  });
});
