'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _operators = require('rxjs/operators');

var _rxjs = require('rxjs');

var _constants = require('./constants');

var _dropzone = require('./utils/dropzone');

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
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

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  height: ',
    '%;\n  width: ',
    '%;\n  top: ',
    '%;\n  left: ',
    '%;\n  background: transparent;\n',
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  width: 50%;\n  height: 50%;\n  float: left;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(['\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  position: relative;\n']);

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

var Container = _styledComponents.default.div(_templateObject());

var Sector = _styledComponents.default.div(_templateObject2());

var Centre = _styledComponents.default.div(
  _templateObject3(),
  function(props) {
    return props.ratio * 100;
  },
  function(props) {
    return props.ratio * 100;
  },
  function(props) {
    return (1 - props.ratio) * 50;
  },
  function(props) {
    return (1 - props.ratio) * 50;
  }
);

var Dropzone =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Dropzone, _React$Component);

    function Dropzone(props) {
      var _this;

      _classCallCheck(this, Dropzone);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropzone).call(this, props));
      _this.state = {
        sectors: [],
        ratio: _constants.SECTORS_CENTER_RATIO,
      };
      return _this;
    }

    _createClass(Dropzone, [
      {
        key: 'getStyle',
        value: function getStyle(sector) {
          return this.state.sectors.includes(sector)
            ? {
                background: _constants.SECTORS_HIGHLIGHT_COLOR,
              }
            : {};
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this,
            _fromEvent,
            _fromEvent2;

          var container = _reactDom.default.findDOMNode(this);

          (0, _dropzone.isSmall)(container) &&
            this.setState({
              ratio: 1,
            });
          this.onDrag$ = (0, _rxjs.fromEvent)(container, 'dragover')
            .pipe(
              (0, _operators.map)(function(e) {
                return e.preventDefault() || [e.clientX, e.clientY];
              }),
              (0, _operators.distinctUntilChanged)(function(a, b) {
                return a.toString() === b.toString();
              }),
              (0, _operators.throttleTime)(50),
              (0, _operators.map)(function(point) {
                var _document;

                var value = (_document = document).elementFromPoint.apply(_document, _toConsumableArray(point))
                  .classList.value;

                var sectors = value.includes('sector') ? value.match(/\d+/g).map(Number) : [];
                return sectors.length === 1 ? (0, _dropzone.couple)(_this2.state.sectors, sectors[0]) : sectors;
              }),
              (0, _operators.distinctUntilChanged)(function(a, b) {
                return a.toString() === b.toString();
              })
            )
            .subscribe(function(sectors) {
              return _this2.setState({
                sectors: sectors,
              });
            });
          var pipes = [
            (0, _operators.map)(function(e) {
              return e.preventDefault() || e.fromElement;
            }),
            (0, _operators.filter)(Boolean),
            (0, _operators.map)(function(element) {
              return !element.classList.value.includes('sector');
            }),
            (0, _operators.filter)(Boolean),
          ];
          this.onDragEnter$ = (_fromEvent = (0, _rxjs.fromEvent)(container, 'dragenter')).pipe
            .apply(_fromEvent, pipes)
            .subscribe(function(_) {
              return (
                _this2.state.ratio === 1 &&
                _this2.setState({
                  sectors: _constants.SECTORS,
                })
              );
            });
          this.onDragLeave$ = (_fromEvent2 = (0, _rxjs.fromEvent)(container, 'dragleave')).pipe
            .apply(_fromEvent2, pipes)
            .subscribe(function(_) {
              return _this2.setState({
                sectors: [],
              });
            });
          this.onDrop$ = (0, _rxjs.fromEvent)(container, 'drop')
            .pipe(
              (0, _operators.map)(function(e) {
                return e.dataTransfer.getData('builderId');
              })
            )
            .subscribe(function(builderId) {
              return builderId
                ? _this2.props.onDrop({
                    builderId: builderId,
                    sectors: _this2.state.sectors,
                  })
                : _this2.setState({
                    sectors: [],
                  });
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.onDrag$.unsubscribe();
          this.onDragEnter$.unsubscribe();
          this.onDragLeave$.unsubscribe();
          this.onDrop$.unsubscribe();
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this;

          return _react.default.createElement(
            Container,
            null,
            _react.default.createElement(Centre, {
              className: 'sector-'.concat(_constants.SECTORS),
              ratio: this.state.ratio,
            }),
            _constants.SECTORS.map(function(sector) {
              return _react.default.createElement(Sector, {
                key: sector,
                className: 'sector-'.concat(sector),
                style: _this3.getStyle(sector),
              });
            })
          );
        },
      },
    ]);

    return Dropzone;
  })(_react.default.Component);

Dropzone.propTypes = {
  onDrop: _propTypes.default.func.isRequired,
};
var _default = Dropzone;
exports.default = _default;
