import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Catalog } from 'src';

export const props = {
  menu: [
    {
      id: 0,
      name: 'Environment',
      children: [
        {
          id: 92,
          name: 'Product',
          children: [
            {
              id: 929,
              name: 'Service',
              children: [
                {
                  id: 20,
                  name: 'API 1',
                },
                {
                  id: 24,
                  name: 'API 2',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Team',
      children: [
        {
          id: 8,
          name: 'Tim Drake',
        },
        {
          id: 9,
          name: 'Jason Todd',
        },
        {
          id: 10,
          name: 'Richard Grayson',
          children: [
            {
              id: 8,
              name: 'Tim Drake',
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: 'Services',
      children: [
        {
          id: 12,
          name: 'Web Development',
        },
        {
          id: 13,
          name: 'UI Design',
        },
        {
          id: 7,
          name: 'Copywriting',
        },
      ],
    },
  ],
};

export const actions = {
  onSelect: action('onSelect'),
};

storiesOf('Catalog', module).add('default', () => <Catalog {...props} {...actions} />);
