import { getNode, updateNode } from '..';

const reorder = (tabs, startIndex, endIndex) => {
  const result = Array.from(tabs);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default (tree, source, destination) => {
  const tabs = reorder(getNode(tree, destination.droppableId).tabs, source.index, destination.index);
  return updateNode(tree, destination.droppableId, { tabs, activeTabIndex: destination.index });
};
