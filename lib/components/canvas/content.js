"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tabs = _interopRequireDefault(require("./tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100% - 23px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var TabContainer = _styledComponents.default.div(_templateObject2());

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));
    _this.state = {
      index: 0
    };
    _this.handleOnRemove = _this.handleOnRemove.bind(_assertThisInitialized(_this));
    _this.handleOnSelect = _this.handleOnSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Content, [{
    key: "handleOnSelect",
    value: function handleOnSelect(index) {
      this.setState({
        index: index
      });
    }
  }, {
    key: "handleOnRemove",
    value: function handleOnRemove(id) {
      this.setState({
        index: 0
      });
      this.props.onRemove(id);
    }
  }, {
    key: "render",
    value: function render() {
      var index = this.state.index;
      var _this$props = this.props,
          id = _this$props.id,
          tabs = _this$props.tabs,
          builders = _this$props.builders,
          onRemove = _this$props.onRemove,
          onUpdate = _this$props.onUpdate;

      if (tabs && tabs[index]) {
        var _tabs$index = tabs[index],
            builderId = _tabs$index.builderId,
            metadata = _tabs$index.metadata;
        var builder = builders[builderId];

        if (builder) {
          return _react.default.createElement(Container, null, _react.default.createElement(_tabs.default, {
            id: id,
            tabs: tabs,
            activeIndex: index,
            onRemove: this.handleOnRemove,
            onSelect: this.handleOnSelect,
            onUpdate: onUpdate
          }), _react.default.createElement(TabContainer, null, builder(metadata)));
        }

        return 'No builder...';
      }

      return 'No tabs..';
    }
  }]);

  return Content;
}(_react.default.Component);

Content.propTypes = {
  id: _propTypes.default.string.isRequired,
  tabs: _propTypes.default.array.isRequired,
  builders: _propTypes.default.object.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  onUpdate: _propTypes.default.func.isRequired
};
var _default = Content;
exports.default = _default;