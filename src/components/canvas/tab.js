import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { keyboard } from './settings';

const Title = styled.div`
  white-space: nowrap;
  cursor: pointer;
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

const getStyle = (isActive) => ({ borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none' });

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
    this.save = this.save.bind(this);
    this.keyDown = this.keyDown.bind(this);

    this.state = {
      value: this.props.name,
    };
  }

  change(e) {
    this.setState({ value: e.target.value.trim() });
  }

  save() {
    const value = this.state.value;
    if (value && value.length > 2) {
      this.props.onUpdate({ id: this.props.id, name: value });
      this.props.onEditEnd();
    }
  }

  keyDown(event) {
    if (event.which === keyboard.escapeKey || event.which === keyboard.enterKey) {
      this.save();
    }
  }

  render() {
    const { isEditing, isActive, name } = this.props;

    if (isEditing) {
      return <Input value={this.state.value} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown} />;
    }

    return (
      <Title style={getStyle(isActive)} onClick={this.props.onSelect} onDoubleClick={this.props.onEditStart}>
        {name}
      </Title>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Tab;
