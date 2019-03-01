import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter } from 'react-reflex';
import { STYLES } from '../constants';
import Element from './element';

class Container extends React.Component {
  render() {
    const { builders, isDragginOn, nodes, orientation, onDrop, onUpdate, onRemove } = this.props;
    const reduce = (acc, node, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={STYLES.splitter[orientation || 'horizontal']} />;
      const n = (
        <Element
          builders={builders}
          isDragginOn={isDragginOn}
          node={node}
          key={'N' + idx}
          onDrop={onDrop}
          onUpdate={onUpdate}
          onRemove={onRemove}
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
  isDragginOn: PropTypes.bool.isRequired,
  nodes: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Container;
