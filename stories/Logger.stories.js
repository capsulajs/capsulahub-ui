import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Logger } from 'src';
import { getRandomLogs } from './utils';

export const props = {
  path: 'path>path?path',
};

export const actions = {
  onClear: action('onClear'),
  onResend: action('onResend'),
};

storiesOf('Logger', module)
  .add('default', () => <Logger {...props} {...actions} />)
  .add('data', () => <Logger data={getRandomLogs()} {...props} {...actions} />);
