import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Logger } from 'src';
import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 500px;
`;

class LoggerExample extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      logs$: merge(
        interval(2000).pipe(
          map(() => ({
            correlationId: 'Adele',
            type: 'request',
            serviceName: 'AdeleService',
            methodName: 'hello$',
            timestamp: new Date().getTime(),
            data: { verse2: 'Hello, how are you?' },
          }))
        ),
        interval(3000).pipe(
          map(() => ({
            correlationId: 'Queen',
            type: 'response',
            serviceName: 'QueenService',
            methodName: 'showMustGoOn$',
            timestamp: new Date().getTime(),
            data: { verse1: 'Empty spaces, what are we living for' },
          }))
        )
      ),
    });
  }

  render() {
    return (
      <Container>
        <Logger logs$={this.state.logs$} />
      </Container>
    );
  }
}

storiesOf('Logger', module)
  .add('default', () => <LoggerExample />)
  .add('data', () => <LoggerExample />);
