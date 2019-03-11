import { first, flatten, cloneDeep } from 'lodash';

export const guid = () =>
  Math.random()
    .toString(36)
    .substring(2, 5) +
  Math.random()
    .toString(36)
    .substring(2, 5);
export const emptyNode = () => ({ id: guid(), type: 'element', tabs: [] });
export const decamelize = (str, separator) => {
  separator = typeof separator === 'undefined' ? '_' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};

export const getNode = (tree, nodeId) => {
  if (tree.id === nodeId) {
    return tree;
  }
  if (tree.nodes) {
    return first(flatten(tree.nodes.map((node) => getNode(node, nodeId))));
  }
};

export const updateTabs = (tree, nodeId, tabs) => {
  const clonedTree = cloneDeep(tree);
  const update = (node) => {
    if (node.id === nodeId) {
      node.tabs = tabs;
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };
  update(clonedTree);
  return clonedTree;
};

export const updateTab = (tree, nodeId, tabId, updates) => {
  const clonedTree = cloneDeep(tree);
  const update = (node) => {
    if (node.id === nodeId) {
      node.tabs = node.tabs.map((tab) => (tab.id === tabId ? { ...tab, ...updates } : tab));
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };
  update(clonedTree);
  return clonedTree;
};
