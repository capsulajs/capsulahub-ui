import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from './dropzone';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 23px);
`;

export default class Content extends React.Component {
  static propTypes = {
    nodeId: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
    tabs: PropTypes.array.isRequired,
    builders: PropTypes.object.isRequired,
    metadata: PropTypes.any,
  };

  render() {
    const { nodeId, tabIndex, tabs, builders, metadata } = this.props;

    if (tabs && tabs[tabIndex]) {
      const tab = tabs[tabIndex];
      const builder = builders[tab.builderId];

      if (builder) {
        return (
          <Container id={nodeId}>
            <Tabs nodeId={nodeId} tabs={tabs} activeIndex={tabIndex} />
            {metadata.builderId ? <Dropzone isFullView id={nodeId} metadata={metadata} /> : builder(tab.metadata)}
          </Container>
        );
      }

      return 'No builder..';
    }

    return <Dropzone id={nodeId} metadata={metadata} />;
  }
}
