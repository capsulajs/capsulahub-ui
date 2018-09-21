import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css';

const styles = {
  container: {
    background: '#414141',
    // // padding: '8px',
    // overflow: 'hidden'
  },
  element: {
    // background: '#3F3F3F',
    // overflow: 'visible'
  },
  splitter: {
    background: '#4B4B4B',
    border: 'none',
    width: '8px',
    height: '100%'
  }
};

export class Canvas extends React.Component {
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
    const { children, orientation } = this.props;
    const count = children.length;
    const items = [];
    
    if (count > 1) {
      const elementStyles = styles.element;
      if (orientation === 'horizontal') {
        elementStyles.height = `calc(100% / ${count})`
      }
      
      children.forEach((child, index) => {
        items.push(<ReflexElement key={items.length} minSize="100" maxSize="1000" {...this.resizeProps}>
          {child}
        </ReflexElement>);
        if (count - 1 !== index) {
          const splitterStyles = styles.splitter;
          if (orientation === 'horizontal') {
            splitterStyles.height = '8px';
            splitterStyles.width = '100%';
          }
          
          items.push(<ReflexSplitter key={items.length} {...this.resizeProps}/>);
        }
      });
    }
    
    return (<ReflexContainer orientation={orientation || 'vertical'} style={styles.container}>{items}</ReflexContainer>);
  }
}
