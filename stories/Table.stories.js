import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { of } from 'rxjs';
import { Table } from 'src';

const Link = styled.div`
  color: white;
  cursor: pointer;
`;

export const props = {
  data$: of(
    new Array(50).fill(null).map((_, i) => ({
      columnA: `A${i}`,
      columnB: `B${i}`,
      columnC: `C${i}`,
    }))
  ),
  columns: [
    {
      Header: 'Column A',
      accessor: 'columnA',
      filterable: true,
    },
    {
      Header: 'Column B',
      accessor: 'columnB',
      sortable: true,
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
