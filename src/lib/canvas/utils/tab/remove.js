import { cloneDeep } from 'lodash';
import { guid, emptyNode, getNodeTabs, updateNodeTabs } from '..';

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

const removeTab = (layout, nodeId, tabId) => {
  const newTabs = getNodeTabs(layout, nodeId).filter(tab => tab.id !== tabId);
  const newLayout = updateNodeTabs(layout, nodeId, newTabs);

  switch (newLayout.nodes.filter(isNodeValid).length) {
    case 0: return emptyNode();
    case 1: {
      const node = newLayout.nodes[1];
      if (node.type === 'container' && node.nodes.filter(isNodeValid).length === 0) {
        return { ...newLayout, nodes: [newLayout.nodes[0], emptyNode()] };
      }
      return newLayout;
    };
    default: return newLayout;
  }
}

const remove = (layout, nodeId, tabId) => layout.id === nodeId
  ? emptyNode()
  : removeTab(cloneDeep(layout), nodeId, tabId);

export default remove;
