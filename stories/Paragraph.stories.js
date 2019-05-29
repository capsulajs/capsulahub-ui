import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from 'src';

export const props = {
  theme: {
    fontSize: 48,
    bgColor: '#fff',
    color: '#222',
  },
};

storiesOf('Paragraph', module)
  .add('default', () => <Paragraph>Example of paragraph</Paragraph>)
  .add('styled', () => <Paragraph {...props}>Example of paragraph</Paragraph>);
