import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
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

class Grid1 extends React.Component {
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


const defaultLayout = {
  type: 'container',
  orientation: 'horizontal',
  elements: [{type: 'element'}]
};

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.builSplittedLayout = this.builSplittedLayout.bind(this);
    this.state = {
      layout: props.layout || defaultLayout
    }
  }
  
  builSplittedLayout(layout, element, orientation) {
    switch (true) {
      case layout === element:
        return {
          type: 'container',
          orientation,
          elements: [{ type: 'element' }, { type: 'element' }]
        };
      case layout.type === 'element':
        return layout;
      default:
        return {
          type: 'container',
          orientation: layout.orientation,
          elements: layout.elements.map(curr => this.builSplittedLayout(curr, element, orientation))
        }
    }
  }
  
  splitElement(element, orientation) {
    if (element.type === 'container') {
      return;
    }
    this.setState((state) => ({
      layout: this.builSplittedLayout(state.layout, element, orientation)
    }));
  }
  
  removeElementInt(layout, element) {
    if (layout.type === 'element') {
      return layout;
    } else {
      if (layout.elements.indexOf(element) >= 0) {
        return { type: 'element' };
      } else {
        return {
          ...layout,
          elements: layout.elements.map(curr => this.removeElementInt(curr, element))
        }
      }
    }
  }
  
  removeElement(element) {
    if (element === this.state.layout.elements[0]) {
      alert('Cannot remove root elelemnt!');
      return;
    }
    this.setState((state) => ({
      layout: this.removeElementInt(state.layout, element)
    }));
  }
  
  renderControls(onSplitH, onSplitV, onClose) {
    return (
      <div className="flexpane-controls">
        <span onClick={onSplitH}>V</span>|
        <span onClick={onSplitV}>H</span>|
        <span onClick={onClose}>delete</span>
      </div>
    );
  }
  
  renderElement(element, key) {
    const { type, orientation, elements } = element;
    const style = styles.element[orientation];
    
    if (type === 'container') {
      return (<ReflexElement key={key}>
        {this.renderContainer(orientation, elements)}
      </ReflexElement>);
    }
    
    return (
      <ReflexElement key={key} style={style} minSize="100" maxSize="1000">
        {this.renderControls(
          this.splitElement.bind(this, element, 'vertical'),
          this.splitElement.bind(this, element, 'horizontal'),
          this.removeElement.bind(this, element),
        )}
      </ReflexElement>
    );
  }
  
  renderContainer(orientation, elements) {
    const reducer = (acc, element, idx) => {
      const splitter = <ReflexSplitter key={'S'+idx} style={styles.splitter[orientation]}/>;
      const el = this.renderElement(element, 'E'+idx);
      return idx > 0 ? [...acc, splitter, el] : [...acc, el]
    };
    
    return (
      <ReflexContainer orientation={orientation} style={styles.container}>
        {elements.reduce(reducer, [])}
      </ReflexContainer>
    );
  }
  
  render() {
    const { layout: { orientation, elements} } = this.state;
    return this.renderContainer(orientation, elements);
  }
};
