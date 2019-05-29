import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { empty } from 'rxjs';
import image from '../../assets/settings.png';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFontSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';
import Content from './content';

const Container = styled.div`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
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
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      bgColor: defaultBackgroundColor,
      color: defaultColor,
    },
    logs$: empty(),
  };

  static propTypes = {
    theme: PropTypes.object,
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
    const { theme } = this.props;
    const { events } = this.state;

    return (
      <Container theme={theme}>
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
