import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["value", "onChange", "onFocus", "onBlur", "callingCodeOptions", "onInputChange", "filterValue", "isLoadingCallingCodeOptions", "label", "featuredOptionsLabel", "otherOptionsLabel", "callingCodeFilterInputPlaceholder", "callingCodeNoOptionsLabel", "error", "addon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useCombobox } from 'downshift';
import { find, orderBy } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useId } from 'react-id-generator';
import { ArrowDownIcon, ArrowUpIcon, Flex } from '../..';
import { useOutsideAlerter } from '../../Utils/useOutsideAlerter';
import * as S from './PhoneNumberInputStyles'; // Downshift wants a ref to this, but we need one ourselves, and there is no way
// to share.
// https://github.com/downshift-js/downshift/issues/604
// https://github.com/downshift-js/downshift/issues/1167

var refErrorFix = {
  suppressRefError: true
};
export var PhoneNumberInput = function PhoneNumberInput(_ref) {
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
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isCallingCodeInputOpen = _useState[0],
      setIsCallingCodeInputOpen = _useState[1];

  var toggleIsCallingCodeOpen = function toggleIsCallingCodeOpen() {
    return setIsCallingCodeInputOpen(!isCallingCodeInputOpen);
  };

  var closeCallingCodeInput = function closeCallingCodeInput() {
    return setIsCallingCodeInputOpen(false);
  };

  var callingCodeOptions = orderBy(callingCodeOptionsExternal, ['isFeatured', 'label'], ['desc', 'asc']);

  var _useCombobox = useCombobox({
    items: callingCodeOptions,
    selectedItem: find(callingCodeOptions, {
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
      if (type !== useCombobox.stateChangeTypes.InputChange) return;
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

  var callingCodeFilterInputRef = useRef();
  useEffect(function focusCallingCodeFilterInputOnOpen() {
    if (isCallingCodeInputOpen && callingCodeFilterInputRef.current) {
      callingCodeFilterInputRef.current.focus();
    }
  }, [isCallingCodeInputOpen]);
  var containerRef = useRef();
  useOutsideAlerter(containerRef, closeCallingCodeInput);

  var _useId = useId(1, 'significant-number-input-'),
      significantNumberInputId = _useId[0];

  return /*#__PURE__*/React.createElement(S.PhoneNumberInputContainer, _extends({
    ref: containerRef
  }, restProps), /*#__PURE__*/React.createElement(S.TopRow, {
    "data-invalid": Boolean(error)
  }, /*#__PURE__*/React.createElement(S.CallingCodeInputToggle, _extends({}, getToggleButtonProps(), {
    type: "button",
    onClick: toggleIsCallingCodeOpen,
    "data-testid": "calling-code-input-toggle"
  }), "+", value.callingCode, /*#__PURE__*/React.createElement(S.CallingCodeInputOpenIndicator, null, isCallingCodeInputOpen ? /*#__PURE__*/React.createElement(ArrowDownIcon, null) : /*#__PURE__*/React.createElement(ArrowUpIcon, null))), /*#__PURE__*/React.createElement(S.SignificantNumberInput, {
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
  }), /*#__PURE__*/React.createElement(S.Label, {
    htmlFor: significantNumberInputId
  }, label), /*#__PURE__*/React.createElement(S.TopRowAddon, {
    "data-testid": "addon"
  }, addon)), /*#__PURE__*/React.createElement(S.CallingCodeInput, _extends({
    isOpen: isCallingCodeInputOpen
  }, getComboboxProps(), {
    "data-testid": "calling-code-input"
  }), /*#__PURE__*/React.createElement(S.CallingCodeFilterInputGroup, null, /*#__PURE__*/React.createElement(S.CallingCodeFilterInput, _extends({}, getInputProps({
    placeholder: callingCodeFilterInputPlaceholder
  }, _objectSpread({}, refErrorFix)), {
    ref: callingCodeFilterInputRef,
    "data-testid": "calling-code-filter-input",
    onFocus: onFocus,
    onBlur: onBlur
  })), isLoadingCallingCodeOptions && /*#__PURE__*/React.createElement(S.CallingCodeInputLoading, {
    "data-testid": "calling-code-options-loading"
  })), /*#__PURE__*/React.createElement(S.CallingCodeOptionsList, getMenuProps(), callingCodeOptions.length > 0 ? callingCodeOptions.map(function (item, index) {
    return /*#__PURE__*/React.createElement(S.CallingCodeOption, _extends({
      key: item.callingCode + "-" + item.label
    }, getItemProps({
      item: item,
      index: index
    }), {
      title: item.label,
      withGroupHeader: item.isFeatured !== (callingCodeOptions[index - 1] || {}).isFeatured && (item.isFeatured ? featuredOptionsLabel : otherOptionsLabel)
    }), /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(S.CallingCodeOptionCallingCode, null, "+", item.callingCode), /*#__PURE__*/React.createElement(S.CallingCodeOptionLabel, null, item.label)));
  }) : /*#__PURE__*/React.createElement(S.NoOptions, {
    "data-testid": "no-options"
  }, callingCodeNoOptionsLabel))), /*#__PURE__*/React.createElement(S.Error, {
    "data-testid": "error"
  }, error || null));
};