"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../../General/Icon/components");

var _PopoverStyle = require("./PopoverStyle");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Popover = function Popover(_ref) {
  var className = _ref.className,
      children = _ref.children,
      content = _ref.content;

  var _React$useState = React.useState(false),
      isOpen = _React$useState[0],
      setIsOpen = _React$useState[1];

  var handleOnClick = function handleOnClick() {
    return setIsOpen(!isOpen);
  };

  var handleClickOutside = function handleClickOutside() {
    return setIsOpen(false);
  };

  return /*#__PURE__*/React.createElement(_PopoverStyle.PopoverContainer, {
    className: (0, _classnames["default"])('aries-popover', className),
    onBlur: handleClickOutside,
    "aria-haspopup": "true",
    "aria-busy": "false",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(_PopoverStyle.PopoverChildren, {
    "data-testid": "popover-children",
    onClick: handleOnClick
  }, children), /*#__PURE__*/React.createElement(_PopoverStyle.PopoverContentWrapper, {
    onClick: handleOnClick
  }, /*#__PURE__*/React.createElement(_PopoverStyle.PopoverItemWrapper, null, /*#__PURE__*/React.createElement(_PopoverStyle.PopoverIcon, null, /*#__PURE__*/React.createElement(_components.ArrowDownIcon, {
    color: "black"
  })), isOpen && /*#__PURE__*/React.createElement(_PopoverStyle.PopOverContent, null, content))));
};

var _default = Popover;
exports["default"] = _default;