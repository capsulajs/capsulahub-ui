import React  from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import EditableTab from './editable-tab';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #515151;
  color: #A9A9A9;
  width: 100%;
  overflow: hidden;
`;

const Tabs = styled.div`
  width: calc(100% - 39px);
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

const AddNew = styled.div`
  font-size: 35px;
  color: #A9A9A9;
  cursor: pointer;
  width: 39px;
  height: 39px;
  text-align: center;
  &:hover {
    color: #FEFEFE;
  }
`;

const Title = styled.div`white-space: nowrap`;
const Close = styled.span`
  cursor: pointer;
  margin: auto;
  padding-left: 5px;
  &:hover {
    color: #FEFEFE;
  }
`;

const getListStyle = () => ({
  background: '#515151',
  display: 'flex',
  padding: '8px'
});

const getTabStyle = (isDragging, draggableStyle, isActive) => ({
  userSelect: 'none',
  textTransform: 'uppercase',
  padding: '4px',
  margin: `0 8px 0 0`,
  background: '#515151',
  color: isActive ? '#FEFEFE' : '#A9A9A9',
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '2px',
  ...draggableStyle,
});

const getTitleStyle = (isActive) => ({
  borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
});

const getTabCloseStyle = (isHover) => ({
  color: isHover ? '' : '#515151'
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectTab = props.onSelectTab.bind(this);
    this.onAddNewTab = props.onAddNewTab.bind(this);
    this.onRemoveTab = props.onRemoveTab.bind(this);
    this.onDragTab = props.onDragTab.bind(this);
    this.state = {
      hoverIndex: -1,
      editIndex: -1
    };
  }
  
  handleHover(hoverIndex) {
    this.setState({ hoverIndex });
  }
  
  handleKeyDown(key) {
  
  }
  
  renderDraggable(tab, index) {
    const { tabs, activeIndex } = this.props;
    const { hoverIndex, editIndex } = this.state;
    const isActive = activeIndex === index;
    const isHover = hoverIndex === index;
    const isRemovable = tabs.length > 1;
    const isEditing = editIndex === index;
  
    // <Title onClick={() => this.onSelectTab(index)} style={getTitleStyle(isActive)}>{tab.title}</Title>
    // <EditableTab value={tab.title}
    // isEditing={isEditing}
    // onEdit={() => this.handleEdit(index)}/>
    return (
      <Draggable key={tab.id} draggableId={tab.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
               style={getTabStyle(snapshot.isDragging, provided.draggableProps.style, isActive)}
               onMouseEnter={() => this.handleHover(index)}
               onMouseLeave={() => this.handleHover(-1)}>
            <Title onClick={() => this.onSelectTab(index)} style={getTitleStyle(isActive)}>{tab.title}</Title>
            {isRemovable &&
              <Close onClick={() => this.onRemoveTab(index)} style={getTabCloseStyle(isHover)}>&#10005;</Close>}
          </div>
        )}
      </Draggable>
    );
  }
  
  render() {
    const { tabs } = this.props;
    
    return (
      <Container>
        <Tabs>
          <DragDropContext onDragEnd={this.onDragTab}>
            <Droppable droppableId="CapsulaJSDraggableTabs" direction="horizontal">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                  {tabs.map((tab, index) => this.renderDraggable(tab, index))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Tabs>
        <AddNew onClick={this.onAddNewTab}>+</AddNew>
      </Container>
    );
  }
}