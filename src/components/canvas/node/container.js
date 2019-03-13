import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter } from 'react-reflex';
import Element from './element';
import styles from './styles';

class Container extends React.Component {
  render() {
    const { builders, nodes, orientation, onUpdate, onRemove, metadata } = this.props;
    const reduce = (acc, node, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation || 'horizontal']} />;
      const n = (
        <Element
          builders={builders}
          node={node}
          key={'N' + idx}
          onUpdate={onUpdate}
          onRemove={onRemove}
          metadata={metadata}
        />
      );
      return idx > 0 ? [...acc, splitter, n] : [...acc, n];
    };

    return (
      <ReflexContainer orientation={orientation || 'horizontal'} style={styles.container}>
        {nodes.reduce(reduce, [])}
      </ReflexContainer>
    );
  }
}

Container.propTypes = {
  builders: PropTypes.object.isRequired,
  nodes: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  metadata: PropTypes.any,
};

export default Container;
