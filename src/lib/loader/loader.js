import React, { Component } from 'react';
import styled from 'styled-components';

const LoaderImg = styled.img`
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
`;

class Loader extends Component {
  render() {
    return this.props.show ? (<LoaderImg src="../assets/loader.png" alt="SANDBOX"></LoaderImg>) : null;
  }
}

export { Loader };
