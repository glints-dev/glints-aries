"use strict";

exports.__esModule = true;
exports.SliderItemWrapper = exports.SliderContentWrapper = exports.SliderContainer = exports.RightArrowContainer = exports.NavigationItem = exports.NavigationContainer = exports.LeftArrowContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var arrow = (0, _styledComponents.css)(["position:absolute;display:flex;top:50%;transform:translateY(-50%);cursor:pointer;font-size:2em;"]);

var SliderContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SliderStyle__SliderContentWrapper",
  componentId: "sc-1wof4f4-0"
})(["position:relative;display:flex;align-items:center;"]);

exports.SliderContentWrapper = SliderContentWrapper;

var SliderItemWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SliderStyle__SliderItemWrapper",
  componentId: "sc-1wof4f4-1"
})(["display:inline-flex;flex:0 0 auto;justify-content:center;width:100%;white-space:normal;"]);

exports.SliderItemWrapper = SliderItemWrapper;

var LeftArrowContainer = _styledComponents["default"].div.withConfig({
  displayName: "SliderStyle__LeftArrowContainer",
  componentId: "sc-1wof4f4-2"
})(["", ";left:0;cursor:", ";"], arrow, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});

exports.LeftArrowContainer = LeftArrowContainer;

var RightArrowContainer = _styledComponents["default"].div.withConfig({
  displayName: "SliderStyle__RightArrowContainer",
  componentId: "sc-1wof4f4-3"
})(["", ";right:0;cursor:", ";"], arrow, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});

exports.RightArrowContainer = RightArrowContainer;

var SliderContainer = _styledComponents["default"].div.withConfig({
  displayName: "SliderStyle__SliderContainer",
  componentId: "sc-1wof4f4-4"
})(["position:relative;white-space:nowrap;overflow:hidden;outline:none;", "{padding:", ";}"], SliderItemWrapper, function (_ref3) {
  var fullContent = _ref3.fullContent;
  return !fullContent && '2em 4em';
});

exports.SliderContainer = SliderContainer;

var NavigationContainer = _styledComponents["default"].ul.withConfig({
  displayName: "SliderStyle__NavigationContainer",
  componentId: "sc-1wof4f4-5"
})(["position:absolute;bottom:0;width:100%;padding:0;margin:10px 0;display:flex;justify-content:center;align-items:center;"]);

exports.NavigationContainer = NavigationContainer;

var NavigationItem = _styledComponents["default"].li.withConfig({
  displayName: "SliderStyle__NavigationItem",
  componentId: "sc-1wof4f4-6"
})(["display:inline-flex;width:6px;height:6px;background:", ";border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,0.15);margin:0 3px;cursor:pointer;&.active{width:20px;height:6px;border-radius:8px;background:", ";}@media (min-width:", "px){width:8px;height:8px;margin:0 4px;&.active{width:30px;height:10px;}}"], _Colors.Greyscale.lightgrey, _Colors.PrimaryColor.glintsyellow, _StyleConfig.ScreenSize.tablet);

exports.NavigationItem = NavigationItem;