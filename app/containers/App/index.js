import React from 'react';
import { Flex } from 'reflexbox';
import {
} from 'rebass';
import AppDrawer from 'components/AppDrawer';

import Header from 'containers/Header';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        />
        <Header
          toggleDrawer={this.toggleDrawer}
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

App.propTypes = {
  children: React.PropTypes.node,
};

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

export default App;
