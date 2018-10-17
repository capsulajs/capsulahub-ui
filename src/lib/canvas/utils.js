import { excludeById, guid, includes } from '../utils';

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

const ORIENTATION = {
  '1,2': 'horizontal',
  '3,4': 'horizontal',
  '1,4': 'vertical',
  '2,3': 'vertical'
};

// const ELEMENTS = {
//   '1,2': [{ ...element }, { type: 'element', id: guid() }],
//   '3,4': [{ type: 'element', id: guid() }, { ...element }],
//   '1,4': [{ ...element }, { type: 'element', id: guid() }],
//   '2,3': [{ type: 'element', id: guid() }, { ...element }]
// }

export const buildLayout = (layout, element, orientation) => {
  switch (true) {
    case layout === element:
      return {
        id: guid(),
        type: 'container',
        orientation,
        elements: [{ ...element }, { type: 'element', id: guid() }]
      };
    case layout.type === 'element':
      return layout;
    default:
      return {
        id: guid(),
        type: 'container',
        orientation: layout.orientation,
        elements: layout.elements.map(curr => buildLayout(curr, element, orientation))
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

export const union = (arr1, arr2) => arr1.filter(value => -1 !== arr2.indexOf(value));
