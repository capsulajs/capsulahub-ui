import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { getSectorCouple } from './utils';
import { getMouseInsideRectangle, isPonitInsideRectangle, getRectangleSectors, union } from '../utils';
import _ from 'lodash';
import { SECTORS, SECTORS_CENTRE_RATIO } from './constants';

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

const DEFAULT_SECTORS = [null, null];

let timerId = null;
let isThrottled = false;

const getDropzoneSectors = (id, sectors0, e) => {
  const container = document.getElementById(id);
  const { width, height } = container.getBoundingClientRect();
  const x0 = width / 2;
  const y0 = height / 2;
  const r0 = Math.min(...[width, height]) * SECTORS_CENTRE_RATIO;
  const { x, y } = getMouseInsideRectangle(container)(e);
  const r = Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));

  let sectors = [];

  if (r < r0) {
    sectors = SECTORS;
  } else {
    const sector = getRectangleSectors(width, height)
      .map((rect, i) => isPonitInsideRectangle(...rect)(x, y) ? (i + 1) : null)
      .find(Number);

    sectors = getSectorCouple(sectors0.length > 2 ? [null, null] : sectors0, sector);
  }

  return sectors;
}

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: DEFAULT_SECTORS
    };

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleOnDragOver = this.handleOnDragOver.bind(this);
  }

  setSectors(sectors) {
    if (this.state.sectors.toString() !== sectors.toString()) {
      console.log('SECTORS', sectors);
      this.setState({ sectors });
    }
  }

  handleOnDragOver(e) {
    e.preventDefault();

    // if (!isThrottled) {
    //   isThrottled = true;
    //   setTimeout(() => isThrottled = false, 200);

      this.setSectors(getDropzoneSectors(this.props.dropzoneId, this.state.sectors, e));
    // }
  }

  handleOnDrop(e) {
    e.preventDefault();
    this.props.onDrop({ creatorId: e.dataTransfer.getData('creatorId'), sectors: this.state.sectors });
    this.setSectors(DEFAULT_SECTORS);
  }

  getStyle(s) {
    return this.state.sectors.filter((sector) => sector === s).length
      ? { background: '#C9DADF' }
      : { background: ['#000', '#111', '#222', '#333'][s - 1] };
  }

  render() {
    return (
      <Container id={this.props.dropzoneId} onDrop={this.handleOnDrop} onDragOver={this.handleOnDragOver}>
        {SECTORS.map((sector) => <Item key={sector} style={this.getStyle(sector)}></Item>)}
      </Container>
    )
  }
}
