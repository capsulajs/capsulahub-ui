import React from 'react';
import styled from 'styled-components';

const CButton = styled.button`
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 0.3em 1em;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hoverBgColor};
  }
  
  ${props => props.css};
`;

const themes = {
  default: {
    bgColor: '#57D7FF', hoverBgColor: '#4EBEE0', textColor: '#3B3B3B', borderColor: '#57D7FF'
  },
  lightGrey: {
    bgColor: '#EFEFEF', hoverBgColor: '#EFEFEF', textColor: '#3B3B3B', borderColor: '#EFEFEF'
  },
  grey: {
    bgColor: '#626262', hoverBgColor: '#626262', textColor: '#F7F7F7', borderColor: '#626262'
  },
  dark: {
    bgColor: '#3C3C3C', hoverBgColor: '#3C3C3C', textColor: '#57D7FF', borderColor: '#57D7FF'
  },
  transparent: {
    bgColor: '#transparent', hoverBgColor: '#transparent', textColor: '#57D7FF', borderColor: '#57D7FF'
  }
};

const Button = ({ id, text, theme, className, onClick, css}) => {
  return <CButton id={id} theme={themes[theme]|| themes['default']} className={className} onClick={onClick} css={css}>
    {text}
  </CButton>;
};

export { Button };
