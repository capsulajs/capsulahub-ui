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
  let newTree = cloneDeep(tree);
  const nodeS = getNode(tree, source.droppableId);
  const nodeD = getNode(tree, destination.droppableId);
  const tabs = move(nodeS.tabs, nodeD.tabs, source, destination);
  newTree = updateNode(newTree, destination.droppableId, { tabs, activeTabIndex: destination.index });
  newTree = removeTab(newTree, { nodeId: source.droppableId, tabId: nodeS.tabs[source.index].id });
  return newTree;
};
