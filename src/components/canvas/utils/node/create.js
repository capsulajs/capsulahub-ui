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
    ? [emptyNode(), { ...node, tabIndex: 0, tabs: [...node.tabs, nodeTab(builderId)] }]
    : [{ ...node, tabIndex: 0, tabs: [...node.tabs, nodeTab(builderId)] }, emptyNode()];
};

const create = (tree, metadata) => {
  const { nodeId, builderId, sectors } = metadata;
  const orientation = dropzone.orientation[sectors.toString()];
  const node = getNode(tree, nodeId);

  switch (true) {
    case tree.id === nodeId:
      const { flex, tabIndex: index } = tree;
      const tabIndex = Math.min(index + 1, node.tabs.length);

      return sectors.toString() === dropzone.sectors.toString()
        ? { id: guid(), type: 'element', flex, tabIndex, tabs: [...node.tabs, nodeTab(builderId)] }
        : { id: guid(), type: 'container', flex, nodes: multiplyNode(node, builderId, sectors), orientation };
    case tree.type === 'element':
      return tree;
    default:
      return {
        ...tree,
        id: guid(),
        type: 'container',
        nodes: tree.nodes.map((node) => create(node, metadata)),
      };
  }
};

export default create;
