import { cloneDeep } from 'lodash';
import { guid, emptyNode, getNodeTabs, updateNodeTabs } from '..';

const isNodeValid = (node) => {
  if (node.tabs) {
    return node.tabs.length > 0;
  }
  switch (node.nodes.length) {
    case 1: return isNodeValid(node.nodes[0]);
    case 2: return isNodeValid(node.nodes[0]) || isNodeValid(node.nodes[1]);
    default: return false;
  }
};

const removeTab = (layout, nodeId, tabId) => {
  const newTabs = getNodeTabs(layout, nodeId).filter(tab => tab.id !== tabId);
  const newLayout = updateNodeTabs(layout, nodeId, newTabs);

  switch (newLayout.nodes.filter(isNodeValid).length) {
    case 0: return emptyNode();
    case 1: {
      const [node1, node2] = newLayout.nodes;

      if (node1.nodes && node1.nodes.filter(isNodeValid).length === 0) {
        return { ...newLayout, nodes: [emptyNode(), node2] };
      }

      if (node2.nodes) {
        switch (node2.nodes.filter(isNodeValid).length) {
          case 0: return { ...newLayout, nodes: [node1, emptyNode()] };
          case 1: {
            const [node12, node22] = node2.nodes;
            if (!isNodeValid(node12) && isNodeValid(node22)) {
              return { ...newLayout, nodes: [node1, node22] }
            }
          };
          default: return newLayout;
        }
      }
    };
    default: return newLayout;
  }
}

const remove = (layout, nodeId, tabId) => layout.id === nodeId
  ? emptyNode()
  : removeTab(cloneDeep(layout), nodeId, tabId);

export default remove;
