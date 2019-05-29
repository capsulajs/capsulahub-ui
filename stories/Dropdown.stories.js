import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from 'src';

export const props = {
  title: 'Example of dropdown',
  items: [{ label: 'one' }, { label: 'two' }, { label: 'three' }],
  selected: '',
};

export const actions = {
  onChange: action('onChange'),
};

storiesOf('Dropdown', module).add('default', () => <Dropdown {...props} {...actions} />);
