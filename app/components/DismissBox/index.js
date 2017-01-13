/**
 *
 * DismissBox
 *
 */

import React from 'react';
import { Flex } from 'reflexbox';
import {
  Button,
  ButtonCircle,
} from 'rebass';
import Icon from 'react-geomicons';


function DismissBox({ onDelete, onDismiss }) {
  return (
    <Flex
      flexColumn
      justify="center"
      align="flex-end"
      style={styles.confirm}
      mb={3}
    >
      <ButtonCircle
        color="black"
        backgroundColor="white"
        onClick={onDismiss}
      >
        <Icon name="close" />
      </ButtonCircle>
      <Flex
        flexColumn
        p={5}
      >
        <Button
          theme="error"
          className="delete-button"
          onClick={onDelete}
        >
          Really Delete?
        </Button>
      </Flex>
    </Flex>
  );
}

DismissBox.propTypes = {
  onDelete: React.PropTypes.func,
  onDismiss: React.PropTypes.func,
};

const styles = {
  container: {
    overflow: 'hidden',
    maxWidth: '90vw',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: '#fff',
  },
  imgWrapper: {
    borderRadius: '2px',
    overflow: 'clip',
  },
  confirm: {
    border: '1px solid red',
    borderRadius: '2px',
  },
};
export default DismissBox;
