import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { getSectorCouple } from './utils';
import { getMouseInsideRectangle, isPonitInsideRectangle, getRectangleSectors, union } from '../utils';
import { SECTORS, SECTORS_DEFAULT, SECTORS_CENTRE_RATIO, SECTORS_COLOR } from './constants';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

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

const getDropzoneSectors = (container, sectors0, e) => {
  e.preventDefault();
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
      sectors: [null, null]
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);

    this.onDragOver$ = fromEvent(container, 'dragover').pipe(
      map(e => getDropzoneSectors(container, this.state.sectors, e)),
      distinctUntilChanged((a, b) => a.toString() === b.toString())
    ).subscribe(sectors => this.setState({ sectors }));

    this.onDrop$ = fromEvent(container, 'drop').subscribe(e => this.props.onDrop({
      creatorId: e.dataTransfer.getData('creatorId'),
      sectors: this.state.sectors
    }));
  }

  componentWillUnmount() {
    this.onDragOver$.unsubscribe();
    this.onDrop$.unsubscribe();
  }

  getStyle(sector) {
    return this.state.sectors.includes(sector) ? { background: SECTORS_COLOR } : {};
  }

  render() {
    return (
      <Container>
        {SECTORS.map((sector) => <Item key={sector} style={this.getStyle(sector)}></Item>)}
      </Container>
    )
  }
}
