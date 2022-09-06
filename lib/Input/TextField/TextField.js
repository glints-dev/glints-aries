"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.isFilled = exports["default"] = exports.TextField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../../General/Icon/components");

var _TextFieldStyle = require("./TextFieldStyle");

var _excluded = ["value", "status", "onKeyDown", "disableTyping", "small", "type", "label", "disabled", "className", "removeFloatingLabel", "allowClear", "forwardedRef", "onChange", "startIcon", "endIcon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isFilled = function isFilled(type, value) {
  if (value === undefined || value === null) return false;
  if (type === 'number') return !isNaN(parseInt(value));
  return value !== '';
};
/** Use onChange to listen to input changes.
 * Use onBlur to listen to focus loss.
 * <br/>
 * Use status to set different styles for the Text Field based on status.
 * <br/>
 * Use small to set the size of the text field. The ...rest is passed to the
 * internal text field input. */


exports.isFilled = isFilled;

var TextField = function TextField(_ref) {
  var value = _ref.value,
      status = _ref.status,
      onKeyDown = _ref.onKeyDown,
      disableTyping = _ref.disableTyping,
      small = _ref.small,
      type = _ref.type,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      _ref$removeFloatingLa = _ref.removeFloatingLabel,
      removeFloatingLabel = _ref$removeFloatingLa === void 0 ? false : _ref$removeFloatingLa,
      _ref$allowClear = _ref.allowClear,
      allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
      forwardedRef = _ref.forwardedRef,
      onChange = _ref.onChange,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _React$useState = React.useState(false),
      floating = _React$useState[0],
      setFloating = _React$useState[1];

  var _React$useState2 = React.useState(type),
      inputType = _React$useState2[0],
      setInputType = _React$useState2[1];

  var hasStartIcon = Boolean(startIcon);
  var handleShowPassword = React.useCallback(function () {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }, [setInputType, inputType]);

  var handleClearInput = function handleClearInput(e) {
    var event = Object.create(e);
    event.target.value = '';
    onChange(event);
  };

  var handleKeyDown = React.useCallback(function (e) {
    if (disableTyping) {
      e.preventDefault();
    }

    if (onKeyDown !== undefined) {
      return onKeyDown(e);
    }
  }, [onKeyDown, disableTyping]);
  React.useEffect(function () {
    setFloating(isFilled(inputType, value));
  }, [setFloating, inputType, value]);
  var canShowClearIcon = allowClear && type === 'text' && value && value.length > 0;
  return /*#__PURE__*/React.createElement(_TextFieldStyle.TextFieldContainer, {
    className: (0, _classnames["default"])('aries-textfield', className)
  }, /*#__PURE__*/React.createElement(_TextFieldStyle.TextFieldInput, (0, _extends2["default"])({
    ref: forwardedRef,
    type: inputType,
    placeholder: removeFloatingLabel ? label : undefined,
    status: status,
    disabled: disabled,
    onChange: onChange,
    onKeyDown: handleKeyDown,
    floating: floating,
    value: value,
    "aria-label": label,
    small: small,
    disableTyping: disableTyping,
    hasStartIcon: hasStartIcon
  }, restProps)), startIcon && /*#__PURE__*/React.createElement(_TextFieldStyle.StartIconContainer, null, startIcon), !removeFloatingLabel && /*#__PURE__*/React.createElement(_TextFieldStyle.TextFieldLabel, {
    "data-testid": "textfield-label",
    className: "textfield-label",
    floating: floating,
    status: status,
    small: small,
    hasStartIcon: hasStartIcon
  }, label), canShowClearIcon && /*#__PURE__*/React.createElement(_TextFieldStyle.IconContainer, null, /*#__PURE__*/React.createElement(_components.CloseCircleSolidIcon, {
    "data-testid": "clear-button",
    onClick: handleClearInput
  })), type === 'password' && /*#__PURE__*/React.createElement(_TextFieldStyle.IconContainer, {
    onClick: handleShowPassword
  }, inputType === 'password' ? /*#__PURE__*/React.createElement(_components.EyeSlashedIcon, {
    "data-testid": "invisible-icon"
  }) : /*#__PURE__*/React.createElement(_components.EyeIcon, null)), endIcon && /*#__PURE__*/React.createElement(_TextFieldStyle.EndIconContainer, null, endIcon));
};

exports.TextField = TextField;

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(TextField, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = TextField.name;

var _default = /*#__PURE__*/React.forwardRef(forwardRef);

exports["default"] = _default;