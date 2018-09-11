import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  background-color: ${props => props.theme.props[0]};
  color: ${props => props.theme.props[2]};
  border: none;
  padding: 0.3em 1em;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.props[1]};
  }

  ${props => props.css};
`;

//theme name: background color, hover background color, text color
const themes = [
  {name: 'default', props: ['#57D7FF', '#4EBEE0', '#3B3B3B']},
  {name: 'lightGrey', props: ['#EFEFEF', '#EFEFEF', '#3B3B3B']},
  {name: 'grey', props: ['#626262', '#626262', '#F7F7F7']}
];

const Button = ({ text, theme, className, css, id, onClick}) => {
  let currentTheme = themes.find(x => x.name === theme) || themes.find(x => x.name === 'default');
  return <StyledButton id={id} theme={currentTheme} className={className} css={css} onClick={onClick}>{text}</StyledButton>
};

export { Button };