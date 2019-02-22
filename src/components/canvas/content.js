import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 23px);
`;

const TabContainer = styled.div`
  height: 100%;
`;

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(index) {
    this.setState({ index });
  }

  handleOnRemove(id) {
    this.setState({ index: 0 });
    this.props.onRemove(id);
  }

  render() {
    const { index } = this.state;
    const { id, tabs, builders, onRemove, onUpdate } = this.props;

    if (tabs && tabs[index]) {
      const { builderId, metadata } = tabs[index];
      const builder = builders[builderId];

      if (builder) {
        return (
          <Container>
            <Tabs
              id={id}
              tabs={tabs}
              activeIndex={index}
              onRemove={this.handleOnRemove}
              onSelect={this.handleOnSelect}
              onUpdate={onUpdate}
            />
            <TabContainer>{builder(metadata)}</TabContainer>
          </Container>
        );
      }

      return 'No builder...';
    }

    return 'No tabs..';
  }
}

Content.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  builders: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Content;
