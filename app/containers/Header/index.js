import React from 'react';
import { connect } from 'react-redux'

import { Flex } from 'reflexbox';
import Icon from 'react-geomicons';
import {
  Heading,
//  Text, Button,
} from 'rebass';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = { drawerOpen: false}
    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer() {
    this.setState({drawerOpen: true})
  }

  render() {
    return (
      <Flex
        style={styles.header}
        align="center"
        justify="center"
      >
      { this.props.loggedIn ?
        <Icon
          onClick={this.openDrawer}
          name="grid"
          color="white"
          style={styles.hamburger}
        /> : ''}
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
    height: '48',
    backgroundColor: '#026aa7',
  },
  hamburger: {
    position: 'absolute',
    left: '20px',
    fontSize: '2.0em',
  },
};

// hard code values for prototyping UI
// TODO: move to red
const mapStateToProps = () => ({
  loggedIn: true,
})

export default connect(mapStateToProps, )(Header);

