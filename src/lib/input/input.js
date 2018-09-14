import React  from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  
`;

const Input = () => <Container>
  Input
</Container>;

export { Input };
