import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Logger } from 'src';
import { getLogs } from './utils';

const props = {
  logs: getLogs(),
  width: 1000,
  height: 350,
};

const actions = {};

storiesOf('Logger', module)
  .add('default', () => <Logger {...props} {...actions} />)
  .add('data', () => <Logger {...props} {...actions} />);
