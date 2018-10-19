import React from 'react';
import styled from 'styled-components';
import Grid from './grid';
import { defaultFontFamily } from '../constants';
import { guid } from '../utils';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #515151;
  color: #A9A9A9;
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 100px;
  padding 8px;
`;

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creatorListId: props.creatorListId,
      creators: props.creators,
      layout: {
        id: guid(),
        type: 'element'
      }
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(layout) {
    this.setState({ layout });
  }

  componentDidMount() {
    for (const el of document.getElementById(this.state.creatorListId).children) {
      el.addEventListener('dragstart', (e) => e.dataTransfer.setData('creatorId', e.target.id));
    }
  }

  render() {
    return (
      <Container>
        <Grid layout={this.state.layout} creators={this.state.creators} onUpdate={this.handleUpdate}/>
      </Container>
    );
  }
}

export { Canvas };
