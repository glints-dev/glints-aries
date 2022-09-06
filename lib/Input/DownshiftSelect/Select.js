"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.itemToString = exports.defaultTransformFunction = exports.defaultEmptyListText = exports.SubComponents = exports.Select = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _downshift = require("downshift");

var internalComponents = _interopRequireWildcard(require("./SelectStyle"));

var _components = require("../../General/Icon/components");

var _lodash = require("lodash");

var _reactIdGenerator = require("react-id-generator");

var _excluded = ["items", "transformFunction", "components", "isLoading", "isOpenInitially", "helperText", "downshift", "placeholder", "label", "disabled", "disableTyping", "isOpen", "invalid", "onIsOpenChange", "selectedItem", "onSelectedItemChange", "inputValue", "onInputValueChange", "onClear", "onFocus", "onBlur", "emptyListText", "groupKey"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultTransformFunction = function defaultTransformFunction(items, inputValue) {
  return items.filter(function (item) {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });
};

exports.defaultTransformFunction = defaultTransformFunction;

var itemToString = function itemToString(item) {
  return item ? item.label : '';
};

exports.itemToString = itemToString;
var defaultEmptyListText = 'No results found. Try another keyword to search for.'; // These are our custom props for our subcomponents. We need this because
// sometimes we want to make additional props available to the subcomponent,
// e.g. a Item subcomponent needs to know the item it represents.

exports.defaultEmptyListText = defaultEmptyListText;
var SubComponents = internalComponents;
exports.SubComponents = SubComponents;

var Select = function Select(_ref) {
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
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

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

  var _useState = (0, _react.useState)(''),
      inputValueInternal = _useState[0],
      setInputValueInternal = _useState[1];

  var inputValue = inputValueExternal || inputValueInternal;
  var setInputValue = onInputValueChangeExternal || setInputValueInternal;
  var displayItems = transformFunction(items, inputValue);

  var _useCombobox = (0, _downshift.useCombobox)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    items: displayItems,
    inputValue: inputValue,
    onInputValueChange: function onInputValueChange(_ref2) {
      var inputValue = _ref2.inputValue;
      setInputValue(inputValue);
    },
    itemToString: itemToString,
    initialIsOpen: isOpenInitially
  }, !(0, _lodash.isUndefined)(isOpenExternal) && {
    isOpen: isOpenExternal
  }), (0, _lodash.isFunction)(onIsOpenChangeExternal) && {
    onIsOpenChange: function onIsOpenChange(_ref3) {
      var isOpen = _ref3.isOpen;
      return onIsOpenChangeExternal(isOpen);
    }
  }), !(0, _lodash.isUndefined)(selectedItemExternal) && {
    selectedItem: selectedItemExternal
  }), (0, _lodash.isFunction)(onSelectedItemChangeExternal) && {
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

  var _useId = (0, _reactIdGenerator.useId)(1, 'description-'),
      helperId = _useId[0];

  var handleClear = function handleClear() {
    if ((0, _lodash.isFunction)(onClear)) {
      onClear();
    }

    reset();
    setInputValue(''); // reset does not call onSelectedItemChange on reset, but we want this
    // for convenience

    if ((0, _lodash.isFunction)(onSelectedItemChangeExternal)) {
      onSelectedItemChangeExternal(null);
    }
  };

  var _useState2 = (0, _react.useState)(false),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var onFocusInternal = function onFocusInternal() {
    setIsFocused(true);
  };

  var onBlurInternal = function onBlurInternal() {
    setIsFocused(false);
  };

  var onFocus = function onFocus() {
    if ((0, _lodash.isFunction)(onFocusExternal)) {
      onFocusExternal();
    }

    onFocusInternal();
  };

  var onBlur = function onBlur() {
    if ((0, _lodash.isFunction)(onBlurExternal)) {
      onBlurExternal();
    }

    onBlurInternal();
  };

  var groups = groupKey && (0, _lodash.groupBy)(displayItems, groupKey);
  return /*#__PURE__*/_react["default"].createElement(Container, {
    "data-testid": "container"
  }, label && /*#__PURE__*/_react["default"].createElement(Label, (0, _extends2["default"])({}, getLabelProps(), {
    "data-active": isFocused,
    "data-disabled": disabled,
    "data-invalid": invalid,
    "data-testid": "label"
  }), label), /*#__PURE__*/_react["default"].createElement(Combobox, (0, _extends2["default"])({}, getComboboxProps(), {
    "data-disabled": disabled,
    "data-invalid": invalid,
    "data-active": isFocused,
    onClick: disabled ? _lodash.noop : openMenu,
    "data-testid": "combobox"
  }), /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({}, getInputProps(_objectSpread({
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
  })), /*#__PURE__*/_react["default"].createElement(IndicatorsContainer, {
    "data-testid": "indicators-container"
  }, isLoading && /*#__PURE__*/_react["default"].createElement(LoadingIndicator, {
    "data-testid": "loading-indicator"
  }), selectedItem && /*#__PURE__*/_react["default"].createElement(ClearButton, {
    type: "button",
    onClick: handleClear,
    "aria-label": "clear selection",
    "data-testid": "clear-button"
  }, /*#__PURE__*/_react["default"].createElement(_components.CloseCircleSolidIcon, null)), /*#__PURE__*/_react["default"].createElement(ToggleButton, (0, _extends2["default"])({
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
  }), isOpen ? /*#__PURE__*/_react["default"].createElement(_components.ArrowUpIcon, null) : /*#__PURE__*/_react["default"].createElement(_components.ArrowDownIcon, null)))), /*#__PURE__*/_react["default"].createElement(Menu, (0, _extends2["default"])({}, getMenuProps(), {
    "data-testid": "menu"
  }), function () {
    var renderItem = function renderItem(item) {
      return /*#__PURE__*/_react["default"].createElement(Item, (0, _extends2["default"])({}, getItemProps({
        item: item,
        index: (0, _lodash.indexOf)(displayItems, item),
        disabled: disabled || item.disabled
      }), {
        key: item.value,
        item: item,
        title: item.label + (0, _lodash.indexOf)(displayItems, item) // getToggleButtonProps adds a ref here, but functional components don't support them. Overriding the ref here prevents a React warning
        ,
        ref: undefined
      }), itemToString(item));
    };

    if (isOpen) {
      if (groups && Object.keys(groups).length > 0) {
        return Object.keys(groups).map(function (groupKey) {
          return /*#__PURE__*/_react["default"].createElement(GroupContainer, {
            key: groupKey
          }, /*#__PURE__*/_react["default"].createElement(Group, null, /*#__PURE__*/_react["default"].createElement(GroupHeading, {
            disabled: true,
            "data-testid": "group-heading"
          }, groupKey), groups[groupKey].map(renderItem)));
        });
      } else if (displayItems.length > 0) {
        return displayItems.map(renderItem);
      }
    }

    return /*#__PURE__*/_react["default"].createElement(EmptyList, {
      "data-testid": "empty-list"
    }, emptyListText);
  }()), helperText && /*#__PURE__*/_react["default"].createElement(HelperText, {
    id: helperId,
    "data-invalid": invalid,
    "data-testid": "helper-text"
  }, helperText));
};

exports.Select = Select;
Select.Components = internalComponents;