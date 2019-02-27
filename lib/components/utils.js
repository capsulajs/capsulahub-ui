"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guid = exports.parceInteger = exports.reorder = exports.decorate = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var decorate = function decorate(timestamp) {
  var d = new Date(timestamp);
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var hours = h > 9 ? h : "".concat(h, "0");
  var minutes = m > 9 ? m : "".concat(m, "0");
  var seconds = s > 9 ? s : "".concat(s, "0");
  return [hours, minutes, seconds].join(':');
};

exports.decorate = decorate;

var reorder = function reorder(list, startIndex, endIndex) {
  var result = Array.from(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

exports.reorder = reorder;

var parceInteger = function parceInteger(str) {
  return (str.match(/\d+/g) || []).map(Number)[0];
};

exports.parceInteger = parceInteger;

var guid = function guid() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var text = '';

  for (var i = 0; i < n; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

exports.guid = guid;