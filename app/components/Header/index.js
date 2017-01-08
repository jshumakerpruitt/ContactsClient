import React from 'react';

import { Flex } from 'reflexbox';
import Icon from 'react-geomicons';
import {
  Heading,
  Button,
} from 'rebass';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loggedIn: React.PropTypes.bool,
    toggleDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Flex
        style={styles.header}
        align="center"
        justify="center"
      >
        { this.props.loggedIn ?
          <Button
            p={0}
            m={0}
            style={styles.closeButton}
            onClick={this.props.toggleDrawer}
          >
            <Icon
              style={styles.hamburger}
              name="grid"
              color="white"
            />
          </Button>
                  : ''}
        <Heading
          level={1}
          size={1}
          color="white"
        >
          CodeContacts
        </Heading>
      </Flex>
    );
  }
}

const styles = {
  header: {
    height: '48px',
    backgroundColor: '#026aa7',
  },
  hamburger: {
    fontSize: '1.8em',
  },
  closeButton: {
    left: '20px',
    position: 'absolute',
    background: 'none',
  },
};

export default Header;

