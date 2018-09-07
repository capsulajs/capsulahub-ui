import React, {Component} from 'react';
import styled from 'styled-components';

const LoaderDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(./assets/loader.png);
`;

class Loader extends Component {
  render() {
    return this.props.show ? (
      <LoaderDiv></LoaderDiv>
    )
    : null;
  }
}

export { Loader };
