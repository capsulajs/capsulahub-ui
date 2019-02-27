import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from 'src';

export const props = {
  placeholder: 'Example of input',
};

export const actions = {
  onChange: action('onChange'),
};

storiesOf('Input', module).add('default', () => <Input {...props} {...actions} />);
