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
    const { id, tabs, onRemove, onUpdate } = this.props;
    
    if (tabs) {
      return <Container>
        <Tabs id={id} tabs={tabs} activeIndex={activeIndex}
              onRemove={onRemove}
              onSelect={this.handleOnSelect}
              onUpdate={onUpdate}/>
        <TabContainer>{tabs[activeIndex].value}</TabContainer>
      </Container>;
    }
    
    return 'No content..';
  }
}

Content.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Content;
