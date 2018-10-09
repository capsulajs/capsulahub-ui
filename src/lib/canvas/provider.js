import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export default class CanvasProvider extends React.Component {
  render () {
    return <DragDropContextProvider backend={HTML5Backend}>
      {this.props.children}
    </DragDropContextProvider>
  }
}
