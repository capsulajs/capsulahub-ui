import React from 'react';
import styled from 'styled-components';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import { excludeById } from '../utils';
import { buildLayout, removeElement } from './utils';
import styles from './styles';
import Dropzone from './dropzone';

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

const Remove = styled.span`
  cursor: pointer;
  margin: 5px 8px 5px 5px;
`;

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = props.onUpdate.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.splitElement = this.splitElement.bind(this);
  }

  componentDidMount() {
    const mount = ({ id, type, elements }) => {
      if (type === 'container') {
        const [container] = document.getElementsByClassName(id);

        function dragover(e) {
          e.preventDefault()
        }
        function dragenter(e) {
          e.preventDefault()
        }

        function drop(e) {
          console.log('drop', e.dataTransfer.getData('text'));
        }

        container.addEventListener('dragover', dragover);
        container.addEventListener('dragenter', dragenter);
        container.addEventListener('drop', drop);
      }
    }

    mount(this.props.layout);
  }

  splitElement(element, orientation) {
    if (element.type !== 'container') {
      this.onUpdate(buildLayout(this.props.layout, element, orientation));
    }
  }

  removeElement(element) {
    const layout = this.props.layout;
    if (element === layout.elements[0]) {
      this.onUpdate({ ...layout, elements: excludeById(layout.elements, element.id) });
    } else {
      this.onUpdate(removeElement(layout, element));
    }
  }

  // <HorizontalSplitter onClick={() => this.splitElement(element, 'horizontal')}>&#9776;</HorizontalSplitter>
  //       <VerticalSplitter onClick={() => this.splitElement(element, 'vertical')}>&#9776;</VerticalSplitter>

  renderControls(element) {
    return (
      <Controls className="controls">
        <Remove onClick={() => this.removeElement(element)}>&#10005;</Remove>
      </Controls>
    );
  }

  renderElement(element, key) {
    const { id, type, value, orientation, elements } = element;
    const style = styles.element[orientation || 'horizontal'];
    const minSize = 200;
    const maxSize = 1000;

    if (type === 'container') {
      return (<ReflexElement key={key} styles={styles.container}>
        {this.renderContainer(id, orientation, elements)}
      </ReflexElement>);
    }

    return (
      <ReflexElement key={key} style={style} minSize={minSize} maxSize={maxSize}>
        <Container className={id}>
          {this.renderControls(element)}
          {value}
        </Container>
      </ReflexElement>
    );
  }

  renderContainer(id, orientation, elements) {
    const reduce = (acc, element, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation || 'horizontal']}/>;
      const el = this.renderElement(element, 'E' + idx);
      return idx > 0 ? [...acc, splitter, el] : [...acc, el]
    };

    if (elements.length) {
      return (
        <ReflexContainer className={id} orientation={orientation || 'horizontal'} style={styles.container}>
          {elements.reduce(reduce, [])}
        </ReflexContainer>
      );
    }

    return <Dropzone droppableId={id}/>;
  }

  render() {
    console.log('render -> Grid')
    const { id, orientation, elements } = this.props.layout;
    if (elements) {
      return this.renderContainer(id, orientation, elements);
    }
    return 'No elements..';
  }
};
