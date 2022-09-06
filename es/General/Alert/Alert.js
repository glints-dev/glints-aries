import * as React from 'react';
import classNames from 'classnames';
import { CheckmarkSolidIcon, WarningCircleSolidIcon, InfoSolidIcon, CloseIcon } from '../Icon/components';
import { AlertClose, AlertContainer, AlertIcon, AlertMessage } from './AlertStyle';
import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { isUndefined } from 'lodash';
import { DelayedUnmount } from '../../Utils/DelayedUnmount';
export var Alert = function Alert(_ref) {
  var externalIsVisible = _ref.isOpen,
      autoClose = _ref.autoClose,
      externalOnClose = _ref.onClose,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type,
      className = _ref.className,
      message = _ref.message;

  var _React$useState = React.useState(true),
      internalIsVisible = _React$useState[0],
      setInternalIsVisible = _React$useState[1];

  var isVisible = isUndefined(externalIsVisible) ? internalIsVisible : externalIsVisible;

  var internalOnClose = function internalOnClose() {
    return setInternalIsVisible(false);
  };

  var onClose = isUndefined(externalOnClose) ? internalOnClose : externalOnClose;
  React.useEffect(function () {
    if (isVisible && autoClose) {
      var timeout = setTimeout(onClose, autoClose);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [isVisible, autoClose, onClose]);
  var handleKeyDown = React.useCallback(function (onClose) {
    var listener = function listener(e) {
      if (e.keyCode === 13 || e.keyCode === 27) {
        onClose();
      }
    };

    return listener;
  }, []);

  var _React$useMemo = React.useMemo(function () {
    switch (type) {
      case 'success':
        return {
          AlertTypeIcon: CheckmarkSolidIcon,
          alertColor: SecondaryColor.darkgreen
        };

      case 'warning':
        return {
          AlertTypeIcon: WarningCircleSolidIcon,
          alertColor: SecondaryColor.orange
        };

      case 'danger':
        return {
          AlertTypeIcon: WarningCircleSolidIcon,
          alertColor: PrimaryColor.glintsred
        };

      case 'info':
      default:
        return {
          AlertTypeIcon: InfoSolidIcon,
          alertColor: SecondaryColor.actionblue
        };
    }
  }, [type]),
      AlertTypeIcon = _React$useMemo.AlertTypeIcon,
      alertColor = _React$useMemo.alertColor;

  return (
    /*#__PURE__*/
    // The delay is set to 290ms because the fade-out animation takes 300ms.
    // Setting them to the same value creates a visual glitch.
    React.createElement(DelayedUnmount, {
      mount: isVisible,
      delay: 290
    }, /*#__PURE__*/React.createElement(AlertContainer, {
      className: classNames('aries-alert', className),
      "data-type": type,
      role: "alertdialog",
      "aria-hidden": !isVisible,
      "data-open": isVisible,
      "aria-describedby": "alert-message",
      tabIndex: 0,
      onKeyDown: handleKeyDown(onClose),
      ref: function ref(node) {
        return node && node.focus();
      }
    }, /*#__PURE__*/React.createElement(AlertIcon, null, /*#__PURE__*/React.createElement(AlertTypeIcon, {
      color: alertColor
    })), /*#__PURE__*/React.createElement(AlertMessage, {
      className: "alert-message"
    }, message), /*#__PURE__*/React.createElement(AlertClose, {
      className: "alert-close",
      role: "button",
      "aria-label": "Press Escape or Enter button to close alert",
      title: "Close alert",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(CloseIcon, {
      color: Greyscale.devilsgrey
    }))))
  );
};
export default Alert;