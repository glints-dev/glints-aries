"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _bodyScrollLock = require("body-scroll-lock");

var _components = require("../../General/Icon/components");

var _DomUtils = require("../../Utils/DomUtils");

var _utils = require("./utils");

var _ModalStyle = require("./ModalStyle");

var _excluded = ["isVisible", "title", "onClose", "children", "className", "hideContentArea", "centering", "fullscreen", "removeAnimation", "footer", "size", "hideHeader", "keepChildrenMountedOnClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Modal = function Modal(_ref) {
  var isVisible = _ref.isVisible,
      title = _ref.title,
      onClose = _ref.onClose,
      children = _ref.children,
      className = _ref.className,
      hideContentArea = _ref.hideContentArea,
      centering = _ref.centering,
      fullscreen = _ref.fullscreen,
      removeAnimation = _ref.removeAnimation,
      footer = _ref.footer,
      size = _ref.size,
      hideHeader = _ref.hideHeader,
      keepChildrenMountedOnClose = _ref.keepChildrenMountedOnClose,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var modalContentAreaRef = (0, _react.useRef)(null);
  var modalContainerRef = (0, _react.useRef)(null);
  var modalBodyRef = (0, _react.useRef)(null);
  var modalFooterRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      isFooterChildrenInMultiLines = _useState[0],
      setIsFooterChildrenInMultiLines = _useState[1];

  var handleClose = _react["default"].useCallback(function () {
    if (typeof onClose === 'function') {
      onClose();
    }
  }, [onClose]);

  (0, _react.useLayoutEffect)(function () {
    var scrollableTarget = centering ? modalBodyRef.current : modalContainerRef.current;
    if (!scrollableTarget) return;
    /**
     * this tricks mobile safari into thinking the overlay is scrollable, thus
     * intercepting the touch event from the body to prevent background scrolling
     */

    scrollableTarget.style['-webkit-overflow-scrolling'] = 'touch';

    if (isVisible) {
      // On modal open
      modalContentAreaRef.current.focus();
      (0, _bodyScrollLock.disableBodyScroll)(scrollableTarget);
    } else {
      // On modal close
      (0, _bodyScrollLock.enableBodyScroll)(scrollableTarget);
    }

    return function () {
      (0, _bodyScrollLock.clearAllBodyScrollLocks)();
    };
  }, [isVisible, centering, modalContainerRef]);
  (0, _react.useEffect)(function () {
    var escapeKeyEventListener = (0, _DomUtils.escEvent)(function () {
      if (isVisible) handleClose();
    });
    document.addEventListener('keydown', escapeKeyEventListener, false); // This function will be called on unmount and _before_ this effect is
    // re-executed because its dependencies changed. This gives us the chance
    // to clean up the existing escape key event listener.

    return function () {
      return document.removeEventListener('keydown', escapeKeyEventListener, false);
    };
  }, [isVisible, handleClose]);
  (0, _react.useLayoutEffect)(function checkFooterResponsiveStyleOnMountAndOnWindowResize() {
    var checkIsFooterChildrenInMultiLines = function checkIsFooterChildrenInMultiLines() {
      var isChildrenInMultiLines = (0, _utils.checkIsChildrenInMultiLines)(modalFooterRef);
      setIsFooterChildrenInMultiLines(isChildrenInMultiLines);
    };

    var debouncedCheckFooter = (0, _debounce["default"])(checkIsFooterChildrenInMultiLines, 500);
    debouncedCheckFooter();
    window.addEventListener('resize', debouncedCheckFooter);
    return function () {
      return window.removeEventListener('resize', debouncedCheckFooter);
    };
  }, []); // To prevent the modal from closing
  // when a mousedown event occurs inside the ModalContentArea
  // but the subsequent mouseup event occurs outside

  var mouseDownTarget = (0, _react.useRef)(null);
  var handleMouseDown = (0, _react.useCallback)(function (e) {
    var element = e.target;
    mouseDownTarget.current = element;
  }, [mouseDownTarget]);
  var handleClick = (0, _react.useCallback)(function (e) {
    var element = e.target;

    if (mouseDownTarget.current === element) {
      handleClose();
    }
  }, [mouseDownTarget, handleClose]);
  var shouldMountChildren = isVisible || keepChildrenMountedOnClose;
  return /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalContainer, {
    "data-testid": "modal-container",
    className: (0, _classnames["default"])('aries-modal', className),
    centering: centering,
    isOpen: isVisible,
    removeAnimation: removeAnimation,
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    ref: modalContainerRef
  }, /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalDialog, {
    className: "modal-dialog"
  }, /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalContentArea, (0, _extends2["default"])({
    className: "modal-content",
    "data-testid": "dialog",
    role: "dialog",
    "aria-modal": "true",
    hideContentArea: hideContentArea,
    centering: centering,
    fullscreen: fullscreen,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    tabIndex: 0,
    isOpen: isVisible,
    removeAnimation: removeAnimation,
    size: size,
    ref: modalContentAreaRef
  }, restProps), !hideHeader && /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalHeader, {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Close button",
    "data-testid": "close-button",
    type: "button",
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_components.CloseIcon, {
    color: hideContentArea ? 'white' : 'grey'
  }))), /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalBody, {
    className: "modal-body",
    hideContentArea: hideContentArea,
    centering: centering,
    ref: modalBodyRef
  }, shouldMountChildren && children), footer !== undefined && /*#__PURE__*/_react["default"].createElement(_ModalStyle.ModalFooter, {
    ref: modalFooterRef,
    className: "modal-footer",
    isChildrenInMultiLines: isFooterChildrenInMultiLines
  }, footer))));
};

exports.Modal = Modal;
Modal.defaultProps = {
  onClose: function onClose() {
    return undefined;
  },
  size: 'm',
  hideContentArea: false,
  hideHeader: false,
  removeAnimation: false,
  centering: false,
  fullscreen: false,
  keepChildrenMountedOnClose: false
};
var _default = Modal;
exports["default"] = _default;