import { excludeById, guid, union, includes } from '../utils';

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
  // DOTO REFACTOR THIS VERY CAREFULLY!! !! !!
  return (elements => reverse => reverse ? elements.reverse() : elements)
    ([{ ...element, value }, { type: 'element', id: guid() }])
    (({ '3,4': true, '2,4': true })[sectors.toString()]);
}

export const getSectorCouple = (sectors, sector) => {
  // DOTO REFACTOR THIS VERY CAREFULLY!! !! !!
  const COMBINATIONS = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3]
  };

  return !!sectors.find(Number)
    ? [sector, ...union(COMBINATIONS[sector], sectors)].sort()
    : [sector, COMBINATIONS[sector][sector % 2]].sort();
}

export const buildLayout = (layout, element, orientation, value, sectors) => {
  switch (true) {
    case layout === element:
      if (sectors.toString() === '1,2,3,4') {
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
