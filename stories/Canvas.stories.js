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
        id: '0',
        type: 'element',
        flex: 0.5,
        tabIndex: 0,
        tabs: [],
      },
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.onReset = this.onReset.bind(this);

    if (props.persist) {
      const state = JSON.parse(localStorage.getItem('state'));
      if (state) {
        this.state = state;
      }
    }
  }

  onUpdate(layout) {
    this.setState({ layout });
    if (this.props.persist) {
      localStorage.setItem('state', JSON.stringify({ layout }));
    }
  }

  onReset() {
    localStorage.removeItem('state');
    location.reload();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.persist && <button onClick={this.onReset}>Reset local storage</button>}
        <ul style={{ width: 120, height: 60, margin: 0 }}>
          {Object.keys(builders).map((key) => (
            <li draggable data-builder-id={key} key={key}>
              {key}
            </li>
          ))}
        </ul>
        <Canvas builders={builders} layout={this.state.layout} onUpdate={this.onUpdate} width={1000} height={350} />
      </React.Fragment>
    );
  }
}

storiesOf('Canvas', module)
  .add('default', () => <CanvasExample />)
  .add('persist', () => <CanvasExample persist />);
