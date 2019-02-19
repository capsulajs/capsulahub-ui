import { cloneDeep } from 'lodash';
import removeTab from './remove';
import reorderTab from './reorder';
import { getNodeTabs, updateNodeTabs } from '..';

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  return destClone;
};

export default (layout, source, destination) => {
  const sourceTabs = getNodeTabs(layout, source.droppableId);
  const destinationTabs = getNodeTabs(layout, destination.droppableId);
  const tabs = move(sourceTabs, destinationTabs, source, destination);
  let newLayout = cloneDeep(layout);
  newLayout = updateNodeTabs(newLayout, destination.droppableId, tabs);
  newLayout = removeTab(cloneDeep(newLayout), source.droppableId, sourceTabs[source.index].id);
  return reorderTab(cloneDeep(newLayout), source, destination);
};
