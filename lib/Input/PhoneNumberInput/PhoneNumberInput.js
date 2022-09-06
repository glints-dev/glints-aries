"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PhoneNumberInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _downshift = require("downshift");

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _reactIdGenerator = require("react-id-generator");

var _ = require("../..");

var _useOutsideAlerter = require("../../Utils/useOutsideAlerter");

var S = _interopRequireWildcard(require("./PhoneNumberInputStyles"));

var _excluded = ["value", "onChange", "onFocus", "onBlur", "callingCodeOptions", "onInputChange", "filterValue", "isLoadingCallingCodeOptions", "label", "featuredOptionsLabel", "otherOptionsLabel", "callingCodeFilterInputPlaceholder", "callingCodeNoOptionsLabel", "error", "addon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Downshift wants a ref to this, but we need one ourselves, and there is no way
// to share.
// https://github.com/downshift-js/downshift/issues/604
// https://github.com/downshift-js/downshift/issues/1167
var refErrorFix = {
  suppressRefError: true
};

var PhoneNumberInput = function PhoneNumberInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      callingCodeOptionsExternal = _ref.callingCodeOptions,
      onInputChange = _ref.onInputChange,
      filterValue = _ref.filterValue,
      isLoadingCallingCodeOptions = _ref.isLoadingCallingCodeOptions,
      label = _ref.label,
      featuredOptionsLabel = _ref.featuredOptionsLabel,
      otherOptionsLabel = _ref.otherOptionsLabel,
      callingCodeFilterInputPlaceholder = _ref.callingCodeFilterInputPlaceholder,
      callingCodeNoOptionsLabel = _ref.callingCodeNoOptionsLabel,
      error = _ref.error,
      addon = _ref.addon,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isCallingCodeInputOpen = _useState[0],
      setIsCallingCodeInputOpen = _useState[1];

  var toggleIsCallingCodeOpen = function toggleIsCallingCodeOpen() {
    return setIsCallingCodeInputOpen(!isCallingCodeInputOpen);
  };

  var closeCallingCodeInput = function closeCallingCodeInput() {
    return setIsCallingCodeInputOpen(false);
  };

  var callingCodeOptions = (0, _lodash.orderBy)(callingCodeOptionsExternal, ['isFeatured', 'label'], ['desc', 'asc']);

  var _useCombobox = (0, _downshift.useCombobox)({
    items: callingCodeOptions,
    selectedItem: (0, _lodash.find)(callingCodeOptions, {
      callingCode: value.callingCode
    }),
    onSelectedItemChange: function onSelectedItemChange(_ref2) {
      var selectedItem = _ref2.selectedItem;

      _onChange(_objectSpread(_objectSpread({}, value), {}, {
        callingCode: selectedItem ? selectedItem.callingCode : value.callingCode
      }));

      closeCallingCodeInput();
    },
    inputValue: filterValue,
    onInputValueChange: function onInputValueChange(_ref3) {
      var type = _ref3.type,
          inputValue = _ref3.inputValue;
      if (type !== _downshift.useCombobox.stateChangeTypes.InputChange) return;
      onInputChange(inputValue);
    },
    itemToString: function itemToString(option) {
      return option ? option.label : '';
    }
  }),
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getMenuProps = _useCombobox.getMenuProps,
      getItemProps = _useCombobox.getItemProps;

  var callingCodeFilterInputRef = (0, _react.useRef)();
  (0, _react.useEffect)(function focusCallingCodeFilterInputOnOpen() {
    if (isCallingCodeInputOpen && callingCodeFilterInputRef.current) {
      callingCodeFilterInputRef.current.focus();
    }
  }, [isCallingCodeInputOpen]);
  var containerRef = (0, _react.useRef)();
  (0, _useOutsideAlerter.useOutsideAlerter)(containerRef, closeCallingCodeInput);

  var _useId = (0, _reactIdGenerator.useId)(1, 'significant-number-input-'),
      significantNumberInputId = _useId[0];

  return /*#__PURE__*/_react["default"].createElement(S.PhoneNumberInputContainer, (0, _extends2["default"])({
    ref: containerRef
  }, restProps), /*#__PURE__*/_react["default"].createElement(S.TopRow, {
    "data-invalid": Boolean(error)
  }, /*#__PURE__*/_react["default"].createElement(S.CallingCodeInputToggle, (0, _extends2["default"])({}, getToggleButtonProps(), {
    type: "button",
    onClick: toggleIsCallingCodeOpen,
    "data-testid": "calling-code-input-toggle"
  }), "+", value.callingCode, /*#__PURE__*/_react["default"].createElement(S.CallingCodeInputOpenIndicator, null, isCallingCodeInputOpen ? /*#__PURE__*/_react["default"].createElement(_.ArrowDownIcon, null) : /*#__PURE__*/_react["default"].createElement(_.ArrowUpIcon, null))), /*#__PURE__*/_react["default"].createElement(S.SignificantNumberInput, {
    id: significantNumberInputId,
    "data-testid": "significant-number-input",
    type: "tel",
    value: value.significantNumber || '',
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, value), {}, {
        significantNumber: e.target.value
      }));
    },
    onFocus: onFocus,
    onBlur: onBlur,
    placeholder: label,
    "data-invalid": Boolean(error),
    "aria-label": label
  }), /*#__PURE__*/_react["default"].createElement(S.Label, {
    htmlFor: significantNumberInputId
  }, label), /*#__PURE__*/_react["default"].createElement(S.TopRowAddon, {
    "data-testid": "addon"
  }, addon)), /*#__PURE__*/_react["default"].createElement(S.CallingCodeInput, (0, _extends2["default"])({
    isOpen: isCallingCodeInputOpen
  }, getComboboxProps(), {
    "data-testid": "calling-code-input"
  }), /*#__PURE__*/_react["default"].createElement(S.CallingCodeFilterInputGroup, null, /*#__PURE__*/_react["default"].createElement(S.CallingCodeFilterInput, (0, _extends2["default"])({}, getInputProps({
    placeholder: callingCodeFilterInputPlaceholder
  }, _objectSpread({}, refErrorFix)), {
    ref: callingCodeFilterInputRef,
    "data-testid": "calling-code-filter-input",
    onFocus: onFocus,
    onBlur: onBlur
  })), isLoadingCallingCodeOptions && /*#__PURE__*/_react["default"].createElement(S.CallingCodeInputLoading, {
    "data-testid": "calling-code-options-loading"
  })), /*#__PURE__*/_react["default"].createElement(S.CallingCodeOptionsList, getMenuProps(), callingCodeOptions.length > 0 ? callingCodeOptions.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(S.CallingCodeOption, (0, _extends2["default"])({
      key: item.callingCode + "-" + item.label
    }, getItemProps({
      item: item,
      index: index
    }), {
      title: item.label,
      withGroupHeader: item.isFeatured !== (callingCodeOptions[index - 1] || {}).isFeatured && (item.isFeatured ? featuredOptionsLabel : otherOptionsLabel)
    }), /*#__PURE__*/_react["default"].createElement(_.Flex, null, /*#__PURE__*/_react["default"].createElement(S.CallingCodeOptionCallingCode, null, "+", item.callingCode), /*#__PURE__*/_react["default"].createElement(S.CallingCodeOptionLabel, null, item.label)));
  }) : /*#__PURE__*/_react["default"].createElement(S.NoOptions, {
    "data-testid": "no-options"
  }, callingCodeNoOptionsLabel))), /*#__PURE__*/_react["default"].createElement(S.Error, {
    "data-testid": "error"
  }, error || null));
};

exports.PhoneNumberInput = PhoneNumberInput;