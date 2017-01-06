/**
 * SignInBox - dumb sign in component that takes onSubmit
 *  and toggleSignIn
 *
 *  TODO: this component and SignUpBox are nearly identical;
 *  should be refactored
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

// uses currying to generate a filtered onKeyDown
// which only calls onSubmit if condition is met
const getOnKeyDown = (cb) => (e) => {
  if (e.type === 'keydown' && e.keyCode === 13) {
    cb();
  }
};

class SignInBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = { email: '', password: ''}
  }

  handleKeyDown(e) {
    const { email, password } = this.state;
    if (e.type === 'keydown' && e.keyCode === 13) {
      this.props.onSubmit(email, password)
    }
  }

  render() {
    const { onSubmit, toggleSignIn } = this.props
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
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
            onKeyDown={::this.handleKeyDown}
            label="Email"
            name="email"
            placeholder="Email"
            rounded
            type="email"
          />
          <Input
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
            onKeyDown={::this.handleKeyDown}
            label="Password"
            name="password"
            placeholder="Password"
            rounded
            type="password"
          />
          <Button
            className="submitButton"
            onClick={() => onSubmit(this.state.email, this.state.password)}
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
            Sign In
          </Button>
        </Flex>
        <Flex>{"Don't have an account?"}</Flex>
        <button
          className="toggle"
          style={styles.toggle}
          onClick={toggleSignIn}
        >
          Sign up.
        </button>
      </Flex>
    );
  }
}

SignInBox.propTypes = {
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
export default SignInBox;
