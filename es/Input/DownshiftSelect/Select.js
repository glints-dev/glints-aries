import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["items", "transformFunction", "components", "isLoading", "isOpenInitially", "helperText", "downshift", "placeholder", "label", "disabled", "disableTyping", "isOpen", "invalid", "onIsOpenChange", "selectedItem", "onSelectedItemChange", "inputValue", "onInputValueChange", "onClear", "onFocus", "onBlur", "emptyListText", "groupKey"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import * as internalComponents from './SelectStyle';
import { ArrowDownIcon } from '../../General/Icon/components';
import { ArrowUpIcon } from '../../General/Icon/components';
import { CloseCircleSolidIcon } from '../../General/Icon/components';
import { groupBy, indexOf, isFunction, isUndefined, noop } from 'lodash';
import { useId } from 'react-id-generator';
export var defaultTransformFunction = function defaultTransformFunction(items, inputValue) {
  return items.filter(function (item) {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });
};
export var itemToString = function itemToString(item) {
  return item ? item.label : '';
};
export var defaultEmptyListText = 'No results found. Try another keyword to search for.'; // These are our custom props for our subcomponents. We need this because
// sometimes we want to make additional props available to the subcomponent,
// e.g. a Item subcomponent needs to know the item it represents.

export var SubComponents = internalComponents;
export var Select = function Select(_ref) {
  var items = _ref.items,
      _ref$transformFunctio = _ref.transformFunction,
      transformFunction = _ref$transformFunctio === void 0 ? defaultTransformFunction : _ref$transformFunctio,
      _ref$components = _ref.components,
      externalComponents = _ref$components === void 0 ? {} : _ref$components,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isOpenInitially = _ref.isOpenInitially,
      isOpenInitially = _ref$isOpenInitially === void 0 ? false : _ref$isOpenInitially,
      helperText = _ref.helperText,
      _ref$downshift = _ref.downshift,
      downshift = _ref$downshift === void 0 ? {} : _ref$downshift,
      placeholder = _ref.placeholder,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$disableTyping = _ref.disableTyping,
      disableTyping = _ref$disableTyping === void 0 ? false : _ref$disableTyping,
      isOpenExternal = _ref.isOpen,
      _ref$invalid = _ref.invalid,
      invalid = _ref$invalid === void 0 ? false : _ref$invalid,
      onIsOpenChangeExternal = _ref.onIsOpenChange,
      selectedItemExternal = _ref.selectedItem,
      onSelectedItemChangeExternal = _ref.onSelectedItemChange,
      inputValueExternal = _ref.inputValue,
      onInputValueChangeExternal = _ref.onInputValueChange,
      onClear = _ref.onClear,
      onFocusExternal = _ref.onFocus,
      onBlurExternal = _ref.onBlur,
      _ref$emptyListText = _ref.emptyListText,
      emptyListText = _ref$emptyListText === void 0 ? defaultEmptyListText : _ref$emptyListText,
      groupKey = _ref.groupKey,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var mergedComponents = _objectSpread(_objectSpread({}, internalComponents), externalComponents);

  var Container = mergedComponents.Container,
      Label = mergedComponents.Label,
      Combobox = mergedComponents.Combobox,
      Input = mergedComponents.Input,
      IndicatorsContainer = mergedComponents.IndicatorsContainer,
      LoadingIndicator = mergedComponents.LoadingIndicator,
      ClearButton = mergedComponents.ClearButton,
      ToggleButton = mergedComponents.ToggleButton,
      Menu = mergedComponents.Menu,
      Item = mergedComponents.Item,
      EmptyList = mergedComponents.EmptyList,
      HelperText = mergedComponents.HelperText,
      GroupContainer = mergedComponents.GroupContainer,
      Group = mergedComponents.Group,
      GroupHeading = mergedComponents.GroupHeading;

  var _useState = useState(''),
      inputValueInternal = _useState[0],
      setInputValueInternal = _useState[1];

  var inputValue = inputValueExternal || inputValueInternal;
  var setInputValue = onInputValueChangeExternal || setInputValueInternal;
  var displayItems = transformFunction(items, inputValue);

  var _useCombobox = useCombobox(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    items: displayItems,
    inputValue: inputValue,
    onInputValueChange: function onInputValueChange(_ref2) {
      var inputValue = _ref2.inputValue;
      setInputValue(inputValue);
    },
    itemToString: itemToString,
    initialIsOpen: isOpenInitially
  }, !isUndefined(isOpenExternal) && {
    isOpen: isOpenExternal
  }), isFunction(onIsOpenChangeExternal) && {
    onIsOpenChange: function onIsOpenChange(_ref3) {
      var isOpen = _ref3.isOpen;
      return onIsOpenChangeExternal(isOpen);
    }
  }), !isUndefined(selectedItemExternal) && {
    selectedItem: selectedItemExternal
  }), isFunction(onSelectedItemChangeExternal) && {
    onSelectedItemChange: function onSelectedItemChange(_ref4) {
      var selectedItem = _ref4.selectedItem;
      return onSelectedItemChangeExternal(selectedItem);
    }
  }), downshift)),
      selectedItem = _useCombobox.selectedItem,
      isOpen = _useCombobox.isOpen,
      getLabelProps = _useCombobox.getLabelProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getMenuProps = _useCombobox.getMenuProps,
      getItemProps = _useCombobox.getItemProps,
      reset = _useCombobox.reset,
      openMenu = _useCombobox.openMenu;

  var _useId = useId(1, 'description-'),
      helperId = _useId[0];

  var handleClear = function handleClear() {
    if (isFunction(onClear)) {
      onClear();
    }

    reset();
    setInputValue(''); // reset does not call onSelectedItemChange on reset, but we want this
    // for convenience

    if (isFunction(onSelectedItemChangeExternal)) {
      onSelectedItemChangeExternal(null);
    }
  };

  var _useState2 = useState(false),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var onFocusInternal = function onFocusInternal() {
    setIsFocused(true);
  };

  var onBlurInternal = function onBlurInternal() {
    setIsFocused(false);
  };

  var onFocus = function onFocus() {
    if (isFunction(onFocusExternal)) {
      onFocusExternal();
    }

    onFocusInternal();
  };

  var onBlur = function onBlur() {
    if (isFunction(onBlurExternal)) {
      onBlurExternal();
    }

    onBlurInternal();
  };

  var groups = groupKey && groupBy(displayItems, groupKey);
  return /*#__PURE__*/React.createElement(Container, {
    "data-testid": "container"
  }, label && /*#__PURE__*/React.createElement(Label, _extends({}, getLabelProps(), {
    "data-active": isFocused,
    "data-disabled": disabled,
    "data-invalid": invalid,
    "data-testid": "label"
  }), label), /*#__PURE__*/React.createElement(Combobox, _extends({}, getComboboxProps(), {
    "data-disabled": disabled,
    "data-invalid": invalid,
    "data-active": isFocused,
    onClick: disabled ? noop : openMenu,
    "data-testid": "combobox"
  }), /*#__PURE__*/React.createElement(Input, _extends({}, getInputProps(_objectSpread({
    disabled: disabled,
    readOnly: disableTyping,
    placeholder: placeholder,
    onFocus: onFocus,
    onBlur: onBlur
  }, props)), {
    "aria-invalid": invalid
  }, helperText && {
    'aria-describedby': helperId
  }, selectedItem && {
    title: selectedItem.label
  }, {
    "data-testid": "input"
  })), /*#__PURE__*/React.createElement(IndicatorsContainer, {
    "data-testid": "indicators-container"
  }, isLoading && /*#__PURE__*/React.createElement(LoadingIndicator, {
    "data-testid": "loading-indicator"
  }), selectedItem && /*#__PURE__*/React.createElement(ClearButton, {
    type: "button",
    onClick: handleClear,
    "aria-label": "clear selection",
    "data-testid": "clear-button"
  }, /*#__PURE__*/React.createElement(CloseCircleSolidIcon, null)), /*#__PURE__*/React.createElement(ToggleButton, _extends({
    type: "button"
  }, getToggleButtonProps({
    disabled: disabled,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), {
    "aria-label": "toggle menu",
    "data-testid": "toggle-button" // getToggleButtonProps adds a ref here, but functional components don't support them. Overriding the ref here prevents a React warning
    ,
    ref: undefined
  }), isOpen ? /*#__PURE__*/React.createElement(ArrowUpIcon, null) : /*#__PURE__*/React.createElement(ArrowDownIcon, null)))), /*#__PURE__*/React.createElement(Menu, _extends({}, getMenuProps(), {
    "data-testid": "menu"
  }), function () {
    var renderItem = function renderItem(item) {
      return /*#__PURE__*/React.createElement(Item, _extends({}, getItemProps({
        item: item,
        index: indexOf(displayItems, item),
        disabled: disabled || item.disabled
      }), {
        key: item.value,
        item: item,
        title: item.label + indexOf(displayItems, item) // getToggleButtonProps adds a ref here, but functional components don't support them. Overriding the ref here prevents a React warning
        ,
        ref: undefined
      }), itemToString(item));
    };

    if (isOpen) {
      if (groups && Object.keys(groups).length > 0) {
        return Object.keys(groups).map(function (groupKey) {
          return /*#__PURE__*/React.createElement(GroupContainer, {
            key: groupKey
          }, /*#__PURE__*/React.createElement(Group, null, /*#__PURE__*/React.createElement(GroupHeading, {
            disabled: true,
            "data-testid": "group-heading"
          }, groupKey), groups[groupKey].map(renderItem)));
        });
      } else if (displayItems.length > 0) {
        return displayItems.map(renderItem);
      }
    }

    return /*#__PURE__*/React.createElement(EmptyList, {
      "data-testid": "empty-list"
    }, emptyListText);
  }()), helperText && /*#__PURE__*/React.createElement(HelperText, {
    id: helperId,
    "data-invalid": invalid,
    "data-testid": "helper-text"
  }, helperText));
};
Select.Components = internalComponents;