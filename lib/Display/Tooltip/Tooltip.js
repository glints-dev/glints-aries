"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TooltipStyle = require("./TooltipStyle");

var _excluded = ["classes", "children", "text", "textAsString", "position"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tooltip = function Tooltip(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      children = _ref.children,
      text = _ref.text,
      textAsString = _ref.textAsString,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var contentRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      isShow = _useState[0],
      setIsShow = _useState[1];

  var showTooltip = function showTooltip() {
    return setIsShow(true);
  };

  var hideTooltip = function hideTooltip() {
    return setIsShow(false);
  };

  var hideTooltipIfTouchOutside = (0, _react.useCallback)(function (event) {
    var hasTouchedOutsideOfTooltipContent = contentRef.current && !contentRef.current.contains(event.target);

    if (hasTouchedOutsideOfTooltipContent) {
      hideTooltip();
      document.removeEventListener('touchstart', hideTooltipIfTouchOutside);
    }
  }, []);

  var handleTouchStart = function handleTouchStart() {
    if (!isShow) {
      showTooltip();
      document.addEventListener('touchstart', hideTooltipIfTouchOutside);
    }
  };

  var arialLabel = typeof text === 'string' ? text : textAsString;
  return /*#__PURE__*/_react["default"].createElement(_TooltipStyle.TooltipContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-tooltip', classes.container),
    role: "tooltip",
    "aria-hidden": isShow ? 'false' : 'true',
    "aria-label": arialLabel // The tooltip does not close on iOS devices because of this issue https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
    // Adding onTouchStart and onTouchEnd as a workaround
    // On mobile, it shows the tooltip on touch and hides the tooltip when the touch is released
    ,
    onTouchStart: handleTouchStart,
    onMouseOver: showTooltip,
    onMouseLeave: hideTooltip
  }, defaultProps), isShow && /*#__PURE__*/_react["default"].createElement(_TooltipStyle.TooltipContent, {
    ref: contentRef,
    className: (0, _classnames["default"])('aries-tooltip-content', classes.content),
    text: text,
    textAsString: textAsString,
    position: position
  }, /*#__PURE__*/_react["default"].createElement(_TooltipStyle.TooltipMessage, {
    className: (0, _classnames["default"])('aries-tooltip-message', classes.message)
  }, text)), children);
};

exports.Tooltip = Tooltip;
var _default = Tooltip;
exports["default"] = _default;