export const SECTORS = [1, 2, 3, 4];
export const SECTORS_NEIGHBORS = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 4],
  4: [2, 3],
};

export const SECTORS_REVERSE = {
  '1,2': false,
  '3,4': true,
  '1,3': false,
  '2,4': true,
  '1,2,3,4': false,
};

export const SECTORS_ORIENTATION = {
  '1,2': 'horizontal',
  '3,4': 'horizontal',
  '1,3': 'vertical',
  '2,4': 'vertical',
  '1,2,3,4': 'center',
};

export const SECTORS_MIN_SIZE = 75;
export const SECTORS_CENTER_RATIO = 0.2;
export const SECTORS_HIGHLIGHT_COLOR = '#C9DADF';

export const ESCAPE_KEY = 27;
export const ENTER_KEY = 13;
export const MIN_TAB_NAME_LENGTH = 2;
export const STYLES = {
  container: {
    background: '#414141',
    overflow: 'hidden',
  },
  element: {
    horizontal: {},
    vertical: {
      overflow: 'visible',
    },
  },
  splitter: {
    horizontal: {
      background: '#515151',
      border: 'none',
      width: '100%',
      height: '8px',
    },
    vertical: {
      background: '#515151',
      border: 'none',
      width: '8px',
      height: '100%',
    },
  },
};
