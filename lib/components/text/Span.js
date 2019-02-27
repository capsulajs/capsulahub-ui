"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Span = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("typeface-montserrat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Montserrat;\n  font-size: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = _styledComponents.default.span(_templateObject());

exports.Span = Span;