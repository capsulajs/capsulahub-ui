import React from 'react';
import PropTypes from 'prop-types';
import { ReflexContainer, ReflexSplitter } from 'react-reflex';
import Element from './element';
import bus from '../services';
import styles from './styles';

export default class Container extends React.Component {
  static propTypes = {
    nodes: PropTypes.array.isRequired,
    orientation: PropTypes.string.isRequired,
    metadata: PropTypes.any,
  };

  onResize = (e) => {
    const { node, flex } = e.component.props;
    bus.emit('resize', { nodeId: node.id, flex });
  };

  onStopResize = (e) => {
    const { node, flex } = e.component.props;
    bus.emit('resizestop', { nodeId: node.id, flex });
  };

  render() {
    const { id, nodes, orientation, metadata } = this.props;
    const reduce = (acc, node, idx) => {
      const splitter = <ReflexSplitter key={'S' + idx} style={styles.splitter[orientation || 'horizontal']} />;
      const n = (
        <Element
          flex={node.flex}
          node={node}
          key={'N' + idx}
          onResize={this.onResize}
          onStopResize={this.onStopResize}
          metadata={metadata}
        />
      );
      return idx > 0 ? [...acc, splitter, n] : [...acc, n];
    };

    return (
      <ReflexContainer orientation={orientation || 'horizontal'} style={styles.container} data-cy={`canvas-node-${id}`}>
        {nodes.reduce(reduce, [])}
      </ReflexContainer>
    );
  }
}
