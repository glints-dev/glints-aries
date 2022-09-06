"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Alert = require("./Alert");

var _Button = require("../Button");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'General/Alert',
  component: _Alert.Alert,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      control: {
        disable: true
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  var _useState = (0, _react.useState)(args.isOpen),
      isOpen = _useState[0],
      setOpen = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    },
    variant: "solid-blue"
  }, "Show Pop up"), /*#__PURE__*/_react["default"].createElement(_Alert.Alert, (0, _extends2["default"])({}, args, {
    isOpen: isOpen,
    onClose: function onClose() {
      return setOpen(false);
    }
  })));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  type: 'info',
  message: 'You have successfully applied to Glints as Software Engineer.'
};