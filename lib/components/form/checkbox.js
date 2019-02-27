'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.CheckBox = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _constants = require('../constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 15px;\n  border: 1px solid #737373;\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n",
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n\n  &:checked ~ span {\n    background-color: #57d7ff;\n    border: 1px solid #57d7ff;\n  }\n\n  &:checked ~ span:after {\n    display: block;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-style: regular;\n  font-size: 12px;\n  color: #898989;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  width: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n',
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

var Container = _styledComponents.default.label(_templateObject(), _constants.defaultFontFamily);

var Input = _styledComponents.default.input(_templateObject2());

var CheckMark = _styledComponents.default.span(_templateObject3());

var CheckBox = function CheckBox(_ref) {
  var label = _ref.label,
    _onChange = _ref.onChange;
  return _react.default.createElement(
    Container,
    null,
    label,
    _react.default.createElement(Input, {
      type: 'checkbox',
      onChange: function onChange(e) {
        return _onChange(e.target.checked);
      },
    }),
    _react.default.createElement(CheckMark, null)
  );
};

exports.CheckBox = CheckBox;
