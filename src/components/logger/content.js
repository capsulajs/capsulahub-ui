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

  render() {
    const { width, height, events } = this.props;

    return (
      <Container width={width} height={height}>
        {events.length
          ? events.map((event, index) => <Row key={index} number={index + 1} event={event} />)
          : 'No events...'
        }
      </Container>
    );
  }
}
