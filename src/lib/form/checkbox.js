import React  from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Container = styled.label`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  color: #898989;
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
 
  &:checked ~ span {
    background-color: #57D7FF;
    border: 1px solid #57D7FF;
  }
  
  &:checked ~ span:after {
    display: block;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 15px;
  border: 1px solid #737373;
  
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const CheckBox = ({ label, onChange }) => <Container>
  {label}
  <Input type="checkbox" onChange={(e) => onChange(e.target.checked)}/>
  <CheckMark/>
</Container>;

export { CheckBox };
