"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AccordionStyle = require("./AccordionStyle");

var _excluded = ["className", "content", "label", "active", "iconOptions", "onOpen", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AccordionPanel = function AccordionPanel(props) {
  var className = props.className,
      content = props.content,
      label = props.label,
      active = props.active,
      _props$iconOptions = props.iconOptions,
      activeIcon = _props$iconOptions.activeIcon,
      inactiveIcon = _props$iconOptions.inactiveIcon,
      position = _props$iconOptions.position,
      onOpen = props.onOpen,
      onClick = props.onClick,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);

  var handleClick = function handleClick(e) {
    onOpen();

    if (onClick) {
      onClick(e);
    }
  };

  var renderIcon = function renderIcon() {
    return /*#__PURE__*/React.createElement(_AccordionStyle.IconWrapper, {
      position: position,
      active: active
    }, active ? activeIcon : inactiveIcon);
  };

  return /*#__PURE__*/React.createElement(_AccordionStyle.PanelWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('panel-wrapper', className),
    role: "tab",
    "aria-expanded": active,
    tabIndex: 0
  }, restProps), /*#__PURE__*/React.createElement(_AccordionStyle.IconLabelWrapper, {
    className: "label-wrapper",
    onClick: handleClick,
    tabIndex: -1,
    position: position,
    active: active
  }, position === 'left' && renderIcon(), /*#__PURE__*/React.createElement(_AccordionStyle.Label, null, label), position === 'right' && renderIcon()), /*#__PURE__*/React.createElement(_AccordionStyle.ContentWrapper, {
    className: "content-wrapper",
    active: active
  }, /*#__PURE__*/React.createElement(_AccordionStyle.Content, {
    position: position
  }, content)));
};

var _default = AccordionPanel;
exports["default"] = _default;