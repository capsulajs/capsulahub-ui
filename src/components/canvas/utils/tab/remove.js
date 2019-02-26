import { cloneDeep } from 'lodash';
import { guid, emptyNode, getNodeTabs, updateNodeTabs } from '..';

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

const removeTab = ({ layout, nodeId, tabId }) => {
  const newTabs = getNodeTabs(layout, nodeId).filter((tab) => tab.id !== tabId);
  const newLayout = updateNodeTabs(layout, nodeId, newTabs);
  return filterTabs(newLayout);
};

const remove = ({ layout, nodeId, tabId }) =>
  layout.id === nodeId ? emptyNode() : removeTab({ layout, nodeId, tabId });

export default remove;