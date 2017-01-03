/**
 * Testing the HomePage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import { HomePage }from '../index';
import SignInBox from 'components/SignInBox'

describe('<HomePage />', () => {
  it('should render a signInBox if not logged in', () => {
    const wrapper = shallow(<HomePage signedIn={false} />);
    expect(wrapper.find(SignInBox).length).toEqual(1);
  });
});
