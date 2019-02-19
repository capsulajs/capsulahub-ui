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
      activeIndex: 0
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(activeIndex) {
    this.setState({ activeIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { id, tabs, builders, onRemove, onUpdate } = this.props;

    if (tabs) {
      const { builderId, metadata } = tabs[activeIndex];
      const builder = builders[builderId];

      if (builder) {
        return <Container>
          <Tabs id={id} tabs={tabs} activeIndex={activeIndex}
                onRemove={onRemove}
                onSelect={this.handleOnSelect}
                onUpdate={onUpdate}/>
          <TabContainer>{builder(metadata)}</TabContainer>
        </Container>;
      }
    }

    return 'No content..';
  }
}

Content.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  builders: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Content;
