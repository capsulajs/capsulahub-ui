import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Dropzone from './dropzone';
import Content from './content';
import { STYLES, SECTORS_ORIENTATION } from './constants';
import createNode from './utils/node/create';
import removeTab from './utils/tab/remove';
import moveTab from './utils/tab/move';
import reorderTab from './utils/tab/reorder';
import { updateNodeTab } from './utils';

import Container from './node/container';
import Element from './node/element';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleTabDragEnd = this.handleTabDragEnd.bind(this);
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

  handleOnRemove(node) {
    return (tabId) =>
      this.props.onUpdate(
        removeTab({
          layout: this.props.layout,
          nodeId: node.id,
          tabId,
        })
      );
  }

  handleOnUpdate(node) {
    return ({ id, ...updates }) => {
      this.props.onUpdate(updateNodeTab(this.props.layout, node.id, id, updates));
    };
  }

  handleTabDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    source.droppableId === destination.droppableId
      ? this.props.onUpdate(reorderTab(this.props.layout, source, destination))
      : this.props.onUpdate(moveTab(this.props.layout, source, destination));
  }

  render() {
    const { layout, builders } = this.props;
    const { id, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return (
        <DragDropContext onDragEnd={this.handleTabDragEnd}>
          <Container
            builders={builders}
            nodes={nodes}
            orientation={orientation}
            onDrop={this.onDrop}
            onUpdate={this.handleOnUpdate}
            onRemove={this.handleOnRemove}
          />
        </DragDropContext>
      );
    }

    if (tabs && tabs.length) {
      return (
        <DragDropContext onDragEnd={this.handleTabDragEnd}>
          <Content
            id={id}
            tabs={tabs}
            builders={builders}
            onRemove={this.handleOnRemove(layout)}
            onUpdate={this.handleOnUpdate(layout)}
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
