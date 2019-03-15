import 'typeface-montserrat';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './grid';
import { getNode } from './utils';
import createNode from './utils/node/create';
import { CanvasEventBus } from './services';
import { canvas } from './settings';

const Container = styled.div`
  font-family: ${canvas.fontFamily};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

export default class Canvas extends React.Component {
  static propTypes = {
    builders: PropTypes.object.isRequired,
    layout: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  state = {
    metadata: {},
  }

  componentDidMount() {
    const { onUpdate } = this.props;
    const bus = new CanvasEventBus();

    this.eventsSubscription = bus.getEventsStream(ReactDOM.findDOMNode(this)).subscribe(([event, metadata]) => {
      switch (event) {
        case 'drop':
          return onUpdate(createNode(this.props.layout, metadata));
        default:
          this.setState({ metadata });
      }
    });
  }

  render() {
    const { metadata } = this.state;
    const { width, height, builders, layout, onUpdate } = this.props;

    return (
      <Container width={width} height={height}>
        <Grid layout={layout} builders={builders} onUpdate={onUpdate} metadata={metadata} />
      </Container>
    );
  }

  componentWillUnmount() {
    this.eventsSubscription.unsubscribe();
  }
}
