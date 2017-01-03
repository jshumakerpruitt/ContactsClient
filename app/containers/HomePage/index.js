/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';

import { Flex } from 'reflexbox';

import { } from 'containers/App/selectors';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="flex-start"
      >
        Home Page
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
