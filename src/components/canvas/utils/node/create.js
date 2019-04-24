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
    ? [emptyNode(), { ...node, activeTabIndex: 0, tabs: [...node.tabs, nodeTab(builderId)] }]
    : [{ ...node, activeTabIndex: 0, tabs: [...node.tabs, nodeTab(builderId)] }, emptyNode()];
};

const create = (tree, metadata) => {
  const { source, destination } = metadata;
  const { builderId, nodeId, sectors } = destination;
  const orientation = dropzone.orientation[sectors.toString()];
  const node = getNode(tree, nodeId);

  switch (true) {
    case tree.id === nodeId:
      const { flex } = tree;
      const activeTabIndex = node.tabs.length;

      return sectors.toString() === dropzone.sectors.toString()
        ? { id: guid(), type: 'element', flex, activeTabIndex, tabs: [...node.tabs, nodeTab(builderId)] }
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
