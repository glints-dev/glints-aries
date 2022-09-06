"use strict";

exports.__esModule = true;
exports.DelayedUnmount = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DelayedUnmount = function DelayedUnmount(_ref) {
  var children = _ref.children,
      mount = _ref.mount,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 300 : _ref$delay;

  var _useState = (0, _react.useState)(false),
      shouldRender = _useState[0],
      setShouldRender = _useState[1];

  (0, _react.useLayoutEffect)(function setToRender() {
    if (mount) setShouldRender(true);
  }, [mount]);
  (0, _react.useLayoutEffect)(function () {
    if (!mount) {
      var timeout = setTimeout(function () {
        return setShouldRender(false);
      }, delay);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [mount, delay]);
  return shouldRender && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

exports.DelayedUnmount = DelayedUnmount;