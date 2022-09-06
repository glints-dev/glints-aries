import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["isVisible", "title", "onClose", "children", "className", "hideContentArea", "centering", "fullscreen", "removeAnimation", "footer", "size", "hideHeader", "keepChildrenMountedOnClose"];
import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { CloseIcon } from '../../General/Icon/components';
import { escEvent as createEscapeKeyEventListener } from '../../Utils/DomUtils';
import { checkIsChildrenInMultiLines } from './utils';
import { ModalContainer, ModalDialog, ModalContentArea, ModalHeader, ModalBody, ModalFooter } from './ModalStyle';
export var Modal = function Modal(_ref) {
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
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var modalContentAreaRef = useRef(null);
  var modalContainerRef = useRef(null);
  var modalBodyRef = useRef(null);
  var modalFooterRef = useRef(null);

  var _useState = useState(false),
      isFooterChildrenInMultiLines = _useState[0],
      setIsFooterChildrenInMultiLines = _useState[1];

  var handleClose = React.useCallback(function () {
    if (typeof onClose === 'function') {
      onClose();
    }
  }, [onClose]);
  useLayoutEffect(function () {
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
      disableBodyScroll(scrollableTarget);
    } else {
      // On modal close
      enableBodyScroll(scrollableTarget);
    }

    return function () {
      clearAllBodyScrollLocks();
    };
  }, [isVisible, centering, modalContainerRef]);
  useEffect(function () {
    var escapeKeyEventListener = createEscapeKeyEventListener(function () {
      if (isVisible) handleClose();
    });
    document.addEventListener('keydown', escapeKeyEventListener, false); // This function will be called on unmount and _before_ this effect is
    // re-executed because its dependencies changed. This gives us the chance
    // to clean up the existing escape key event listener.

    return function () {
      return document.removeEventListener('keydown', escapeKeyEventListener, false);
    };
  }, [isVisible, handleClose]);
  useLayoutEffect(function checkFooterResponsiveStyleOnMountAndOnWindowResize() {
    var checkIsFooterChildrenInMultiLines = function checkIsFooterChildrenInMultiLines() {
      var isChildrenInMultiLines = checkIsChildrenInMultiLines(modalFooterRef);
      setIsFooterChildrenInMultiLines(isChildrenInMultiLines);
    };

    var debouncedCheckFooter = debounce(checkIsFooterChildrenInMultiLines, 500);
    debouncedCheckFooter();
    window.addEventListener('resize', debouncedCheckFooter);
    return function () {
      return window.removeEventListener('resize', debouncedCheckFooter);
    };
  }, []); // To prevent the modal from closing
  // when a mousedown event occurs inside the ModalContentArea
  // but the subsequent mouseup event occurs outside

  var mouseDownTarget = useRef(null);
  var handleMouseDown = useCallback(function (e) {
    var element = e.target;
    mouseDownTarget.current = element;
  }, [mouseDownTarget]);
  var handleClick = useCallback(function (e) {
    var element = e.target;

    if (mouseDownTarget.current === element) {
      handleClose();
    }
  }, [mouseDownTarget, handleClose]);
  var shouldMountChildren = isVisible || keepChildrenMountedOnClose;
  return /*#__PURE__*/React.createElement(ModalContainer, {
    "data-testid": "modal-container",
    className: classNames('aries-modal', className),
    centering: centering,
    isOpen: isVisible,
    removeAnimation: removeAnimation,
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    ref: modalContainerRef
  }, /*#__PURE__*/React.createElement(ModalDialog, {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement(ModalContentArea, _extends({
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
  }, restProps), !hideHeader && /*#__PURE__*/React.createElement(ModalHeader, {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close button",
    "data-testid": "close-button",
    type: "button",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    color: hideContentArea ? 'white' : 'grey'
  }))), /*#__PURE__*/React.createElement(ModalBody, {
    className: "modal-body",
    hideContentArea: hideContentArea,
    centering: centering,
    ref: modalBodyRef
  }, shouldMountChildren && children), footer !== undefined && /*#__PURE__*/React.createElement(ModalFooter, {
    ref: modalFooterRef,
    className: "modal-footer",
    isChildrenInMultiLines: isFooterChildrenInMultiLines
  }, footer))));
};
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
export default Modal;