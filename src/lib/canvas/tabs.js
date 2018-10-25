import React  from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Tab from './tab';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #515151;
  color: #A9A9A9;
  width: 100%;
  overflow: hidden;
  
  overflow-x: scroll;
  ::-webkit-scrollbar {
    background: #515151;
    height: 2px;
  }
  ::-webkit-scrollbar-corner {
    background: #3F3F3F;
  }
  ::-webkit-scrollbar-thumb {
    background: #797979;
  }
  overflow-y: hidden;
`;

const Close = styled.span`
  cursor: pointer;
  margin: auto;
  padding-left: 5px;
`;

const getListStyle = () => ({
  background: '#515151',
  display: 'flex'
});

const getTabStyle = (draggableStyle, isActive) => ({
  userSelect: 'none',
  textTransform: 'uppercase',
  padding: '2px',
  margin: `0 8px 0 0`,
  background: '#515151',
  color: isActive ? '#FEFEFE' : '#A9A9A9',
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '2px',
  ...draggableStyle,
});

const getTabCloseStyle = (isHover) => (isHover ? {} : { color: '#515151' });

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hoverIndex: -1,
      editIndex: -1
    };
  }
  
  hover(hoverIndex) {
    this.setState({ hoverIndex });
  }
  
  edit(editIndex) {
    this.setState({ editIndex });
  }
  
  renderDraggable(tab, index) {
    const { tabs, activeIndex, onRemove } = this.props;
    const { hoverIndex, editIndex } = this.state;
    
    const isActive = activeIndex === index;
    const isHover = hoverIndex === index;
    const isEditing = editIndex === index;
    const isRemovable = !isEditing && tabs.length;
    
    return (
      <Draggable key={activeIndex} draggableId={activeIndex} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
               style={getTabStyle(provided.draggableProps.style, isActive)}
               onMouseEnter={() => this.hover(index)}
               onMouseLeave={() => this.hover(-1)}>
            <Tab name={tab.name}
                 isEditing={isEditing}
                 isActive={isActive}
                 onSelect={() => this.onSelectTab(index)}
                 onEditStart={() => this.edit(index)}
                 onEditEnd={() => this.edit(-1)}
                 onUpdate={name => this.onUpdateTab(name)}/>
            {isRemovable &&
            <Close onClick={e => e.preventDefault() || onRemove(tab.id)}
                   style={getTabCloseStyle(isHover)}>&#10005;</Close>}
          </div>
        )}
      </Draggable>
    );
  }
  
  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragTab}>
          <Droppable droppableId={this.props.id} direction="horizontal">
            {provided => (
              <div ref={provided.innerRef} style={getListStyle()} {...provided.droppableProps}>
                {this.props.tabs.map((tab, index) => this.renderDraggable(tab, index))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    );
  }
}

Tabs.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.array,
  activeIndex: PropTypes.number,
  onRemove: PropTypes.func
};

export default Tabs;
