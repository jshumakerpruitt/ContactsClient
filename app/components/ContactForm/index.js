/**
 *
 * ContactForm
 *
 */

import React from 'react';

import { Field, reduxForm } from 'redux-form/immutable';

import { Flex } from 'reflexbox';
import {
  Button,
} from 'rebass';

import {
  emailField,
  textField,
} from 'utils/renderField';

// named export of undecorated component for testing
export const ContactForm = ({ handleSubmit, submitForm }) => (
  <form onSubmit={handleSubmit(submitForm)}>
    <Flex
      col={12}
      mb={3}
      flexColumn
    >
      <Field
        name="name"
        type="text"
        component={textField({ label: 'name', placholder: 'name' })}
      />
      <Field
        name="email"
        type="email"
        component={emailField}
      />
      <Field
        name="phone"
        type="text"
        component={textField({ label: 'phone', placholder: 'phone' })}
      />
      <Field
        name="address"
        type="text"
        component={textField({ label: 'address', placholder: 'address' })}
      />
      <Field
        name="organization"
        type="text"
        component={textField({ label: 'organization', placholder: 'organization' })}
      />
      <Field
        name="birthday"
        type="text"
        component={textField({ label: 'birthday', placholder: 'birthday' })}
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

ContactForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
};

// Decorate the form component
export default reduxForm({
  form: 'contact',
})(ContactForm);
