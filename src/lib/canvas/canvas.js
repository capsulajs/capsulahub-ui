import 'typeface-montserrat';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './grid';
import { defaultFontFamily } from '../constants';
import {
  mountOnDragstartEventHandler,
  unmountOnDragstartEventHandler
} from './utils/canvas';

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
    e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id'));
  }

  componentDidMount() {
    mountOnDragstartEventHandler(this.props.buildersListId, this.handleDragStart);
  }

  componentWillUnmount() {
    unmountOnDragstartEventHandler(this.props.buildersListId, this.handleDragStart);
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
