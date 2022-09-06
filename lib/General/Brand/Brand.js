"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BrandStyle = require("./BrandStyle");

var _excluded = ["alt", "asset", "className", "rightClickURL", "onContextMenu"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GlintsBlack = require('../../../assets/image/glints-logo-black.svg');

var GlintsWhite = require('../../../assets/image/glints-logo-white.svg');

var Brand = function Brand(_ref) {
  var alt = _ref.alt,
      asset = _ref.asset,
      className = _ref.className,
      rightClickURL = _ref.rightClickURL,
      onContextMenu = _ref.onContextMenu,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var handleRightClick = function handleRightClick(e) {
    if (rightClickURL) {
      e.preventDefault();

      if (onContextMenu !== undefined) {
        onContextMenu();
      }

      window.location.href = rightClickURL;
    }
  };

  var srcAsset = '';

  if (asset === 'glints-black') {
    srcAsset = GlintsBlack;
  } else if (asset === 'glints-white') {
    srcAsset = GlintsWhite;
  } else {
    srcAsset = asset;
  }

  return /*#__PURE__*/React.createElement(_BrandStyle.BrandContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-brand', className),
    role: "presentation",
    tabIndex: 0,
    onContextMenu: handleRightClick
  }, defaultProps), /*#__PURE__*/React.createElement(_BrandStyle.BrandImage, {
    className: "brand-image",
    src: srcAsset,
    alt: alt,
    tabIndex: -1
  }));
};

var _default = Brand;
exports["default"] = _default;