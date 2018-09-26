import React from 'react';
import styled from 'styled-components';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  .controls {
    display: none;
  }
  
  &:hover {
    .controls {
      display: flex;
    }
  }
`;
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 50px;
  background: #515151;
  padding: 5px;
  font-size: 10px;
  z-index: 9999;
`;
const HorizontalSplitter = styled.span`
  cursor: pointer;
  margin-top: -1px;
`;
const VerticalSplitter = styled.span`
  cursor: pointer;
  transform: rotate(-90deg);
`;
const Remove = styled.span`cursor: pointer`;

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
      background: '#515151',
      border: 'none',
      width: '100%',
      height: '8px'
    },
    vertical: {
      background: '#515151',
      border: 'none',
      width: '8px',
      height: '100%'
    }
  }
};

const defaultLayout = {
  type: 'container',
  orientation: 'horizontal',
  elements: [{type: 'element'}]
};

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.build = this.build.bind(this);
    this.state = {
      layout: props.layout || defaultLayout
    }
  }
  
  build(layout, element, orientation) {
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
          elements: layout.elements.map(curr => this.build(curr, element, orientation))
        }
    }
  }
  
  split(element, orientation) {
    if (element.type === 'container') {
      return;
    }
    this.setState((state) => ({
      layout: this.build(state.layout, element, orientation)
    }));
  }
  
  remove(element) {
    if (element === this.state.layout.elements[0]) {
      alert('Cannot remove root element!');
      return;
    }
    
    const reduce = (layout, element) => {
      if (layout.type === 'element') {
        return layout;
      } else {
        if (layout.elements.indexOf(element) >= 0) {
          return { type: 'element' };
        } else {
          return {
            ...layout,
            elements: layout.elements.map(curr => reduce(curr, element))
          }
        }
      }
    };
    
    this.setState((state) => ({ layout: reduce(state.layout, element) }));
  }
  
  renderElement(element, key) {
    const { type, value, orientation, elements } = element;
    const style = styles.element[orientation];
    
    if (type === 'container') {
      return (<ReflexElement key={key}>{this.renderContainer(orientation, elements)}</ReflexElement>);
    }
    
    return (
      <ReflexElement key={key} style={style} minSize="100" maxSize="1000">
        <Container>
          <Controls className="controls">
            <HorizontalSplitter onClick={this.split.bind(this, element, 'horizontal')}>&#9776;</HorizontalSplitter>
            <VerticalSplitter onClick={this.split.bind(this, element, 'vertical')}>&#9776;</VerticalSplitter>
            <Remove onClick={this.remove.bind(this, element)}>&#10005;</Remove>
          </Controls>
          {value}
        </Container>
      </ReflexElement>
    );
  }
  
  renderContainer(orientation, elements) {
    const reduce = (acc, element, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation]}/>;
      const el = this.renderElement(element, 'E' + idx);
      return idx > 0 ? [...acc, splitter, el] : [...acc, el]
    };
    
    return (
      <ReflexContainer orientation={orientation} style={styles.container}>
        {elements.reduce(reduce, [])}
      </ReflexContainer>
    );
  }
  
  render() {
    const { orientation, elements } = this.state.layout;
    return this.renderContainer(orientation, elements);
  }
};
