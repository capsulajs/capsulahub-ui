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
    const name = this.state.name.trim();
    
    if (name && name.length > MIN_TAB_NAME_LENGTH) {
      this.props.onUpdate({ id: this.props.id, name });
      this.props.onEditEnd();
    }
  }
  
  keyDown (event) {
    (event.which === ESCAPE_KEY || event.which === ENTER_KEY) && this.save();
  }
  
  render() {
    const { isEditing, isActive, name } = this.props;
    
    return isEditing
      ? <Input value={this.state.name} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown}/>
      : <Title style={getStyle(isActive)}
               onClick={this.props.onSelect}
               onDoubleClick={this.props.onEditStart}>{name}</Title>;
  }
}

Tab.propTypes = {
  name: PropTypes.string,
  onSelect: PropTypes.func,
  onEditStart: PropTypes.func,
  onEditEnd: PropTypes.func,
  onUpdate: PropTypes.func
};

export default Tab;
