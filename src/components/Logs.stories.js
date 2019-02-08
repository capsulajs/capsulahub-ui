import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logs from './Logs';

export const props = {
  isOpened: true,
  title: 'Example of title'
};

export const actions = {
  toggle: action('toggle')
};

storiesOf('Logs', module)
  .add('default', () => <Logs {...props} {...actions}>Example of modal content</Logs>);
