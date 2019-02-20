import React from 'react';
import { Paragraph, Canvas } from '../lib';

const builders = {
  text1: () => <Paragraph fontSize="2.5rem">Text 1</Paragraph>,
  text2: () => <Paragraph fontSize="2.5rem">Text 2</Paragraph>,
  text3: () => <Paragraph fontSize="2.5rem">Text 3</Paragraph>
};

export default class CanvasExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        id: 'tklj94',
        type: 'element',
        tabs: []
      }
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(layout) {
    this.setState({ layout });
  }

  render() {
    return <React.Fragment>
      <ul id="list" style={{width: 120, height: 80, margin: 10}}>
        {Object.keys(builders).map(key => (<li draggable builderId={key} key={key}>{key}</li>))}
      </ul>
      <Canvas buildersListId="list"
              builders={builders}
              layout={this.state.layout}
              onUpdate={this.onUpdate}
              width={1000}
              height={500}/>
    </React.Fragment>
  }
}
