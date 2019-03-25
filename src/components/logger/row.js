import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styled from 'styled-components';
import { pick } from 'lodash';
import theme from './theme';
import { decorate } from '../utils';
import arrows from '../../assets/arrows.png';

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

const TimestampWrapper = styled.div`
  width: 50px;
`;

const Timestamp = styled.div`
  color: #dedede;
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
    isActive: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { event, isActive, onMouseEnter, onMouseLeave, onClick } = this.props;

    let content = (
      <ReactJson
        src={event.response}
        name={false}
        iconStyle={'circle'}
        theme={theme}
        indentWidth={2}
        collapsed={true}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={true}
      />
    );

    return (
      <Container>
        <PointWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
          <Point active={isActive} />
        </PointWrapper>
        <TimestampWrapper>{decorate(event.timestamp)}</TimestampWrapper>
        <Arrows src={arrows} />
        <Title>{event.methodName}</Title>
        <Content>{content}</Content>
      </Container>
    );
  }
}
