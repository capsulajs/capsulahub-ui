import 'react-reflex/styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import Container from './node/container';
import Element from './node/element';
import Dropzone from './dropzone';
import Content from './content';
import bus from './services';

export default class Grid extends React.Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    metadata: PropTypes.any,
  };

  render() {
    const { layout, metadata } = this.props;
    const { id, activeTabIndex, tabs, orientation, nodes } = layout;

    if (nodes && nodes.length) {
      return <Container nodes={nodes} orientation={orientation} metadata={metadata} />;
    }

    if (tabs && tabs.length) {
      return <Content nodeId={id} tabs={tabs} activeTabIndex={activeTabIndex} metadata={metadata} />;
    }

    return <Dropzone nodeId={id} metadata={metadata} />;
  }
}
