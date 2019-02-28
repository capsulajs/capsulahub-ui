import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from 'src';

export const props = {
  fontSize: 48,
  backgroundColor: '#fff',
  color: '#222',
};

storiesOf('Paragraph', module)
  .add('default', () => <Paragraph>Example of paragraph</Paragraph>)
  .add('styled', () => <Paragraph {...props}>Example of paragraph</Paragraph>);
