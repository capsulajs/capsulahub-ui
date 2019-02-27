"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _remove = _interopRequireDefault(require("./remove"));

var _reorder = _interopRequireDefault(require("./reorder"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var move = function move(source, destination, droppableSource, droppableDestination) {
  var sourceClone = Array.from(source);
  var destClone = Array.from(destination);

  var _sourceClone$splice = sourceClone.splice(droppableSource.index, 1),
      _sourceClone$splice2 = _slicedToArray(_sourceClone$splice, 1),
      removed = _sourceClone$splice2[0];

  destClone.splice(droppableDestination.index, 0, removed);
  return destClone;
};

var _default = function _default(layout, source, destination) {
  var sourceTabs = (0, _.getNodeTabs)(layout, source.droppableId);
  var destinationTabs = (0, _.getNodeTabs)(layout, destination.droppableId);
  var tabs = move(sourceTabs, destinationTabs, source, destination);
  var newLayout = (0, _lodash.cloneDeep)(layout);
  newLayout = (0, _.updateNodeTabs)(newLayout, destination.droppableId, tabs);
  newLayout = (0, _remove.default)({
    layout: newLayout,
    nodeId: source.droppableId,
    tabId: sourceTabs[source.index].id
  });
  return (0, _reorder.default)((0, _lodash.cloneDeep)(newLayout), source, destination);
};

exports.default = _default;