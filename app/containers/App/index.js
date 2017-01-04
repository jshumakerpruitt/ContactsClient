import React from 'react';
import { connect } from 'react-redux'
import { Flex } from 'reflexbox';
import {
  Drawer,
} from 'rebass';

import Header from 'containers/Header';

function App(props) {
  return (
    <Flex
      style={styles.home}
      flexColumn
    >
      <Drawer />
      <Header />
      <Flex
        mt={3}
        flexAuto
        style={styles.stretchY}
      >
        <Flex
          flexAuto
        >
          {React.Children.toArray(props.children)}
        </Flex>
      </Flex>
    </Flex>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  token: React.PropTypes.string,
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
