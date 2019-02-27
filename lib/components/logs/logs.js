'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Logs = exports.theme = void 0;

require('typeface-montserrat');

var _react = _interopRequireDefault(require('react'));

var _reactJsonView = _interopRequireDefault(require('react-json-view'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _settings = _interopRequireDefault(require('../../assets/settings.png'));

var _constants = require('../constants');

var _utils = require('../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(['\n  color: #2cff28;\n']);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(['\n  cursor: pointer;\n']);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral([
    '\n  width: calc(100% - 45px);\n  height: calc(100% - 65px);\n  margin-left: 35px;\n  margin-right: 10px;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    background: #3f3f3f;\n    width: 2px;\n  }\n  ::-webkit-scrollbar-corner {\n    background: #3f3f3f;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #797979;\n  }\n',
  ]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(['\n  color: #2cff28;\n  text-decoration: underline;\n  cursor: pointer;\n']);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(['\n  color: #dedede;\n']);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([
    '\n  background: #ff505a;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n',
  ]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(['\n  width: calc(100% - 120px);\n  padding-left: 12px;\n']);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(['\n  width: 50px;\n']);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(['\n  width: 30px;\n']);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(['\n  width: 20px;\n  display: flex;\n  align-items: center;\n']);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n']);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    '\n  background: #373737;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n',
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(['\n  font-size: 13px;\n  text-transform: uppercase;\n']);

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
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 13px;\n  padding: 10px;\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  font-style: regular;\n  font-size: 13px;\n  background: #3f3f3f;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  min-width: 300px;\n  color: #767676;\n  position: relative;\n',
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

var theme = {
  scheme: 'custom-theme',
  base00: '#3F3F3F',
  base01: '#DEDEDE',
  base02: '#57D7FF',
  base03: '#DEDEDE',
  base04: '#DEDEDE',
  base05: '#DEDEDE',
  base06: '#DEDEDE',
  base07: '#57D7FF',
  base08: '#DEDEDE',
  base09: '#DEDEDE',
  base0A: '#000',
  base0B: '#DEDEDE',
  base0C: '#57D7FF',
  base0D: '#DEDEDE',
  base0E: '#DEDEDE',
  base0F: '#DEDEDE',
};
exports.theme = theme;

var Container = _styledComponents.default.div(_templateObject(), _constants.defaultFontFamily);

var Header = _styledComponents.default.div(_templateObject2());

var Image = _styledComponents.default.img(_templateObject3());

var Title = _styledComponents.default.div(_templateObject4());

var Footer = _styledComponents.default.div(_templateObject5());

var FlexRow = _styledComponents.default.div(_templateObject6());

var RowPoint = _styledComponents.default.div(_templateObject7());

var RowNumber = _styledComponents.default.div(_templateObject8());

var RowTimestamp = _styledComponents.default.div(_templateObject9());

var RowContent = _styledComponents.default.div(_templateObject10());

var Point = _styledComponents.default.div(_templateObject11());

var Timestamp = _styledComponents.default.div(_templateObject12());

var Button = _styledComponents.default.div(_templateObject13());

var Content = _styledComponents.default.div(_templateObject14());

var Clear = _styledComponents.default.div(_templateObject15());

var Info = _styledComponents.default.div(_templateObject16());

var Row = function Row(_ref) {
  var number = _ref.number,
    item = _ref.item,
    onResend = _ref.onResend;

  var content = _react.default.createElement(_reactJsonView.default, {
    src: item.data,
    name: false,
    iconStyle: 'circle',
    theme: theme,
    displayDataTypes: false,
    displayObjectSize: false,
    enableClipboard: true,
    shouldCollapse: function shouldCollapse(field) {
      return Object.keys(field.src).length > 3;
    },
  });

  if (item.status === 'fail') {
    content = _react.default.createElement(
      FlexRow,
      null,
      _react.default.createElement(Timestamp, null, (0, _utils.decorate)(item.timestamp) + ' | '),
      _react.default.createElement(
        Button,
        {
          onClick: onResend,
        },
        ' Resend'
      )
    );
  }

  if (item.status === 'info') {
    content = _react.default.createElement(Info, null, item.data);
  }

  return _react.default.createElement(
    FlexRow,
    null,
    _react.default.createElement(RowPoint, null, item.status === 'fail' && _react.default.createElement(Point, null)),
    _react.default.createElement(RowNumber, null, number),
    _react.default.createElement(RowTimestamp, null, (0, _utils.decorate)(item.timestamp)),
    _react.default.createElement(RowContent, null, content)
  );
};

var Logs = function Logs(_ref2) {
  var data = _ref2.data,
    onDelete = _ref2.onDelete,
    onEdit = _ref2.onEdit,
    onClear = _ref2.onClear,
    _onResend = _ref2.onResend,
    path = _ref2.path;
  return _react.default.createElement(
    Container,
    null,
    _react.default.createElement(
      Header,
      null,
      _react.default.createElement(
        FlexRow,
        null,
        _react.default.createElement(Image, {
          src: _settings.default,
        }),
        _react.default.createElement(Title, null, 'LOG')
      ),
      onClear &&
        _react.default.createElement(
          Clear,
          {
            onClick: onClear,
          },
          '\u2715'
        )
    ),
    _react.default.createElement(
      Content,
      null,
      data
        ? data.map(function(item, index) {
            return _react.default.createElement(Row, {
              key: index,
              number: index + 1,
              item: item,
              onDelete: onDelete || false,
              onEdit: onEdit || false,
              onResend: function onResend() {
                return _onResend && _onResend(item);
              },
            });
          })
        : _react.default.createElement('div', null, 'No Data..')
    ),
    _react.default.createElement(Footer, null, path)
  );
};

exports.Logs = Logs;
