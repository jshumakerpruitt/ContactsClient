/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  Input,
  Button,
} from 'rebass';

import { Flex } from 'reflexbox';

// TODO: this is duplicated in SignInForm
// move to utils and import
const inputField = (options) => (field) => (
  <Input
    label={options.label}
    name={field.input.name}
    value={field.value}
    onChange={(event) => field.input.onChange(event.target.value)}
    placeholder={options.placeholder}
    type={options.type}
    rounded
  />
);

const emailField = inputField({
  label: 'email',
  placeholder: 'email',
  type: 'email',
});

const usernameField = inputField({
  label: 'username',
  placeholder: 'username',
  type: 'text',
});

const passwordField = inputField({
  label: 'password',
  placeholder: 'password',
  type: 'password',
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
