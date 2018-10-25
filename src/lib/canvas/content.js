import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
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
              onUpdate={onUpdate}
        />{tabs[activeIndex].value}
      </Container>;
    }
    
    return 'No content..';
  }
}

Content.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.array,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func
};

export default Content;
