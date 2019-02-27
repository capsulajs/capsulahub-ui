"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  padding: 2px 8px;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CButton = _styledComponents.default.button(_templateObject(), _constants.defaultFontFamily, _constants.defaultFomtSize, function (props) {
  return props.theme.bg;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.hoverBg;
}, function (props) {
  return props.css;
});

var themes = {
  active: {
    bg: '#57D7FF',
    hoverBg: '#57D7FF',
    color: '#666666',
    border: '#57D7FF'
  },
  disabled: {
    bg: '#737373',
    hoverBg: '#737373',
    color: '#999999',
    border: '#737373'
  },
  clicked: {
    bg: '#fff',
    hoverBg: '#fff',
    color: '#57D7FF',
    border: '#57D7FF'
  }
};

var Button = function Button(_ref) {
  var id = _ref.id,
      text = _ref.text,
      theme = _ref.theme,
      onClick = _ref.onClick,
      css = _ref.css;
  return _react.default.createElement(CButton, {
    id: id,
    theme: themes[theme] || themes['active'],
    onClick: onClick,
    css: css
  }, text);
};

exports.Button = Button;