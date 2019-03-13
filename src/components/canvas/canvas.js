import 'typeface-montserrat';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './grid';
import { defaultFontFamily } from '../constants';
import { getNode } from './utils';
import createNode from './utils/node/create';
import { DragEventBus } from './services';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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
      metadata: null,
    };
  }

  componentDidMount() {
    const { onUpdate } = this.props;

    this.events = new DragEventBus()
      .events$(ReactDOM.findDOMNode(this))
      .subscribe(([event, metadata]) => {
        const { layout } = this.props;

        switch (event) {
          case 'drop': return onUpdate(createNode(layout, metadata));
          default: this.setState({ metadata });
        }
      });
  }

  componentWillUnmount() {
    this.events.unsubscribe();
  }

  render() {
    const { metadata } = this.state;
    const { width, height, builders, layout, onUpdate } = this.props;

    return (
      <Container width={width} height={height}>
        <Grid layout={layout} builders={builders} onUpdate={onUpdate} metadata={metadata}/>
      </Container>
    );
  }
}

Canvas.propTypes = {
  builders: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Canvas;
