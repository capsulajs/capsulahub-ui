import 'react-table/react-table.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { Button } from '..';
import { defaultFontStyle, defaultFontSize, defaultFontFamily, defaultBackgroundColor } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontStyle};
  font-size: ${defaultFontSize};
  background: ${defaultBackgroundColor};
  color: #d3d3d3;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 200px;
`;

export default class Table extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    defaultPageSize: PropTypes.number.isRequired,
  };

  static defaultProps = {
    data: [],
    columns: [],
    defaultPageSize: 10,
  };

  defaultFilterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;

    switch (typeof row[id]) {
      case 'undefined':
        return true;
      case 'number':
        return new RegExp(filter.value).test(String(row[id]));
      default:
        return new RegExp(filter.value, 'gi').test(row[id]);
    }
  };

  render() {
    const { data, columns, defaultPageSize } = this.props;

    return (
      <Container>
        <ReactTable
          data={data}
          columns={columns}
          filterable={true}
          defaultFilterMethod={this.defaultFilterMethod}
          defaultPageSize={defaultPageSize}
        />
      </Container>
    );
  }
}
