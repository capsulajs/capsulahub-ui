import React from 'react';
import styled from 'styled-components';
import { union } from './utils';

const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Item = styled.div`
  width: 50%;
  height: 50%;
  float: left;
`;

const SECTORS = [1, 2, 3, 4];
const COMBINATION = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 4],
  4: [2, 3]
}

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: [null, null]
    };

    this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
    this.handleOnDragOver = this.handleOnDragOver.bind(this);
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  handleOnDragEnter(s) {
    return () => {
      if (this.state.sectors.find(Number)) {
        this.setState({ sectors: [s, ...union(COMBINATION[s], this.state.sectors)] });
      } else {
        this.setState({ sectors: [s, s + 1 > SECTORS.length ? s - 1 : s + 1] });
      }
    }
  }

  handleOnDragOver(e) {
    e.preventDefault();
  }

  handleOnDrop(e) {
    this.props.onDrop({ creatorId: e.dataTransfer.getData('creatorId'), sectors: this.state.sectors.sort() });
    this.setState({ sectors: [null, null] });
  }

  getStyle(s) {
    return this.state.sectors.find((sector) => sector === s) ? { background: '#DDD' } : {};
  }

  render() {
    return (
      <Container onDragOver={this.handleOnDragOver} onDrop={this.handleOnDrop}>
        {SECTORS.map((sector) =>
          <Item key={sector} onDragEnter={this.handleOnDragEnter(sector)} style={this.getStyle(sector)}></Item>
        )}
      </Container>
    )
  }
}
