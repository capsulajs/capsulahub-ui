import React from 'react';
import { storiesOf } from '@storybook/react';
import { RequestForm } from 'src';

export const props = {
  width: '100%',
  height: '200px',
  path: 'test/test',
  selectLanguage: console.log,
  setInput: console.log,
  submit: console.log,
};

storiesOf('RequestForm', module).add('default', () => <RequestForm {...props} />);
