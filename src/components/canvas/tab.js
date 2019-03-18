import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bus from './services';
import { keyboard } from './settings';

const Title = styled.div`
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? 'solid 1px #FEFEFE' : 'none')};
`;

const Input = styled.input`
  font-style: regular;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  background: #737373;
  color: #b1b1b1;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #b1b1b1;
  }
`;

export default class Tab extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    nodeId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onEditStart: PropTypes.func.isRequired,
    onEditEnd: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.name,
  };

  change = (e) => {
    this.setState({ value: e.target.value.trim() });
  };

  select = () => {
    const { nodeId, id: tabId } = this.props;
    bus.emit('select', { nodeId, tabId });
  };

  save = () => {
    const value = this.state.value;
    if (value && value.length > 2) {
      const { nodeId, id: tabId } = this.props;
      bus.emit('update', { nodeId, tabId, name: value });
      this.props.onEditEnd();
    }
  };

  keyDown = (event) => {
    if (event.which === keyboard.escapeKey || event.which === keyboard.enterKey) {
      this.save();
    }
  };

  render() {
    const { isEditing, isActive, name } = this.props;

    if (isEditing) {
      return <Input value={this.state.value} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown} />;
    }

    return (
      <Title isActive onClick={this.select} onDoubleClick={this.props.onEditStart}>
        {name}
      </Title>
    );
  }
}
