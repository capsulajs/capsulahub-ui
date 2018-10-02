import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';
import Grid from './grid';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A9;
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      tabs: this.props.tabs,
      activeIndex: 0
    };
  }
  
  handleUpdate(layout) {
    const { tabs, activeIndex } = this.state;
    tabs[activeIndex].layout = layout;
    this.setState({ tabs });
  }
  
  render() {
    const { tabs, activeIndex } = this.state;
    const tab = tabs[activeIndex];
    
    return (
      <Container>
        <Grid tab={tab} onUpdate={this.handleUpdate}/>
      </Container>
    );
  }
}

export { Canvas };
