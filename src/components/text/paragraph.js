import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFontSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';

const Container = styled.p`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  margin: 0;
`;

export default class Paragraph extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
  };

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

  render() {
    const { children, theme } = this.props;

    return <Container theme={theme}>{children}</Container>;
  }
}
