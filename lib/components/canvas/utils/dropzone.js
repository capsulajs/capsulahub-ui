"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.couple = exports.isSmall = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isSmall = function isSmall(container) {
  var _ref = [container.offsetWidth, container.offsetHeight],
      w = _ref[0],
      h = _ref[1];
  return w < _constants.SECTORS_MIN_SIZE || h < _constants.SECTORS_MIN_SIZE;
};

exports.isSmall = isSmall;

var couple = function couple(sectors, sector) {
  return sectors.length === 2 ? [sector].concat(_toConsumableArray(_lodash.default.intersection(_constants.SECTORS_NEIGHBORS[sector], sectors))).sort() : [sector, _constants.SECTORS_NEIGHBORS[sector][sector % 2]].sort();
};

exports.couple = couple;