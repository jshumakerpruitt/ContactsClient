/*
 *
 * AppDrawer
 *
 */

import React from 'react';

import { Flex } from 'reflexbox';
import {
  Drawer,
  Button,
} from 'rebass';
import Icon from 'react-geomicons';

const AppDrawer = ({ open, toggleDrawer }) => (
  <Drawer
    open={open}
    backgroundColor="#0079bf"
    p={0}
    style={styles.container}
  >
    <Flex
      flexColumn
    >
      <Flex
        style={styles.row}
        p={1}
      >
        <Button
          p={0}
          m={0}
          style={styles.closeButton}
          onClick={toggleDrawer}
        >
          <Icon
            style={styles.close}
            name="close"
            color="#FFF"
          />
        </Button>
      </Flex>
      <Flex
        style={styles.row}
        align="center"
        justify="center"
      >
        <Button
          style={styles.menuButton}
        >
          My Account
        </Button>
      </Flex>
      <Flex
        style={styles.row}
        align="center"
        justify="center"
      >
        <Button
          style={styles.menuButton}
        >
          Settings
        </Button>
      </Flex>
      <Flex
        style={styles.row}
        align="center"
        justify="center"
      >
        <Button
          style={styles.menuButton}
        >
          Log Out
        </Button>
      </Flex>
    </Flex>
  </Drawer>
);

AppDrawer.propTypes = {
  open: React.PropTypes.bool,
  toggleDrawer: React.PropTypes.func,
};

const styles = {
  close: {
    fontSize: '1.5em',
  },
  closeButton: {
    background: 'none',
  },
  menuButton: {
    background: 'none',
    flex: 1,
    height: '48px',
  },
  row: {
    borderBottom: '2px solid #c0c0c0',
    height: '48px',
  },
  container: {
    border: '2px solid #c0c0c0',
  },
};

export default AppDrawer;
