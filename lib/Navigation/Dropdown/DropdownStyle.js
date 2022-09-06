"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconWrapper = exports.DropdownWrapper = exports.DropdownItemWrapper = exports.DropdownHeader = exports.DropdownContainer = exports.DropdownBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var underLine = "\n  position: relative;\n  \n  &:hover {\n    color: black;\n    background-color: rgba(255, 255, 255, 1);\n    &:after {\n      transform: scaleX(1);\n    }\n  }\n    \n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background: black;\n    bottom: -5px;\n    left: 0px;\n    transition: all .2s ease-in-out;\n    transform: scaleX(0);\n  }\n";
var underLineAlwaysShow = "\n  position: relative;\n  \n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background: black;\n    bottom: -5px;\n    left: 0px;\n    transition: all .2s ease-in-out;\n    transform: scaleX(1);\n  }\n";

var DropdownWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DropdownStyle__DropdownWrapper",
  componentId: "sc-1sc3c6h-0"
})(["display:inline;outline:none;"]);

exports.DropdownWrapper = DropdownWrapper;

var DropdownContainer = _styledComponents["default"].div.withConfig({
  displayName: "DropdownStyle__DropdownContainer",
  componentId: "sc-1sc3c6h-1"
})(["display:inline;position:relative;&:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], DropdownWrapper);

exports.DropdownContainer = DropdownContainer;

var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "DropdownStyle__DropdownHeader",
  componentId: "sc-1sc3c6h-2"
})(["position:relative;display:inline-flex;align-items:center;cursor:", ";color:", ";transition:all 0.4s;", ";svg{fill:", ";}svg:first-child{margin-right:0.6em;}svg:last-child{margin-left:0.6em;}"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && "" + _Colors.Greyscale.grey;
}, function (_ref3) {
  var showHoverLine = _ref3.showHoverLine,
      isOpen = _ref3.isOpen,
      disabled = _ref3.disabled,
      showFullWidth = _ref3.showFullWidth;

  if (showHoverLine) {
    if (isOpen) {
      return "\n          " + underLineAlwaysShow + "\n        ";
    }

    return "\n        " + underLine + "\n      ";
  }

  if (showFullWidth) {
    return "\n        width: 100%;\n        padding: 10px 0 10px 20px;\n      ";
  }

  return "\n      padding: 1em 1.4em;\n      background: " + (isOpen || disabled ? "" + _Colors.Greyscale.softgrey : null) + ";\n      &:hover {\n        background: " + _Colors.Greyscale.softgrey + ";\n        transition: all .4s;\n      }";
}, function (_ref4) {
  var disabled = _ref4.disabled,
      iconDefaultColor = _ref4.iconDefaultColor;
  return disabled ? _Colors.Greyscale.grey : iconDefaultColor;
});

exports.DropdownHeader = DropdownHeader;

var DropdownBody = _styledComponents["default"].ul.withConfig({
  displayName: "DropdownStyle__DropdownBody",
  componentId: "sc-1sc3c6h-3"
})(["position:absolute;visibility:", ";opacity:", ";transform:", ";transform-origin:center top;transition:", ";background:", ";box-shadow:", ";z-index:1000;padding:0;margin:0;white-space:", ";", ";", ";li{list-style-type:none;}"], function (_ref5) {
  var open = _ref5.open;
  return open ? 'visible' : 'hidden';
}, function (_ref6) {
  var open = _ref6.open;
  return open ? '1' : '0';
}, function (_ref7) {
  var open = _ref7.open;
  return open ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref8) {
  var open = _ref8.open;
  return open ? 'all .2s ease' : 'all .1s ease';
}, _Colors.Greyscale.white, _Shadow.Shadow.down3, function (_ref9) {
  var noLineBreak = _ref9.noLineBreak;
  return noLineBreak ? 'normal' : 'nowrap';
}, function (_ref10) {
  var dropDownPlacement = _ref10.dropDownPlacement,
      showFullWidth = _ref10.showFullWidth;

  if (dropDownPlacement === 'right') {
    return "\n        right: 0;\n        width: auto;\n      ";
  }

  if (showFullWidth) {
    return "\n        width: calc(100% - 20px);\n        left: 10px;\n      ";
  }

  return "\n      left: 0;\n      width: auto;\n    ";
}, function (_ref11) {
  var showHoverLine = _ref11.showHoverLine;

  if (showHoverLine) {
    return "\n        margin-top: 13px;\n      ";
  }

  return null;
});

exports.DropdownBody = DropdownBody;

var DropdownItemWrapper = _styledComponents["default"].li.withConfig({
  displayName: "DropdownStyle__DropdownItemWrapper",
  componentId: "sc-1sc3c6h-4"
})(["position:relative;padding:1em 1.4em;cursor:pointer;", " &.active{background:", ";}&:hover > ", "{", "}"], function (_ref12) {
  var showFullWidth = _ref12.showFullWidth;

  if (showFullWidth) {
    return "\n        width: 100%;\n      ";
  }

  return null;
}, _Colors.Greyscale.softgrey, DropdownHeader, underLine);

exports.DropdownItemWrapper = DropdownItemWrapper;

var IconWrapper = _styledComponents["default"].span.withConfig({
  displayName: "DropdownStyle__IconWrapper",
  componentId: "sc-1sc3c6h-5"
})(["display:flex;svg{transform:", ";transition:", ";}"], function (_ref13) {
  var isOpen = _ref13.isOpen;
  return isOpen ? 'rotate(180deg)' : 'rotate(0)';
}, function (_ref14) {
  var isOpen = _ref14.isOpen;
  return isOpen ? 'transform .5s;' : 'transform .5s';
});

exports.IconWrapper = IconWrapper;