import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultFontStyle, defaultFontWeight, defaultFontSize, defaultFontFamily, defaultColor } from '../constants';

const Container = styled.label`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  width: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ span {
    background-color: #57d7ff;
    border: 1px solid #57d7ff;
  }

  &:checked ~ span:after {
    display: block;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 15px;
  border: 1px solid #737373;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export default class Checkbox extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      color: defaultColor,
    },
  };

  static propTypes = {
    theme: PropTypes.object,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { theme, label, onChange } = this.props;

    return (
      <Container theme={theme}>
        {label}
        <Input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
        <CheckMark />
      </Container>
    );
  }
}
