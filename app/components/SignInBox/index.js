/**
*
* SignInBox
*
*/

import React from 'react';
import {
  Input,
  Button,
  Heading,
} from 'rebass'

import { Flex } from 'reflexbox';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function SignInBox({onSubmit}) {
  return (
    <Flex
      col={12}
      sm={12}
      md={3}
      lg={3}
      p={3}
      style={styles.signIn}
      flexColumn
      align='center'
      justify='center'
    >
      <Heading
        p={3}
        level={1}
        size={1}
      >
      <FormattedMessage {...messages.header} />
      </Heading>
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        rounded
        type="email"
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
        className='submitButton'
        onClick={onSubmit}
        backgroundColor="primary"
        color="white"
        inverted
        rounded
      >
        Sign In
      </Button>
    </Flex>
  );
}

const styles = {
  signIn: {
    backgroundColor: '#FFF',
    borderRadius: '8px',
  },
}
export default SignInBox;
