import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './list';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFontSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../../constants';

const Container = styled.div`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  width: 300px;
  height: 100%;
  line-height: 100%;
  overflow-y: scroll;
`;

export default class Catalog extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      bgColor: defaultBackgroundColor,
      color: defaultColor,
    },
  };

  static propTypes = {
    theme: PropTypes.object,
    methods: PropTypes.array.isRequired,
    selectMethod: PropTypes.func.isRequired,
    selectedMethod: PropTypes.object,
  };

  render() {
    const { theme, methods, selectMethod, selectedMethod } = this.props;

    return (
      <Container theme={theme}>
        {methods.map(({ name, children }) => (
          <List key={name} name={name} methods={children} selectMethod={selectMethod} selectedMethod={selectedMethod} />
        ))}
      </Container>
    );
  }
}
