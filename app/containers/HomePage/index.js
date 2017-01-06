/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Flex } from 'reflexbox';

// import * as actions from './actions';
import * as globalActions from 'containers/App/actions';
import {
  selectToken,
  selectAuthError,
} from 'containers/App/selectors';

import {
  selectContacts,
} from './selectors';


import AuthBox from 'components/AuthBox';
import ContactGrid from 'components/ContactGrid';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contacts: React.PropTypes.array,
    token: React.PropTypes.string,
    submitAuth: React.PropTypes.func,
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
        {token ? <ContactGrid contacts={this.props.contacts} /> : <AuthBox submitAuth={this.props.submitAuth} />}
      </Flex>
    );
  }
}

const styles = {
  homePage: {
  },
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  authError: selectAuthError(),
  contacts: selectContacts(),
});

export default connect(mapStateToProps, globalActions)(HomePage);
