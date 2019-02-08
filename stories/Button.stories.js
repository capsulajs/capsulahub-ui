import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button';

export const props = {
  text: 'Example of button'
};

export const actions = {
  onClick: action('onClick')
};

storiesOf('Button', module)
  .add('active', () => <Button theme="active" {...props} {...actions}/>)
  .add('disabled', () => <Button theme="disabled" {...props} {...actions}/>)
  .add('clicked', () => <Button theme="clicked" {...props} {...actions}/>);
