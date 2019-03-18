import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bus from './services';
import { keyboard } from './settings';

const Title = styled.div`
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? 'solid 1px #FEFEFE' : 'none')};
  llfvfvf: lol;
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
    nodeId: PropTypes.string.isRequired,
    tab: PropTypes.object.isRequired,
    onEditStart: PropTypes.func.isRequired,
    onEditEnd: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  };

  state = {
    value: this.props.tab.name,
  };

  change = (e) => this.setState({ value: e.target.value.trim() });
  select = () => bus.emit('select', { nodeId: this.props.nodeId, tabId: this.props.tab.id });
  keyDown = (event) => (event.which === keyboard.escapeKey || event.which === keyboard.enterKey) && this.save();
  save = () => {
    const value = this.state.value;
    if (value && value.length > 2) {
      const { nodeId, tab } = this.props;
      bus.emit('update', { nodeId, tabId: tab.id, name: value });
      this.props.onEditEnd();
    }
  };

  render() {
    const { isEditing, isActive, nodeId, tab } = this.props;

    if (isEditing) {
      return <Input value={this.state.value} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown} />;
    }

    return (
      <Title
        draggable
        data-builder-id={tab.builderId}
        data-node-id={nodeId}
        data-tab-id={tab.id}
        isActive={isActive}
        onClick={this.select}
        onDoubleClick={this.props.onEditStart}
      >
        {tab.name}
      </Title>
    );
  }
}
