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
  defaultBackgroundHoverColor,
  defaultButtonPadding,
  defaultCursor,
} from '../constants';

const Container = styled.button`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  padding: ${(props) => props.theme.padding};
  margin: 0;
  cursor: ${(props) => props.theme.cursor};
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverBg};
  }
`;

export default class Button extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      bgColor: defaultBackgroundColor,
      bgColorHover: defaultBackgroundHoverColor,
      color: defaultColor,
      padding: defaultButtonPadding,
      cursor: defaultCursor,
    },
    dataCy: 'button',
  };

  static propTypes = {
    theme: PropTypes.object,
    dataCy: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { theme, children, onClick, dataCy } = this.props;

    return (
      <Container theme={theme} onClick={onClick} data-cy={dataCy}>
        {children}
      </Container>
    );
  }
}
