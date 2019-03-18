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
    metadata: PropTypes.any,
  };

  render() {
    const { builders, node, metadata } = this.props;
    const { id, type, tabIndex, tabs, orientation, nodes } = node;
    const style = type === 'container' ? styles.container : styles.element[orientation || 'horizontal'];

    return (
      <ReflexElement key={id} style={style} flex={node.flex}>
        {type === 'container' ? (
          <Container builders={builders} nodes={nodes} orientation={orientation} metadata={metadata} />
        ) : (
          <Content nodeId={id} tabIndex={tabIndex} tabs={tabs} builders={builders} metadata={metadata} />
        )}
      </ReflexElement>
    );
  }
}
