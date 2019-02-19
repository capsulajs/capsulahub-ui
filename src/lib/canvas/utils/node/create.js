import { guid, decamelize, emptyNode } from '..';
import { SECTORS, SECTORS_REVERSE } from '../../constants';

const nodeTabs = (builderId) => ([{
  builderId,
  id: guid(),
  name: decamelize(builderId, ' '),
  metadata: {}
}]);

const nodeCouple = (node, builderId, sectors) => {
  return SECTORS_REVERSE[sectors.toString()]
    ? [emptyNode(), { ...node, tabs: nodeTabs(builderId) }]
    : [{ ...node, tabs: nodeTabs(builderId) }, emptyNode()];
};

const update = (layout, node, orientation, builderId, sectors) => {
  switch (true) {
    case layout.id === node.id:
      if (sectors.toString() === SECTORS.toString()) {
        return {
          id: guid(),
          type: 'element',
          tabs: nodeTabs(builderId)
        }
      } else {
        return {
          id: guid(),
          type: 'container',
          nodes: nodeCouple(node, builderId, sectors),
          orientation
        };
      }
    case layout.type === 'element': return layout;
    default: return {
      id: guid(),
      type: 'container',
      nodes: layout.nodes.map(curr => update(curr, node, orientation, builderId, sectors)),
      orientation: layout.orientation
    }
  }
};

export default update;
