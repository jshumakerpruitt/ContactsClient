import React from 'react';

import { Flex } from 'reflexbox';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Flex
        style={styles.header}
        align="center"
        justify="space-between"
      >
      </Flex>
    );
  }
}

const styles = {
  header: {
  },
};

export default Header;
