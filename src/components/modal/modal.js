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
  static propTypes = {
    onToggle: PropTypes.func,
    isOpen: PropTypes.bool,
    toggleSourceId: PropTypes.string,
  };

  static defaultProps = {
    isOpen: false,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  status = { isOpen: this.props.isOpen };

  handleClickOutside = (e) => {
    const { onToggle, toggleSourceId } = this.props;

    if (this.state.isOpen) {
      this.setState({ isOpen: false });

      if (e.target.id !== toggleSourceId) {
        onToggle && onToggle({ isOpen: false });
      }
    }
  };

  componentWillUpdate(nextProps) {
    const { onToggle, isOpen } = this.props;

    if (nextProps.isOpen !== isOpen) {
      const newState = { isOpen: nextProps.isOpen };
      this.setState(newState);
      onToggle && onToggle(newState);
    }
  }

  render() {
    const { children, title } = this.props;

    if (!this.state.isOpen) {
      return null;
    }

    return (
      <Container>
        <Header>
          <div>{title}</div>
          <Close onClick={this.handleClickOutside}>&#10005;</Close>
        </Header>
        {children}
      </Container>
    );
  }
}

export default enhanceWithClickOutside(Modal);
