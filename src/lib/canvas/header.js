import React  from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #515151;
`;

const AddNewTab = styled.div`
  font-size: 31px;
  color: #A9A9A9;
  cursor: pointer;
  width: 39px;
  height: 39px;
  text-align: center;
  
  &:hover {
    color: #FEFEFE;
  }
`;

const grid = 8;
const getTabStyle = (isDragging, draggableStyle, isActive) => ({
  userSelect: 'none',
  textTransform: 'uppercase',
  padding: grid / 2,
  margin: `0 ${grid * 2}px 0 0`,
  background: '#515151',
  color: isActive ? '#FEFEFE' : '#A9A9A9',
  display: 'inline-block',
  paddingBottom: '2px',
  borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: '#515151',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
  width: 'calc(100% - 39px)'
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectTab = props.onSelectTab.bind(this);
    this.onAddNewTab = props.onAddNewTab.bind(this);
    this.onDragTab = props.onDragTab.bind(this);
  }
  
  render() {
    const { tabs, activeIndex } = this.props;

    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragTab}>
          <Droppable droppableId="CapsulaJSCanvasHeader" direction="horizontal">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                {tabs.map((tab, index) => (
                  <Draggable key={tab.id} draggableId={tab.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}
                           {...provided.draggableProps}
                           {...provided.dragHandleProps}
                           style={getTabStyle(snapshot.isDragging, provided.draggableProps.style, activeIndex === index)}
                           onClick={() => this.onSelectTab(index)}>
                        {tab.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddNewTab onClick={this.onAddNewTab}>+</AddNewTab>
      </Container>
    );
  }
}