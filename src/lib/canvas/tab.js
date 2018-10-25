import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';
import { ESCAPE_KEY, ENTER_KEY, MIN_TAB_NAME_LENGTH } from './constants';

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

const getStyle = (isActive) => ({ borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none' });

class Tab extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelect = this.props.onSelect.bind(this);
    this.onEditStart = this.props.onEditStart.bind(this);
    this.onEditEnd = this.props.onEditEnd.bind(this);
    this.onUpdate = this.props.onUpdate.bind(this);
    
    this.change = this.change.bind(this);
    this.save = this.save.bind(this);
    this.keyDown = this.keyDown.bind(this);
    
    this.state = {
      name: this.props.name
    };
  }
  
  change(e) {
    this.setState({ name: e.target.value });
  }
  
  save() {
    const name = this.state.value.trim();
    
    if (name && name.length > MIN_TAB_NAME_LENGTH) {
      this.onUpdate(name);
      this.onEditEnd();
    }
  }
  
  keyDown (event) {
    (event.which === ESCAPE_KEY || event.which === ENTER_KEY) && this.handleSave();
  }
  
  render() {
    const { isEditing, isActive } = this.props;
    const { name } = this.state;
    
    return isEditing
      ? <Input value={name} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown}/>
      : <Title style={getStyle(isActive)} onClick={this.onSelect} onDoubleClick={this.onEditStart}>{name}</Title>;
  }
}

Tab.propTypes = {
  name: PropTypes.string
};

export default Tab;
