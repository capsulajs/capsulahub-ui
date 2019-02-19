import { flatten, cloneDeep } from 'lodash';

export const guid = () => Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
export const emptyNode = () => ({ id: guid(), type: 'element', tabs: [] });
export const decamelize = (str, separator) => {
  separator = typeof separator === 'undefined' ? '_' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};

export const isAnyNodeWithTabs = (node) => node.type === 'element'
  ? node.tabs.length > 0
  : node.nodes.length > 0;

export const isAllNodesWithTabs = (layout) => {
  let statement = true;
  const check = (node) => {
    if (node.type === 'element') {
      if (node.tabs.length === 0) {
        statement = false;
      }
    } else {
      node.nodes.forEach(check);
    }
  }
  check(layout);
  return statement;
};

export const getNodeTabs = (node, nodeId) => {
  if (node.id === nodeId) {
    return node.tabs;
  }
  if (node.nodes) {
    return flatten(node.nodes.map(node => getNodeTabs(node, nodeId)));
  }
  return [];
};

export const updateNodeTabs = (layout, nodeId, tabs) => {
  const clonedLayout = cloneDeep(layout);
  const update = (node) => {
    if (node.id === nodeId) {
      node.tabs = tabs.map(tab => ({ ...tab, id: guid() }));
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  }
  update(clonedLayout);
  return clonedLayout;
};

export const updateNodeTab = (layout, nodeId, tabId, updates) => {
  const clonedLayout = cloneDeep(layout);
  const update = (node) => {
    if (node.id === nodeId) {
      node.tabs = node.tabs.map(tab => (tab.id === tabId ? { ...tab, ...updates, id: guid() }  : tab));
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  }
  update(clonedLayout);
  return clonedLayout;
};
