"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PointingModalItemWrapper = exports.PointingModalHeaderWrapper = exports.PointingModalHeaderArrow = exports.PointingModalFooterWrapper = exports.PointingModalContainer = exports.PointingModalBodyWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var PointingModalContainer = _styledComponents["default"].div.withConfig({
  displayName: "PointingModalStyle__PointingModalContainer",
  componentId: "sc-wzvi3y-0"
})(["position:relative;background:", ";box-shadow:", ";outline:none;"], _Colors.Greyscale.white, _Shadow.Shadow.down2);

exports.PointingModalContainer = PointingModalContainer;

var PointingModalHeaderArrow = _styledComponents["default"].div.withConfig({
  displayName: "PointingModalStyle__PointingModalHeaderArrow",
  componentId: "sc-wzvi3y-1"
})(["position:absolute;right:1em;top:-0.7em;width:1.5em;height:1.5em;transform:rotate(45deg);background-color:white;box-shadow:-2px -2px 5px rgba(0,0,0,0.06);"]);

exports.PointingModalHeaderArrow = PointingModalHeaderArrow;

var PointingModalHeaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PointingModalStyle__PointingModalHeaderWrapper",
  componentId: "sc-wzvi3y-2"
})(["display:flex;align-items:center;padding:1.2em;> *:first-child{margin-left:0;}> *:last-child{margin-right:0;}> *{margin-left:0.5em;margin-right:0.5em;}.aries-modal-profile{font-weight:700;}span{font-size:1em;font-weight:500;}a{display:flex;color:", ";font-size:1.2em;margin:0;}"], _Colors.Greyscale.black);

exports.PointingModalHeaderWrapper = PointingModalHeaderWrapper;

var PointingModalBodyWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PointingModalStyle__PointingModalBodyWrapper",
  componentId: "sc-wzvi3y-3"
})(["position:relative;display:flex;flex-direction:column;ul{padding:1.2em 0;margin:0;}"]);

exports.PointingModalBodyWrapper = PointingModalBodyWrapper;

var PointingModalItemWrapper = _styledComponents["default"].li.withConfig({
  displayName: "PointingModalStyle__PointingModalItemWrapper",
  componentId: "sc-wzvi3y-4"
})(["font-weight:600;cursor:pointer;padding:0.5em 1.2em;list-style-type:none;&:last-child{margin-bottom:0;}*{cursor:pointer;color:", ";}&:hover{background:", ";}"], _Colors.Greyscale.black, _Colors.Greyscale.softgrey);

exports.PointingModalItemWrapper = PointingModalItemWrapper;

var PointingModalFooterWrapper = _styledComponents["default"].footer.withConfig({
  displayName: "PointingModalStyle__PointingModalFooterWrapper",
  componentId: "sc-wzvi3y-5"
})(["display:flex;position:relative;padding:1.2em;"]);

exports.PointingModalFooterWrapper = PointingModalFooterWrapper;