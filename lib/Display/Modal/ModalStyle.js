"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SIZES = exports.ModalHeader = exports.ModalFooter = exports.ModalDialog = exports.ModalContentArea = exports.ModalContainer = exports.ModalBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../../Utils/Colors");

var SIZES = {
  s: 300,
  m: 500,
  l: 800,
  xl: 920,
  "default": 500
};
exports.SIZES = SIZES;

var ModalContainer = _styledComponents["default"].div.withConfig({
  displayName: "ModalStyle__ModalContainer",
  componentId: "sc-bg1vyz-0"
})(["visibility:", ";position:fixed;display:flex;justify-content:center;align-items:", ";top:0;right:0;bottom:0;left:0;z-index:1001;background:rgba(0,0,0,0.65);overflow:auto;", ""], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'visible' : 'hidden';
}, function (_ref2) {
  var centering = _ref2.centering;
  return centering && 'center';
}, function (_ref3) {
  var removeAnimation = _ref3.removeAnimation,
      isOpen = _ref3.isOpen;

  if (!removeAnimation) {
    return "\n        opacity: " + (isOpen ? '1' : '0') + ";\n        transform: " + (isOpen ? 'scale(1)' : 'scale(0.98)') + ";\n        transform-origin: center;\n        transition: " + (isOpen ? 'all .2s ease-in' : 'all .15s ease-out') + ";\n      ";
  }
});

exports.ModalContainer = ModalContainer;

var ModalDialog = _styledComponents["default"].div.withConfig({
  displayName: "ModalStyle__ModalDialog",
  componentId: "sc-bg1vyz-1"
})(["position:relative;"]);

exports.ModalDialog = ModalDialog;

var ModalHeader = _styledComponents["default"].header.withConfig({
  displayName: "ModalStyle__ModalHeader",
  componentId: "sc-bg1vyz-2"
})(["display:flex;justify-content:space-between;align-items:center;align-content:center;font-size:1.6em;border-bottom:1px solid ", ";padding:16px;h3{font-size:0.8em;text-transform:uppercase;margin:0;margin-right:36px;}button{display:flex;background:transparent;border:none;cursor:pointer;padding:0;width:15px;}"], _Colors.Greyscale.lightgrey);

exports.ModalHeader = ModalHeader;

var ModalBody = _styledComponents["default"].section.withConfig({
  displayName: "ModalStyle__ModalBody",
  componentId: "sc-bg1vyz-3"
})(["position:relative;", " padding:", ";@media ", "{padding:", ";}"], function (_ref4) {
  var centering = _ref4.centering;

  if (centering) {
    return "\n        max-height: 300px;\n        overflow: auto;\n      ";
  }
}, function (_ref5) {
  var hideContentArea = _ref5.hideContentArea;
  return hideContentArea ? '0' : '20px 30px';
}, _StyleConfig.Device.mobileM, function (_ref6) {
  var hideContentArea = _ref6.hideContentArea;
  return hideContentArea ? '0' : '20px 16px';
});

exports.ModalBody = ModalBody;

var ModalFooter = _styledComponents["default"].footer.withConfig({
  displayName: "ModalStyle__ModalFooter",
  componentId: "sc-bg1vyz-4"
})(["position:relative;display:flex;flex-direction:row;flex-wrap:wrap;padding:16px 30px;justify-content:flex-end;border-top:1px solid ", ";@media ", "{padding:16px;}", ""], _Colors.Greyscale.lightgrey, _StyleConfig.Device.mobileM, function (_ref7) {
  var isChildrenInMultiLines = _ref7.isChildrenInMultiLines;

  if (isChildrenInMultiLines) {
    return "\n        flex-direction: column-reverse;\n\n        > * {\n          flex-grow: 1;\n\n          &:nth-child(2) {\n            margin-bottom: 10px; \n          }\n\n          button {\n            width: 100%;\n          }\n        }\n      ";
  }

  return "\n      > *:nth-child(2) {\n        margin-left: 10px;\n      }\n    ";
});

exports.ModalFooter = ModalFooter;

var ModalContentArea = _styledComponents["default"].div.withConfig({
  displayName: "ModalStyle__ModalContentArea",
  componentId: "sc-bg1vyz-5"
})(["position:relative;background:", ";margin:120px auto;max-width:95vw;outline:none;", " ", " ", " @media ", "{width:95vw;}", ""], function (_ref8) {
  var hideContentArea = _ref8.hideContentArea;
  return hideContentArea ? 'transparent' : "" + _Colors.Greyscale.white;
}, function (_ref9) {
  var size = _ref9.size;

  switch (size) {
    case 's':
      return "\n          width: " + SIZES.s + "px;\n        ";

    case 'm':
      return "\n          width: " + SIZES.m + "px;\n        ";

    case 'l':
      return "\n          width: " + SIZES.l + "px;\n        ";

    case 'xl':
      return "\n          width: " + SIZES.xl + "px;\n        ";

    default:
      return "\n          width: " + SIZES["default"] + "px;\n        ";
  }
}, function (_ref10) {
  var centering = _ref10.centering;

  if (centering) {
    return "\n        display: flex;\n        flex-direction: column;\n        max-height: 85vh;\n      ";
  }
}, function (_ref11) {
  var fullscreen = _ref11.fullscreen;

  if (fullscreen) {
    return "\n        display: flex;\n        flex-direction: column;\n        max-width: none;\n        max-height: none;\n        min-width: 100vw;\n        min-height: 100vh;\n        margin: 0;\n\n        " + ModalBody + " {\n          overflow: auto;\n        }\n\n        " + ModalFooter + " {\n          margin-top: auto;\n        }\n      ";
  }
}, _StyleConfig.Device.mobileM, function (_ref12) {
  var removeAnimation = _ref12.removeAnimation,
      isOpen = _ref12.isOpen;

  if (!removeAnimation) {
    return "\n        opacity: " + (isOpen ? '1' : '0') + ";\n        transform: " + (isOpen ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)') + ";\n        transition: " + (isOpen ? 'all .25s ease-in' : 'all .25s ease-out') + ";\n      ";
  }
});

exports.ModalContentArea = ModalContentArea;