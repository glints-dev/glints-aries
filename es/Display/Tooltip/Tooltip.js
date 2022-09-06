import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["classes", "children", "text", "textAsString", "position"];
import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { TooltipContainer, TooltipContent, TooltipMessage } from './TooltipStyle';
export var Tooltip = function Tooltip(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      children = _ref.children,
      text = _ref.text,
      textAsString = _ref.textAsString,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var contentRef = useRef(null);

  var _useState = useState(false),
      isShow = _useState[0],
      setIsShow = _useState[1];

  var showTooltip = function showTooltip() {
    return setIsShow(true);
  };

  var hideTooltip = function hideTooltip() {
    return setIsShow(false);
  };

  var hideTooltipIfTouchOutside = useCallback(function (event) {
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
  return /*#__PURE__*/React.createElement(TooltipContainer, _extends({
    className: classNames('aries-tooltip', classes.container),
    role: "tooltip",
    "aria-hidden": isShow ? 'false' : 'true',
    "aria-label": arialLabel // The tooltip does not close on iOS devices because of this issue https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
    // Adding onTouchStart and onTouchEnd as a workaround
    // On mobile, it shows the tooltip on touch and hides the tooltip when the touch is released
    ,
    onTouchStart: handleTouchStart,
    onMouseOver: showTooltip,
    onMouseLeave: hideTooltip
  }, defaultProps), isShow && /*#__PURE__*/React.createElement(TooltipContent, {
    ref: contentRef,
    className: classNames('aries-tooltip-content', classes.content),
    text: text,
    textAsString: textAsString,
    position: position
  }, /*#__PURE__*/React.createElement(TooltipMessage, {
    className: classNames('aries-tooltip-message', classes.message)
  }, text)), children);
};
export default Tooltip;