'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('typeface-montserrat');

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _grid = _interopRequireDefault(require('./grid'));

var _constants = require('../constants');

var _canvas = require('./utils/canvas');

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
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

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-family: ',
    ';\n  width: ',
    'px;\n  height: ',
    'px;\n  font-style: regular;\n  font-size: 13px;\n  background: #515151;\n  color: #A9A9A9;\n  min-width: 500px;\n  min-height: 100px;\n  padding 8px;\n',
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
  function(props) {
    return props.width;
  },
  function(props) {
    return props.height;
  }
);

var Canvas =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Canvas, _React$Component);

    function Canvas() {
      _classCallCheck(this, Canvas);

      return _possibleConstructorReturn(this, _getPrototypeOf(Canvas).apply(this, arguments));
    }

    _createClass(Canvas, [
      {
        key: 'handleDragStart',
        value: function handleDragStart(e) {
          e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id'));
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          (0, _canvas.onDragstartEventHandler)('add', this.props.buildersListId, this.handleDragStart);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          (0, _canvas.onDragstartEventHandler)('remove', this.props.buildersListId, this.handleDragStart);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            width = _this$props.width,
            height = _this$props.height,
            builders = _this$props.builders,
            layout = _this$props.layout,
            onUpdate = _this$props.onUpdate;
          return _react.default.createElement(
            Container,
            {
              width: width,
              height: height,
            },
            _react.default.createElement(_grid.default, {
              layout: layout,
              builders: builders,
              onUpdate: onUpdate,
            })
          );
        },
      },
    ]);

    return Canvas;
  })(_react.default.Component);

Canvas.propTypes = {
  buildersListId: _propTypes.default.string.isRequired,
  builders: _propTypes.default.object.isRequired,
  layout: _propTypes.default.object.isRequired,
  onUpdate: _propTypes.default.func.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
};
var _default = Canvas;
exports.default = _default;
