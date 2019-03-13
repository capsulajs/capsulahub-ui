import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from './dropzone';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 23px);
`;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSelect(tabIndex) {
    this.setState({ tabIndex });
  }

  onRemove(id) {
    this.setState({ tabIndex: 0 });
    this.props.onRemove(id);
  }

  render() {
    const { tabIndex } = this.state;
    const { id, tabs, builders, onUpdate, metadata } = this.props;

    if (tabs && tabs[tabIndex]) {
      const tab = tabs[tabIndex];
      const builder = builders[tab.builderId];

      if (builder) {
        return (
          <Container id={id}>
            <Tabs
              id={id}
              tabs={tabs}
              activeIndex={tabIndex}
              onRemove={this.onRemove}
              onSelect={this.onSelect}
              onUpdate={onUpdate}
            />
            {metadata && metadata.nodeId === id ? (
              <Dropzone isFullView id={id} metadata={metadata} />
            ) : (
              builder(tab.metadata)
            )}
          </Container>
        );
      }

      return 'No builder..';
    }

    return 'No tabs..';
  }
}

Content.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  builders: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  metadata: PropTypes.any,
};

export default Content;
