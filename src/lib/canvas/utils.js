import { excludeById, guid, includes } from '../utils';

// if (element === this.state.layout.elements[0]) {
//   if (this.state.layout.elements.length > 1) {
//     this.setState(state => ({
//       layout: {
//         ...state.layout,
//         elements: excludeById(state.layout.elements, element.id)
//       }
//     }));
//   } else {
//     this.onDestroy();
//   }
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
