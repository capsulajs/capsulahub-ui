import React from 'react';
import { storiesOf } from '@storybook/react';
import { RequestForm } from 'src';

export const props = {
  width: 900,
  height: 450,
  path: 'test/test',
  selectLanguage: console.log,
  setArgument: console.log,
  submit: console.log,
};

storiesOf('RequestForm', module).add('default', () => <RequestForm {...props} />);
