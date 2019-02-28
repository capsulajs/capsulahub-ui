import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Canvas } from 'src';

const builders = {
  text1: () => 'Text 1',
  text2: () => 'Text 2',
  text3: () => 'Text 3',
};

export default class CanvasExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        id: 'tklj94',
        type: 'element',
        tabs: [],
      },
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(layout) {
    this.setState({ layout });
  }

  render() {
    return (
      <React.Fragment>
        <ul id="list" style={{ width: 120, height: 60, margin: 0 }}>
          {Object.keys(builders).map((key) => (
            <li draggable builder-id={key} key={key}>
              {key}
            </li>
          ))}
        </ul>
        <Canvas
          buildersListId="list"
          builders={builders}
          layout={this.state.layout}
          onUpdate={this.onUpdate}
          width={1000}
          height={350}
        />
      </React.Fragment>
    );
  }
}

storiesOf('Canvas', module).add('default', () => <CanvasExample />);
