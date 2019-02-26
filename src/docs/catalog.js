import React from 'react';
import { Catalog } from '../components';

const onSelect = (tab) => console.log('Select: ', tab);
const menu = [
  {
    id: 0,
    name: 'Enviroment',
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
              }, {
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
        children: [{
        id: 8,
        name: 'Tim Drake',
      }]
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
];

export default class CatalogExample extends React.Component {
  render() {
    return <Catalog menu={menu} onSelect={onSelect} />;
  }
}
