import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Dropzone from './dropzone';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
`;

const getListStyle = () => ({ background: '#676767', width: '100%', height: '100%' });

export default class Content extends React.Component {
  static propTypes = {
    nodeId: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    tabIndex: PropTypes.number.isRequired,
    builders: PropTypes.object.isRequired,
    metadata: PropTypes.any,
  };

  render() {
    const { nodeId, tabs, tabIndex, builders, metadata } = this.props;

    if (tabs && tabs[tabIndex]) {
      const tab = tabs[tabIndex];
      const builder = builders[tab.builderId];

      if (builder) {
        if (metadata.source || metadata.destination) {
          if (metadata.source) {
            return (
              <Container>
                <Tabs nodeId={nodeId} tabs={tabs} tabIndex={tabIndex} />
                Drag tab...
              </Container>
            );
          }

          return <Dropzone nodeId={nodeId} tabId={tab.id} metadata={metadata} />;
        }

        return (
          <Container>
            <Tabs nodeId={nodeId} tabs={tabs} tabIndex={tabIndex} />
            {builder(tab.metadata)}
          </Container>
        );
      }

      return 'No builder..';
    }

    if (!metadata.source && metadata.destination) {
      return <Dropzone nodeId={nodeId} metadata={metadata} />;
    }

    return <Droppable droppableId={nodeId}>
      {(provided) => (
        <div ref={provided.innerRef} style={getListStyle()} {...provided.droppableProps}>
          {provided.placeholder}
        </div>
      )}
    </Droppable>;
  }
}
