import { findIndex } from 'lodash';
import { getNode } from '.';
import createNode from './node/create';
import updateNode from './node/update';
import removeTab from './tab/remove';
import moveTab from './tab/move';
import reorderTab from './tab/reorder';

export default (layout, event, metadata) => {
  const { source, destination, nodeId, tabId, ...updates } = metadata;
  const node = getNode(layout, nodeId);

  switch (event) {
    case 'drop':
      return createNode(layout, metadata);
    case 'resizestop': {
      const updateMultipleNodes = (layout, updates = []) => {
        const [update, ...rest] = updates;
        if (update) {
          return updateMultipleNodes(updateNode(layout, update), rest);
        }
        return layout;
      };
      return updateMultipleNodes(layout, metadata);
    }
    case 'reorder':
      return reorderTab(layout, source, destination);
    case 'move':
      return moveTab(layout, source, destination);
    case 'select':
      const activeTabIndex = findIndex(node.tabs, (tab) => tab.id === tabId);
      return updateNode(layout, { nodeId, activeTabIndex });
    case 'update': {
      const tabs = node.tabs.map((tab) => {
        if (tab.id === tabId) {
          return { ...tab, ...updates };
        }
        return tab;
      });
      return updateNode(layout, { nodeId, tabs });
    }
    case 'remove':
      return removeTab(layout, metadata);
    default:
      return layout;
  }
};
