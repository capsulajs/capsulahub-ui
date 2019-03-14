import { guid, decamelize, emptyNode, getNode } from '..';
import { dropzone } from '../../settings';

const nodeTab = (builderId) => ({
  builderId,
  id: guid(),
  name: decamelize(builderId, ' '),
  metadata: {},
});

const multiplyNode = (node, builderId, sectors) => {
  return dropzone.isNeedReverse[sectors.toString()]
    ? [emptyNode(), { ...node, tabs: [...node.tabs, nodeTab(builderId)] }]
    : [{ ...node, tabs: [...node.tabs, nodeTab(builderId)] }, emptyNode()];
};

const create = (tree, metadata) => {
  const { nodeId, builderId, sectors } = metadata;
  const orientation = dropzone.orientation[sectors.toString()];
  const node = getNode(tree, nodeId);

  switch (true) {
    case tree.id === nodeId:
      return sectors.toString() === dropzone.sectors.toString()
        ? { id: guid(), type: 'element', flex: tree.flex || 0.5, tabs: [...node.tabs, nodeTab(builderId)] }
        : { id: guid(), type: 'container', nodes: multiplyNode(node, builderId, sectors), orientation };
    case tree.type === 'element':
      return tree;
    default:
      return {
        id: guid(),
        type: 'container',
        nodes: tree.nodes.map((node) => create(node, metadata)),
        orientation: tree.orientation,
      };
  }
};

export default create;
