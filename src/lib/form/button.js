import React from 'react';
import styled from 'styled-components';
import {
  defaultFontFamily,
  defaultFomtSize
} from '../constants';

const CButton = styled.button`
  font-family: ${defaultFontFamily};
  font-size: ${defaultFomtSize};
  text-align: center;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.border};
  padding: 2px 8px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
  
  ${props => props.css};
`;

const themes = {
  active: { bg: '#57D7FF', hoverBg: '#57D7FF', color: '#666666', border: '#57D7FF' },
  disabled: { bg: '#737373', hoverBg: '#737373', color: '#999999', border: '#737373' },
  clicked: { bg: '#fff', hoverBg: '#fff', color: '#57D7FF', border: '#57D7FF' }
};

const Button = ({ id, text, theme, onClick, css}) => {
  return <CButton id={id} theme={themes[theme]|| themes['active']} onClick={onClick} css={css}>{text}</CButton>;
};

export { Button };
