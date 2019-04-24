import { first, flatten, cloneDeep } from 'lodash';

export const isSizeLessThan = (container, size) => {
  if (container) {
    const [w, h] = [container.offsetWidth, container.offsetHeight];
    return w < size || h < size;
  }
  return false;
};

export const guid = () =>
  Math.random()
    .toString(36)
    .substring(2, 5) +
  Math.random()
    .toString(36)
    .substring(2, 5);
export const emptyNode = () => ({ id: guid(), type: 'element', flex: 0.5, activeTabIndex: 0, tabs: [] });
export const decamelize = (str, separator) => {
  separator = typeof separator === 'undefined' ? '_' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};

export const getNode = (tree, nodeId) => {
  if (tree.id === nodeId) {
    return cloneDeep(tree);
  }
  if (tree.nodes) {
    return cloneDeep(first(tree.nodes.map((node) => getNode(node, nodeId)).filter(Boolean)));
  }
};

export const updateNode = (layout, nodeId, updates) => {
  const clonedLayout = cloneDeep(layout);
  const update = (node) => {
    if (node.id === nodeId) {
      Object.keys(updates).forEach((key) => (node[key] = updates[key]));
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };
  update(clonedLayout);
  return clonedLayout;
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
