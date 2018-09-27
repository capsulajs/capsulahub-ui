import React from 'react';
import styled from 'styled-components';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import ContainerDimensions from 'react-container-dimensions'
import { guid, excludeById, includes } from '../utils';

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
    console.log('init -> Grid');
    
    super(props);
    this.onDestroy = props.onDestroy.bind(this);
    this.build = this.build.bind(this);
    this.state = {
      layout: props.layout
    }
  }
  
  componentWillUpdate(nextProps) {
    const { layout: newLayout } = nextProps;
    const { layout } = this.state;
    
    if (layout && !newLayout) {
      this.setState({ layout: null });
    }
    
    if (!layout && newLayout) {
      this.setState({ layout: newLayout });
    }
    
    if (newLayout && layout && newLayout.id !== layout.id) {
      this.setState({ layout: newLayout });
    }
  }
  
  build(layout, element, orientation) {
    switch (true) {
      case layout === element:
        return {
          id: guid(),
          type: 'container',
          orientation,
          elements: [{ ...element }, { type: 'element', id: guid() }]
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
      if (this.state.layout.elements.length > 1) {
        this.setState(state => ({
          layout: {
            ...state.layout,
            elements: excludeById(state.layout.elements, element.id)
          }
        }));
      } else {
        this.onDestroy();
      }
      return;
    }

    const reduce = (layout, element) => {
      if (layout.type === 'element') {
        return layout;
      } else {
        if (includes(layout.elements, element)) {
          return {
            ...layout,
            elements: excludeById(layout.elements, element.id)
          };
        } else {
          return {
            ...layout,
            elements: layout.elements.map(curr => reduce(curr, element))
          }
        }
      }
    };

    this.setState(state => ({
      layout: reduce(state.layout, element)
    }));
  }
  
  renderElement(element, key) {
    const { type, value, orientation, elements } = element;
    const style = styles.element[orientation];
    const split = (type) => this.split.bind(this, element, type);
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
                <Controls className="controls">
                  {height / 4 > minSize &&<HorizontalSplitter onClick={split('horizontal')}>&#9776;</HorizontalSplitter>}
                  {width / 4 > minSize &&<VerticalSplitter onClick={split('vertical')}>&#9776;</VerticalSplitter>}
                  <Remove onClick={this.remove.bind(this, element)}>&#10005;</Remove>
                </Controls>
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
    if (!this.state.layout) {
      return 'No Layout...'
    }
    
    const { orientation, elements } = this.state.layout;
    return this.renderContainer(orientation, elements);
  }
};
