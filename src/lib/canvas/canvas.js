import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily, defaultBackgroundColor } from '../constants';
import Header from './header';
import Grid from './grid';
import { reorder, guid, parceInteger } from '../utils';

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
    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.handleAddNewTab = this.handleAddNewTab.bind(this);
    this.handleRemoveTab = this.handleRemoveTab.bind(this);
    this.handleDragTab = this.handleDragTab.bind(this);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleLayoutUpdate = this.handleLayoutUpdate.bind(this);
    this.state = {
      tabs: this.props.tabs,
      activeIndex: 0
    };
  }
  
  getDefaultLayout() {
    return {
      id: guid(),
      type: 'container',
      elements: [{
        id: guid(),
        type: 'element'
      }]
    };
  }
  
  handleSelectTab(activeIndex) {
    this.setState({ activeIndex });
  }
  
  handleAddNewTab() {
    const { tabs } = this.state;
    const newTabs = [...tabs, {
      id: `tab-${guid()}`,
      title: `Tab ${parceInteger(tabs[tabs.length - 1].title) + 1}`,
      layout: this.getDefaultLayout()
    }];
    this.setState({
      tabs: newTabs,
      activeIndex: newTabs.length - 1
    });
  }
  
  handleRemoveTab(index) {
    let { tabs, activeIndex } = this.state;
    tabs.splice(index, 1);
    if (activeIndex > tabs.length) {
      activeIndex = activeIndex - 1;
    }
    this.setState({ tabs, activeIndex });
  }
  
  handleDragTab(result) {
    if (!result.destination) {
      return;
    }
    const tabs = reorder(this.state.tabs, result.source.index, result.destination.index);
    this.setState({ tabs, activeIndex: result.destination.index });
  }
  
  handleTitleUpdate(title) {
    const { tabs, activeIndex } = this.state;
    tabs[activeIndex].title = title;
    this.setState({ tabs });
  }
  
  handleLayoutUpdate(layout) {
    const { tabs, activeIndex } = this.state;
    tabs[activeIndex].layout = layout;
    this.setState({ tabs });
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
                onRemoveTab={this.handleRemoveTab}
                onDragTab={this.handleDragTab}
                onUpdateTab={this.handleTitleUpdate}/>
        <Content>
          <Grid tab={tab} onUpdate={this.handleLayoutUpdate}/>
        </Content>
      </Container>
    );
  }
}

export { Canvas };
