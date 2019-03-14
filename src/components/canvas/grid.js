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
import { updateNode } from './utils';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  onRemove(node) {
    return (tabId) => this.props.onUpdate(removeTab(this.props.layout, node.id, tabId));
  }

  onUpdate(node) {
    return ({ id, ...updates }) => this.props.onUpdate(updateTab(this.props.layout, node.id, id, updates));
  }

  onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const tree = this.props.layout;
    source.droppableId === destination.droppableId
      ? this.props.onUpdate(reorderTab(tree, source, destination))
      : this.props.onUpdate(moveTab(tree, source, destination));
  }

  onResize(event) {
    const { name, flex } = event.component.props;
    this.props.onUpdate(updateNode(this.props.layout, name, { flex }));
  }

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
            id={id}
            tabs={tabs}
            builders={builders}
            onRemove={this.onRemove(layout)}
            onUpdate={this.onUpdate(layout)}
            onResize={this.onResize}
            metadata={metadata}
          />
        </DragDropContext>
      );
    }

    return <Dropzone id={id} metadata={metadata} />;
  }
}

Grid.propTypes = {
  layout: PropTypes.object.isRequired,
  builders: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  metadata: PropTypes.any,
};

export default Grid;
