/**
 * SignInBox - dumb sign in component that takes onSubmit
 *  and toggleSignIn
 *
 *  TODO: convert to stateless
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  Button,
} from 'rebass';

import { Flex } from 'reflexbox';
import {
  emailField,
  passwordField,
} from 'utils/renderField';

export class SignInForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, submitForm } = this.props;

    return (
      <form onSubmit={handleSubmit(submitForm)}>
        <Flex
          col={12}
          mb={3}
          flexColumn
        >
          <Field
            name="email"
            type="email"
            component={emailField}
          />
          <Field
            name="password"
            type="password"
            component={passwordField}
          />
          <Button
            type="submit"
            className="submitButton"
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
            Log In
          </Button>
        </Flex>
      </form>
    );
  }
}

SignInForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
};

// Decorate the form component
export default reduxForm({
  form: 'signIn',
})(SignInForm);

