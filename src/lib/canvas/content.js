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
  }
  
  render() {
    const { activeIndex } = this.state;
    const { id, tabs, onRemove }= this.props;

    if (tabs) {
      return <Container>
        <Tabs id={id} tabs={tabs} activeIndex={activeIndex} onRemove={onRemove}/>{tabs[activeIndex].value}
      </Container>;
    }
    
    return 'No content..';
  }
}

Content.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.array,
  onRemove: PropTypes.func
};

export default Content;
