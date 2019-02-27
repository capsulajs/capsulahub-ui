import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from 'src';

export const props = {
  label: 'Example of checkbox',
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Checkbox', module).add('default', () => <Checkbox {...props} {...actions} />);
