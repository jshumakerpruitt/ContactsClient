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
export const ContactForm = ({
  handleSubmit,
  submitForm,
  title = 'Submit',
}) => (
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
        name="birthdate"
        type="text"
        component={birthdayField}
      />
      <Flex
        justify="center"
        pt={2}
      >
        <Button
          style={styles.submit}
          type="submit"
          className="submitButton"
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          {title}
        </Button>
      </Flex>
    </form>
  </Flex>
);

ContactForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
  title: React.PropTypes.string,
};

const styles = {
  form: {
    maxWidth: '350px',
  },
  submit: {
  },
};

const validate = (immutableValues) => {
  const values = immutableValues.toJS();
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (values.birthdate &&
      !/^\d{4}-\d{2}-\d{2}$/i
        .test(values.birthdate)) {
    errors.birthdate =
      'Please use YYYY-MM-DD format';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
// Decorate the form component
export default reduxForm({
  form: 'contact',
  validate,
})(ContactForm);
