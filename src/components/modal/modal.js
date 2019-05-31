import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import { defaultFontFamily } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #525252;
  color: #a9a9a9;
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
    isOpened: false,
  };

  state = {
    isOpened: this.props.isOpened,
  };

  toggle = () => this.setState({ isOpened: !this.state.isOpened });
  handleClickOutside = (e) => {
    e.target.id === this.props.id ? this.toggle() : this.setState({ isOpened: false });
  };

  render() {
    const { children, title } = this.props;

    if (!this.state.isOpened) {
      return null;
    }

    return (
      <Container>
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
