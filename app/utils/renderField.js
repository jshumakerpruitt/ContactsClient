import React from 'react';

import { Flex } from 'reflexbox';
import { Input } from 'rebass';

export const inputField = (options) => (field) => {
  const { input, meta: { error } } =
field;
  return (
    <Flex
      flexColumn
    >
      <Input
        autoOff
        label={options.label}
        name={input.name}
        value={input.value}
        onChange={(event) => input.onChange(event.target.value)}
        placeholder={options.placeholder}
        type={options.type}
        message={error || ''}
        rounded
      />
    </Flex>
  );
};
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
