/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Flex } from 'reflexbox';

import * as actions from './actions';
import { } from 'containers/App/selectors';

import AuthBox from 'components/AuthBox';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    signedIn: React.PropTypes.boolean,
  }

  render() {
    const { signedIn } = this.props;

    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="center"
        align="center"
      >
        {signedIn ? 'Home Page' : <AuthBox />}
      </Flex>
    );
  }
}

const styles = {
  homePage: {
  },
};

HomePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, actions)(HomePage);
