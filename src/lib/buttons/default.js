import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const DefaultButton = ({ text }) => <Button>{text}</Button>;

export { DefaultButton };