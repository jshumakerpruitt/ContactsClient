/**
 * Testing the HomePage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

// import { FormattedMessage } from 'react-intl';
import { HomePage } from '../index';
import AuthBox from 'components/AuthBox';
import ContactForm from 'components/ContactForm';
import ContactGrid from 'containers/ContactGrid';

describe('<HomePage />', () => {
  it('should render a AuthBox if not logged in', () => {
    const wrapper = shallow(<HomePage signedIn={false} />);
    expect(wrapper.find(AuthBox).length).toEqual(1);
  });

  it('should render a ContactGrid if logged in', () => {
    const wrapper = shallow(<HomePage token={'111'} />);
    expect(wrapper.find(ContactGrid).length).toEqual(1);
  });

  it('should render a ContactForm if logged in', () => {
    const wrapper = shallow(<HomePage token={'111'} />);
    wrapper.setState({ formHidden: false });
    expect(wrapper.find(ContactForm).length).toEqual(1);
  });
});
