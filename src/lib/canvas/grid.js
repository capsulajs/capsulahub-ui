import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css';

const styles = {
  container: {
    background: '#414141',
    overflow: 'hidden'
  },
  element: {
    horizontal: {},
    vertical: {
      overflow: 'visible'
    }
  },
  splitter: {
    horizontal: {
      background: '#4B4B4B',
      border: 'none',
      width: '100%',
      height: '8px'
    },
    vertical: {
      background: '#4B4B4B',
      border: 'none',
      width: '8px',
      height: '100%'
    }
  }
};

export default class Grid extends React.Component {
  constructor() {
    super();
    
    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    };
  }
  
  onResize (e) {
    if (e.domElement) {
      e.domElement.classList.add('resizing');
    }
  }
  
  onStopResize (e) {
    if (e.domElement) {
      e.domElement.classList.remove('resizing');
    }
  }
  
  render() {
    const children = this.props.children;
    const orientation = this.props.orientation || 'vertical';
    const count = children.length;
    const items = [];
    if (count > 1) {
      children.forEach((child, index) => {
        items.push(<ReflexElement key={items.length} style={styles.element[orientation]} minSize="100" maxSize="1000">
          {child}
        </ReflexElement>);
        if (count - 1 !== index) {
          items.push(<ReflexSplitter key={items.length} style={styles.splitter[orientation]}/>);
        }
      });
    }
    return (<ReflexContainer orientation={orientation} style={styles.container}>{items}</ReflexContainer>);
  }
}