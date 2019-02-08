import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logs from 'src/components/Logs';
import {createRandomObj} from "../src/docs/utils";

export const props = {
  path: 'path>path?path'
};

export const actions = {
  toggle: action('toggle')
};

const data = [];
for (let i = 0; i < 25; i++) {
  const ratio = Math.random();
  if (0 <= ratio && ratio <= 1 / 3) {
    data.push({
      status: 'fail',
      data: { message: 'Not Found' },
      timestamp: new Date(),
    });
  }
  if (1 / 3 <= ratio && ratio <= 2 / 3) {
    data.push({
      status: 'success',
      data: createRandomObj(Math.ceil(Math.random() * 5), true),
      timestamp: new Date()
    })
  }
  if (2 / 3 <= ratio && ratio <= 1) {
    data.push({
      status: 'info',
      data: ['connected', 'disconnected'][Math.floor(Math.random() * 2)],
      timestamp: new Date()
    })
  }
}

storiesOf('Logs', module)
  .add('default', () => <Logs {...props} {...actions}/>)
  .add('data', () => <Logs data={data} {...props} {...actions}/>);
