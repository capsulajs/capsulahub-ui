import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import _ from 'lodash';
import update from './utils/grid/update';
import remove from './utils/grid/remove';
import { SECTORS_ORIENTATION } from './constants';
import styles from './styles';
import Dropzone from './dropzone';
import Content from './content';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnDrop(element) {
    return ({ creatorId, sectors }) => {
      const orientation = SECTORS_ORIENTATION[sectors.toString()];
      const creator = this.props.creators[creatorId];
      
      if (creator && element.type !== 'container') {
        this.props.onUpdate(update(this.props.layout, element, orientation, creator, sectors));
      }
    }
  }
  
  handleOnRemove(element) {
    return tabId => this.props.onUpdate(remove(this.props.layout, element, tabId));
  }
  
  handleOnUpdate(element) {
    return ({ id, name }) => {
      const tab = element.tabs.find(tab => tab.id === id);
      tab.name = name;
      this.props.onUpdate(this.props.layout);
    }
  }

  renderElement(element, key) {
    const { type, tabs, orientation, elements } = element;

    if (type === 'container') {
      return (<ReflexElement key={key} styles={styles.container}>
        {this.renderContainer(orientation, elements)}
      </ReflexElement>);
    }
    
    return (
      <ReflexElement key={key} style={styles.element[orientation || 'horizontal']}>
        {tabs.length
          ? <Content id={element.id} tabs={tabs}
                     onRemove={this.handleOnRemove(element)}
                     onUpdate={this.handleOnUpdate(element)}/>
          : <Dropzone onDrop={this.handleOnDrop(element)}/>
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
    const layout = this.props.layout;
    const { id, tabs, orientation, elements } = layout;
    console.log('render -> Grid', layout);
    
    if (elements && elements.length) {
      return this.renderContainer(orientation, elements);
    }
    
    if (tabs && tabs.length) {
      return <Content id={id} tabs={tabs}
                      onRemove={this.handleOnRemove(layout)}
                      onUpdate={this.handleOnUpdate(layout)}/>;
    }

    return <Dropzone onDrop={this.handleOnDrop(layout)}/>;
  }
};

Grid.propTypes = {
  layout: PropTypes.object
};

export default Grid;