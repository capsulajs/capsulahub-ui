import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'src';

export const props = {};
export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module).add('active', () => (
  <Button {...props} {...actions}>
    Example of button
  </Button>
));
