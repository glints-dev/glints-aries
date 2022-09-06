import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["value", "status", "onKeyDown", "disableTyping", "small", "type", "label", "disabled", "className", "removeFloatingLabel", "allowClear", "forwardedRef", "onChange", "startIcon", "endIcon"];
import * as React from 'react';
import classNames from 'classnames';
import { EyeIcon, EyeSlashedIcon, CloseCircleSolidIcon } from '../../General/Icon/components';
import { TextFieldContainer, TextFieldInput, TextFieldLabel, IconContainer, StartIconContainer, EndIconContainer } from './TextFieldStyle';
export var isFilled = function isFilled(type, value) {
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

export var TextField = function TextField(_ref) {
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
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

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
  return /*#__PURE__*/React.createElement(TextFieldContainer, {
    className: classNames('aries-textfield', className)
  }, /*#__PURE__*/React.createElement(TextFieldInput, _extends({
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
  }, restProps)), startIcon && /*#__PURE__*/React.createElement(StartIconContainer, null, startIcon), !removeFloatingLabel && /*#__PURE__*/React.createElement(TextFieldLabel, {
    "data-testid": "textfield-label",
    className: "textfield-label",
    floating: floating,
    status: status,
    small: small,
    hasStartIcon: hasStartIcon
  }, label), canShowClearIcon && /*#__PURE__*/React.createElement(IconContainer, null, /*#__PURE__*/React.createElement(CloseCircleSolidIcon, {
    "data-testid": "clear-button",
    onClick: handleClearInput
  })), type === 'password' && /*#__PURE__*/React.createElement(IconContainer, {
    onClick: handleShowPassword
  }, inputType === 'password' ? /*#__PURE__*/React.createElement(EyeSlashedIcon, {
    "data-testid": "invisible-icon"
  }) : /*#__PURE__*/React.createElement(EyeIcon, null)), endIcon && /*#__PURE__*/React.createElement(EndIconContainer, null, endIcon));
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = TextField.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);