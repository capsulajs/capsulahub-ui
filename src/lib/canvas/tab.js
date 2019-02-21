import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ESCAPE_KEY, ENTER_KEY, MIN_TAB_NAME_LENGTH } from './constants';

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
      value: this.props.name
    };
  }

  change(e) {
    this.setState({ value: e.target.value.trim() });
  }

  save() {
    const value = this.state.value;
    if (value && value.length > MIN_TAB_NAME_LENGTH) {
      this.props.onUpdate({ id: this.props.id, name: value });
      this.props.onEditEnd();
    }
  }

  keyDown (event) {
    (event.which === ESCAPE_KEY || event.which === ENTER_KEY) && this.save();
  }

  render() {
    const { isEditing, isActive, name } = this.props;

    return isEditing
      ? <Input value={this.state.value} onChange={this.change} onBlur={this.save} onKeyDown={this.keyDown}/>
      : <Title style={getStyle(isActive)}
               onClick={this.props.onSelect}
               onDoubleClick={this.props.onEditStart}>{name}</Title>;
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Tab;
