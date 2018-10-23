import { excludeById, guid, includes } from '../utils';
import { SECTORS, SECTORS_REVERSE, SECTORS_NEIGHBORS, SECTORS_MIN_SIZE } from './constants';
import _ from 'lodash';

const findEmptyContainers = (layout) => {
  const ids = [];
  const check = (el) => {
    if (el.elements && el.elements.length) {
      el.elements.forEach(element => element.type === 'container' && check(element));
    }
    if (el.type === 'container') {
      if (el.elements.length === 0 || el.elements.filter(element => element.value).length !== el.elements.length) {
        ids.push(el.id);
      }
    }
  };
  check(layout);
  return ids;
};

export const filterEmptyContainers = (layout) => {
  const containerIds = findEmptyContainers(layout);
  layout.elements = layout.elements.filter((element) => {
    return element.type === 'container'
      ? !containerIds.find(id => element.id === id)
      : true;
  });

  if (layout.elements.filter(el => el.value).length) {
    return layout;
  }

  return { id: guid(), type: 'element' };
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
    console.log('CASE 2')
    elements = excludeById(layout.elements, element.id);
  } else {
    console.log('CASE 3')
    elements = layout.elements.map(curr => removeElement(curr, element));
  }

  return filterEmptyContainers({ ...layout, elements });
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
