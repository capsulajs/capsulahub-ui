import React from 'react';
import styled from 'styled-components';

const CButton = styled.button`
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.border};
  padding: 0.3em 1em;
  cursor: pointer;

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

const Button = ({ text, theme, onClick, css}) => {
  return <CButton theme={themes[theme]|| themes['active']} onClick={onClick} css={css}>{text}</CButton>;
};

export { Button };
