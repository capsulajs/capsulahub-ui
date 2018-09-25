import React  from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

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
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.tabs,
      activeIndex: this.props.activeIndex || 0
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onSelect = this.props.onSelect.bind(this);
  }
  
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const tabs = reorder(this.state.tabs, result.source.index, result.destination.index);
    this.setState({ tabs, activeIndex: result.destination.index });
  }
  
  select(activeIndex) {
    this.setState({ activeIndex });
    this.onSelect(activeIndex);
  }
  
  render() {
    const { tabs, activeIndex } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="CapsulaJSCanvasHeader" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}>
              {tabs.map((tab, index) => (
                <Draggable key={tab.id} draggableId={tab.id} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         style={getTabStyle(snapshot.isDragging, provided.draggableProps.style, activeIndex === index)}
                         onClick={() => this.select(index)}>
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
    );
  }
}