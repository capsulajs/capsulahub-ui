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
    node: PropTypes.object.isRequired,
    builders: PropTypes.object.isRequired,
    metadata: PropTypes.any,
  };

  render() {
    const { node, builders, metadata } = this.props;
    const { id, type, tabs, tabIndex, flex, orientation, nodes } = node;
    const style = type === 'container' ? styles.container : styles.element[orientation || 'horizontal'];

    return (
      <ReflexElement key={id} style={style} flex={flex}>
        {type === 'container' ? (
          <Container builders={builders} nodes={nodes} orientation={orientation} metadata={metadata} />
        ) : (
          <Content nodeId={id} tabs={tabs} tabIndex={tabIndex} builders={builders} metadata={metadata} />
        )}
      </ReflexElement>
    );
  }
}
