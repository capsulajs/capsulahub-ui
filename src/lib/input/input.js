import React  from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const CInput = styled.input`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  width: 100%;
  height: 30px;
  background: #737373;
  color: #B1B1B1;
  border: none;
  padding-left: 10px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #B1B1B1;
  }
`;

const Input = ({ onChange, placeholder }) => <CInput placeholder={placeholder}
                                                     onChange={(e) => onChange(e.target.value)}/>;

export { Input };
