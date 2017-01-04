/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { Flex } from 'reflexbox';

import * as actions from './actions';
import { } from 'containers/App/selectors';

import AuthBox from 'components/AuthBox';
import ContactGrid from 'components/ContactGrid';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contacts: React.PropTypes.array,
    token: React.PropTypes.string,
  }

  render() {
    const { token } = this.props;

    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="center"
        align="center"
      >
        {token ? <ContactGrid contacts={this.props.contacts} /> : <AuthBox />}
      </Flex>
    );
  }
}

const styles = {
  homePage: {
  },
};

// hard code values for prototyping UI
// TODO: move to redux
const mapStateToProps = () => ({
  token: '1111',
  contacts: [{
    name: 'John Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Product Manager ad ACME Tech',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }, {
    name: 'Jane Doe',
    avatar: 'http://placehold.it/320/08e/fff',
    notes: 'Senior Dev at Facebook',
  }],
});

export default connect(mapStateToProps, actions)(HomePage);
