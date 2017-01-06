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
const nameField = textField({ label: 'name', placholder: 'name' });
const phoneField = textField({ label: 'phone', placholder: 'phone' });
const addressField = textField({ label: 'address', placholder: 'address' });
const organizationField = textField({ label: 'organization', placholder: 'organization' });
const birthdayField = textField({ label: 'birthday', placholder: 'birthday' });

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
        component={nameField}
      />
      <Field
        name="email"
        type="email"
        component={emailField}
      />
      <Field
        name="phone"
        type="text"
        component={phoneField}
      />
      <Field
        name="address"
        type="text"
        component={addressField}
      />
      <Field
        name="organization"
        type="text"
        component={organizationField}
      />
      <Field
        name="birthday"
        type="text"
        component={birthdayField}
      />
      <Button
        type="submit"
        className="submitButton"
        backgroundColor="primary"
        color="white"
        inverted
        rounded
      >
        Create Contact
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
