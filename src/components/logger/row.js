import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styled from 'styled-components';
import theme from './theme';
import { decorate } from '../utils';
import greenArrows from '../../assets/green-arrows.png';
import redArrows from '../../assets/red-arrows.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
`;

const PointWrapper = styled.div`
  width: 16px;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Point = styled.div`
  background: ${(props) => (props.active ? '#34D6FC' : '#4C4C4C')};
  width: 4px;
  height: 4px;
  border-radius: 2px;
`;

const Timestamp = styled.div`
  width: 50px;
`;

const Arrows = styled.img`
  width: 18px;
  height: 18px;
  padding-left: 12px;
`;

const Title = styled.div`
  padding-left: 12px;
`;

const Content = styled.div`
  padding-left: 12px;
`;

export default class Row extends React.Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onPointEnter: PropTypes.func.isRequired,
    onPointLeave: PropTypes.func.isRequired,
    onPointClick: PropTypes.func.isRequired,
  };

  onPointClick = () => this.props.onPointClick(this.props.event);
  onPointEnter = () => this.props.onPointEnter(this.props.event);
  onPointLeave = () => this.props.onPointLeave();

  render() {
    const { number, event, isActive, onMouseLeave } = this.props;

    let content = (
      <ReactJson
        src={event.data}
        name={false}
        iconStyle={'circle'}
        theme={theme}
        indentWidth={2}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={true}
      />
    );

    return (
      <Container data-cy={`logger-row-${number - 1}`}>
        <PointWrapper onMouseEnter={this.onPointEnter} onMouseLeave={this.onPointLeave} onClick={this.onPointClick}>
          <Point active={isActive} data-cy={`logger-point-${isActive ? 'active' : 'not-active'}`} />
        </PointWrapper>
        <Timestamp data-cy="logger-timestamp">{decorate(event.timestamp)}</Timestamp>
        <Arrows
          data-cy={event.type === 'request' ? 'logger-arrows-green' : 'logger-arrows-red'}
          src={event.type === 'request' ? greenArrows : redArrows}
        />
        <Title data-cy="logger-title">
          {event.serviceName}/{event.methodName}
        </Title>
        <Content data-cy="logger-content">{content}</Content>
      </Container>
    );
  }
}
