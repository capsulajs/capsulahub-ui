"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNodeTab = exports.updateNodeTabs = exports.getNodeTabs = exports.isAllNodesWithTabs = exports.isAnyNodeWithTabs = exports.decamelize = exports.emptyNode = exports.guid = void 0;

var _lodash = require("lodash");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var guid = function guid() {
  return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
};

exports.guid = guid;

var emptyNode = function emptyNode() {
  return {
    id: guid(),
    type: 'element',
    tabs: []
  };
};

exports.emptyNode = emptyNode;

var decamelize = function decamelize(str, separator) {
  separator = typeof separator === 'undefined' ? '_' : separator;
  return str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
};

exports.decamelize = decamelize;

var isAnyNodeWithTabs = function isAnyNodeWithTabs(node) {
  return node.type === 'element' ? node.tabs.length > 0 : node.nodes.length > 0;
};

exports.isAnyNodeWithTabs = isAnyNodeWithTabs;

var isAllNodesWithTabs = function isAllNodesWithTabs(layout) {
  var statement = true;

  var check = function check(node) {
    if (node.type === 'element') {
      if (node.tabs.length === 0) {
        statement = false;
      }
    } else {
      node.nodes.forEach(check);
    }
  };

  check(layout);
  return statement;
};

exports.isAllNodesWithTabs = isAllNodesWithTabs;

var getNodeTabs = function getNodeTabs(node, nodeId) {
  if (node.id === nodeId) {
    return node.tabs;
  }

  if (node.nodes) {
    return (0, _lodash.flatten)(node.nodes.map(function (node) {
      return getNodeTabs(node, nodeId);
    }));
  }

  return [];
};

exports.getNodeTabs = getNodeTabs;

var updateNodeTabs = function updateNodeTabs(layout, nodeId, tabs) {
  var clonedLayout = (0, _lodash.cloneDeep)(layout);

  var update = function update(node) {
    if (node.id === nodeId) {
      node.tabs = tabs;
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };

  update(clonedLayout);
  return clonedLayout;
};

exports.updateNodeTabs = updateNodeTabs;

var updateNodeTab = function updateNodeTab(layout, nodeId, tabId, updates) {
  var clonedLayout = (0, _lodash.cloneDeep)(layout);

  var update = function update(node) {
    if (node.id === nodeId) {
      node.tabs = node.tabs.map(function (tab) {
        return tab.id === tabId ? _objectSpread({}, tab, updates) : tab;
      });
    } else if (node.nodes) {
      node.nodes.forEach(update);
    }
  };

  update(clonedLayout);
  return clonedLayout;
};

exports.updateNodeTab = updateNodeTab;