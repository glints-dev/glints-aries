"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _components = require("../../General/Icon/components");

var _TagStyle = require("./TagStyle");

var _AddTag = require("./ActionTags/AddTag");

var _ResetTag = require("./ActionTags/ResetTag");

var _BasicTag = _interopRequireDefault(require("./BasicTag"));

var _excluded = ["variant", "action", "children", "icon", "block", "outline", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tag = function Tag(_ref) {
  var variant = _ref.variant,
      action = _ref.action,
      children = _ref.children,
      icon = _ref.icon,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$outline = _ref.outline,
      outline = _ref$outline === void 0 ? false : _ref$outline,
      onClick = _ref.onClick,
      resetProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  if (variant === 'action') {
    switch (action) {
      case 'add':
        return /*#__PURE__*/React.createElement(_AddTag.AddTag, (0, _extends2["default"])({
          onClick: onClick
        }, resetProps), /*#__PURE__*/React.createElement(_TagStyle.StartIconContainer, null, /*#__PURE__*/React.createElement(_components.AddIcon, null)), children);

      case 'reset':
        return /*#__PURE__*/React.createElement(_ResetTag.ResetTag, (0, _extends2["default"])({
          onClick: onClick
        }, resetProps), /*#__PURE__*/React.createElement(_TagStyle.StartIconContainer, null, /*#__PURE__*/React.createElement(_components.TrashIcon, null)), children);

      default:
    }
  } else if (variant === 'button') {
    return /*#__PURE__*/React.createElement(_BasicTag["default"], resetProps, children, /*#__PURE__*/React.createElement(_TagStyle.EndIconContainer, null, icon));
  }

  return /*#__PURE__*/React.createElement(_BasicTag["default"], (0, _extends2["default"])({
    block: block,
    outline: outline,
    onClick: onClick
  }, resetProps), children);
};

var _default = Tag;
exports["default"] = _default;