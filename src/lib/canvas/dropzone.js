import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import _ from 'lodash';
import { map, filter, throttleTime, distinct, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { SECTORS, SECTORS_HIGHLIGHT_COLOR, SECTORS_NEIGHBORS, SECTORS_REVERSE } from './constants';

const getSectorCouple = (sectors, sector) => {
  return sectors.length === 2
    ? [sector, ..._.intersection(SECTORS_NEIGHBORS[sector], sectors)].sort()
    : [sector, SECTORS_NEIGHBORS[sector][sector % 2]].sort();
}

const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  position:relative;
`;

const Sector = styled.div`
  width: 50%;
  height: 50%;
  float: left;
`;

const Centre = styled.div`
  position: absolute;
  height: 20%;
  width: 20%;
  top: 40%;
  left: 40%;
`;

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: []
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);

    this.onDragOver$ = fromEvent(container, 'dragover').pipe(
      map(e => e.preventDefault() || [e.clientX, e.clientY]),
      distinctUntilChanged((a, b) => a.toString() === b.toString()),
      throttleTime(50),
      map(point => document.elementFromPoint(...point).classList.value),
      map(value => value.includes('sector') ? value.match(/\d+/g).map(Number) : []),
      map(sectors => sectors.length === 1 ? getSectorCouple(this.state.sectors, sectors[0]) : sectors),
      distinctUntilChanged((a, b) => a.toString() === b.toString())
    ).subscribe(sectors => this.setState({ sectors }));

    this.onDragLeave$ = fromEvent(container, 'dragleave').pipe(
      map(e => !e.fromElement.classList.value.includes('sector')),
      filter(Boolean)
    ).subscribe(_ => this.setState({ sectors: [] }));

    this.onDrop$ = fromEvent(container, 'drop').subscribe(e => this.props.onDrop({
      creatorId: e.dataTransfer.getData('creatorId'),
      sectors: this.state.sectors
    }));
  }

  componentWillUnmount() {
    this.onDragOver$.unsubscribe();
    this.onDragLeave$.unsubscribe();
    this.onDrop$.unsubscribe();
  }

  getStyle(sector) {
    return this.state.sectors.includes(sector) ? { background: SECTORS_HIGHLIGHT_COLOR } : {};
  }

  render() {
    return (
      <Container>
        <Centre className={`sector-${SECTORS}`}/>
        {SECTORS.map((sector) => <Sector key={sector} className={`sector-${sector}`} style={this.getStyle(sector)}></Sector>)}
      </Container>
    )
  }
}
