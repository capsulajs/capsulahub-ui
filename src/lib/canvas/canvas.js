import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily, defaultBackgroundColor } from '../constants';
import Header from './header';
import Grid from './grid';
import { reorder } from '../utils';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: ${defaultBackgroundColor};
  color: #A9A9A9;
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 100px;
`;

const Content = styled.div`
  height: calc(100% - 39px);
`;

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.tabs,
      activeIndex: 0
    };
    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.handleAddNewTab = this.handleAddNewTab.bind(this);
    this.handleDragTab = this.handleDragTab.bind(this);
  }
  
  handleSelectTab(activeIndex) {
    this.setState({ activeIndex });
  }
  
  handleDragTab(result) {
    if (!result.destination) {
      return;
    }
    const tabs = reorder(this.state.tabs, result.source.index, result.destination.index);
    this.setState({ tabs, activeIndex: result.destination.index });
  }
  
  handleAddNewTab() {
    const { tabs } = this.state;
    const newTabs = [...tabs, {id: `tab-${tabs.length + 1}`, title: 'New Tab', content: 'New Content'}];
    this.setState({
      tabs: newTabs,
      activeIndex: newTabs.length - 1
    });
  }
  
  handleEdit({type, index}) {
    let { tabs, activeIndex } = this.state;
    if (type === 'delete') {
      tabs.splice(index, 1);
    }
    if (index - 1 >= 0) {
      activeIndex = index - 1;
    } else {
      activeIndex = 0;
    }
    this.setState({ tabs, activeIndex });
  }
  
  render() {
    const { tabs, activeIndex } = this.state;
    const tab = tabs[activeIndex];
    
    return (
      <Container>
        <Header tabs={tabs}
                activeIndex={activeIndex}
                onSelectTab={this.handleSelectTab}
                onAddNewTab={this.handleAddNewTab}
                onDragTab={this.handleDragTab}/>
        <Content>
          <Grid>
            {[tab.content, tab.content]}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export { Canvas };
