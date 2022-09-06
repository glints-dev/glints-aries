"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.RadioButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RadioButtonStyle = require("./RadioButtonStyle");

var _excluded = ["className", "children", "error", "label", "labelProps", "theme", "border", "disabled", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** The className will be passed to
 * the main radio button container. ...inputProps is passed to the
 * input tag. */
var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      label = _ref.label,
      labelProps = _ref.labelProps,
      theme = _ref.theme,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      inputProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_RadioButtonStyle.RadioIcon, {
    error: error,
    theme: theme,
    border: border,
    size: size,
    disabled: disabled,
    "data-testid": "radio-icon"
  }), /*#__PURE__*/React.createElement(_RadioButtonStyle.RadioLabel, {
    className: "radiobtn-content",
    error: error,
    theme: theme,
    tabIndex: -1,
    border: border,
    size: size,
    disabled: disabled
  }, label || children));
  return /*#__PURE__*/React.createElement(_RadioButtonStyle.RadioContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-radiobtn', className),
    error: error,
    tabIndex: 0,
    theme: theme,
    border: border,
    disabled: disabled
  }, labelProps), /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
    type: "radio",
    disabled: disabled
  }, inputProps)), border ? /*#__PURE__*/React.createElement(_RadioButtonStyle.Border, {
    error: error,
    disabled: disabled,
    "data-testid": "radio-border"
  }, content) : content);
};

exports.RadioButton = RadioButton;
var _default = RadioButton;
exports["default"] = _default;