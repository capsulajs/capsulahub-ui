'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

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

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    '\n  width: 5px;\n  height: 5px;\n  margin-top: 12px;\n  border: solid #b1b1b1 1px;\n  border-width: 0 2px 2px 0;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n',
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    '\n  list-style-type: none;\n  height: 26px;\n  line-height: 26px;\n  padding-left: ',
    'px;\n  display: flex;\n  flex-direction: row;\n  border-top: 1px solid #797979;\n  cursor: pointer;\n  &:hover {\n    background: #545454;\n    color: #e2e2e2;\n  }\n',
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    '\n  width: 5px;\n  height: 5px;\n  margin-top: 10px;\n  border: solid #b1b1b1 1px;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n',
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(['\n  padding-left: 10px;\n']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  list-style-type: none;\n  height: 26px;\n  line-height: 26px;\n  padding-left: ',
    'px;\n  display: flex;\n  flex-direction: row;\n  border-top: 1px solid #797979;\n  cursor: pointer;\n  &:hover {\n    background: #545454;\n    color: #e2e2e2;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(['\n  list-style: none;\n  padding: 0;\n  margin: 0;\n']);

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

var Container = _styledComponents.default.ul(_templateObject());

var Header = _styledComponents.default.li(_templateObject2(), function(_ref) {
  var padding = _ref.padding;
  return padding;
});

var Title = _styledComponents.default.div(_templateObject3());

var ArrowDown = _styledComponents.default.div(_templateObject4());

var Item = _styledComponents.default.li(_templateObject5(), function(_ref2) {
  var padding = _ref2.padding;
  return padding;
});

var ArrowUp = _styledComponents.default.div(_templateObject6());

var List =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
      var _this;

      _classCallCheck(this, List);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
      _this.state = {
        isOpened: false,
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(List, [
      {
        key: 'toggle',
        value: function toggle() {
          this.setState({
            isOpened: !this.state.isOpened,
          });
        },
      },
      {
        key: 'renderItems',
        value: function renderItems(items) {
          var _this$props = this.props,
            padding = _this$props.padding,
            onSelect = _this$props.onSelect;
          return items.map(function(item, i) {
            if (item.children) {
              return _react.default.createElement(List, {
                key: i,
                name: item.name,
                items: item.children,
                onSelect: onSelect,
                padding: padding + 16,
              });
            }

            return _react.default.createElement(
              Item,
              {
                key: i,
                padding: padding + 16,
                onClick: function onClick() {
                  return onSelect(item);
                },
              },
              item.name
            );
          });
        },
      },
      {
        key: 'render',
        value: function render() {
          var isOpened = this.state.isOpened;
          var _this$props2 = this.props,
            name = _this$props2.name,
            items = _this$props2.items,
            padding = _this$props2.padding;
          return _react.default.createElement(
            Container,
            null,
            _react.default.createElement(
              Header,
              {
                padding: padding,
                onClick: this.toggle,
              },
              isOpened ? _react.default.createElement(ArrowDown, null) : _react.default.createElement(ArrowUp, null),
              _react.default.createElement(Title, null, name)
            ),
            isOpened && this.renderItems(items)
          );
        },
      },
    ]);

    return List;
  })(_react.default.Component);

List.defaultProps = {
  padding: 10,
};
List.propTypes = {
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.array.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  padding: _propTypes.default.number.isRequired,
};
var _default = List;
exports.default = _default;
