import styled from 'styled-components';
import 'typeface-montserrat';

import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFomtSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';

export const Paragraph = styled.p`
  font-style: ${props => (props.fontStyle || defaultFontStyle)};
  font-weight: ${props => props.fontWeight || defaultFontWeight};
  font-size: ${props => props.fontSize || defaultFomtSize};
  font-family: ${props => props.fontFamily || defaultFontFamily};
  color: ${props => props.color || defaultColor};
  background-color: ${props => props.backgroundColor || defaultBackgroundColor};
`;
