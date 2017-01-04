/**
 *
 * SignUpBox
 *
 */

import React from 'react';
import {
  Input,
  Button,
  Heading,
} from 'rebass';

import { Flex } from 'reflexbox';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function SignUpBox({ onSubmit, toggleSignIn }) {
  return (
    <Flex
      style={styles.signIn}
      flexAuto
      p={3}
      flexColumn
      align="center"
      justify="center"
    >
      <Heading
        p={3}
        level={1}
        size={1}
      >
        <FormattedMessage {...messages.header} />
      </Heading>
      <Flex
        col={12}
        mb={3}
        flexColumn
      >
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          rounded
          type="email"
        />
        <Input
          label="Username"
          name="username"
          placeholder="Username"
          rounded
          type="text"
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          rounded
          type="password"
        />
        <Button
          auto
          className="submitButton"
          onClick={onSubmit}
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          Sign Up
        </Button>
      </Flex>
      <Flex>Have an account?</Flex>
      <button
        className="toggle"
        style={styles.toggle}
        onClick={toggleSignIn}
      >
        Log in.
      </button>
    </Flex>
  );
}

SignUpBox.propTypes = {
  onSubmit: React.PropTypes.func,
  toggleSignIn: React.PropTypes.func,
};

const styles = {
  toggle: {
    textDecoration: 'underline',
    background: 'none!important',
    border: 'none',
    padding: '0!important',
    color: 'blue',
  },
};
export default SignUpBox;
