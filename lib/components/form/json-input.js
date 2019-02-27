'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.JsonInput = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _constants = require('../constants');

var _settings = _interopRequireDefault(require('../../assets/settings.png'));

var _reactAce = _interopRequireDefault(require('react-ace'));

require('brace/mode/json');

require('../theme');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(['\n  padding-right: 5px;\n  width: 16px;\n  height: 16px;\n']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-style: ',
    ';\n  font-size: ',
    ';\n  background: #3f3f3f;\n  color: #767676;\n  min-width: 150px;\n',
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

var Container = _styledComponents.default.div(
  _templateObject(),
  _constants.defaultFontFamily,
  _constants.defaultFontWeight,
  _constants.defaultFomtSize
);

var Header = _styledComponents.default.div(_templateObject2());

var Image = _styledComponents.default.img(_templateObject3());

var Title = _styledComponents.default.div(_templateObject4());

var JsonInput = function JsonInput(_ref) {
  var id = _ref.id,
    value = _ref.value,
    width = _ref.width,
    height = _ref.height,
    onChange = _ref.onChange;
  return _react.default.createElement(
    Container,
    {
      style: {
        width: width,
        height: height,
      },
    },
    _react.default.createElement(
      Header,
      null,
      _react.default.createElement(Image, {
        src: _settings.default,
      }),
      _react.default.createElement(Title, null, 'JSON Input')
    ),
    _react.default.createElement(_reactAce.default, {
      mode: 'json',
      theme: 'capsula-js',
      value: value,
      onChange: onChange,
      name: id,
      editorProps: {
        $blockScrolling: true,
      },
      fontSize: 11,
      setOptions: {
        tabSize: 2,
      },
      width: width,
      height: 'calc('.concat(height, ' - 39px)'),
    })
  );
};

exports.JsonInput = JsonInput;
