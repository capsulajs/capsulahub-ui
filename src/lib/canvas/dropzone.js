import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { map, filter, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { getHighlightedSectors } from './utils/dropzone';
import { SECTORS, SECTORS_COLOR } from './constants';

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
      map(e => getHighlightedSectors(e, container, this.state.sectors)),
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
    return this.state.sectors.includes(sector) ? { background: SECTORS_COLOR } : {};
  }

  render() {
    return (
      <Container>
        {SECTORS.map((sector) => <Item key={sector} className="sector" style={this.getStyle(sector)}></Item>)}
      </Container>
    )
  }
}
