'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('react-reflex/styles.css');

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactReflex = require('react-reflex');

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _dropzone = _interopRequireDefault(require('./dropzone'));

var _content = _interopRequireDefault(require('./content'));

var _constants = require('./constants');

var _create = _interopRequireDefault(require('./utils/node/create'));

var _remove = _interopRequireDefault(require('./utils/tab/remove'));

var _move = _interopRequireDefault(require('./utils/tab/move'));

var _reorder = _interopRequireDefault(require('./utils/tab/reorder'));

var _utils = require('./utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var Grid =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid(props) {
      var _this;

      _classCallCheck(this, Grid);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));
      _this.handleOnDrop = _this.handleOnDrop.bind(_assertThisInitialized(_this));
      _this.handleOnRemove = _this.handleOnRemove.bind(_assertThisInitialized(_this));
      _this.handleOnUpdate = _this.handleOnUpdate.bind(_assertThisInitialized(_this));
      _this.handleTabDragEnd = _this.handleTabDragEnd.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Grid, [
      {
        key: 'handleOnDrop',
        value: function handleOnDrop(node) {
          var _this2 = this;

          return function(_ref) {
            var builderId = _ref.builderId,
              sectors = _ref.sectors;

            var orientation = _constants.SECTORS_ORIENTATION[sectors.toString()];

            if (node.type !== 'container') {
              _this2.props.onUpdate(
                (0, _create.default)({
                  layout: _this2.props.layout,
                  node: node,
                  orientation: orientation,
                  builderId: builderId,
                  sectors: sectors,
                })
              );
            }
          };
        },
      },
      {
        key: 'handleOnRemove',
        value: function handleOnRemove(node) {
          var _this3 = this;

          return function(tabId) {
            return _this3.props.onUpdate(
              (0, _remove.default)({
                layout: _this3.props.layout,
                nodeId: node.id,
                tabId: tabId,
              })
            );
          };
        },
      },
      {
        key: 'handleOnUpdate',
        value: function handleOnUpdate(node) {
          var _this4 = this;

          return function(_ref2) {
            var id = _ref2.id,
              updates = _objectWithoutProperties(_ref2, ['id']);

            _this4.props.onUpdate((0, _utils.updateNodeTab)(_this4.props.layout, node.id, id, updates));
          };
        },
      },
      {
        key: 'handleTabDragEnd',
        value: function handleTabDragEnd(result) {
          var source = result.source,
            destination = result.destination;

          if (!destination) {
            return;
          }

          if (source.droppableId === destination.droppableId) {
            this.props.onUpdate((0, _reorder.default)(this.props.layout, source, destination));
          } else {
            this.props.onUpdate((0, _move.default)(this.props.layout, source, destination));
          }
        },
      },
      {
        key: 'renderNode',
        value: function renderNode(node, key) {
          var builders = this.props.builders;
          var type = node.type,
            tabs = node.tabs,
            orientation = node.orientation,
            nodes = node.nodes;

          if (type === 'container') {
            return _react.default.createElement(
              _reactReflex.ReflexElement,
              {
                key: key,
                styles: _constants.STYLES.container,
              },
              this.renderNodes(nodes, orientation)
            );
          }

          return _react.default.createElement(
            _reactReflex.ReflexElement,
            {
              key: key,
              style: _constants.STYLES.element[orientation || 'horizontal'],
            },
            tabs.length
              ? _react.default.createElement(_content.default, {
                  id: node.id,
                  tabs: tabs,
                  builders: builders,
                  onRemove: this.handleOnRemove(node),
                  onUpdate: this.handleOnUpdate(node),
                })
              : _react.default.createElement(_dropzone.default, {
                  onDrop: this.handleOnDrop(node),
                })
          );
        },
      },
      {
        key: 'renderNodes',
        value: function renderNodes(nodes, orientation) {
          var _this5 = this;

          var reduce = function reduce(acc, node, idx) {
            var splitter = _react.default.createElement(_reactReflex.ReflexSplitter, {
              key: 'S' + idx,
              style: _constants.STYLES.splitter[orientation || 'horizontal'],
            });

            var n = _this5.renderNode(node, 'N' + idx);

            return idx > 0
              ? [].concat(_toConsumableArray(acc), [splitter, n])
              : [].concat(_toConsumableArray(acc), [n]);
          };

          return _react.default.createElement(
            _reactReflex.ReflexContainer,
            {
              orientation: orientation || 'horizontal',
              style: _constants.STYLES.container,
            },
            nodes.reduce(reduce, [])
          );
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            layout = _this$props.layout,
            builders = _this$props.builders;
          var id = layout.id,
            tabs = layout.tabs,
            orientation = layout.orientation,
            nodes = layout.nodes;

          if (nodes && nodes.length) {
            return _react.default.createElement(
              _reactBeautifulDnd.DragDropContext,
              {
                onDragEnd: this.handleTabDragEnd,
              },
              this.renderNodes(nodes, orientation)
            );
          }

          if (tabs && tabs.length) {
            return _react.default.createElement(
              _reactBeautifulDnd.DragDropContext,
              {
                onDragEnd: this.handleTabDragEnd,
              },
              _react.default.createElement(_content.default, {
                id: id,
                tabs: tabs,
                builders: builders,
                onRemove: this.handleOnRemove(layout),
                onUpdate: this.handleOnUpdate(layout),
              })
            );
          }

          return _react.default.createElement(_dropzone.default, {
            onDrop: this.handleOnDrop(layout),
          });
        },
      },
    ]);

    return Grid;
  })(_react.default.Component);

Grid.propTypes = {
  layout: _propTypes.default.object.isRequired,
  builders: _propTypes.default.object.isRequired,
};
var _default = Grid;
exports.default = _default;
