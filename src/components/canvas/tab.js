import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { keyboard } from './settings';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  user-select: none;
  text-transform: uppercase;
  padding: 2px;
  margin: 0 8px 0 0;
  background: #515151;
  color: ${(props) => (props.isActive ? '#FEFEFE' : '#A9A9A9')};
  display: flex;
  flex-direction: row;
  padding-bottom: 2px;
`;

const Close = styled.span`
  cursor: pointer;
  margin: auto;
  padding-left: 5px;
  color: ${(props) => (props.isHover ? '' : '#515151')};
`;

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
    tab: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.tab.name,
    isHover: false,
    isEdit: false,
  };

  onSelect = () => this.props.onSelect(this.props.tab.id);
  onChange = (e) => this.setState({ value: e.target.value.trim() });
  onKeyDown = (e) => (e.which === keyboard.escapeKey || e.which === keyboard.enterKey) && this.onSave();
  onRemove = (e) => e.preventDefault() || this.props.onRemove(this.props.tab.id);
  onSave = () => {
    const { value } = this.state;
    if (value && value.length > 2) {
      this.props.onUpdate({ tabId: this.props.tab.id, name: value });
      this.setState({ isEdit: false });
    }
  };
  onMouseEnter = () => this.setState({ isHover: true });
  onMouseLeave = () => this.setState({ isHover: false });
  onDoubleClick = () => this.setState({ isEdit: true });

  renderContent() {
    const { isHover, isEdit, value } = this.state;
    const { tab, isActive } = this.props;

    if (isEdit) {
      return (
        <Input
          data-cy="canvas-tab-input"
          value={value}
          onChange={this.onChange}
          onBlur={this.onSave}
          onKeyDown={this.onKeyDown}
        />
      );
    }

    return (
      <Title
        data-cy={isActive ? 'canvas-tab-title-active' : 'canvas-tab-title'}
        isActive={isActive}
        onClick={this.onSelect}
        onDoubleClick={this.onDoubleClick}
      >
        {tab.name}
      </Title>
    );
  }

  render() {
    const { isHover, isEdit } = this.state;
    const { isActive, tab } = this.props;

    return (
      <Container
        data-cy={`canvas-tab-${tab.id}`}
        isActive={isActive}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.renderContent()}
        {!isEdit && (
          <Close data-cy="canvas-tab-remove" isHover={isHover} onClick={this.onRemove}>
            &#10005;
          </Close>
        )}
      </Container>
    );
  }
}
