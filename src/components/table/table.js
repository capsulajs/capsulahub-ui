import 'react-table/react-table.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { Button } from '..';
import { defaultFontStyle, defaultFontWeight, defaultFontSize, defaultFontFamily } from '../../constants';

const Container = styled.div`
  font-family: ${(props) => props.theme.fontStyle};
  font-style: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
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
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
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
