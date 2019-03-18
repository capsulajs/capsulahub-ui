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
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    metadata: PropTypes.any,
  };

  onSelect = (tabIndex) => this.props.onUpdate(this.props.nodeId, null, { tabIndex });
  onRemove = (id) => this.props.onRemove(this.props.nodeId, id);

  render() {
    const { nodeId, tabIndex, tabs, builders, onUpdate, metadata } = this.props;

    if (tabs && tabs[tabIndex]) {
      const tab = tabs[tabIndex];
      const builder = builders[tab.builderId];

      if (builder) {
        return (
          <Container id={nodeId}>
            <Tabs
              nodeId={nodeId}
              tabs={tabs}
              activeIndex={tabIndex}
              onRemove={this.onRemove}
              onSelect={this.onSelect}
              onUpdate={onUpdate}
            />
            {metadata.builderId ? <Dropzone isFullView id={nodeId} metadata={metadata} /> : builder(tab.metadata)}
          </Container>
        );
      }

      return 'No builder..';
    }

    return <Dropzone id={nodeId} metadata={metadata} />;
  }
}
