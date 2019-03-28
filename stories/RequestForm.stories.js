import React from 'react';
import { storiesOf } from '@storybook/react';
import { RequestForm } from 'src';

export const props = {
  width: '100%',
  height: '200px',
  onChange: (content) => console.log('Content: ', content),
};

storiesOf('RequestForm', module).add('default', () => <RequestForm {...props} />);
