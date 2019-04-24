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
    metadata: PropTypes.any,
  };

  render() {
    const { node, metadata } = this.props;
    const { id, type, tabs, activeTabIndex, flex, orientation, nodes } = node;
    const style = type === 'container' ? styles.container : styles.element[orientation || 'horizontal'];

    return (
      <ReflexElement key={id} style={style} flex={flex} data-cy={`canvas-node-${id}`}>
        {type === 'container' ? (
          <Container nodes={nodes} orientation={orientation} metadata={metadata} />
        ) : (
          <Content nodeId={id} tabs={tabs} activeTabIndex={activeTabIndex} metadata={metadata} />
        )}
      </ReflexElement>
    );
  }
}
