import { guid } from '../../../utils';
import { SECTORS, SECTORS_REVERSE } from '../../constants';

const tabs = (creator) => ([{ id: guid(), name: creator.name, value: creator.element() }]);
const couple = (element, creator, sectors) => {
  const el = { ...element, tabs: tabs(creator) };
  const emptyEl = { id: guid(), type: 'element', tabs: [] };
  return SECTORS_REVERSE[sectors.toString()] ? [emptyEl, el] : [el, emptyEl];
};

const update = (layout, element, orientation, creator, sectors) => {
  switch (true) {
    case layout.id === element.id:
      if (sectors.toString() === SECTORS.toString()) {
        return {
          id: guid(),
          type: 'element',
          tabs: tabs(creator)
        }
      } else {
        return {
          id: guid(),
          type: 'container',
          elements: couple(element, creator, sectors),
          orientation
        };
      }
    case layout.type === 'element':
      return layout;
    default:
      return {
        id: guid(),
        type: 'container',
        elements: layout.elements.map(curr => update(curr, element, orientation, creator, sectors)),
        orientation: layout.orientation
      }
  }
};

export default update;
