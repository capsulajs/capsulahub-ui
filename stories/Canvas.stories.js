import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Canvas } from 'src';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 500px;
`;

export default class CanvasExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        id: 'root',
        type: 'container',
        flex: 0.5,
        orientation: 'vertical',
        nodes: [{
          id: 'node1',
          type: 'element',
          flex: 1,
          tabs: [{
            id: 'tab1',
            name: 'Tab 1',
            content: '<web-cmponent-1></web-component-1>'
          }],
          activeTabIndex: 0
        }, {
          id: 'node2',
          type: 'element',
          flex: 1,
          tabs: [{
            id: 'tab2',
            name: 'Tab 2',
            content: '<web-cmponent-2></web-component-2>'
          }],
          activeTabIndex: 0
        }],
      },
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(layout) {
    this.setState({ layout });
  }

  render() {
    return (
      <Container>
        <Canvas layout={this.state.layout} onUpdate={this.onUpdate} />
      </Container>
    );
  }
}

storiesOf('Canvas', module)
  .add('default', () => <CanvasExample />);
