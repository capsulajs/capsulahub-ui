import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';

export const props = {
  isOpened: true,
  title: 'Example of title'
};

export const actions = {
  toggle: action('toggle')
};

storiesOf('Modal', module)
  .add('default', () => <Modal {...props} {...actions}>Example of modal content</Modal>);
