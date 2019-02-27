"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDragstartEventHandler = void 0;

var onDragstartEventHandler = function onDragstartEventHandler() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'add';
  var parentId = arguments.length > 1 ? arguments[1] : undefined;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var list = document.getElementById(parentId);

  if (list) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = list.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;
        action === 'add' ? el.addEventListener('dragstart', callback) : el.removeEventListener('dragstart', callback);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

exports.onDragstartEventHandler = onDragstartEventHandler;