import React from 'react';
import { Input } from 'rebass';

export const inputField = (options) => (field) => (
  <Input
    label={options.label}
    name={field.input.name}
    value={field.input.value}
    onChange={(event) => field.input.onChange(event.target.value)}
    placeholder={options.placeholder}
    type={options.type}
    rounded
  />
);

export const emailField = inputField({
  label: 'email',
  placeholder: 'email',
  type: 'email',
});

export const passwordField = inputField({
  label: 'password',
  placeholder: 'password',
  type: 'password',
});

export const textField = (params) => inputField({
  label: params.label,
  placeholder: params.placeholder,
  type: 'text',
});
