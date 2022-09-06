"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CheckboxStyle = require("./CheckboxStyle");

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _excluded = ["id", "label", "value", "onClick", "size", "border", "indeterminate", "className", "checked"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getCheckedState = function getCheckedState(internalChecked, externalChecked, externalIndeterminate) {
  if (externalIndeterminate) return 'mixed';

  if (!(0, _isUndefined["default"])(externalChecked)) {
    return externalChecked ? 'true' : 'false';
  }

  return internalChecked ? 'true' : 'false';
};

var Checkbox = function Checkbox(_ref) {
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
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

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
  return /*#__PURE__*/React.createElement(_CheckboxStyle.CheckboxContainer, {
    className: (0, _classnames["default"])('aries-checkbox', className),
    role: "checkbox",
    "aria-labelledby": id,
    "aria-checked": combinedChecked,
    "data-border": border ? 'true' : 'false',
    tabIndex: 0,
    size: size
  }, /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
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

exports.Checkbox = Checkbox;
var _default = Checkbox;
exports["default"] = _default;