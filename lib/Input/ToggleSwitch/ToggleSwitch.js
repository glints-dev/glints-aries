"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ToggleSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Colors = require("../../Utils/Colors");

var _Styles = require("./Styles");

var _excluded = ["active", "defaultActive", "iconOptions", "onChange", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** The className and ...defaultProps are passed to the main toggle container. */
var ToggleSwitch = function ToggleSwitch(_ref) {
  var active = _ref.active,
      _ref$defaultActive = _ref.defaultActive,
      defaultActive = _ref$defaultActive === void 0 ? false : _ref$defaultActive,
      iconOptions = _ref.iconOptions,
      onChange = _ref.onChange,
      className = _ref.className,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _React$useState = React.useState(active || defaultActive),
      innerActive = _React$useState[0],
      setInnerActive = _React$useState[1];

  var iconColor = innerActive ? _Colors.SecondaryColor.actionblue : _Colors.Greyscale.grey;
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

  return /*#__PURE__*/React.createElement(_Styles.Toggle, (0, _extends2["default"])({
    "aria-checked": innerActive,
    role: "switch",
    className: (0, _classnames["default"])('aries-toggle-switch', className),
    onClick: handleClick,
    active: innerActive
  }, defaultProps), /*#__PURE__*/React.createElement(_Styles.ToggleBall, {
    active: innerActive
  }, ActiveIcon && InactiveIcon && /*#__PURE__*/React.createElement(Icon, {
    color: iconColor
  })));
};

exports.ToggleSwitch = ToggleSwitch;
var _default = ToggleSwitch;
exports["default"] = _default;