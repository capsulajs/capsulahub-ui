import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultFontFamily, defaultFontSize } from '../constants';

const Button = styled.button`
  font-family: ${defaultFontFamily};
  font-size: ${defaultFontSize};
  background-color: ${(props) => props.theme.bg};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  padding: 3px 5px 5px 5px;
  padding: ${(props) => props.theme.padding};
  margin: 0;
  cursor: ${(props) => props.theme.cursor};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.hoverBg};
  }
  ${(props) => props.css};
`;

const themes = {
  active: { bg: '#57D7FF', hoverBg: '#57D7FF', color: '#666666', cursor: 'pointer' },
  disabled: { bg: '#737373', hoverBg: '#737373', color: '#999999', cursor: 'not-allowed' },
  clicked: { bg: '#fff', hoverBg: '#fff', color: '#57D7FF' },
};

export default ({ id, text, theme, onClick, css, dataCy = 'button' }) => {
  return (
    <Button data-cy={dataCy} id={id} theme={themes[theme] || themes['active']} onClick={onClick} css={css}>
      {text}
    </Button>
  );
};
