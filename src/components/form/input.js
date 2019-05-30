import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Input = styled.input`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  width: ${(props) => props.width || 'calc(100% - 20px)'};
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  background: #737373;
  color: #b1b1b1;
  border: none;
  &:focus {
  }
`;

export default (props) => <Input {...props} onChange={(e) => props.onChange(e.target.value)} />;
