import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { getSectorCouple } from './utils';
import { getMouseInsideRectangle, isPonitInsideRectangle, getRectangleSectors, union } from '../utils';
import _ from 'lodash';
import { SECTORS, SECTORS_DEFAULT, SECTORS_CENTRE_RATIO } from './constants';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged } from 'rxjs/operators';

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

    if (sector) {
      sectors = getSectorCouple(sectors0.length > 2 ? [null, null] : sectors0, sector);
    }
  }

  return sectors;
}

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: SECTORS_DEFAULT
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);

    fromEvent(container, 'dragover').pipe(
      // throttleTime(100),
      map((e) => {
        e.preventDefault();
        return getDropzoneSectors(this.props.dropzoneId, this.state.sectors, e)
      }),
      distinctUntilChanged((a, b) => a.toString() === b.toString())
    ).subscribe((sectors) => {
      this.setSectors(sectors);
    });

    fromEvent(container, 'drop').subscribe((e) => {
      console.log('drop')
    });
  }

  setSectors(sectors) {
    if (this.state.sectors.toString() !== sectors.toString()) {
      console.log('SECTORS', sectors);
      this.setState({ sectors });
    }
  }

  getStyle(sector) {
    return this.state.sectors.includes(sector) ? { background: '#C9DADF' } : {};
  }

  render() {
    return (
      <Container id={this.props.dropzoneId}>
        {SECTORS.map((sector) => <Item key={sector} style={this.getStyle(sector)}></Item>)}
      </Container>
    )
  }
}
