'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _tab = _interopRequireDefault(require('./tab'));

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
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

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  cursor: pointer;\n  margin: auto;\n  padding-left: 5px;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #515151;\n  color: #a9a9a9;\n  width: 100%;\n  overflow: hidden;\n\n  overflow-x: scroll;\n  ::-webkit-scrollbar {\n    background: #515151;\n    height: 2px;\n  }\n  ::-webkit-scrollbar-corner {\n    background: #3f3f3f;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #797979;\n  }\n  overflow-y: hidden;\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Container = _styledComponents.default.div(_templateObject());

var Close = _styledComponents.default.span(_templateObject2());

var getListStyle = function getListStyle() {
  return {
    background: '#515151',
    display: 'flex',
  };
};

var getTabStyle = function getTabStyle(draggableStyle, isActive) {
  return _objectSpread(
    {
      userSelect: 'none',
      textTransform: 'uppercase',
      padding: '2px',
      margin: '0 8px 0 0',
      background: '#515151',
      color: isActive ? '#FEFEFE' : '#A9A9A9',
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: '2px',
    },
    draggableStyle
  );
};

var getTabCloseStyle = function getTabCloseStyle(isHover) {
  return isHover
    ? {}
    : {
        color: '#515151',
      };
};

var Tabs =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
      var _this;

      _classCallCheck(this, Tabs);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
      _this.state = {
        hoverIndex: -1,
        editIndex: -1,
      };
      return _this;
    }

    _createClass(Tabs, [
      {
        key: 'hover',
        value: function hover(hoverIndex) {
          this.setState({
            hoverIndex: hoverIndex,
          });
        },
      },
      {
        key: 'edit',
        value: function edit(editIndex) {
          this.setState({
            editIndex: editIndex,
          });
        },
      },
      {
        key: 'renderDraggable',
        value: function renderDraggable(tab, index) {
          var _this2 = this;

          var _this$props = this.props,
            tabs = _this$props.tabs,
            activeIndex = _this$props.activeIndex,
            onRemove = _this$props.onRemove,
            _onSelect = _this$props.onSelect,
            onUpdate = _this$props.onUpdate;
          var _this$state = this.state,
            hoverIndex = _this$state.hoverIndex,
            editIndex = _this$state.editIndex;
          var isActive = activeIndex === index;
          var isHover = hoverIndex === index;
          var isEditing = editIndex === index;
          var isRemovable = !isEditing && tabs.length;
          return _react.default.createElement(
            _reactBeautifulDnd.Draggable,
            {
              key: index,
              draggableId: tab.id,
              index: index,
            },
            function(provided) {
              return _react.default.createElement(
                'div',
                _extends(
                  {
                    ref: provided.innerRef,
                  },
                  provided.draggableProps,
                  provided.dragHandleProps,
                  {
                    style: getTabStyle(provided.draggableProps.style, isActive),
                    onMouseEnter: function onMouseEnter() {
                      return _this2.hover(index);
                    },
                    onMouseLeave: function onMouseLeave() {
                      return _this2.hover(-1);
                    },
                  }
                ),
                _react.default.createElement(_tab.default, {
                  id: tab.id,
                  name: tab.name,
                  isEditing: isEditing,
                  isActive: isActive,
                  onSelect: function onSelect() {
                    return _onSelect(index);
                  },
                  onEditStart: function onEditStart() {
                    return _this2.edit(index);
                  },
                  onEditEnd: function onEditEnd() {
                    return _this2.edit(-1);
                  },
                  onUpdate: onUpdate,
                }),
                isRemovable &&
                  _react.default.createElement(
                    Close,
                    {
                      onClick: function onClick(e) {
                        return e.preventDefault() || onRemove(tab.id);
                      },
                      style: getTabCloseStyle(isHover),
                    },
                    '\u2715'
                  )
              );
            }
          );
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this;

          return _react.default.createElement(
            Container,
            null,
            _react.default.createElement(
              _reactBeautifulDnd.Droppable,
              {
                droppableId: this.props.id,
                direction: 'horizontal',
              },
              function(provided) {
                return _react.default.createElement(
                  'div',
                  _extends(
                    {
                      ref: provided.innerRef,
                      style: getListStyle(),
                    },
                    provided.droppableProps
                  ),
                  _this3.props.tabs.map(function(tab, index) {
                    return _this3.renderDraggable(tab, index);
                  }),
                  provided.placeholder
                );
              }
            )
          );
        },
      },
    ]);

    return Tabs;
  })(_react.default.Component);

Tabs.propTypes = {
  id: _propTypes.default.string.isRequired,
  tabs: _propTypes.default.array.isRequired,
  activeIndex: _propTypes.default.number.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  onUpdate: _propTypes.default.func.isRequired,
};
var _default = Tabs;
exports.default = _default;
