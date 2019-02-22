import { getNodeTabs, updateNodeTabs } from '..';

const reorder = (tabs, startIndex, endIndex) => {
  const result = Array.from(tabs);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default (layout, source, destination) => {
  const tabs = reorder(getNodeTabs(layout, destination.droppableId), source.index, destination.index);
  return updateNodeTabs(layout, destination.droppableId, tabs);
};
