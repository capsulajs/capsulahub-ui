import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, tap, mapTo, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import Dropzone from './dropzone';
import Tabs from './tabs';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 23px);
`;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      isDragginOn: false,
    };
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSelect(tabIndex) {
    this.setState({ tabIndex });
  }

  onRemove(id) {
    this.setState({ tabIndex: 0 });
    this.props.onRemove(id);
  }

  render() {
    const { tabIndex, isDragginOn } = this.state;
    const { id, tabs, builders, onDrop, onUpdate } = this.props;

    if (tabs && tabs[tabIndex]) {
      const { builderId, metadata } = tabs[tabIndex];
      const builder = builders[builderId];

      if (builder) {
        if (isDragginOn) {
          return <Dropzone isFullView onDrop={(...params) => console.log('DROP', params) || onDrop(...params)} />;
        }

        return (
          <Container onDragEnter={() => this.setState({ isDragginOn: true })} onDragLeave={() => console.log('LEAVE')}>
            <Tabs
              id={id}
              tabs={tabs}
              activeIndex={tabIndex}
              onRemove={this.onRemove}
              onSelect={this.onSelect}
              onUpdate={onUpdate}
            />
            {builder(metadata)}
          </Container>
        );
      }

      return 'No builder...';
    }

    return 'No tabs..';
  }
}

Content.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  builders: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Content;
