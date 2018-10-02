import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Title = styled.div`
  white-space: nowrap;
  cursor: pointer;
`;

const Input = styled.input`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  background: #737373;
  color: #B1B1B1;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  ::placeholder {
    color: #B1B1B1;
  }
`;

const getTitleStyle = (isActive) => ({
  borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
});

export default class EditableTab extends React.Component {
  constructor(props) {
    super(props);
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.onSelect = this.props.onSelect.bind(this);
    this.onEditStart = this.props.onEditStart.bind(this);
    this.onEditEnd = this.props.onEditEnd.bind(this);
    this.onUpdate = this.props.onUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      value: this.props.value
    };
  }
  
  handleChange (e) {
    this.setState({ value: e.target.value });
  }
  
  handleSave () {
    const value = this.state.value.trim();
    if (value && value.length > 3) {
      this.onUpdate(value);
      this.onEditEnd();
    }
  }
  
  handleKeyDown (event) {
    if (event.which === this.ESCAPE_KEY || event.which === this.ENTER_KEY) {
      this.handleSave();
    }
  }
  
  render() {
    const { isEditing, isActive } = this.props;
    const { value } = this.state;

    return (
      <div>
        {!isEditing &&<Title style={getTitleStyle(isActive)}
                             onClick={this.onSelect}
                             onDoubleClick={this.onEditStart}>{value}</Title>}
        {isEditing &&<Input
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleSave}
          onKeyDown={this.handleKeyDown}
        />}
      </div>
    );
  }
}
