'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _loader = _interopRequireDefault(require('../../assets/loader.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral(['\n  width: 100px;\n  height: 20px;\n']);

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

var LoaderImg = _styledComponents.default.img(_templateObject());

var Loader = function Loader() {
  return _react.default.createElement(LoaderImg, {
    src: _loader.default,
  });
};

exports.Loader = Loader;
