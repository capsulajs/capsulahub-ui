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

const themes = [
  {name: 'default', props: {bgColor: '#57D7FF', hoverBgColor: '#4EBEE0', textColor: '#3B3B3B', borderColor: '#57D7FF'}},
  {name: 'lightGrey', props: {bgColor: '#EFEFEF', hoverBgColor: '#EFEFEF', textColor: '#3B3B3B', borderColor: '#EFEFEF'}},
  {name: 'grey', props: {bgColor: '#626262', hoverBgColor: '#626262', textColor: '#F7F7F7', borderColor: '#626262'}},
  {name: 'dark', props: {bgColor: '#3C3C3C', hoverBgColor: '#3C3C3C', textColor: '#57D7FF', borderColor: '#57D7FF'}},
  {name: 'transparent', props: {bgColor: '#transparent', hoverBgColor: '#transparent', textColor: '#57D7FF', borderColor: '#57D7FF'}}
];

const Button = ({ text, theme, className, css, id, onClick}) => {
  let currentTheme = themes.find(x => x.name === theme) || themes.find(x => x.name === 'default');
  return <CButton id={id} theme={currentTheme} className={className} css={css} onClick={onClick}>{text}</CButton>
};

export { Button };