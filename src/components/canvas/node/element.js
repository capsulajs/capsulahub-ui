import React from 'react';
import PropTypes from 'prop-types';
import { ReflexElement } from 'react-reflex';
import Container from './container';
import Content from '../content';
import Dropzone from '../dropzone';
import styles from './styles';
import { dropzone } from '../settings';

export default class Element extends React.Component {
  static propTypes = {
    builders: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onResize: PropTypes.func.isRequired,
    metadata: PropTypes.any,
  };

  render() {
    const { builders, node, onUpdate, onRemove, onResize, metadata } = this.props;
    const { id, type, tabs, orientation, nodes, flex } = node;
    const style = type === 'container' ? styles.container : styles.element[orientation || 'horizontal'];

    return (
      <ReflexElement key={id} style={style} minSize={dropzone.minSize} flex={flex || 0.5} onResize={onResize}>
        {type === 'container' ? (
          <Container
            builders={builders}
            nodes={nodes}
            orientation={orientation}
            onUpdate={onUpdate}
            onRemove={onRemove}
            onResize={onResize}
            metadata={metadata}
          />
        ) : (
          <Content
            nodeId={id}
            tabs={tabs}
            builders={builders}
            onUpdate={onUpdate}
            onRemove={onRemove}
            metadata={metadata}
          />
        )}
      </ReflexElement>
    );
  }
}
