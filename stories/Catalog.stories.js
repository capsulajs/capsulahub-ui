import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Catalog } from 'src';

const selectedMethod = {
  id: 20,
  name: 'API 1',
};

const methods = [
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
    id: 99,
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
];

class CatalogExample extends React.Component {
  state = {
    selectedMethod: methods[2].children[0],
  };

  selectMethod = (selectedMethod) => this.setState({ selectedMethod });

  render() {
    return <Catalog selectedMethod={this.state.selectedMethod} methods={methods} selectMethod={this.selectMethod} />;
  }
}

storiesOf('Catalog', module).add('default', () => <CatalogExample />);
