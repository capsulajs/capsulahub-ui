import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from './node/container';
import Element from './node/element';
import Dropzone from './dropzone';
import Content from './content';
import bus from './services';

export default class Grid extends React.Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    builders: PropTypes.object.isRequired,
    metadata: PropTypes.any,
  };

  onDragEnd = (result) => bus.emit('reorder', result);

  render() {
    const { layout, builders, metadata } = this.props;
    const { id, tabIndex, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container builders={builders} nodes={nodes} orientation={orientation} metadata={metadata} />
        </DragDropContext>
      );
    }

    if (tabs && tabs.length) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Content nodeId={id} tabIndex={tabIndex} tabs={tabs} builders={builders} metadata={metadata} />
        </DragDropContext>
      );
    }

    return <Dropzone id={id} metadata={metadata} />;
  }
}
