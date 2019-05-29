import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from './grid';
import { canvas } from './settings';
import transform from './utils/transform';
import bus from './services';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFontSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';

const Container = styled.div`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

export default class Canvas extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      bgColor: defaultBackgroundColor,
      color: defaultColor,
    },
  };

  static propTypes = {
    theme: PropTypes.object,
    layout: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
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
    }
    bus.emit('dragend', {});
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
    const { theme, layout } = this.props;

    return (
      <Container theme={theme} data-cy="canvas">
        <DragDropContext onBeforeDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
          <Grid layout={layout} metadata={metadata} />
        </DragDropContext>
      </Container>
    );
  }

  componentWillUnmount() {
    this.eventsSubscription.unsubscribe();
  }
}
