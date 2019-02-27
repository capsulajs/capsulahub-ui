'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Dropdown = exports.D = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _reactClickOutside = _interopRequireDefault(require('react-click-outside'));

var _constants = require('../constants');

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

function _templateObject7() {
  var data = _taggedTemplateLiteral([
    '\n  text-decoration: none;\n  padding: 10px;\n  border-bottom: solid #d9d9d9 1px;\n  :first-child {\n    border-top: solid #d9d9d9 1px;\n  }\n  :last-child {\n    border-bottom: none;\n  }\n  cursor: pointer;\n\n  &:hover {\n    background: #d9d9d9;\n  }\n',
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  z-index: 99;\n  list-style-type: none;\n  background: #e1e1e1;\n  color: #373737;\n  margin: 0;\n  padding: 0;\n  width: 300px;\n',
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    '\n  width: 5px;\n  height: 5px;\n  margin-top: 12px;\n  border: solid #b1b1b1 1px;\n  border-width: 0 2px 2px 0;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n',
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
  var data = _taggedTemplateLiteral(['']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-style: regular;\n  font-size: 12px;\n  width: calc(100% - 20px);\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-size: 12px;\n  font-style: regular;\n  background: #737373;\n  color: #f8f7f7;\n  width: 100%;\n  max-width: 300px;\n',
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

var Container = _styledComponents.default.div(_templateObject(), _constants.defaultFontFamily);

var Header = _styledComponents.default.div(_templateObject2(), _constants.defaultFontFamily);

var Title = _styledComponents.default.div(_templateObject3());

var ArrowDown = _styledComponents.default.div(_templateObject4());

var ArrowUp = _styledComponents.default.div(_templateObject5());

var List = _styledComponents.default.ul(_templateObject6());

var Item = _styledComponents.default.li(_templateObject7());

var D =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(D, _React$Component);

    function D(props) {
      var _this;

      _classCallCheck(this, D);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(D).call(this, props));
      _this.state = {
        isOpen: false,
        title: _this.props.title,
        items: _this.props.items || [],
        selected: null,
      };
      return _this;
    }

    _createClass(D, [
      {
        key: 'handleClickOutside',
        value: function handleClickOutside() {
          this.setState({
            isOpen: false,
          });
        },
      },
      {
        key: 'toggle',
        value: function toggle() {
          this.setState(function(prevState) {
            return {
              isOpen: !prevState.isOpen,
            };
          });
        },
      },
      {
        key: 'select',
        value: function select(selected) {
          this.setState({
            selected: selected,
          });
          this.toggle();
          this.props.onChange(this.state.items[selected]);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$state = this.state,
            title = _this$state.title,
            items = _this$state.items,
            selected = _this$state.selected,
            isOpen = _this$state.isOpen;
          return _react.default.createElement(
            Container,
            null,
            _react.default.createElement(
              Header,
              {
                onClick: function onClick() {
                  return _this2.toggle();
                },
              },
              _react.default.createElement(Title, null, Number.isInteger(selected) ? items[selected].label : title),
              isOpen ? _react.default.createElement(ArrowUp, null) : _react.default.createElement(ArrowDown, null)
            ),
            isOpen &&
              _react.default.createElement(
                List,
                null,
                items.map(function(item, index) {
                  return _react.default.createElement(
                    Item,
                    {
                      key: index,
                      onClick: function onClick() {
                        return _this2.select(index);
                      },
                    },
                    item.label
                  );
                })
              )
          );
        },
      },
    ]);

    return D;
  })(_react.default.Component);

exports.D = D;
var Dropdown = (0, _reactClickOutside.default)(D);
exports.Dropdown = Dropdown;
