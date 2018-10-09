import React from 'react';
import { ConnectDragSource, DragSource } from 'react-dnd';

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  }
}

@DragSource(
  'box',
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }),
)

export default class CanvasDraggable extends React.Component {
  render () {
    const { isDragging, connectDragSource, name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    console.log(connectDragSource);

    return (
      connectDragSource ?
      connectDragSource(
        <div style={{ ...style, opacity }}>{name}</div>
      ) : null
    );
  }
}
