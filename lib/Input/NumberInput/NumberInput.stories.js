"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.StepValue2 = exports.MinimumValue3AndMaximumValue10 = exports.Interactive = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _NumberInput = require("./NumberInput");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Input/NumberInput',
  component: _NumberInput.NumberInput,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  var _useState = (0, _react.useState)('4'),
      number = _useState[0],
      setNumber = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_NumberInput.NumberInput, (0, _extends2["default"])({
    value: number,
    onChange: function onChange(e) {
      return setNumber(e.target.value);
    }
  }, args));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'Number'
};
var MinimumValue3AndMaximumValue10 = Template.bind({});
exports.MinimumValue3AndMaximumValue10 = MinimumValue3AndMaximumValue10;
MinimumValue3AndMaximumValue10.args = {
  label: 'Number',
  min: 3,
  max: 10
};
var StepValue2 = Template.bind({});
exports.StepValue2 = StepValue2;
StepValue2.args = {
  label: 'Number',
  step: 2
};