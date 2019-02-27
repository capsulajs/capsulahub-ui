"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("typeface-montserrat");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  color: ", ";\n  background-color: ", "\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = _styledComponents.default.p(_templateObject(), function (props) {
  return props.fontStyle || _constants.defaultFontStyle;
}, function (props) {
  return props.fontWeight || _constants.defaultFontWeight;
}, function (props) {
  return props.fontSize || _constants.defaultFomtSize;
}, function (props) {
  return props.fontFamily || _constants.defaultFontFamily;
}, function (props) {
  return props.color || _constants.defaultColor;
}, function (props) {
  return props.backgroundColor || _constants.defaultBackgroundColor;
});

exports.Paragraph = Paragraph;