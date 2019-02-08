import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logs from 'src/components/Logs';
import { getRandomLogs } from './utils';

export const props = {
  path: 'path>path?path'
};

export const actions = {
  onClear: action('onClear'),
  onResend: action('onResend')
};

storiesOf('Logs', module)
  .add('default', () => <Logs {...props} {...actions}/>)
  .add('data', () => <Logs data={getRandomLogs()} {...props} {...actions}/>);
