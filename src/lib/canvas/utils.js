import { excludeById, guid, includes } from '../utils';

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
        type: 'container',
        orientation: layout.orientation,
        elements: layout.elements.map(curr => buildLayout(curr, element, orientation))
      }
  }
};

export const removeElement = (layout, element) => {
  if (layout.type === 'element') {
    return layout;
  } else {
    if (includes(layout.elements, element)) {
      return {
        ...layout,
        elements: excludeById(layout.elements, element.id)
      };
    } else {
      return {
        ...layout,
        elements: layout.elements.map(curr => removeElement(curr, element))
      }
    }
  }
};
