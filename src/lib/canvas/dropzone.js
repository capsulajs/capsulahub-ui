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
const SECTOR_COMBINATION = {
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

    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseLeave() {
    this.setState({ sectors: [null, null] });
  }

  handleOnMouseEnter(s) {
    return () => {
      if (this.state.sectors.find(Number)) {
        this.setState({ sectors: [s, ...union(SECTOR_COMBINATION[s], this.state.sectors)] });
      } else {
        this.setState({ sectors: [s, s + 1 > SECTORS.length ? s - 1 : s + 1] });
      }
    }
  }

  getBackground(s) {
    return this.state.sectors.find((sector) => sector === s) ? { background: '#DDD' } : {};
  }

  render() {
    return (
      <Container className={this.props.droppableId} onMouseLeave={this.handleOnMouseLeave}>
        {SECTORS.map((sector) => <Item key={sector}
                                            onMouseEnter={this.handleOnMouseEnter(sector)}
                                            style={this.getBackground(sector)}></Item>
        )}
      </Container>
    )
  }
}
