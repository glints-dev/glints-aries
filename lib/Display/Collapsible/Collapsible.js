"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Collapsible = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _components = require("../../General/Icon/components");

var _CollapsibleStyle = require("./CollapsibleStyle");

var _excluded = ["label", "children", "className", "isOpen"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Collapsible = function Collapsible(_ref) {
  var label = _ref.label,
      children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)((0, _isUndefined["default"])(isOpen) ? true : isOpen),
      isOpenInternal = _useState[0],
      setIsOpenInternal = _useState[1];

  var toggle = function toggle() {
    setIsOpenInternal(!isOpenInternal);
  };

  return /*#__PURE__*/_react["default"].createElement(_CollapsibleStyle.CollapsibleContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-collapsible', className),
    tabIndex: 0,
    onClick: toggle,
    "data-testid": "collapsible-container"
  }, defaultProps), /*#__PURE__*/_react["default"].createElement(_CollapsibleStyle.CollapsibleContent, {
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_CollapsibleStyle.CollapsibleHeader, {
    className: "collapsible-title",
    role: "tab",
    "aria-expanded": isOpenInternal,
    isOpen: isOpenInternal
  }, label, /*#__PURE__*/_react["default"].createElement(_components.ArrowDownIcon, {
    color: "#000000"
  })), isOpenInternal && /*#__PURE__*/_react["default"].createElement(_CollapsibleStyle.CollapsibleBody, {
    className: "collapsible-content",
    "data-testid": "collapsible-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, children)));
};

exports.Collapsible = Collapsible;
var _default = Collapsible;
exports["default"] = _default;