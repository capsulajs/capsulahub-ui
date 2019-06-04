import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table } from 'src';
import styled from 'styled-components';

const Link = styled.div`
  color: white;
  cursor: pointer;
`;

export const props = {
  data: new Array(50).fill(null).map((_, i) => ({
    columnA: `A${i}`,
    columnB: `B${i}`,
    columnC: `C${i}`,
  })),
  columns: [
    {
      Header: 'Column A',
      accessor: 'columnA',
      filterable: true,
    },
    {
      Header: 'Column B',
      accessor: 'columnB',
    },
    {
      Header: 'Column C',
      accessor: 'columnC',
      Cell: ({ value }) => <Link onClick={() => alert(value)}>{value}</Link>,
    },
  ],
};
export const actions = {};

storiesOf('Table', module).add('default', () => <Table {...props} {...actions} />);
