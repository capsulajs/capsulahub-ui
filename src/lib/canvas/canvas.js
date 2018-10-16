import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';
import Grid from './grid';

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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      layout: this.props.layout,
    };
  }

  handleUpdate(layout) {
    this.setState({ layout });
  }

  componentDidMount() {
    for (const el of document.getElementById(this.props.draggableListId).children) {
      el.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', e.target.id))
    }
  }

  render() {
    const { layout } = this.state;

    return (
      <Container>
        <div onDrop={(e) => console.log('drop', e.dataTransfer.getData('text'))} style={{width: 100, height: 100, background: '#fff'}}></div>
        <Grid layout={layout} onUpdate={this.handleUpdate}/>
      </Container>
    );
  }
}

export { Canvas };
