import { findIndex } from 'lodash';
import { getNode, updateNode } from '..';

const reorder = (tabs, startIndex, endIndex) => {
  const result = Array.from(tabs);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default (tree, source, destination) => {
  const node = getNode(tree, destination.nodeId);
  const sourceIndex = findIndex(node.tabs, (tab) => tab.id === source.tabId);
  const tabIndex = findIndex(node.tabs, (tab) => tab.id === destination.tabId);
  const tabs = reorder(node.tabs, sourceIndex, tabIndex);

  console.log(sourceIndex, tabIndex);

  return updateNode(tree, sourceIndex, { tabs, tabIndex });
};
