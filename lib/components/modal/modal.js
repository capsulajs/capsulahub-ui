"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactClickOutside = _interopRequireDefault(require("react-click-outside"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-style: regular;\n  font-size: 13px;\n  position: fixed;\n  top: 15%;\n  left: calc(50% - 274px);\n  background: #525252;\n  color: #a9a9a9;\n  padding: 19px;\n  width: 548px;\n  height: 361px;\n  z-index: 9999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), _constants.defaultFontFamily);

var Close = _styledComponents.default.div(_templateObject2());

var Header = _styledComponents.default.div(_templateObject3());

var M =
/*#__PURE__*/
function (_React$Component) {
  _inherits(M, _React$Component);

  function M(props) {
    var _this;

    _classCallCheck(this, M);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(M).call(this, props));
    _this.state = {
      isOpened: false
    };
    return _this;
  }

  _createClass(M, [{
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      e.target.id === this.props.id ? this.toggle() : this.setState({
        isOpened: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.isOpened) {
        return null;
      }

      return _react.default.createElement(Container, null, _react.default.createElement(Header, null, _react.default.createElement("div", null, this.props.title), _react.default.createElement(Close, {
        onClick: function onClick() {
          return _this2.toggle();
        }
      }, "\u2715")), this.props.children);
    }
  }]);

  return M;
}(_react.default.Component);

var Modal = (0, _reactClickOutside.default)(M);
exports.Modal = Modal;