import { excludeById, guid, union, includes, getMouseInsideRectangle, isPonitInsideRectangle, getRectangleSectors } from '../utils';
import { SECTORS, SECTORS_NEIGHBORS, SECTORS_REVERSE, SECTORS_CENTRE_RATIO } from './constants';

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
}

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

export const removeElement = (layout, element) => {
  if (layout.type === 'element') {
    return layout;
  }

  let elements = [];
  if (includes(layout.elements, element)) {
    elements = excludeById(layout.elements, element.id);
  } else {
    elements = layout.elements.map(curr => removeElement(curr, element));
  }

  elements = filterEmptyContainers(elements);

  return {
    ...layout,
    elements
  }
};
