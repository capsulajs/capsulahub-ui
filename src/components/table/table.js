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
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  min-width: 150px;
  min-height: 100px;
`;

export default class Table extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
  };

  static defaultProps = {
    theme: {
      bgColor: '#3f3f3f',
      color: '#767676',
    },
  };

  state = {};

  render() {
    return <Container theme={this.props.theme}>Test</Container>;
  }
}
