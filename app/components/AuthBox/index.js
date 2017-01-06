/**
*
* AuthBox
*
* state = { signIn: Boolean }
* shows a signin or a sign up form
*/

import React from 'react';
import { Flex } from 'reflexbox';
import SignInBox from 'components/SignInBox';
import SignUpBox from 'components/SignUpBox';

class AuthBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { signIn: true };
    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

  toggleSignIn() {
    this.setState({ signIn: !this.state.signIn });
  }

  render() {
    console.log(this.props)
    return (
      <Flex
        col={12}
        justify="center"
        style={styles.authBox}
        align="center"
      >
        {this.state.signIn ?
          <SignInBox
            onSubmit={() => {}}
            toggleSignIn={this.toggleSignIn}
            onSubmit={this.props.submitAuth}
          />
         :
           <SignUpBox
             onSubmit={() => {}}
             toggleSignIn={this.toggleSignIn}
           />}
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
};

export default AuthBox;
