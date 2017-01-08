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
const nameField = textField({ label: 'name', placeholder: 'name' });
const phoneField = textField({ label: 'phone', placeholder: 'phone' });
const addressField = textField({ label: 'address', placeholder: 'address' });
const organizationField = textField({ label: 'organization', placeholder: 'organization' });
const birthdayField = textField({ label: 'birthday', placeholder: 'birthday' });

// named export of undecorated component for testing
export const ContactForm = ({ handleSubmit, submitForm }) => (
  <Flex
    style={styles.form}
    col={12}
    mb={3}
    flexColumn
  >
    <form onSubmit={handleSubmit(submitForm)}>
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
        style={styles.submit}
        type="submit"
        className="submitButton"
        backgroundColor="primary"
        color="white"
        inverted
        rounded
      >
        Create Contact
      </Button>
    </form>
  </Flex>
);

ContactForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
};

const styles = {
  form: {
    maxWidth: '350px',
  },
};

// Decorate the form component
export default reduxForm({
  form: 'contact',
})(ContactForm);
