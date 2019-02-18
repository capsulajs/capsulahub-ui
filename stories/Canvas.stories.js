import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Canvas from 'src/components/canvas/canvas';

export const props = {
  buildersListId: 'list',
  builders: {
    e1: () => 'Element 1',
    e2: () => 'Element 2',
    e3: () => 'Element 3'
  },
  width: 600,
  height: 400
};

export const actions = {
  onClick: action('onClick')
};

storiesOf('Canvas', module)
  .addDecorator(story => <div>
    <ul id="list">
      <li draggable id="e1">Element 1</li>
      <li draggable id="e2">Element 2</li>
      <li draggable id="e3">Element 3</li>
    </ul>
    {story()}
    </div>
  )
  .add('default', () => <Canvas {...props} {...actions}/>);
