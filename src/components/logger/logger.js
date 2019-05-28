import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { empty } from 'rxjs';
import image from '../../assets/settings.png';
import { defaultFontFamily } from '../constants';
import Content from './content';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #3f3f3f;
  color: #767676;
  position: relative;
  width: 100%;
  height: 100%;
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
  static defaultProps = {
    logs$: empty(),
  };

  static propTypes = {
    logs$: PropTypes.object,
  };

  state = {
    events: [],
  };

  onClear = () => this.setState({ events: [] });
  onEvent = (event) => this.setState((state) => ({ events: [...state.events, event] }));

  componentDidMount() {
    this.sub = this.props.logs$ && this.props.logs$.subscribe(this.onEvent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.logs$ !== this.props.logs$) {
      this.sub && this.sub.unsubscribe();
      this.sub = this.props.logs$.subscribe(this.onEvent);
    }
  }

  render() {
    const { events } = this.state;

    return (
      <Container>
        <Header>
          <Row>
            <Image src={image} />
            <Title>LOG</Title>
          </Row>
          <Clear onClick={this.onClear} data-cy="logger-clear">
            &#10005;
          </Clear>
        </Header>
        <Content events={events} />
      </Container>
    );
  }

  componentWillUnmount() {
    this.sub && this.sub.unsubscribe();
  }
}
