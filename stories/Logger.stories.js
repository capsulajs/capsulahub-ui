import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Logger } from 'src';
import { getLogs } from './utils';

class LoggerExample extends React.Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    this.setState({ logs: [getLogs(), getLogs()] });
  }

  render() {
    return <Logger logs={this.state.logs} width={1000} height={350} />;
  }
}

storiesOf('Logger', module)
  .add('default', () => <LoggerExample />)
  .add('data', () => <LoggerExample />);
