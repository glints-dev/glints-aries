"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Alert = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../Icon/components");

var _AlertStyle = require("./AlertStyle");

var _Colors = require("../../Utils/Colors");

var _lodash = require("lodash");

var _DelayedUnmount = require("../../Utils/DelayedUnmount");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Alert = function Alert(_ref) {
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

  var isVisible = (0, _lodash.isUndefined)(externalIsVisible) ? internalIsVisible : externalIsVisible;

  var internalOnClose = function internalOnClose() {
    return setInternalIsVisible(false);
  };

  var onClose = (0, _lodash.isUndefined)(externalOnClose) ? internalOnClose : externalOnClose;
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
          AlertTypeIcon: _components.CheckmarkSolidIcon,
          alertColor: _Colors.SecondaryColor.darkgreen
        };

      case 'warning':
        return {
          AlertTypeIcon: _components.WarningCircleSolidIcon,
          alertColor: _Colors.SecondaryColor.orange
        };

      case 'danger':
        return {
          AlertTypeIcon: _components.WarningCircleSolidIcon,
          alertColor: _Colors.PrimaryColor.glintsred
        };

      case 'info':
      default:
        return {
          AlertTypeIcon: _components.InfoSolidIcon,
          alertColor: _Colors.SecondaryColor.actionblue
        };
    }
  }, [type]),
      AlertTypeIcon = _React$useMemo.AlertTypeIcon,
      alertColor = _React$useMemo.alertColor;

  return (
    /*#__PURE__*/
    // The delay is set to 290ms because the fade-out animation takes 300ms.
    // Setting them to the same value creates a visual glitch.
    React.createElement(_DelayedUnmount.DelayedUnmount, {
      mount: isVisible,
      delay: 290
    }, /*#__PURE__*/React.createElement(_AlertStyle.AlertContainer, {
      className: (0, _classnames["default"])('aries-alert', className),
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
    }, /*#__PURE__*/React.createElement(_AlertStyle.AlertIcon, null, /*#__PURE__*/React.createElement(AlertTypeIcon, {
      color: alertColor
    })), /*#__PURE__*/React.createElement(_AlertStyle.AlertMessage, {
      className: "alert-message"
    }, message), /*#__PURE__*/React.createElement(_AlertStyle.AlertClose, {
      className: "alert-close",
      role: "button",
      "aria-label": "Press Escape or Enter button to close alert",
      title: "Close alert",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(_components.CloseIcon, {
      color: _Colors.Greyscale.devilsgrey
    }))))
  );
};

exports.Alert = Alert;
var _default = Alert;
exports["default"] = _default;