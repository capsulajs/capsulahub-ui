import React  from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #515151;
  color: #A9A9A9;
  width: 100%;
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
`;

const AddNew = styled.div`
  font-size: 30px;
  color: #A9A9A9;
  cursor: pointer;
  width: 39px;
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
  borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
  ...draggableStyle,
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
    this.state = { hoverIndex: -1 };
  }
  
  onHoverTab(hoverIndex) {
    this.setState({ hoverIndex });
  }
  
  render() {
    const { tabs, activeIndex } = this.props;
    const { hoverIndex } = this.state;
    
    return (
      <Container>
        <Tabs>
          <DragDropContext onDragEnd={this.onDragTab} style={{overflow: 'scroll'}}>
            <Droppable droppableId="CapsulaJSCanvasHeader" direction="horizontal" style={{overflow: 'scroll'}}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                  {tabs.map((tab, index) => (
                    <Draggable key={tab.id} draggableId={tab.id} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                             style={getTabStyle(snapshot.isDragging, provided.draggableProps.style, activeIndex === index)}
                             onMouseEnter={() => this.onHoverTab(index)}
                             onMouseLeave={() => this.onHoverTab(-1)}>
                          <Title onClick={() => this.onSelectTab(index)}>{tab.title}</Title>
                          {activeIndex !== index &&
                          <Close style={getTabCloseStyle(hoverIndex === index)}
                                 onClick={() => this.onRemoveTab(index)}>&#10005;</Close>}
                        </div>
                      )}
                    </Draggable>
                  ))}
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