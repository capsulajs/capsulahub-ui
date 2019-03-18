import { cloneDeep } from 'lodash';
import { guid, emptyNode, getNode, updateNode } from '..';

const isNodeValid = (node) => {
  if (node.tabs) {
    return node.tabs.length > 0;
  }
  switch (node.nodes.length) {
    case 1:
      return isNodeValid(node.nodes[0]);
    case 2:
      return isNodeValid(node.nodes[0]) || isNodeValid(node.nodes[1]);
    default:
      return false;
  }
};

const filterTabs = (node) => {
  if (node.tabs) {
    return node;
  }

  switch (node.nodes.filter(isNodeValid).length) {
    case 0:
      return emptyNode();
    case 1: {
      const [node1, node2] = node.nodes;

      if (node1.nodes) {
        switch (node1.nodes.filter(isNodeValid).length) {
          case 0:
            return { ...node, nodes: [emptyNode(), node2] };
          case 1: {
            const [node11, node12] = node1.nodes;
            if (isNodeValid(node11) && !isNodeValid(node12)) {
              return { ...node, nodes: [node11, node2] };
            }
          }
          default:
            return node;
        }
      }

      if (node2.nodes) {
        switch (node2.nodes.filter(isNodeValid).length) {
          case 0:
            return { ...node, nodes: [node1, emptyNode()] };
          case 1: {
            const [node21, node22] = node2.nodes;
            if (!isNodeValid(node21) && isNodeValid(node22)) {
              return { ...node, nodes: [node1, node22] };
            }
          }
          default:
            return node;
        }
      }
    }
    case 2:
      return { ...node, nodes: node.nodes.map(filterTabs) };
    default:
      return node;
  }
};

const removeTab = (tree, nodeId, tabId) => {
  const node = getNode(tree, nodeId);
  const tabs = node.tabs.filter((tab) => tab.id !== tabId);
  const tabIndex = node.tabIndex > tabs.length - 1 ? tabs.length - 1 : node.tabIndex;
  const newTree = updateNode(tree, nodeId, { tabIndex, tabs });
  return filterTabs(newTree);
};

const remove = (tree, nodeId, tabId) => {
  if (tree.id === nodeId) {
    if (tree.tabs) {
      const { tabs, tabIndex: index } = tree;
      const tabIndex = index > tabs.length - 1 ? tabs.length - 1 : index;
      tree.tabs = tabs.filter((tab) => tab.id !== tabId);
      tree.tabIndex = tabIndex;
      return tree;
    }
    return emptyNode();
  }
  return removeTab(tree, nodeId, tabId);
};

export default remove;
