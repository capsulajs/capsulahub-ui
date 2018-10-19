import React from 'react';
import styled from 'styled-components';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import { excludeById } from '../utils';
import { buildLayout, removeElement } from './utils';
import { guid } from '../utils';
import styles from './styles';
import Dropzone from './dropzone';
import { SECTORS_ORIENTATION } from './constants';

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
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  handleOnDrop(element) {
    return ({ creatorId, sectors }) => {
      if (element.type !== 'container') {
        const orientation = SECTORS_ORIENTATION[sectors.toString()];
        const value = this.props.creators[creatorId].element();
        this.onUpdate(buildLayout(this.props.layout, element, orientation, value, sectors));
      }
    }
  }

  removeElement(element) {
    const layout = this.props.layout;

    if (element === layout) {
      this.onUpdate({ id: guid(), type: 'element' });
      return;
    }

    if (element === layout.elements[0]) {
      this.onUpdate({ ...layout, elements: excludeById(layout.elements, element.id) });
    } else {
      this.onUpdate(removeElement(layout, element));
    }
  }

  renderControls(element) {
    return (
      <Controls className="controls">
        <Remove onClick={() => this.removeElement(element)}>&#10005;</Remove>
      </Controls>
    );
  }

  renderElement(element, key) {
    const { type, value, orientation, elements } = element;
    const minSize = 200;
    const maxSize = 1000;

    if (type === 'container') {
      return (<ReflexElement key={key} styles={styles.container}>
        {this.renderContainer(orientation, elements)}
      </ReflexElement>);
    }

    return (
      <ReflexElement key={key} style={styles.element[orientation || 'horizontal']} minSize={minSize} maxSize={maxSize}>
        {value
          ? <Container>{this.renderControls(element)}{value}</Container>
          : <Dropzone dropzoneId={element.id} onDrop={this.handleOnDrop(element)}/>
        }
      </ReflexElement>
    );
  }

  renderContainer(orientation, elements) {
    const reduce = (acc, element, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation || 'horizontal']}/>;
      const el = this.renderElement(element, 'E' + idx);
      return idx > 0 ? [...acc, splitter, el] : [...acc, el]
    };

    return (
      <ReflexContainer orientation={orientation || 'horizontal'} style={styles.container}>
        {elements.reduce(reduce, [])}
      </ReflexContainer>
    );
  }

  render() {
    const { type, value, orientation, elements } = this.props.layout;

    if (elements && elements.length) {
      return this.renderContainer(orientation, elements);
    }

    if (value) {
      return <Container>{this.renderControls(this.props.layout)}{value}</Container>
    }

    return <Dropzone onDrop={this.handleOnDrop(this.props.layout)}/>;
  }
};
