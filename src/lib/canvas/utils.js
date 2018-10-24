import { excludeById, guid, includes } from '../utils';
import { SECTORS, SECTORS_REVERSE, SECTORS_NEIGHBORS, SECTORS_MIN_SIZE } from './constants';
import _ from 'lodash';

const findEmptyContainers = (elements) => {
  const ids = [];
  const check = (element) => {
    if (element.elements && element.elements.length > 0) {
      element.elements.forEach((element) => check(element));
    } else if (element.type === 'container') {
      ids.push(element.id);
    }
  };
  elements.forEach(check);
  return ids;
};

const filterEmptyContainers = (elements) => {
  const containerIds = findEmptyContainers(elements);
  return elements.filter((element) => {
    return element.type === 'container'
      ? !containerIds.find(id => element.id === id)
      : true;
  });
};

const getElements = (element, value, sectors) => {
  return (elements => reverse => reverse ? elements.reverse() : elements)
    ([{ ...element, value }, { type: 'element', id: guid() }])
    (SECTORS_REVERSE[sectors.toString()]);
};

export const buildLayout = (layout, element, orientation, value, sectors) => {
  switch (true) {
    case layout === element:
      if (sectors.toString() === SECTORS.toString()) {
        return {
          id: guid(),
          type: 'element',
          value
        }
      } else {
        return {
          id: guid(),
          type: 'container',
          orientation,
          elements: getElements(element, value, sectors)
        };
      }
    case layout.type === 'element':
      return layout;
    default:
      return {
        id: guid(),
        type: 'container',
        orientation: layout.orientation,
        elements: layout.elements.map(curr => buildLayout(curr, element, orientation, value, sectors))
      }
  }
};

const removeRecursivelyElement = (layout, element) => {
  if (layout.type === 'element') {
    return layout;
  }
  
  let elements = [];
  if (includes(layout.elements, element)) {
    elements = excludeById(layout.elements, element.id);
  } else {
    elements = layout.elements.map(curr => removeRecursivelyElement(curr, element));
  }
  
  elements = filterEmptyContainers(elements);
  
  return {
    ...layout,
    elements
  }
};

const isInvalidElements = (elements) => (
  !elements || elements.length === 0 || elements.length === 1 && elements[0].value === undefined
);

const transformElement = (el) => {
  if (el.type === 'container') {
    switch(el.elements.length) {
      case 2:
        return el;
      case 1:
        if (el.elements[0].type === 'element') {
          return el.elements[0];
        } else {
          return transformElement(el.elements[0]);
        }
      default:
        return { id: guid(), type: 'element' };
    }
  }
  return el;
};

export const removeElement = (layout, element) => {
  if (isInvalidElements(layout.elements)) {
    return { id: guid(), type: 'element' };
  }
  return transformElement(removeRecursivelyElement(layout, element));
};

export const isSmallSize = (container) => {
  const [w, h] = [container.offsetWidth, container.offsetHeight];
  return w < SECTORS_MIN_SIZE || h < SECTORS_MIN_SIZE;
};

export const getSectorCouple = (sectors, sector) => {
  return sectors.length === 2
    ? [sector, ..._.intersection(SECTORS_NEIGHBORS[sector], sectors)].sort()
    : [sector, SECTORS_NEIGHBORS[sector][sector % 2]].sort();
};
