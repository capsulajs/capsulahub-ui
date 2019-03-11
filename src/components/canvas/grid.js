import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from './node/container';
import Element from './node/element';
import Dropzone from './dropzone';
import Content from './content';
import { STYLES, SECTORS_ORIENTATION } from './constants';
import createNode from './utils/node/create';
import removeTab from './utils/tab/remove';
import moveTab from './utils/tab/move';
import reorderTab from './utils/tab/reorder';
import { updateNodeTab } from './utils';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDrop(node) {
    return ({ builderId, sectors }) => {
      const orientation = SECTORS_ORIENTATION[sectors.toString()];

      if (node.type !== 'container') {
        this.props.onUpdate(
          createNode({
            layout: this.props.layout,
            node,
            orientation,
            builderId,
            sectors,
          })
        );
      }
    };
  }

  onRemove(node) {
    return (tabId) =>
      this.props.onUpdate(
        removeTab({
          layout: this.props.layout,
          nodeId: node.id,
          tabId,
        })
      );
  }

  onUpdate(node) {
    return ({ id, ...updates }) => {
      this.props.onUpdate(updateNodeTab(this.props.layout, node.id, id, updates));
    };
  }

  onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    source.droppableId === destination.droppableId
      ? this.props.onUpdate(reorderTab(this.props.layout, source, destination))
      : this.props.onUpdate(moveTab(this.props.layout, source, destination));
  }

  render() {
    const { layout, builders, isDragginOn } = this.props;
    const { id, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container
            builders={builders}
            nodes={nodes}
            orientation={orientation}
            onDrop={this.onDrop}
            onUpdate={this.onUpdate}
            onRemove={this.onRemove}
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
            onDrop={this.onDrop}
            onRemove={this.onRemove(layout)}
            onUpdate={this.onUpdate(layout)}
          />
        </DragDropContext>
      );
    }

    return <Dropzone onDrop={this.onDrop(layout)} />;
  }
}

Grid.propTypes = {
  layout: PropTypes.object.isRequired,
  builders: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Grid;
