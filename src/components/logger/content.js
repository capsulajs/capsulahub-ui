import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './row';

const Container = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 40px);
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
    activeCorrelationId: null,
    hoverCorrelationId: null,
  };

  onPointEnter = ({ correlationId }) => this.setState({ hoverCorrelationId: correlationId });
  onPointLeave = () => this.setState({ hoverCorrelationId: null });
  onPointClick = ({ correlationId }) =>
    this.setState((state) => {
      if (state.activeCorrelationId) {
        return { activeCorrelationId: null, hoverCorrelationId: null };
      }
      return { activeCorrelationId: correlationId };
    });

  render() {
    const { activeCorrelationId, hoverCorrelationId } = this.state;
    const { events } = this.props;
    const correlationId = activeCorrelationId || hoverCorrelationId;

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
