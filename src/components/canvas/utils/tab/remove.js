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
    nodes
  }
};

const isNodeTabsEmpty = node => node.tabs && node.tabs.length === 0;
const isInvalidLayout = ({ nodes }) => (
  !nodes
    || nodes.length === 0
    || nodes.length === 1 && isNodeTabsEmpty(nodes[0])
    || nodes.length === 2 && isNodeTabsEmpty(nodes[0]) && isNodeTabsEmpty(nodes[1])
);

export default (layout, nodeId, tabId) => {
  const newLayout = remove(layout, nodeId, tabId);

  if (isInvalidLayout(newLayout)) {
    return { id: layout.id, type: 'element', tabs: [] };
  }

  return newLayout;
};
