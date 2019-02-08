import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './grid';
import { defaultFontFamily } from 'src/constants';
import { guid } from 'src/utils';

const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A9;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: {
        id: guid(),
        type: 'element',
        tabs: []
      }
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(layout) {
    this.setState({ layout });
  }
  
  handleDragStart(e) {
    e.dataTransfer.setData('creatorId', e.target.id);
  }

  componentDidMount() {
    for (const el of document.getElementById(this.props.creatorListId).children) {
      el.addEventListener('dragstart', this.handleDragStart);
    }
  }
  
  componentWillUnmount() {
    for (const el of document.getElementById(this.props.creatorListId).children) {
      el.removeEventListener('dragstart', this.handleDragStart);
    }
  }

  render() {
    return (
      <Container width={this.props.width} height={this.props.height}>
        <Grid layout={this.state.layout} creators={this.props.creators} onUpdate={this.handleUpdate}/>
      </Container>
    );
  }
}

Canvas.propTypes = {
  creatorListId: PropTypes.string.isRequired,
  creators: PropTypes.object.isRequired
};

export default Canvas;
