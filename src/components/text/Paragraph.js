import 'typeface-montserrat';
import styled from 'styled-components';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFomtSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';

export default () => styled.p`
  font-style: ${(props) => props.fontStyle || defaultFontStyle};
  font-weight: ${(props) => props.fontWeight || defaultFontWeight};
  font-size: ${(props) => props.fontSize || defaultFomtSize};
  font-family: ${(props) => props.fontFamily || defaultFontFamily};
  color: ${(props) => props.color || defaultColor};
  background-color: ${(props) => props.backgroundColor || defaultBackgroundColor}
  margin: 0;
`;
