import 'react-table/react-table.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { Button } from '..';
import { defaultFontFamily, defaultFomtSize, defaultFontWeight } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontWeight};
  font-size: ${defaultFomtSize};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  min-width: 300px;
  min-height: 200px;
`;

export default class Table extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    theme: PropTypes.object,
  };

  static defaultProps = {
    theme: {
      bgColor: '#fff',
      color: '#222',
    },
    data: [],
    columns: [],
  };

  render() {
    const { theme, data, columns } = this.props;

    return (
      <Container theme={theme}>
        <ReactTable data={data} columns={columns} />
      </Container>
    );
  }
}
