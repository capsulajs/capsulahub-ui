import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table } from 'src';

export const props = {
  data: [
    {
      calendarId: 1,
      status: 'Opened',
      instrumentDescription: 'Description 1',
      quoteCurrency: 'USD',
      pricePrecision: 2,
      quantityPrecision: 2,
      minQuantity: 19.99,
      maxQuantity: 1200.99,
    },
    {
      calendarId: 2,
      status: 'Closed',
      instrumentDescription: 'Description 2',
      quoteCurrency: 'UAH',
      pricePrecision: 2,
      quantityPrecision: 2,
      minQuantity: 5.99,
      maxQuantity: 500.99,
    },
  ],
  columns: [
    { Header: 'ID', accessor: 'calendarId' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Description', accessor: 'instrumentDescription' },
    { Header: 'Currency', accessor: 'quoteCurrency' },
    { Header: 'Price precision', accessor: 'pricePrecision' },
    { Header: 'Quantity precision', accessor: 'quantityPrecision' },
    { Header: 'Min quantity', accessor: 'minQuantity' },
    { Header: 'Max quantity', accessor: 'maxQuantity' },
  ],
};
export const actions = {};

storiesOf('Table', module).add('default', () => <Table {...props} {...actions} />);
