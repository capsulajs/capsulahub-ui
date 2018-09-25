import React from 'react';
import styled from 'styled-components';
import { arrayMove } from 'react-sortable-hoc';
import { defaultFontFamily, defaultBackgroundColor } from '../constants';
import Header from './header';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: ${defaultBackgroundColor};
  width: 100%;
  height: 100%;
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
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  
  handleExtraButton() {
    const { tabs } = this.state;
    const newTabs = [...tabs, {id: `tab-${tabs.length}`, title: 'New Tab', content: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }
  
  handleTabChange(activeIndex) {
    this.setState({ activeIndex });
  }
  
  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = arrayMove(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
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

    return (
      <Container>
        <Header tabs={tabs} activeIndex={activeIndex} onSelect={this.handleTabChange}/>
        <Content>{tabs[activeIndex].content}</Content>
      </Container>
    )
  }
}

export { Canvas };
