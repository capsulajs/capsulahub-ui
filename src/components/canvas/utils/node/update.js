import { cloneDeep } from 'lodash';

export default (tree, metadata) => {
  const clonedTree = cloneDeep(tree);
  const { nodeId, ...updates } = metadata;
  const update = (node) => {
    if (node.id === nodeId) {
      Object.keys(updates).forEach((key) => (node[key] = updates[key]));
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };
  update(clonedTree);
  return clonedTree;
};
