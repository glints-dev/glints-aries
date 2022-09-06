import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "isOpen", "onClose", "position", "getContainerElement"];
import * as React from 'react';
import { DrawerContainer, DrawerWrapper } from './DrawerStyle';

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'right' : _ref$position,
      getContainerElement = _ref.getContainerElement,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  React.useEffect(function preventContainerScrolling() {
    if (!getContainerElement) return;
    var containerElement = getContainerElement();

    if (isOpen) {
      containerElement.style.overflow = 'hidden';
    } else {
      containerElement.style.overflow = 'scroll';
    }

    return function () {
      containerElement.style.overflow = 'scroll';
    };
  }, [getContainerElement, isOpen]);
  return /*#__PURE__*/React.createElement(DrawerContainer, {
    className: "aries-drawer",
    "data-testid": "drawer-container",
    "aria-modal": "true",
    "aria-hidden": isOpen ? 'false' : 'true',
    open: isOpen,
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/React.createElement(DrawerWrapper, _extends({
    className: "drawer-contentwrapper",
    role: "dialog",
    "data-testid": "drawer-wrapper",
    open: isOpen,
    position: position,
    tabIndex: 0,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, defaultProps), children));
};

export default Drawer;