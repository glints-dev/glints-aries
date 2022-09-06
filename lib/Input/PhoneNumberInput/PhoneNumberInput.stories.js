"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.WithError = exports.WithAddon = exports.NoCallingCodeOptions = exports.Loading = exports.Default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _PhoneNumberInput = require("./PhoneNumberInput");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _ = require("../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Input/PhoneNumberInput',
  component: _PhoneNumberInput.PhoneNumberInput,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, {
      style: {
        height: '400px'
      }
    }, Story());
  }]
};
exports["default"] = _default;
var callingCodeOptions = [{
  label: 'Malaysia',
  callingCode: 60,
  isFeatured: true
}, {
  label: 'Indonesia',
  callingCode: 62,
  isFeatured: true
}, {
  label: 'Singapore',
  callingCode: 65,
  isFeatured: true
}, {
  label: 'Taiwan',
  callingCode: 886,
  isFeatured: true
}, {
  label: 'Vietnam',
  callingCode: 84,
  isFeatured: true
}, {
  label: 'Afghanistan',
  callingCode: 93,
  isFeatured: false
}, {
  label: 'Albania',
  callingCode: 355,
  isFeatured: false
}, {
  label: 'Algeria',
  callingCode: 213,
  isFeatured: false
}, {
  label: 'Germany',
  callingCode: 42,
  isFeatured: false
}, {
  label: 'United States',
  callingCode: 1,
  isFeatured: false
}];

var Template = function Template(args) {
  var _useState = (0, _react.useState)({
    callingCode: 65,
    significantNumber: args.initialSignificantNumber || null
  }),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(args.initialFilterInput || ''),
      filterInput = _useState2[0],
      setFilterInput = _useState2[1];

  var options = filterInput ? callingCodeOptions.filter(function (option) {
    return option.label.toLowerCase().includes(filterInput.toLowerCase()) || option.callingCode.toString().includes(filterInput.toLowerCase());
  }) : callingCodeOptions;
  var error = value.significantNumber && /[a-zA-Z]/g.test(value.significantNumber) && 'Please include numbers only.';

  var _useState3 = (0, _react.useState)(false),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  (0, _react.useEffect)(function simulateLoadingOnFilterInputChange() {
    if (args.filterDelayMs && filterInput) {
      setIsLoading(true);

      var stopLoading = function stopLoading() {
        return setIsLoading(false);
      };

      var timeout = setTimeout(stopLoading, args.filterDelayMs);
      return function () {
        clearTimeout(timeout);
        stopLoading();
      };
    }
  }, [args.filterDelayMs, filterInput]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "The phone number is +", value.callingCode || '??', ' ', value.significantNumber || '???'), /*#__PURE__*/_react["default"].createElement(_PhoneNumberInput.PhoneNumberInput, (0, _extends2["default"])({
    value: value,
    callingCodeOptions: options,
    filterValue: filterInput,
    isLoadingCallingCodeOptions: isLoading,
    label: "Mobile Number",
    featuredOptionsLabel: "Frequently Used",
    otherOptionsLabel: "The Rest Of The World",
    callingCodeFilterInputPlaceholder: "Type country code or country name",
    callingCodeNoOptionsLabel: "Sorry, there are no results for country " + filterInput + ". Please try again.",
    error: error
  }, args, {
    onChange: setValue,
    onInputChange: setFilterInput,
    onBlur: console.log
  })));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {};
var WithError = Template.bind({});
exports.WithError = WithError;
WithError.args = {
  initialSignificantNumber: '1234 foo'
};
var NoCallingCodeOptions = Template.bind({});
exports.NoCallingCodeOptions = NoCallingCodeOptions;
NoCallingCodeOptions.args = {
  initialFilterInput: 'Buxdehude'
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  filterDelayMs: 1000
};
var WithAddon = Template.bind({});
exports.WithAddon = WithAddon;
WithAddon.args = {
  addon: /*#__PURE__*/_react["default"].createElement(_.Tag, null, "I am an addon :)")
};