"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ToggleBall = exports.Toggle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var DEFAULTS = {
  activeBackgroundColor: _Colors.SecondaryColor.actionblue,
  inactiveBackgroundColor: _Colors.Greyscale.grey,
  inactiveBallColor: _Colors.Greyscale.white,
  activeBallColor: _Colors.Greyscale.white
};

var Toggle = _styledComponents["default"].button.withConfig({
  displayName: "Styles__Toggle",
  componentId: "sc-bsue54-0"
})(["cursor:pointer;display:flex;align-items:center;overflow:hidden;position:relative;transform:translate3d(0,0,0);background-color:", ";height:25px;width:56px;border-radius:14px;padding:0px;border:none;"], function (_ref) {
  var active = _ref.active;
  return active ? DEFAULTS.activeBackgroundColor : DEFAULTS.inactiveBackgroundColor;
});

exports.Toggle = Toggle;

var ToggleBall = _styledComponents["default"].div.withConfig({
  displayName: "Styles__ToggleBall",
  componentId: "sc-bsue54-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;transition:transform 0.3s cubic-bezier(1,0.19,0.15,0.7);transition-delay:0.1s;background-color:", ";height:19px;width:19px;margin:3px;transform:", ";&:active{background-color:", ";}"], DEFAULTS.inactiveBallColor, function (props) {
  return props.active ? "translateX(31px)" : 'translateX(0px)';
}, DEFAULTS.activeBallColor);

exports.ToggleBall = ToggleBall;