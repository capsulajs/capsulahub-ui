import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

export default class Modal extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  node;
  isToggledFromInside = false;

  setDomNode = (ref) => (this.node = ReactDOM.findDOMNode(ref));

  handleClickOutside = (e) => {
    const { onToggle } = this.props;

    if (!this.state.isOpen) {
      return;
    }

    e.stopPropagation();

    this.setState({ isOpen: false });

    if (onToggle) {
      this.isToggledFromInside = true;
      onToggle({ isOpen: false });
    }
  };

  handleClick = (e) => {
    if (this.node && !this.node.contains(event.target)) {
      this.handleClickOutside(e);
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, true);
  }

  componentDidUpdate(prevProps) {
    const { onToggle, isOpen } = this.props;

    if (prevProps.isOpen !== isOpen) {
      if (this.isToggledFromInside) {
        this.isToggledFromInside = false;
      } else {
        const newState = { isOpen: !prevProps.isOpen };
        this.setState(newState);
        onToggle && onToggle(newState);
      }
    }
  }

  render() {
    const { children, title } = this.props;

    if (!this.state.isOpen) {
      return null;
    }

    return (
      <Container ref={this.setDomNode}>
        <Header>
          <div>{title}</div>
          <Close onClick={this.handleClickOutside}>&#10005;</Close>
        </Header>
        {children}
      </Container>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, true);
  }
}
