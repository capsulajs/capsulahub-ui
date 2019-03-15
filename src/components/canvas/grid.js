import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from './node/container';
import Element from './node/element';
import Dropzone from './dropzone';
import Content from './content';
import removeTab from './utils/tab/remove';
import moveTab from './utils/tab/move';
import reorderTab from './utils/tab/reorder';
import { updateNode, updateTab } from './utils';

export default class Grid extends React.Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    builders: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    metadata: PropTypes.any,
  };

  onRemove = (nodeId, tabId) => {
    this.props.onUpdate(removeTab(this.props.layout, nodeId, tabId));
  };

  onUpdate = (nodeId, tabId, updates) => {
    this.props.onUpdate(updateTab(this.props.layout, nodeId, tabId, updates));
  };

  onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const tree = this.props.layout;
    source.droppableId === destination.droppableId
      ? this.props.onUpdate(reorderTab(tree, source, destination))
      : this.props.onUpdate(moveTab(tree, source, destination));
  };

  onResize = (event) => {
    const { node, flex } = event.component.props;
    this.props.onUpdate(updateNode(this.props.layout, node.id, { flex }));
  };

  render() {
    const { layout, builders, metadata } = this.props;
    const { id, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container
            builders={builders}
            nodes={nodes}
            orientation={orientation}
            onUpdate={this.onUpdate}
            onRemove={this.onRemove}
            onResize={this.onResize}
            metadata={metadata}
          />
        </DragDropContext>
      );
    }

    if (tabs && tabs.length) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Content
            nodeId={id}
            tabs={tabs}
            builders={builders}
            onRemove={this.onRemove}
            onUpdate={this.onUpdate}
            onResize={this.onResize}
            metadata={metadata}
          />
        </DragDropContext>
      );
    }

    return <Dropzone id={id} metadata={metadata} />;
  }
}
