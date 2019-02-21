import { guid, decamelize, emptyNode } from '..';
import { SECTORS, SECTORS_REVERSE } from '../../constants';

const nodeTabs = (builderId) => ([{
  builderId,
  id: guid(),
  name: decamelize(builderId, ' '),
  metadata: {}
}]);

const multiplyNode = (node, builderId, sectors) => {
  return SECTORS_REVERSE[sectors.toString()]
    ? [emptyNode(), { ...node, tabs: nodeTabs(builderId) }]
    : [{ ...node, tabs: nodeTabs(builderId) }, emptyNode()];
};

const create = ({ layout, node, orientation, builderId, sectors }) => {
  switch (true) {
    case layout.id === node.id:
      return sectors.toString() === SECTORS.toString()
        ? { id: guid(), type: 'element', tabs: nodeTabs(builderId) }
        : { id: guid(), type: 'container', nodes: multiplyNode(node, builderId, sectors), orientation };
    case layout.type === 'element': return layout;
    default: return {
      id: guid(),
      type: 'container',
      nodes: layout.nodes.map(l => create({ layout: l, node, orientation, builderId, sectors })),
      orientation: layout.orientation
    }
  }
};

export default create;
