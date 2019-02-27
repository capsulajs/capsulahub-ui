"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STYLES = exports.MIN_TAB_NAME_LENGTH = exports.ENTER_KEY = exports.ESCAPE_KEY = exports.SECTORS_HIGHLIGHT_COLOR = exports.SECTORS_CENTER_RATIO = exports.SECTORS_MIN_SIZE = exports.SECTORS_ORIENTATION = exports.SECTORS_REVERSE = exports.SECTORS_NEIGHBORS = exports.SECTORS = void 0;
var SECTORS = [1, 2, 3, 4];
exports.SECTORS = SECTORS;
var SECTORS_NEIGHBORS = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 4],
  4: [2, 3]
};
exports.SECTORS_NEIGHBORS = SECTORS_NEIGHBORS;
var SECTORS_REVERSE = {
  '1,2': false,
  '3,4': true,
  '1,3': false,
  '2,4': true,
  '1,2,3,4': false
};
exports.SECTORS_REVERSE = SECTORS_REVERSE;
var SECTORS_ORIENTATION = {
  '1,2': 'horizontal',
  '3,4': 'horizontal',
  '1,3': 'vertical',
  '2,4': 'vertical',
  '1,2,3,4': 'center'
};
exports.SECTORS_ORIENTATION = SECTORS_ORIENTATION;
var SECTORS_MIN_SIZE = 250;
exports.SECTORS_MIN_SIZE = SECTORS_MIN_SIZE;
var SECTORS_CENTER_RATIO = 0.2;
exports.SECTORS_CENTER_RATIO = SECTORS_CENTER_RATIO;
var SECTORS_HIGHLIGHT_COLOR = '#C9DADF';
exports.SECTORS_HIGHLIGHT_COLOR = SECTORS_HIGHLIGHT_COLOR;
var ESCAPE_KEY = 27;
exports.ESCAPE_KEY = ESCAPE_KEY;
var ENTER_KEY = 13;
exports.ENTER_KEY = ENTER_KEY;
var MIN_TAB_NAME_LENGTH = 2;
exports.MIN_TAB_NAME_LENGTH = MIN_TAB_NAME_LENGTH;
var STYLES = {
  container: {
    background: '#414141',
    overflow: 'hidden'
  },
  element: {
    horizontal: {},
    vertical: {
      overflow: 'visible'
    }
  },
  splitter: {
    horizontal: {
      background: '#515151',
      border: 'none',
      width: '100%',
      height: '8px'
    },
    vertical: {
      background: '#515151',
      border: 'none',
      width: '8px',
      height: '100%'
    }
  }
};
exports.STYLES = STYLES;