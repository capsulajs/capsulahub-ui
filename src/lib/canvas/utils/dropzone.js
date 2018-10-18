import { SECTORS, SECTORS_NEIGHBORS, SECTORS_REVERSE, SECTORS_CENTRE_RATIO } from '../constants';

const getNearestOffset = (element, offset) => {
  if (element) {
    return element[offset] > 0
      ? element[offset]
      : getNearestOffset(element.parentNode, offset);
  }

  return 0;
}

const union = (arr1, arr2) => arr1.filter(value => -1 !== arr2.indexOf(value));
const getMouseInsideRectangle = (element) => {
  return (e) => {
    let x, y;

    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= getNearestOffset(element, 'offsetLeft');
    y -= getNearestOffset(element, 'offsetTop');

    return { x, y };
  };
};

const getRectangleSectors = (w, h) => {
  return [
    [0,     0,     w / 2, h / 2],
    [w / 2, 0,     w / 2, h / 2],
    [0,     h / 2, w / 2, h / 2],
    [w / 2, h / 2, w / 2, h / 2]
  ];
}

const isPonitInsideRectangle = (x, y, width, height) => {
  return (x0, y0) => (x <= x0 && x0 <= x + width && y <= y0 && y0 <= y + height);
};


const getSectorCouple = (sectors, sector) => {
  return !!sectors.find(Number)
    ? [sector, ...union(SECTORS_NEIGHBORS[sector], sectors)].sort()
    : [sector, SECTORS_NEIGHBORS[sector][sector % 2]].sort();
}

export const getHighlightedSectors = (e, container, sectors0) => {
  e.preventDefault();

  const { width, height } = container.getBoundingClientRect();
  const x0 = width / 2;
  const y0 = height / 2;
  const r0 = Math.min(...[width, height]) * SECTORS_CENTRE_RATIO;
  const { x, y } = getMouseInsideRectangle(container)(e);
  const r = Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));

  let sectors = [];

  if (r < r0) {
    sectors = SECTORS;
  } else {
    const sector = getRectangleSectors(width, height).map(
      (sector, i) => isPonitInsideRectangle(...sector)(x, y) ? (i + 1) : null
    ).find(Number);

    if (sector) {
      sectors = getSectorCouple(sectors0.length > 2 ? [] : sectors0, sector);
    }
  }

  return sectors;
}
