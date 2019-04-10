import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily, defaultFomtSize } from '../constants';

const Button = styled.button`
  font-family: ${defaultFontFamily};
  font-size: ${defaultFomtSize};
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  padding: 3px 5px 5px 5px;
  margin: 0;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverBg};
  }

  ${(props) => props.css};
`;

const themes = {
  active: { bg: '#57D7FF', hoverBg: '#57D7FF', color: '#666666' },
  disabled: { bg: '#737373', hoverBg: '#737373', color: '#999999' },
  clicked: { bg: '#fff', hoverBg: '#fff', color: '#57D7FF' },
};

export default ({ id, text, theme, onClick, css }) => {
  return (
    <Button id={id} theme={themes[theme] || themes['active']} onClick={onClick} css={css}>
      {text}
    </Button>
  );
};
