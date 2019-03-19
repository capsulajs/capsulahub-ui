import { findIndex } from 'lodash';
import { getNode } from '.';
import createNode from './node/create';
import updateNode from './node/update';
import removeTab from './tab/remove';
import moveTab from './tab/move';
import reorderTab from './tab/reorder';

// moveTab(layout, source, destination)

export default (layout, event, metadata) => {
  const { source, nodeId, tabId, ...updates } = metadata;
  const node = getNode(layout, nodeId);

  switch (event) {
    case 'drop':
      if (source) {
        if (source.nodeId === nodeId) {
          return reorderTab(layout, source, { nodeId, tabId });
        }
      }
      return createNode(layout, metadata);
    case 'resizestop': {
      const update = (layout, updates = []) => {
        const [u, ...rest] = updates;
        if (u) {
          return update(updateNode(layout, u), rest);
        }
        return layout;
      };
      return update(layout, metadata);
    }
    case 'select':
      const tabIndex = findIndex(node.tabs, (tab) => tab.id === tabId);
      return updateNode(layout, { nodeId, tabIndex });
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
