import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["active", "defaultActive", "iconOptions", "onChange", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';
import { Toggle, ToggleBall } from './Styles';

/** The className and ...defaultProps are passed to the main toggle container. */
export var ToggleSwitch = function ToggleSwitch(_ref) {
  var active = _ref.active,
      _ref$defaultActive = _ref.defaultActive,
      defaultActive = _ref$defaultActive === void 0 ? false : _ref$defaultActive,
      iconOptions = _ref.iconOptions,
      onChange = _ref.onChange,
      className = _ref.className,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _React$useState = React.useState(active || defaultActive),
      innerActive = _React$useState[0],
      setInnerActive = _React$useState[1];

  var iconColor = innerActive ? SecondaryColor.actionblue : Greyscale.grey;
  var ActiveIcon = iconOptions ? iconOptions.active : null;
  var InactiveIcon = iconOptions ? iconOptions.inactive : null;
  var Icon = innerActive ? ActiveIcon : InactiveIcon;
  var isControlled = typeof active === 'boolean';
  React.useEffect(function () {
    if (!isControlled) {
      return;
    }

    if (active !== innerActive) {
      setInnerActive(active);
    }
  }, [active, innerActive, isControlled]);

  var handleClick = function handleClick() {
    var newActiveState = !innerActive;

    if (!isControlled) {
      setInnerActive(newActiveState);
    }

    if (onChange) onChange(newActiveState);
  };

  return /*#__PURE__*/React.createElement(Toggle, _extends({
    "aria-checked": innerActive,
    role: "switch",
    className: classNames('aries-toggle-switch', className),
    onClick: handleClick,
    active: innerActive
  }, defaultProps), /*#__PURE__*/React.createElement(ToggleBall, {
    active: innerActive
  }, ActiveIcon && InactiveIcon && /*#__PURE__*/React.createElement(Icon, {
    color: iconColor
  })));
};
export default ToggleSwitch;