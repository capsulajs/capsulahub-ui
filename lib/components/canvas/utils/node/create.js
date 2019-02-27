'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _ = require('..');

var _constants = require('../../constants');

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var nodeTabs = function nodeTabs(builderId) {
  return [
    {
      builderId: builderId,
      id: (0, _.guid)(),
      name: (0, _.decamelize)(builderId, ' '),
      metadata: {},
    },
  ];
};

var multiplyNode = function multiplyNode(node, builderId, sectors) {
  return _constants.SECTORS_REVERSE[sectors.toString()]
    ? [
        (0, _.emptyNode)(),
        _objectSpread({}, node, {
          tabs: nodeTabs(builderId),
        }),
      ]
    : [
        _objectSpread({}, node, {
          tabs: nodeTabs(builderId),
        }),
        (0, _.emptyNode)(),
      ];
};

var create = function create(_ref) {
  var layout = _ref.layout,
    node = _ref.node,
    orientation = _ref.orientation,
    builderId = _ref.builderId,
    sectors = _ref.sectors;

  switch (true) {
    case layout.id === node.id:
      return sectors.toString() === _constants.SECTORS.toString()
        ? {
            id: (0, _.guid)(),
            type: 'element',
            tabs: nodeTabs(builderId),
          }
        : {
            id: (0, _.guid)(),
            type: 'container',
            nodes: multiplyNode(node, builderId, sectors),
            orientation: orientation,
          };

    case layout.type === 'element':
      return layout;

    default:
      return {
        id: (0, _.guid)(),
        type: 'container',
        nodes: layout.nodes.map(function(l) {
          return create({
            layout: l,
            node: node,
            orientation: orientation,
            builderId: builderId,
            sectors: sectors,
          });
        }),
        orientation: layout.orientation,
      };
  }
};

var _default = create;
exports.default = _default;
