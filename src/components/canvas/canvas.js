import 'typeface-montserrat';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from './grid';
import { canvas } from './settings';
import transform from './utils/transform';
import bus from './services';

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
    layout: PropTypes.object.isRequired,
    builders: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  state = {
    metadata: {},
  };

  onDragStart = (metadata) => bus.emit('dragstart', metadata);
  onDragEnd = (metadata) => {
    const { source, destination } = metadata;
    if (destination) {
      destination && source.droppableId === destination.droppableId
        ? bus.emit('reorder', metadata)
        : bus.emit('move', metadata);
      bus.emit('dragend', {});
    }
  };

  componentDidMount() {
    this.eventsSubscription = bus.getEventsStream(ReactDOM.findDOMNode(this)).subscribe(([event, metadata]) => {
      switch (event) {
        case 'dragstart':
          return this.setState({ metadata });
        case 'dragover':
          return this.setState({ metadata });
        case 'dragend':
          return this.setState({ metadata });
        default:
          return this.props.onUpdate(transform(this.props.layout, event, metadata));
      }
    });
  }

  render() {
    const { metadata } = this.state;
    const { width, height, builders, layout } = this.props;

    return (
      <Container width={width} height={height}>
        <DragDropContext onBeforeDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
          <Grid layout={layout} metadata={metadata} builders={builders} />
        </DragDropContext>
      </Container>
    );
  }

  componentWillUnmount() {
    this.eventsSubscription.unsubscribe();
  }
}
