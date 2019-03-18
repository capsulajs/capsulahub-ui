import { cloneDeep } from 'lodash';
import removeTab from './remove';
import reorderTab from './reorder';
import { getNode, updateNode } from '..';

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  return destClone;
};

export default (tree, source, destination) => {
  const sourceTabs = getNode(tree, source.droppableId).tabs;
  const destinationTabs = getNode(tree, destination.droppableId).tabs;
  const tabs = move(sourceTabs, destinationTabs, source, destination);
  let newTree = cloneDeep(tree);
  newTree = removeTab(newTree, source.droppableId, sourceTabs[source.index].id);
  newTree = updateNode(newTree, destination.droppableId, { tabs });
  return newTree;
};
