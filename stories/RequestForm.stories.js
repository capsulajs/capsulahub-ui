import React from 'react';
import { storiesOf } from '@storybook/react';
import { RequestForm } from 'src';

export const props = {
  selectedMethodPath: 'greetingService/hello',
  content: {
    language: 'javascript',
    requestArgs: 'return {};',
  },
  onSubmit: (data) => {
    console.log('data from RequestForm onSubmit callback', data);
  },
};

storiesOf('RequestForm', module).add('default', () => <RequestForm {...props} />);
