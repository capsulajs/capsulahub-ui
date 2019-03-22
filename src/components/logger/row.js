import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styled from 'styled-components';
import { pick } from 'lodash';
import theme from './theme';
import { decorate } from '../utils';

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

const Content = styled.div`
  padding-left: 12px;
`;

export default class Row extends React.Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
  };

  render() {
    const { event } = this.props;

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
        <PointWrapper>
          <Point active={pick([true, false])} />
        </PointWrapper>
        <TimestampWrapper>{decorate(event.timestamp)}</TimestampWrapper>
        <Content>{content}</Content>
      </Container>
    );
  }
}
