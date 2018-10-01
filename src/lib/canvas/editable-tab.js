import React from 'react';
import styled from 'styled-components';

const Title = styled.div`white-space: nowrap`;
const getTitleStyle = (isActive) => ({
  borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
});

export default class EditableTab extends React.Component {
  constructor(props) {
    super(props);
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    // this.onKeyDown = this.onKeyDown.bind(this);
  }
  
  handleEdit (e) {
    return (e) => this.setState({
      isEditing: !this.state.isEditing
    });
  }
  
  handleChange (e) {
    this.setState({value: e.target.value});
  }
  
  handleSubmit (e) {
    var val = this.state.value.trim();
    if (val) {
      this.setState({
        value: val,
        isEditing: false,
      });
    }
  }
  
  handleKeyDown (event) {
    if (event.which === this.ESCAPE_KEY) {
      this.setState({
        isEditing: false
      });
    } else if (event.which === this.ENTER_KEY) {
      this.handleSubmit(e);
    }
  }
  
  render() {
    const { value, isEditing } = this.props;

    return (
      <div>
        {!isEditing&&<label onDoubleClick={this.handleEdit()}>{value}</label>}
        {isEditing &&<input
          value={value}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleSubmit.bind(this)}
          onKeyDown={this.onKeyDown}
        />}
      </div>
    );
  }
}
