import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["id", "label", "value", "onClick", "size", "border", "indeterminate", "className", "checked"];
import * as React from 'react';
import classNames from 'classnames';
import { CheckboxContainer } from './CheckboxStyle';
import isUndefined from 'lodash/isUndefined';

var getCheckedState = function getCheckedState(internalChecked, externalChecked, externalIndeterminate) {
  if (externalIndeterminate) return 'mixed';

  if (!isUndefined(externalChecked)) {
    return externalChecked ? 'true' : 'false';
  }

  return internalChecked ? 'true' : 'false';
};

export var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      value = _ref.value,
      onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? undefined : _ref$indeterminate,
      className = _ref.className,
      checked = _ref.checked,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _React$useState = React.useState(false),
      internalChecked = _React$useState[0],
      setInternalChecked = _React$useState[1];

  var handleClick = function handleClick(e) {
    setInternalChecked(function (internalChecked) {
      return !internalChecked;
    });

    if (onClick !== undefined) {
      return onClick(e);
    }
  };

  var combinedChecked = getCheckedState(internalChecked, checked, indeterminate);
  return /*#__PURE__*/React.createElement(CheckboxContainer, {
    className: classNames('aries-checkbox', className),
    role: "checkbox",
    "aria-labelledby": id,
    "aria-checked": combinedChecked,
    "data-border": border ? 'true' : 'false',
    tabIndex: 0,
    size: size
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    value: value,
    onClick: handleClick,
    checked: combinedChecked !== 'false'
  }, restProps)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    tabIndex: -1
  }, label || value));
};
export default Checkbox;