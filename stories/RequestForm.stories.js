import React from 'react';
import { storiesOf } from '@storybook/react';
import { RequestForm } from 'src';

export const props = {
  width: 900,
  height: 450,
  path: 'test/test',
  selectLanguage: (data) => {},
  setArgument: (index, data) => {},
  submit: (data) => {
    console.log('submit data', data);
    if (typeof data.arguments[0] === 'function') {
      console.log('function res', data.arguments[0](4, 5));
    }
  },
};

storiesOf('RequestForm', module).add('default', () => <RequestForm {...props} />);
