import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '..';
import { defaultFontFamily, defaultFomtSize, defaultFontWeight } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontWeight};
  font-size: ${defaultFomtSize};
  width: 100%;
  height: 100%;
  background: ${(props) => console.log(props) || props.theme.bgColor};
  color: ${(props) => props.theme.color};
  min-width: 150px;
  min-height: 100px;
`;

export default class Table extends React.Component {
  static propTypes = {};
  static defaultProps = {
    foo: 'bar',
    theme: {
      bgColor: '#3f3f3f',
      color: '#767676',
    },
  };

  state = {};

  render() {
    return <Container>Test</Container>;
  }
}
