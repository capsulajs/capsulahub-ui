import { findIndex } from 'lodash';
import { getNode } from '.';
import createNode from './node/create';
import updateNode from './node/update';
import removeTab from './tab/remove';
import moveTab from './tab/move';
import reorderTab from './tab/reorder';

export default (layout, event, metadata) => {
  switch (event) {
    case 'drop':
      return createNode(layout, metadata);
    case 'reorder': {
      const { source, destination } = metadata;
      return source.droppableId === destination.droppableId
        ? reorderTab(layout, source, destination)
        : moveTab(layout, source, destination);
    }
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
      const { nodeId, tabId } = metadata;
      const node = getNode(layout, nodeId);
      const tabIndex = findIndex(node.tabs, (tab) => tab.id === tabId);
      return updateNode(layout, { nodeId, tabIndex });
    case 'update': {
      const { nodeId, tabId, ...updates } = metadata;
      const node = getNode(layout, nodeId);
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
