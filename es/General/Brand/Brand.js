import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["alt", "asset", "className", "rightClickURL", "onContextMenu"];
import * as React from 'react';
import classNames from 'classnames';
import { BrandContainer, BrandImage } from './BrandStyle';

var GlintsBlack = require('../../../assets/image/glints-logo-black.svg');

var GlintsWhite = require('../../../assets/image/glints-logo-white.svg');

var Brand = function Brand(_ref) {
  var alt = _ref.alt,
      asset = _ref.asset,
      className = _ref.className,
      rightClickURL = _ref.rightClickURL,
      onContextMenu = _ref.onContextMenu,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

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

  return /*#__PURE__*/React.createElement(BrandContainer, _extends({
    className: classNames('aries-brand', className),
    role: "presentation",
    tabIndex: 0,
    onContextMenu: handleRightClick
  }, defaultProps), /*#__PURE__*/React.createElement(BrandImage, {
    className: "brand-image",
    src: srcAsset,
    alt: alt,
    tabIndex: -1
  }));
};

export default Brand;