/**
 *
 * AuthBox
 *
 * state = { signIn: Boolean }
 * shows a signin or a sign up form
 */

import React from 'react';
import { Flex } from 'reflexbox';
import {
  Heading,
} from 'rebass';
import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

export class AuthBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    submitAuth: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { signIn: true };
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signIn(data) {
    // TODO: add tests to cover this
    this.props.submitAuth(data.toJS());
  }

  signUp(data) {
     // TODO: add tests to cover this
    this.props.submitAuth(data.toJS());
  }

  toggleSignIn() {
    this.setState({ signIn: !this.state.signIn });
  }

  render() {
    return (
      <Flex
        col={12}
        justify="center"
        style={styles.authBox}
        align="center"
      >
        <Flex
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
            {this.state.signIn ? 'Log In' : 'Sign Up'}
          </Heading>
          {this.state.signIn ?
            <SignInForm submitForm={this.signIn} />
           : <SignUpForm submitForm={this.signUp} />}
          <Flex>
            {this.state.signIn ?
           "Don't Have and account?"
           : 'Have an account?'}
          </Flex>
          <button
            className="toggle"
            style={styles.toggle}
            onClick={this.toggleSignIn}
          >
            {this.state.signIn ? 'Sign up.' : 'Log in.'}
          </button>
        </Flex>
      </Flex>
    );
  }
}
const styles = {
  authBox: {
    backgroundColor: '#FFF',
    borderRadius: '8px',
    maxWidth: '350px',
  },
  toggle: {
    cursor: 'pointer',
    textDecoration: 'underline',
    background: 'none!important',
    border: 'none',
    padding: '0!important',
    color: 'blue',
  },
};

export default AuthBox;
