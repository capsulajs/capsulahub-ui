import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './row';

const Container = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 36px);
  margin: 0 10px 10px 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    background: #3f3f3f;
    width: 2px;
  }
  ::-webkit-scrollbar-corner {
    background: #3f3f3f;
  }
  ::-webkit-scrollbar-thumb {
    background: #797979;
  }
`;

export default class Content extends React.Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
  };

  state = {
    hoverCorrelationId: null,
    activeCorrelationId: null,
  };

  onPointEnter = ({ correlationId }) => this.setState({ hoverCorrelationId: correlationId });
  onPointLeave = () => this.setState({ hoverCorrelationId: null });
  onPointClick = ({ correlationId }) =>
    this.setState((state) => ({ activeCorrelationId: state.activeCorrelationId ? null : correlationId }));

  render() {
    const { hoverCorrelationId, activeCorrelationId } = this.state;
    const { events } = this.props;
    const correlationId = hoverCorrelationId || activeCorrelationId;

    return (
      <Container>
        {events.length
          ? events.map((event, index) => (
              <Row
                key={index}
                number={index + 1}
                event={event}
                isActive={event.correlationId === correlationId}
                onPointEnter={this.onPointEnter}
                onPointLeave={this.onPointLeave}
                onPointClick={this.onPointClick}
              />
            ))
          : 'No events...'}
      </Container>
    );
  }
}
