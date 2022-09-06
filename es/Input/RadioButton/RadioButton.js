import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "error", "label", "labelProps", "theme", "border", "disabled", "size"];
import * as React from 'react';
import classNames from 'classnames';
import { RadioContainer, RadioLabel, RadioIcon, Border } from './RadioButtonStyle';
/** The className will be passed to
 * the main radio button container. ...inputProps is passed to the
 * input tag. */

export var RadioButton = function RadioButton(_ref) {
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
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RadioIcon, {
    error: error,
    theme: theme,
    border: border,
    size: size,
    disabled: disabled,
    "data-testid": "radio-icon"
  }), /*#__PURE__*/React.createElement(RadioLabel, {
    className: "radiobtn-content",
    error: error,
    theme: theme,
    tabIndex: -1,
    border: border,
    size: size,
    disabled: disabled
  }, label || children));
  return /*#__PURE__*/React.createElement(RadioContainer, _extends({
    className: classNames('aries-radiobtn', className),
    error: error,
    tabIndex: 0,
    theme: theme,
    border: border,
    disabled: disabled
  }, labelProps), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, inputProps)), border ? /*#__PURE__*/React.createElement(Border, {
    error: error,
    disabled: disabled,
    "data-testid": "radio-border"
  }, content) : content);
};
export default RadioButton;