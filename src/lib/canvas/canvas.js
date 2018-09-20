import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css';

const styles = {
  container: {
    background: '#4B4B4B',
    padding: '8px'
  },
  pane: {
    background: '#3F3F3F'
  },
  splitter: {
    background: '#4B4B4B',
    border: 'none',
    width: '8px',
    height: '100%'
  }
};

export class Canvas extends React.Component {
  render() {
    const { children, orientation } = this.props;
    const count = children.length;
    const items = [];
    if (count > 1) {
      children.forEach((child, index) => {
        items.push(<ReflexElement key={items.length} style={styles.pane} minSize="100" maxSize="1000">
          {child}
        </ReflexElement>);
        if (index % 2 === 0) {
          items.push(<ReflexSplitter key={items.length} style={styles.splitter}/>);
        }
      });
    }
    return (<ReflexContainer orientation={orientation || 'vertical'} style={styles.container}>{items}</ReflexContainer>);
  }
}
