'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _constants = require('./constants');

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

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  font-style: regular;\n  font-size: 12px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #737373;\n  color: #b1b1b1;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  ::placeholder {\n    color: #b1b1b1;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(['\n  white-space: nowrap;\n  cursor: pointer;\n']);

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

var Title = _styledComponents.default.div(_templateObject());

var Input = _styledComponents.default.input(_templateObject2());

var getStyle = function getStyle(isActive) {
  return {
    borderBottom: isActive ? 'solid 1px #FEFEFE' : 'none',
  };
};

var Tab =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
      var _this;

      _classCallCheck(this, Tab);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, props));
      _this.change = _this.change.bind(_assertThisInitialized(_this));
      _this.save = _this.save.bind(_assertThisInitialized(_this));
      _this.keyDown = _this.keyDown.bind(_assertThisInitialized(_this));
      _this.state = {
        value: _this.props.name,
      };
      return _this;
    }

    _createClass(Tab, [
      {
        key: 'change',
        value: function change(e) {
          this.setState({
            value: e.target.value.trim(),
          });
        },
      },
      {
        key: 'save',
        value: function save() {
          var value = this.state.value;

          if (value && value.length > _constants.MIN_TAB_NAME_LENGTH) {
            this.props.onUpdate({
              id: this.props.id,
              name: value,
            });
            this.props.onEditEnd();
          }
        },
      },
      {
        key: 'keyDown',
        value: function keyDown(event) {
          (event.which === _constants.ESCAPE_KEY || event.which === _constants.ENTER_KEY) && this.save();
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            isEditing = _this$props.isEditing,
            isActive = _this$props.isActive,
            name = _this$props.name;
          return isEditing
            ? _react.default.createElement(Input, {
                value: this.state.value,
                onChange: this.change,
                onBlur: this.save,
                onKeyDown: this.keyDown,
              })
            : _react.default.createElement(
                Title,
                {
                  style: getStyle(isActive),
                  onClick: this.props.onSelect,
                  onDoubleClick: this.props.onEditStart,
                },
                name
              );
        },
      },
    ]);

    return Tab;
  })(_react.default.Component);

Tab.propTypes = {
  name: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  onEditStart: _propTypes.default.func.isRequired,
  onEditEnd: _propTypes.default.func.isRequired,
  onUpdate: _propTypes.default.func.isRequired,
};
var _default = Tab;
exports.default = _default;
