/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import {
  Button,
} from 'rebass';

import { Flex } from 'reflexbox';

import {
  emailField,
  textField,
  passwordField,
} from 'utils/renderField';

const usernameField = textField({
  label: 'username',
  placeholder: 'username',
});

export class SignUpForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    handleSubmit: React.PropTypes.func,
    submitForm: React.PropTypes.func,
  };

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
            name="username"
            type="username"
            component={usernameField}
          />
          <Field
            name="password"
            type="password"
            component={passwordField}
          />
          <Button
            className="submitButton"
            backgroundColor="primary"
            color="white"
            inverted
            rounded
            type="submit"
          >
            Sign Up
          </Button>
        </Flex>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
};

// Decorate the form component
export default reduxForm({
  form: 'signUp',
})(SignUpForm);
