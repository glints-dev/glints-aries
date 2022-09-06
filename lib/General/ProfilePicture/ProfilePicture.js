"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../Icon/components");

var _ProfilePictureStyle = require("./ProfilePictureStyle");

var _excluded = ["editable", "children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProfilePicture = function ProfilePicture(_ref) {
  var editable = _ref.editable,
      children = _ref.children,
      className = _ref.className,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _React$useState = React.useState(false),
      isHover = _React$useState[0],
      setIsHover = _React$useState[1];

  var handleMouseEnter = function handleMouseEnter() {
    if (editable) {
      setIsHover(true);
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (editable) {
      setIsHover(false);
    }
  };

  return /*#__PURE__*/React.createElement(_ProfilePictureStyle.ProfilePictureContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-profile', className),
    role: editable ? 'button' : 'presentation',
    "aria-label": "Profile Picture",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    tabIndex: editable ? 0 : undefined
  }, defaultProps), /*#__PURE__*/React.createElement(_ProfilePictureStyle.ProfilePictureContent, {
    editable: editable,
    tabIndex: editable ? -1 : undefined
  }, isHover && /*#__PURE__*/React.createElement(_components.EditIcon, {
    color: "white"
  }), children));
};

var _default = ProfilePicture;
exports["default"] = _default;