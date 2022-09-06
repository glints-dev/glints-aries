"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _SelectItem = _interopRequireDefault(require("./SelectItem"));

var _Loading = _interopRequireDefault(require("../../General/Loading"));

var _SelectStyle = require("./SelectStyle");

var _excluded = ["value", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectList = function SelectList(_ref) {
  var activeOptionIndex = _ref.activeOptionIndex,
      options = _ref.options,
      isFocus = _ref.isFocus,
      isLoading = _ref.isLoading,
      noOptionResult = _ref.noOptionResult,
      small = _ref.small,
      handleClickOnOption = _ref.handleClickOnOption,
      handleMouseEnterOption = _ref.handleMouseEnterOption;
  return /*#__PURE__*/React.createElement(_SelectStyle.SelectListWrapper, {
    className: "select-listbox",
    role: "listbox",
    "data-testid": "listbox",
    "aria-hidden": !isFocus && true,
    open: isFocus,
    small: small
  }, options.length !== 0 && !isLoading ? options.map(function (data, index) {
    var _data$props = data.props,
        value = _data$props.value,
        children = _data$props.children,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_data$props, _excluded);
    delete restProps.onOptionClick;
    return /*#__PURE__*/React.createElement(_SelectItem["default"], (0, _extends2["default"])({}, restProps, {
      className: activeOptionIndex === index ? 'active' : null,
      key: value,
      role: "option",
      "data-testid": "option",
      "data-id": index,
      "data-value": value,
      onClick: handleClickOnOption,
      onMouseEnter: handleMouseEnterOption,
      tabIndex: 0
    }), children);
  }) : isLoading ? /*#__PURE__*/React.createElement(_SelectItem["default"], {
    className: "select-loading",
    role: "option"
  }, /*#__PURE__*/React.createElement(_Loading["default"], null)) : Boolean(noOptionResult) && /*#__PURE__*/React.createElement(_SelectItem["default"], {
    disabled: true,
    role: "option",
    "data-testid": "option",
    "aria-hidden": false,
    "aria-disabled": "true"
  }, noOptionResult));
};

var _default = SelectList;
exports["default"] = _default;