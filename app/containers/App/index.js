import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectToken,
  selectAuthError,
} from 'containers/App/selectors';

import { Flex } from 'reflexbox';
import {
} from 'rebass';
import AppDrawer from 'components/AppDrawer';

import Header from 'components/Header';
import * as actions from './actions';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    logOut: React.PropTypes.func,
    token: React.PropTypes.string,
  };


  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    return (
      <Flex
        style={styles.home}
        flexColumn
      >
        <AppDrawer
          open={this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
          handleLogOut={this.props.logOut}
        />
        <Header
          toggleDrawer={this.toggleDrawer}
          loggedIn={!!this.props.token}
        />
        <Flex
          mt={3}
          flexAuto
          style={styles.stretchY}
        >
          <Flex
            flexAuto
          >
            {React.Children.toArray(this.props.children)}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

const styles = {
  home: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0079bf',
  },
  stretchY: {
    width: '100%',
  },
};
const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  authError: selectAuthError(),
});

export default connect(mapStateToProps, actions)(App);
