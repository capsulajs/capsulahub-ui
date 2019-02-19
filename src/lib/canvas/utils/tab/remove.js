import { cloneDeep } from 'lodash';
import { guid } from '..';

const extendNode = (node) => {
  if (node.type === 'container') {
    switch(node.nodes.length) {
      case 2:
        return node;
      case 1:
        return node.nodes[0].type === 'element'
          ? node.nodes[0]
          : extendNode(node.nodes[0]);
      default:
        return { id: guid(), type: 'element', tabs: [] };
    }
  }
  return node;
};

const isNodeValid = ({ type, nodes, tabs }) => {
  if (type === 'element') {
    return tabs.length > 0;
  }

  switch (nodes.length) {
    case 1: return isNodeValid(nodes[0]);
    case 2: return isNodeValid(nodes[0]) || isNodeValid(nodes[1]);
    default: return false;
  }
};

const remove = (layout, nodeId, tabId) => {
  if (layout.type === 'element') {
    return layout;
  }

  let nodes = cloneDeep(layout.nodes);
  if (nodes.find(node => node.id === nodeId)) {
    nodes = nodes.map((node) => {
      if (node.type === 'element') {
        node.tabs = node.tabs.filter(tab => tab.id !== tabId);
      }
      return node;
    }).map(extendNode);
  } else {
    nodes = nodes.map(curr => remove(curr, nodeId, tabId));
  }

  return {
    ...layout,
    nodes: nodes.filter(isNodeValid)
  }
};

export default remove;
