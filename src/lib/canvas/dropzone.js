import React from 'react';
import PropTypes from 'prop-types';
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

class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: [],
      ratio: SECTORS_CENTER_RATIO
    };
  }
  
  getStyle(sector) {
    return this.state.sectors.includes(sector) ? { background: SECTORS_HIGHLIGHT_COLOR } : {};
  }
  
  componentWillUnmount() {
    this.onDrag$.unsubscribe();
    this.onDragEnter$.unsubscribe();
    this.onDragLeave$.unsubscribe();
    this.onDrop$.unsubscribe();
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
      map(point => {
        const value = document.elementFromPoint(...point).classList.value;
        const sectors = value.includes('sector') ? value.match(/\d+/g).map(Number) : [];
        return sectors.length === 1 ? getSectorCouple(this.state.sectors, sectors[0]) : sectors;
      }),
      distinctUntilChanged((a, b) => a.toString() === b.toString())
    ).subscribe(sectors => this.setState({ sectors }));

    const pipes = [
      map(e => e.preventDefault() || e.fromElement),
      filter(Boolean),
      map(element => !element.classList.value.includes('sector')),
      filter(Boolean)
    ];
    this.onDragEnter$ = fromEvent(container, 'dragenter').pipe(...pipes)
      .subscribe(_ => this.state.ratio === 1 && this.setState({ sectors: SECTORS }));
    this.onDragLeave$ = fromEvent(container, 'dragleave').pipe(...pipes)
      .subscribe(_ => this.setState({ sectors: [] }));
    this.onDrop$ = fromEvent(container, 'drop').pipe(
      map(e => e.dataTransfer.getData('creatorId')),
    ).subscribe(creatorId => creatorId
      ? this.props.onDrop({ creatorId, sectors: this.state.sectors })
      : this.setState({ sectors: [] })
    );
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

Dropzone.propTypes = {
  onDrop: PropTypes.func
};

export default Dropzone;