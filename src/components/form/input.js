import React  from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from 'src/constants';

const CInput = styled.input`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  width: calc(100% - 20px);
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  background: #737373;
  color: #B1B1B1;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  ::placeholder {
    color: #B1B1B1;
  }
`;

export default ({ onChange, placeholder }) => <CInput
  placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>;
