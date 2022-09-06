"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PointingModalStyle = require("./PointingModalStyle");

var _PointingModalHeader = _interopRequireDefault(require("./PointingModalHeader"));

var _PointingModalBody = _interopRequireDefault(require("./PointingModalBody"));

var _PointingModalItem = _interopRequireDefault(require("./PointingModalItem"));

var _PointingModalFooter = _interopRequireDefault(require("./PointingModalFooter"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PointingModal = function PointingModal(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  return /*#__PURE__*/React.createElement(_PointingModalStyle.PointingModalContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-pointingmodal', className),
    role: "dialog",
    "aria-modal": "true"
  }, defaultProps), /*#__PURE__*/React.createElement(_PointingModalStyle.PointingModalHeaderArrow, {
    role: "presentation"
  }), children);
};

PointingModal.Header = _PointingModalHeader["default"];
PointingModal.Header.displayName = 'PointingModal.Header';
PointingModal.Body = _PointingModalBody["default"];
PointingModal.Body.displayName = 'PointingModal.Body';
PointingModal.Item = _PointingModalItem["default"];
PointingModal.Item.displayName = 'PointingModal.Item';
PointingModal.Footer = _PointingModalFooter["default"];
PointingModal.Footer.displayName = 'PointingModal.Footer';
var _default = PointingModal;
exports["default"] = _default;