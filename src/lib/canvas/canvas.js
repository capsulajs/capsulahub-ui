import 'typeface-montserrat';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './grid';
import { defaultFontFamily } from '../constants';
import { guid, isAnyNodeWithTabs, isAllNodesWithTabs } from './utils';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A9;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

class Canvas extends React.Component {
  handleDragStart(e) {
    e.dataTransfer.setData('creatorId', e.target.id);
  }

  componentDidMount() {
    const list = document.getElementById(this.props.buildersListId)
    if (list) {
      for (const el of list.children) {
        el.addEventListener('dragstart', this.handleDragStart);
      }
    }
  }

  componentWillUnmount() {
    const list = document.getElementById(this.props.buildersListId);
    if (list) {
      for (const el of list.children) {
        el.removeEventListener('dragstart', this.handleDragStart);
      }
    }
  }

  render() {
    const { width, height, builders, layout, onUpdate } = this.props;

    return <Container width={width} height={height}>
      <Grid layout={layout} builders={builders} onUpdate={onUpdate}/>
    </Container>;
  }
}

Canvas.propTypes = {
  buildersListId: PropTypes.string.isRequired,
  builders: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Canvas;
