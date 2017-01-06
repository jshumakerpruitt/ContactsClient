/**
 * SignInBox - dumb sign in component that takes onSubmit
 *  and toggleSignIn
 *
 *  TODO: this component and SignUpBox are nearly identical;
 *  should be refactored
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  Input,
  Button,
} from 'rebass';

import { Flex } from 'reflexbox';

// TODO: this is duplicated in SignUpForm
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

const passwordField = inputField({
  label: 'password',
  placeholder: 'password',
  type: 'password',
});


//      <form onSubmit={handleSubmit((data) => { submitForm(data.get('email'), data.get('password')); })} >
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

