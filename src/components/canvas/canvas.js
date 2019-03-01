import 'typeface-montserrat';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, mapTo, tap, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import Grid from './grid';
import { defaultFontFamily } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A9;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragginOn: false,
    };
  }

  componentDidMount() {
    const list = document.getElementById(this.props.buildersListId);

    if (list) {
      const elements = [...Array.from(list.children)];
      const toObs = (elements, event) => merge(...elements.map((el) => fromEvent(el, event)));
      const injectBuilderId = (e) => e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id'));

      this.onDrag$ = merge(
        toObs(elements, 'dragstart').pipe(
          tap(injectBuilderId),
          mapTo(true)
        ),
        toObs(elements, 'dragend').pipe(mapTo(false))
      )
        .pipe(distinctUntilChanged((a, b) => a === b))
        .subscribe((isDragginOn) => this.setState({ isDragginOn }));
    }
  }

  componentWillUnmount() {
    this.onDrag$.unsubscribe();
  }

  render() {
    const { isDragginOn } = this.state;
    const { width, height, builders, layout, onUpdate } = this.props;

    return (
      <Container width={width} height={height}>
        <Grid layout={layout} builders={builders} isDragginOn={isDragginOn} onUpdate={onUpdate} />
      </Container>
    );
  }
}

Canvas.propTypes = {
  buildersListId: PropTypes.string.isRequired,
  builders: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Canvas;
