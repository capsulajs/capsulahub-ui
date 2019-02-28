import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from 'src';

export const props = {
  label: 'Example of checkbox',
};

export const actions = {
  onChange: action('onChange'),
};

storiesOf('CheckBox', module).add('default', () => <CheckBox {...props} {...actions} />);
