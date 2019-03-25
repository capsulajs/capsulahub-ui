import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './row';

const Container = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
  };

  state = {
    hoverCorrelationId: null,
    activeCorrelationId: null
  }

  onMouseEnter = ({ correlationId }) => this.setState({ hoverCorrelationId: correlationId });
  onMouseLeave = () => this.setState({ hoverCorrelationId: null });
  onClick = ({ correlationId }) => this.setState(state => ({ activeCorrelationId: state.activeCorrelationId ? null : correlationId }));

  render() {
    const { hoverCorrelationId, activeCorrelationId } = this.state;
    const { width, height, events } = this.props;
    const correlationId = hoverCorrelationId || activeCorrelationId;

    return (
      <Container width={width} height={height}>
        {events.length
          ? events.map((event, index) => <Row key={index} number={index + 1} event={event}
              isActive={event.correlationId === correlationId} onMouseEnter={() => this.onMouseEnter(event)}
              onMouseLeave={this.onMouseLeave} onClick={() => this.onClick(event)}/>)
          : 'No events...'}
      </Container>
    );
  }
}
