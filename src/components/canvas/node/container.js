import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter } from 'react-reflex';
import { STYLES } from '../constants';
import Element from './element';

class Container extends React.Component {
  render() {
    const { builders, nodes, orientation, onDrop, onUpdate, onRemove, isDragging } = this.props;
    const reduce = (acc, node, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={STYLES.splitter[orientation || 'horizontal']} />;
      const n = (
        <Element
          builders={builders}
          node={node}
          key={'N' + idx}
          onDrop={onDrop}
          onUpdate={onUpdate}
          onRemove={onRemove}
          isDragging={isDragging}
        />
      );
      return idx > 0 ? [...acc, splitter, n] : [...acc, n];
    };

    return (
      <ReflexContainer orientation={orientation || 'horizontal'} style={STYLES.container}>
        {nodes.reduce(reduce, [])}
      </ReflexContainer>
    );
  }
}

Container.propTypes = {
  builders: PropTypes.object.isRequired,
  nodes: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default Container;
