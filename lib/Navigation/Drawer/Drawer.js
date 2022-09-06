"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _DrawerStyle = require("./DrawerStyle");

var _excluded = ["children", "isOpen", "onClose", "position", "getContainerElement"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'right' : _ref$position,
      getContainerElement = _ref.getContainerElement,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
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
  return /*#__PURE__*/React.createElement(_DrawerStyle.DrawerContainer, {
    className: "aries-drawer",
    "data-testid": "drawer-container",
    "aria-modal": "true",
    "aria-hidden": isOpen ? 'false' : 'true',
    open: isOpen,
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/React.createElement(_DrawerStyle.DrawerWrapper, (0, _extends2["default"])({
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

var _default = Drawer;
exports["default"] = _default;