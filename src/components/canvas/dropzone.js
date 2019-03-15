import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { dropzone } from './settings';
import { isSizeLessThan } from './utils';

const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
`;

const Sector = styled.div`
  width: 50%;
  height: 50%;
  float: left;
`;

const Centre = styled.div`
  position: absolute;
  height: ${(props) => props.ratio * 100}%;
  width: ${(props) => props.ratio * 100}%;
  top: ${(props) => (1 - props.ratio) * 50}%;
  left: ${(props) => (1 - props.ratio) * 50}%;
  background: transparent;
`;

export default class Dropzone extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isFullView: PropTypes.bool,
    metadata: PropTypes.any,
  };

  getStyle(sector) {
    const { id, metadata } = this.props;
    if (id === metadata.nodeId && metadata && metadata.sectors && metadata.sectors.includes(sector)) {
      return { background: dropzone.highlight };
    }
    return {};
  }

  render() {
    const { id, isFullView, metadata } = this.props;
    const ref = React.createRef();
    const ratio = isFullView || isSizeLessThan(ref, dropzone.minSize) ? 1 : dropzone.ratio;

    return (
      <Container ref={ref}>
        <Centre id={`dropzone ${id} ${dropzone.sectors}`} ratio={ratio} />
        {dropzone.sectors.map((sector) => (
          <Sector id={`dropzone ${id} ${sector}`} key={sector} style={this.getStyle(sector)} />
        ))}
      </Container>
    );
  }
};
