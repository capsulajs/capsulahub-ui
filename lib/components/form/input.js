'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Input = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _constants = require('../constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-style: regular;\n  font-size: 12px;\n  width: calc(100% - 20px);\n  height: 30px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #737373;\n  color: #b1b1b1;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  ::placeholder {\n    color: #b1b1b1;\n  }\n',
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

var CInput = _styledComponents.default.input(_templateObject(), _constants.defaultFontFamily);

var Input = function Input(_ref) {
  var _onChange = _ref.onChange,
    placeholder = _ref.placeholder;
  return _react.default.createElement(CInput, {
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
  });
};

exports.Input = Input;
