import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Tab from './tab';
import bus from './services';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #515151;
  color: #a9a9a9;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    background: #515151;
    height: 2px;
  }
  ::-webkit-scrollbar-corner {
    background: #3f3f3f;
  }
  ::-webkit-scrollbar-thumb {
    background: #797979;
  }
`;

const getListStyle = () => ({
  background: '#515151',
  display: 'flex',
  flexDirection: 'row',
});

export default class Tabs extends React.Component {
  static propTypes = {
    nodeId: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    activeTabIndex: PropTypes.number.isRequired,
  };

  onSelect = (tabId) => bus.emit('select', { tabId, nodeId: this.props.nodeId });
  onUpdate = ({ tabId, name }) => bus.emit('update', { tabId, name, nodeId: this.props.nodeId });
  onRemove = (tabId) => bus.emit('remove', { tabId, nodeId: this.props.nodeId });

  renderDraggable(tab, index) {
    const { nodeId, activeTabIndex } = this.props;

    return (
      <Draggable key={tab.id} draggableId={tab.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Tab
              tab={tab}
              isActive={activeTabIndex === index}
              onSelect={this.onSelect}
              onUpdate={this.onUpdate}
              onRemove={this.onRemove}
            />
          </div>
        )}
      </Draggable>
    );
  }

  render() {
    const { nodeId, tabs } = this.props;

    return (
      <Container data-cy="canvas-tabs">
        <Droppable droppableId={nodeId} direction="horizontal">
          {(provided) => (
            <div ref={provided.innerRef} style={getListStyle()} {...provided.droppableProps}>
              {tabs.map((tab, index) => this.renderDraggable(tab, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    );
  }
}
