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
} from '../../constants';

const Container = styled.input`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  width: ${(props) => props.width || 'calc(100% - 20px)'};
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #b1b1b1;
  }
`;

export default class Dropdown extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      color: defaultColor,
      bgColor: defaultBackgroundColor,
    },
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.object,
  };

  render() {
    const { theme, onChange } = this.props;

    return <Container theme={theme} onChange={(e) => onChange(e.target.value)} />;
  }
}
