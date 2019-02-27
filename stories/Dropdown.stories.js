import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from 'src';

export const props = {
  title: 'Example of drop down list',
  items: [{ label: 'one' }, { label: 'two' }, { label: 'three' }],
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Dropdown', module).add('default', () => <Dropdown {...props} {...actions} />);
