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
        flex: 1,
        orientation: 'vertical',
        nodes: [
          {
            id: 'node11',
            type: 'element',
            flex: 0.5,
            tabs: [
              {
                id: 'tab11',
                name: 'Tab 11',
                content: '<web-cmponent-11></web-component-11>',
              },
              {
                id: 'tab12',
                name: 'Tab 12',
                content: '<web-cmponent-12></web-component-12>',
              },
            ],
            activeTabIndex: 0,
          },
          {
            id: 'node21',
            type: 'element',
            flex: 0.5,
            tabs: [
              {
                id: 'tab21',
                name: 'Tab 21',
                content: '<web-cmponent-21></web-component-21>',
              },
              {
                id: 'tab22',
                name: 'Tab 22',
                content: '<web-cmponent-22></web-component-22>',
              },
            ],
            activeTabIndex: 0,
          },
        ],
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

storiesOf('Canvas', module).add('default', () => <CanvasExample />);
