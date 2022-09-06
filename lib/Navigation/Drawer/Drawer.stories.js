"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _Button = require("../../General/Button/Button");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Navigation/Drawer',
  component: _Drawer["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  var _useState = (0, _react.useState)(false),
      isDrawerOpen = _useState[0],
      setIsDrawerOpen = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsDrawerOpen(!isDrawerOpen);
    }
  }, "Toggle"), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], (0, _extends2["default"])({}, args, {
    isOpen: isDrawerOpen,
    onClose: function onClose() {
      return setIsDrawerOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsDrawerOpen(false);
    }
  }, "Close")));
};

var Default = Template.bind({});
exports.Default = Default;