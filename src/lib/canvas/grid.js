import React from 'react';
import styled from 'styled-components';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import ContainerDimensions from 'react-container-dimensions'
import { excludeById } from '../utils';
import { buildLayout, removeElement } from './utils';

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
  background: #515151;
  font-size: 10px;
  z-index: 9999;
`;
const HorizontalSplitter = styled.span`
  cursor: pointer;
  margin: 4px 5px 5px 8px;
`;
const VerticalSplitter = styled.span`
  cursor: pointer;
  transform: rotate(-90deg);
  margin: 5px;
`;
const Remove = styled.span`
  cursor: pointer;
  margin: 5px 8px 5px 5px;
`;

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

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.onDestroy = props.onDestroy.bind(this);
    this.onUpdate = props.onUpdate.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.splitElement = this.splitElement.bind(this);
  }
  
  splitElement(element, orientation) {
    if (element.type !== 'container') {
      this.onUpdate({
        layout: buildLayout(this.props.tab.layout, element, orientation)
      });
    }
  }
  
  removeElement(element) {
    const layout = this.props.tab.layout;
    
    if (element === layout.elements[0]) {
      if (layout.elements.length > 1) {
        this.onUpdate({
          layout: {
            ...layout,
            elements: excludeById(layout.elements, element.id)
          }
        });
      } else {
        this.onDestroy();
      }
    } else {
      this.onUpdate({
        layout: removeElement(layout, element)
      });
    }
  }
  
  renderControls(element, canSplitHorizontal, canSplitVertical) {
    return (
      <Controls className="controls">
        {canSplitHorizontal &&
        <HorizontalSplitter onClick={() => this.splitElement(element, 'horizontal')}>&#9776;</HorizontalSplitter>}
        {canSplitVertical &&
        <VerticalSplitter onClick={() => this.splitElement(element, 'vertical')}>&#9776;</VerticalSplitter>}
        <Remove onClick={() => this.removeElement(element)}>&#10005;</Remove>
      </Controls>
    );
  }
  
  renderElement(element, key) {
    const { type, value, orientation, elements } = element;
    const style = styles.element[orientation || 'horizontal'];
    const minSize = 100;
    const maxSize = 1000;
    
    if (type === 'container') {
      return (<ReflexElement key={key}>{this.renderContainer(orientation, elements)}</ReflexElement>);
    }
    
    return (
      <ReflexElement key={key} style={style} minSize={minSize} maxSize={maxSize}>
        <ContainerDimensions>
          {({width, height}) => {
            return (
              <Container>
                {this.renderControls(element, height / 4 > minSize, width / 4 > minSize)}
                {value}
              </Container>
            );
          }}
        </ContainerDimensions>
      </ReflexElement>
    );
  }
  
  renderContainer(orientation, elements) {
    const reduce = (acc, element, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation || 'horizontal']}/>;
      const el = this.renderElement(element, 'E' + idx);
      return idx > 0 ? [...acc, splitter, el] : [...acc, el]
    };
    
    if (elements) {
      return (
        <ReflexContainer orientation={orientation || 'horizontal'} style={styles.container}>
          {elements.reduce(reduce, [])}
        </ReflexContainer>
      );
    }
    
    return 'No elements..';
  }
  
  render() {
    const { tab } = this.props;

    if (tab && tab.layout) {
      const { orientation, elements } = tab.layout;
      return this.renderContainer(orientation, elements);
    }
  
    return 'No Layout..';
  }
};
