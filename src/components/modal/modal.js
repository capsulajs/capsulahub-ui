import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import {
  defaultFontStyle,
  defaultFontWeight,
  defaultFontSize,
  defaultFontFamily,
  defaultColor,
  defaultBackgroundColor,
} from '../constants';

const Container = styled.div`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  top: 15%;
  left: calc(50% - 274px);
  padding: 19px;
  width: 548px;
  height: 361px;
  z-index: 9999;
`;
const Close = styled.div`
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
`;

class Modal extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      bgColor: defaultBackgroundColor,
      color: defaultColor,
    },
    isOpened: false,
  };

  static propTypes = {
    theme: PropTypes.object,
  };

  state = {
    isOpened: this.props.isOpened,
  };

  toggle = () => this.setState({ isOpened: !this.state.isOpened });
  handleClickOutside = (e) => {
    e.target.id === this.props.id ? this.toggle() : this.setState({ isOpened: false });
  };

  render() {
    const { theme, children, title } = this.props;

    if (!this.state.isOpened) {
      return null;
    }

    return (
      <Container theme={theme}>
        <Header>
          <div>{title}</div>
          <Close onClick={() => this.toggle()}>&#10005;</Close>
        </Header>
        {children}
      </Container>
    );
  }
}

export default enhanceWithClickOutside(Modal);
