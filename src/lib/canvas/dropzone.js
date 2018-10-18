import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { getMouseCordinatesInsideElement, getPointInsideRectangle, union } from '../utils';
import _ from 'lodash';

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

const RATIO = 0.3;
const SECTORS = [1, 2, 3, 4];
const DEFAULT_SECTORS = [null, null];
const COMBINATION = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 4],
  4: [2, 3]
}

let isThrottled = false;

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectors: DEFAULT_SECTORS,
      center: {
        x: null,
        y: null,
        r: null
      }
    };

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleOnDragOver = this.handleOnDragOver.bind(this);
    this.handleOnDragLeave = this.handleOnDragLeave.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    this.initialize();
    window.addEventListener('scroll', this.initialize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.initialize);
  }

  initialize() {
    console.log('initialize');
    const container = ReactDOM.findDOMNode(this);
    const { width, height } = container.getBoundingClientRect();
    const x = width / 2;
    const y = height / 2;
    const r = (Math.min(...[x, y])) * RATIO;
    this.getMouseCordinatesInsideDropzone = getMouseCordinatesInsideElement(container).bind(this);
    this.setState({ r, x, y });
  }

  setSectors(sectors) {
    if (this.state.sectors.toString() !== sectors.toString()) {
      console.log(sectors)
      this.setState({ sectors });
    }
  }

  handleOnDragOver(e) {
    e.preventDefault();

    if (!isThrottled) {
      isThrottled = true;
      setTimeout(() => isThrottled = false, 100);
      const { r: r0, x: x0, y: y0, sectors: sectors0 } = this.state;
      const { x, y } = this.getMouseCordinatesInsideDropzone(e);
      const r = Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));
      let sectors = [];

      const getSelectors = (sectors, sector) => sectors.filter(Number).length
        ? [sector, ...union(COMBINATION[sector], sectors)].sort()
        : [sector, sector + 1 > SECTORS.length ? sector - 1 : sector + 1].sort();

      if (r < r0) {
        sectors = SECTORS;
        console.log('CENTER')
      } else {
        sectors = sectors0;

        if (getPointInsideRectangle(0, 0, x0, y0)(x, y)) {
          sectors = getSelectors(sectors, 1);
          console.log('SECTOR 1')
        }

        if (getPointInsideRectangle(x0 / 2, 0, x0, y0)(x, y)) {
          sectors = getSelectors(sectors, 2);
          console.log('SECTOR 2')
        }

        if (getPointInsideRectangle(0, y0 / 2, x0, y0)(x, y)) {
          sectors = getSelectors(sectors, 3);
          console.log('SECTOR 3')
        }

        if (getPointInsideRectangle(x0 / 2, y0 / 2, x0, y0)(x, y)) {
          sectors = getSelectors(sectors, 4);
          console.log('SECTOR 4')
        }
      }

      console.log('OVER', sectors);
      this.setSectors(sectors);
    }
  }

  handleOnDrop(e) {
    e.preventDefault();
    this.props.onDrop({ creatorId: e.dataTransfer.getData('creatorId'), sectors: this.state.sectors.sort() });
    this.setSectors(DEFAULT_SECTORS);
    console.log('DROP');
  }

  // handleOnDragEnter(sector) {
  //   return _.debounce((e) => {
  //     e.preventDefault();
  //     if (this.state.sectors.length === DEFAULT_SECTORS.length) {
      //   this.setSectors(this.state.sectors.filter(Number).length
      //     ? [sector, ...union(COMBINATION[sector], this.state.sectors)].sort()
      //     : [sector, sector + 1 > SECTORS.length ? sector - 1 : sector + 1].sort()
      //   );
      // }
  //     console.log('ENTER', sector)
  //   }, 50);
  // }

  handleOnDragLeave(e) {
    e.preventDefault();
    // this.setSectors(DEFAULT_SECTORS);
    console.log('LEAVE');
  }

  getStyle(s) {
    return this.state.sectors.find((sector) => sector === s) ? { background: '#DDD' } : {};
  }

  // onDragEnter={this.handleOnDragEnter(sector)}
  render() {
    console.log('render -> Dragzone');
    return (
      <Container onDrop={this.handleOnDrop} onDragOver={this.handleOnDragOver}>
        {SECTORS.map((sector) => <Item key={sector} style={this.getStyle(sector)}></Item>)}
      </Container>
    )
  }
}
