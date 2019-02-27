"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _ = require("..");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isNodeValid = function isNodeValid(node) {
  if (node.tabs) {
    return node.tabs.length > 0;
  }

  switch (node.nodes.length) {
    case 1:
      return isNodeValid(node.nodes[0]);

    case 2:
      return isNodeValid(node.nodes[0]) || isNodeValid(node.nodes[1]);

    default:
      return false;
  }
};

var filterTabs = function filterTabs(node) {
  if (node.tabs) {
    return node;
  }

  switch (node.nodes.filter(isNodeValid).length) {
    case 0:
      return (0, _.emptyNode)();

    case 1:
      {
        var _node$nodes = _slicedToArray(node.nodes, 2),
            node1 = _node$nodes[0],
            node2 = _node$nodes[1];

        if (node1.nodes) {
          switch (node1.nodes.filter(isNodeValid).length) {
            case 0:
              return _objectSpread({}, node, {
                nodes: [(0, _.emptyNode)(), node2]
              });

            case 1:
              {
                var _node1$nodes = _slicedToArray(node1.nodes, 2),
                    node11 = _node1$nodes[0],
                    node12 = _node1$nodes[1];

                if (isNodeValid(node11) && !isNodeValid(node12)) {
                  return _objectSpread({}, node, {
                    nodes: [node11, node2]
                  });
                }
              }

            default:
              return node;
          }
        }

        if (node2.nodes) {
          switch (node2.nodes.filter(isNodeValid).length) {
            case 0:
              return _objectSpread({}, node, {
                nodes: [node1, (0, _.emptyNode)()]
              });

            case 1:
              {
                var _node2$nodes = _slicedToArray(node2.nodes, 2),
                    node21 = _node2$nodes[0],
                    node22 = _node2$nodes[1];

                if (!isNodeValid(node21) && isNodeValid(node22)) {
                  return _objectSpread({}, node, {
                    nodes: [node1, node22]
                  });
                }
              }

            default:
              return node;
          }
        }
      }

    case 2:
      return _objectSpread({}, node, {
        nodes: node.nodes.map(filterTabs)
      });

    default:
      return node;
  }
};

var removeTab = function removeTab(_ref) {
  var layout = _ref.layout,
      nodeId = _ref.nodeId,
      tabId = _ref.tabId;
  var newTabs = (0, _.getNodeTabs)(layout, nodeId).filter(function (tab) {
    return tab.id !== tabId;
  });
  var newLayout = (0, _.updateNodeTabs)(layout, nodeId, newTabs);
  return filterTabs(newLayout);
};

var remove = function remove(_ref2) {
  var layout = _ref2.layout,
      nodeId = _ref2.nodeId,
      tabId = _ref2.tabId;
  return layout.id === nodeId ? (0, _.emptyNode)() : removeTab({
    layout: layout,
    nodeId: nodeId,
    tabId: tabId
  });
};

var _default = remove;
exports.default = _default;