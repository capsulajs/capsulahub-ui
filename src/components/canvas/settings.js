export const canvas = {
  fontFamily: 'Montserrat',
};

export const dropzone = {
  minSize: 50,
  ratio: 0.2,
  highlight: '#ddd',
  sectors: [1, 2, 3, 4],
  sectorNeighbors: {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3],
  },
  isNeedReverse: {
    '1,2': false,
    '3,4': true,
    '1,3': false,
    '2,4': true,
    '1,2,3,4': false,
  },
  orientation: {
    '1,2': 'horizontal',
    '3,4': 'horizontal',
    '1,3': 'vertical',
    '2,4': 'vertical',
    '1,2,3,4': 'center',
  },
};

export const keyboard = {
  escapeKey: 27,
  enterKey: 13,
};
