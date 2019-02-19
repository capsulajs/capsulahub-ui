import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { DragDropContext } from 'react-beautiful-dnd';
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

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleTabDragEnd = this.handleTabDragEnd.bind(this);
  }

  handleOnDrop(node) {
    return ({ creatorId, sectors }) => {
      const orientation = SECTORS_ORIENTATION[sectors.toString()];

      if (node.type !== 'container') {
        this.props.onUpdate(createNode(this.props.layout, node, orientation, creatorId, sectors));
      }
    }
  }

  handleOnRemove(node) {
    return tabId => this.props.onUpdate(removeTab(this.props.layout, node.id, tabId));
  }

  handleOnUpdate(node) {
    return ({ id, ...updates }) => {
      this.props.onUpdate(updateNodeTab(this.props.layout, node.id, id, updates));
    }
  }

  handleTabDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      this.props.onUpdate(reorderTab(this.props.layout, source, destination));
    } else {
      this.props.onUpdate(moveTab(this.props.layout, source, destination));
    }
  }

  renderNode(node, key) {
    const { builders } = this.props;
    const { type, tabs, orientation, nodes } = node;

    if (type === 'container') {
      return (<ReflexElement key={key} styles={STYLES.container}>
        {this.renderNodes(nodes, orientation)}
      </ReflexElement>);
    }

    return (
      <ReflexElement key={key} style={STYLES.element[orientation || 'horizontal']}>
        {tabs.length
          ? <Content id={node.id}
                     tabs={tabs}
                     builders={builders}
                     onRemove={this.handleOnRemove(node)}
                     onUpdate={this.handleOnUpdate(node)}/>
          : <Dropzone onDrop={this.handleOnDrop(node)}/>
        }
      </ReflexElement>
    );
  }

  renderNodes(nodes, orientation) {
    const reduce = (acc, node, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={STYLES.splitter[orientation || 'horizontal']}/>;
      const n = this.renderNode(node, 'N' + idx);
      return idx > 0 ? [...acc, splitter, n] : [...acc, n]
    };

    return <ReflexContainer orientation={orientation || 'horizontal'} style={STYLES.container}>
      {nodes.reduce(reduce, [])}
    </ReflexContainer>;
  }

  render() {
    const { layout, builders } = this.props;
    const { id, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return <DragDropContext onDragEnd={this.handleTabDragEnd}>
        {this.renderNodes(nodes, orientation)}
      </DragDropContext>;
    }

    if (tabs && tabs.length) {
      return <DragDropContext onDragEnd={this.handleTabDragEnd}>
        <Content id={id}
                 tabs={tabs}
                 builders={builders}
                 onRemove={this.handleOnRemove(layout)}
                 onUpdate={this.handleOnUpdate(layout)}/>
      </DragDropContext>;
    }

    return <Dropzone onDrop={this.handleOnDrop(layout)}/>;
  }
};

Grid.propTypes = {
  layout: PropTypes.object.isRequired,
  builders: PropTypes.object.isRequired
};

export default Grid;
