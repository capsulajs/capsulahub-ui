import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { JsonInput } from 'src';
import { createRandomObject } from './utils';

export const props = {
  width: '100%',
  height: '200px'
};

export const actions = {
  onChange: action('onChange')
};

storiesOf('JsonInput', module)
  .add('default', () => <JsonInput {...props} {...actions}/>)
  .add('data', () => <JsonInput
    value={JSON.stringify(createRandomObject(3, true), null, 2)} {...props} {...actions}/>);
