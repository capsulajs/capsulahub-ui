import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './tab';
import bus from './services';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #515151;
  color: #a9a9a9;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Wrapper = styled.div`
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

const getListStyle = () => ({
  background: '#515151',
  display: 'flex',
});

export default class Tabs extends React.Component {
  static propTypes = {
    nodeId: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    tabIndex: PropTypes.number.isRequired,
  };

  state = {
    hoverIndex: -1,
    editIndex: -1,
  };

  hover = (hoverIndex) => this.setState({ hoverIndex });
  edit = (editIndex) => this.setState({ editIndex });
  remove = (tabId) => bus.emit('remove', { tabId, nodeId: this.props.nodeId });

  renderDraggable(tab, index) {
    const { nodeId, tabs, tabIndex } = this.props;
    const { hoverIndex, editIndex } = this.state;

    return (
      <Wrapper
        key={index}
        isActive={tabIndex === index}
        onMouseEnter={() => this.hover(index)}
        onMouseLeave={() => this.hover(-1)}
      >
        <Tab
          nodeId={nodeId}
          tab={tab}
          isEditing={editIndex === index}
          isActive={tabIndex === index}
          onEditStart={() => this.edit(index)}
          onEditEnd={() => this.edit(-1)}
        />
        {editIndex !== index && (
          <Close isHover={hoverIndex === index} onClick={(e) => e.preventDefault() || this.remove(tab.id)}>
            ✕
          </Close>
        )}
      </Wrapper>
    );
  }

  render() {
    return <Container>{this.props.tabs.map((tab, index) => this.renderDraggable(tab, index))}</Container>;
  }
}
