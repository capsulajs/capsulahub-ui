import 'typeface-montserrat/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { merge } from 'rxjs';
import { isEqual } from 'lodash';
import image from '../../assets/settings.png';
import { defaultFontFamily } from '../constants';
import Content from './content';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #3f3f3f;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: #767676;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  font-size: 13px;
  text-transform: uppercase;
`;

const Clear = styled.div`
  cursor: pointer;
`;

export default class Logger extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    logs: PropTypes.array.isRequired,
  };

  state = {
    logs: [],
    events: [],
  };

  onClear = () => this.setState({ events: [] });
  onEvent = (event) => this.setState((state) => ({ events: [...state.events, event] }));

  componentWillUpdate(nextProps) {
    const { logs: prevLogs } = this.state;
    const { logs: nextLogs } = nextProps;

    if (!isEqual(prevLogs, nextLogs)) {
      this.sub.unsubscribe();
      this.sub = merge(...nextLogs).subscribe(this.onEvent);
      this.setState({ logs: nextLogs });
    }
  }

  componentDidMount() {
    this.sub = merge(...this.props.logs).subscribe(this.onEvent);
  }

  render() {
    const { events } = this.state;
    const { width, height } = this.props;

    return (
      <Container width={width} height={height}>
        <Header>
          <Row>
            <Image src={image} />
            <Title>LOG</Title>
          </Row>
          <Clear onClick={this.onClear}>&#10005;</Clear>
        </Header>
        <Content events={events} width={width - 20} height={height - 36} />
      </Container>
    );
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }
}
