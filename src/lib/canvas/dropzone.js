import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { map, filter, throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { SECTORS, SECTORS_HIGHLIGHT_COLOR, SECTORS_CENTER_RATIO } from './constants';
import { getSectorCouple, isSmallSize } from './utils';

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
  height: ${props => props.ratio * 100}%;
  width: ${props => props.ratio * 100}%;
  top: ${props => (1 - props.ratio) * 50}%;
  left: ${props => (1 - props.ratio) * 50}%;
  background: transparent;
`;

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: [],
      ratio: SECTORS_CENTER_RATIO
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);
    this.setState({
      ratio: isSmallSize(container) ? 1 : SECTORS_CENTER_RATIO
    });

    this.onDrag$ = fromEvent(container, 'dragover').pipe().pipe(
      map(e => e.preventDefault() || [e.clientX, e.clientY]),
      distinctUntilChanged((a, b) => a.toString() === b.toString()),
      throttleTime(50),
      map(point => document.elementFromPoint(...point).classList.value),
      map(value => value.includes('sector') ? value.match(/\d+/g).map(Number) : []),
      map(sectors => sectors.length === 1 ? getSectorCouple(this.state.sectors, sectors[0]) : sectors),
      distinctUntilChanged((a, b) => a.toString() === b.toString())
    ).subscribe(sectors => this.setState({ sectors }));

    this.onDragEnter$ = fromEvent(container, 'dragenter').pipe(
      map(e => e.preventDefault() || e.fromElement),
      filter(Boolean),
      map(element => !element.classList.value.includes('sector')),
      filter(Boolean)
    ).subscribe(_ => this.state.ratio === 1 && this.setState({ sectors: SECTORS }));

    this.onDragLeave$ = fromEvent(container, 'dragleave').pipe(
      map(e => e.preventDefault() || !e.fromElement.classList.value.includes('sector')),
      filter(Boolean),
    ).subscribe(_ => this.setState({ sectors: [] }));

    this.onDrop$ = fromEvent(container, 'drop').pipe(
      map(e => e.dataTransfer.getData('creatorId')),
    ).subscribe(creatorId => creatorId
      ? this.props.onDrop({ creatorId, sectors: this.state.sectors })
      : this.setState({ sectors: [] })
    );
  }

  componentWillUnmount() {
    this.onDrag$.unsubscribe();
    this.onDragEnter$.unsubscribe();
    this.onDragLeave$.unsubscribe();
    this.onDrop$.unsubscribe();
  }

  getStyle(sector) {
    return this.state.sectors.includes(sector) ? { background: SECTORS_HIGHLIGHT_COLOR } : {};
  }

  render() {
    return (
      <Container>
        <Centre className={`sector-${SECTORS}`} ratio={this.state.ratio}/>
        {SECTORS.map((sector) => <Sector key={sector} className={`sector-${sector}`} style={this.getStyle(sector)}></Sector>)}
      </Container>
    )
  }
}
