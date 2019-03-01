import React from 'react';
import PropTypes from 'prop-types';
import { ReflexElement } from 'react-reflex';
import { STYLES, SECTORS_MIN_SIZE } from '../constants';
import Container from './container';
import Content from '../content';
import Dropzone from '../dropzone';

class Element extends React.Component {
  render() {
    const { builders, isDragginOn, node, onDrop, onUpdate, onRemove } = this.props;
    const { id, type, tabs, orientation, nodes } = node;

    if (type === 'container') {
      return (
        <ReflexElement key={id} styles={STYLES.container} minSize={SECTORS_MIN_SIZE}>
          <Container
            builders={builders}
            isDragginOn={isDragginOn}
            nodes={nodes}
            orientation={orientation}
            onDrop={onDrop(node)}
            onUpdate={onUpdate(node)}
            onRemove={onRemove(node)}
          />
        </ReflexElement>
      );
    }

    return (
      <ReflexElement key={id} style={STYLES.element[orientation || 'horizontal']} minSize={SECTORS_MIN_SIZE}>
        {tabs.length ?
          <Content
            id={node.id}
            tabs={tabs}
            builders={builders}
            isDragginOn={isDragginOn}
            onDrop={onDrop(node)}
            onUpdate={onUpdate(node)}
            onRemove={onRemove(node)}/>
          : <Dropzone onDrop={onDrop(node)} />
        }
      </ReflexElement>
    );
  }
}

Element.propTypes = {
  builders: PropTypes.object.isRequired,
  isDragginOn: PropTypes.bool.isRequired,
  node: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Element;
