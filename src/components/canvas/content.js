import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, filter, throttleTime, distinctUntilChanged } from 'rxjs/operators';
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

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);

    this.onDrag$ = fromEvent(container, 'dragover')
      .pipe(
        map((e) => e.preventDefault() || [e.clientX, e.clientY]),
        distinctUntilChanged((a, b) => a.toString() === b.toString()),
        throttleTime(50),
        map((point) => document.elementFromPoint(...point).id),
        distinctUntilChanged((a, b) => a.toString() === b.toString())
      )
      .subscribe((id) => this.setState({ isDragginOn: id === this.props.id }));
  }

  componentWillUnmount() {
    this.onDrag$.unsubscribe();
  }

  render() {
    const { tabIndex, isDragginOn } = this.state;
    const { id, tabs, builders, onDrop, onUpdate, isDragging } = this.props;

    if (tabs && tabs[tabIndex]) {
      const { builderId, metadata } = tabs[tabIndex];
      const builder = builders[builderId];

      if (builder) {
        return (
          <Container id={id}>
            <Tabs
              id={id}
              tabs={tabs}
              activeIndex={tabIndex}
              onRemove={this.onRemove}
              onSelect={this.onSelect}
              onUpdate={onUpdate}
            />
            {isDragging ? <Dropzone isFullView onDrop={onDrop} /> : builder(metadata)}
          </Container>
        );
      }

      return 'No builder..';
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
  isDragging: PropTypes.bool.isRequired,
};

export default Content;
