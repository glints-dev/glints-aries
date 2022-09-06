"use strict";

exports.__esModule = true;
exports.TopRowAddon = exports.TopRow = exports.SignificantNumberInput = exports.PhoneNumberInputContainer = exports.NoOptions = exports.Label = exports.GroupHeader = exports.Error = exports.CallingCodeOptionsList = exports.CallingCodeOptionLabel = exports.CallingCodeOptionCallingCode = exports.CallingCodeOption = exports.CallingCodeInputToggle = exports.CallingCodeInputOpenIndicator = exports.CallingCodeInputLoading = exports.CallingCodeInput = exports.CallingCodeFilterInputGroup = exports.CallingCodeFilterInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var _Loading = require("../../General/Loading");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PhoneNumberInputContainer = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__PhoneNumberInputContainer",
  componentId: "sc-80kraj-0"
})(["position:relative;"]);

exports.PhoneNumberInputContainer = PhoneNumberInputContainer;

var TopRow = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__TopRow",
  componentId: "sc-80kraj-1"
})(["display:flex;border:2px solid ", ";align-items:center;&:hover{border:2px solid ", ";}&[data-invalid='true']{border:2px solid ", ";}"], _Colors.Greyscale.lightgrey, _Colors.SecondaryColor.actionblue, _Colors.PrimaryColor.glintsred);

exports.TopRow = TopRow;

var CallingCodeInputToggle = _styledComponents["default"].button.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputToggle",
  componentId: "sc-80kraj-2"
})(["border:none;background:none;padding:12px;padding-right:0;cursor:text;font-size:16px;display:flex;align-items:bottom;"]);

exports.CallingCodeInputToggle = CallingCodeInputToggle;

var CallingCodeInputOpenIndicator = _styledComponents["default"].span.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputOpenIndicator",
  componentId: "sc-80kraj-3"
})(["margin-left:8px;padding-right:8px;border-right:1px solid ", ";cursor:pointer;svg{margin-top:-2px;}"], _Colors.Greyscale.lightgrey);

exports.CallingCodeInputOpenIndicator = CallingCodeInputOpenIndicator;

var Label = _styledComponents["default"].label.withConfig({
  displayName: "PhoneNumberInputStyles__Label",
  componentId: "sc-80kraj-4"
})(["position:absolute;left:0.5em;top:-0.5em;visibility:hidden;padding:0 0.3em;background:white;color:", ";"], _Colors.Greyscale.devilsgrey);

exports.Label = Label;
var visibleLabel = (0, _styledComponents.css)(["+ ", "{visibility:visible;color:#646464;font-size:12px;}"], Label);

var SignificantNumberInput = _styledComponents["default"].input.withConfig({
  displayName: "PhoneNumberInputStyles__SignificantNumberInput",
  componentId: "sc-80kraj-5"
})(["border:none;width:100%;font-size:16px;padding:12px;&:focus{outline:2px solid ", ";::placeholder{color:transparent;}", "}", " &[data-invalid='true']:focus{outline:2px solid ", ";}"], _Colors.SecondaryColor.actionblue, visibleLabel, function (_ref) {
  var value = _ref.value;
  return value && visibleLabel;
}, _Colors.PrimaryColor.glintsred);

exports.SignificantNumberInput = SignificantNumberInput;

var TopRowAddon = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__TopRowAddon",
  componentId: "sc-80kraj-6"
})(["position:absolute;right:8px;top:50%;transform:translateY(-50%);"]);

exports.TopRowAddon = TopRowAddon;

var CallingCodeInput = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInput",
  componentId: "sc-80kraj-7"
})(["position:absolute;display:none;z-index:2;background:white;margin-top:4px;width:100%;border:1px solid ", ";box-shadow:", ";", ""], _Colors.Greyscale.lightgrey, _Shadow.Shadow.down1, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen && (0, _styledComponents.css)(["display:initial;"]);
});

exports.CallingCodeInput = CallingCodeInput;
var CALLING_CODE_INPUT_MARGIN = '8px';

var CallingCodeFilterInputGroup = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeFilterInputGroup",
  componentId: "sc-80kraj-8"
})(["position:relative;width:90%;width:calc(100% - 2 * ", ");margin:", ";"], CALLING_CODE_INPUT_MARGIN, CALLING_CODE_INPUT_MARGIN);

exports.CallingCodeFilterInputGroup = CallingCodeFilterInputGroup;

var CallingCodeFilterInput = _styledComponents["default"].input.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeFilterInput",
  componentId: "sc-80kraj-9"
})(["width:100%;border:2px solid ", ";padding:12px;font-size:14px;box-sizing:border-box;&:focus{border:2px solid ", ";outline:none;}"], _Colors.Greyscale.lightgrey, _Colors.SecondaryColor.actionblue);

exports.CallingCodeFilterInput = CallingCodeFilterInput;
var CallingCodeInputLoading = (0, _styledComponents["default"])(_Loading.Loading).withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputLoading",
  componentId: "sc-80kraj-10"
})(["position:absolute;right:8px;top:50%;transform:translateY(-50%);"]);
exports.CallingCodeInputLoading = CallingCodeInputLoading;

var CallingCodeOptionsList = _styledComponents["default"].ol.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionsList",
  componentId: "sc-80kraj-11"
})(["list-style:none;margin:0;padding:0;max-height:260px;overflow:auto;font-size:16px;"]);

exports.CallingCodeOptionsList = CallingCodeOptionsList;

var getGroupHeaderStyles = function getGroupHeaderStyles(_ref3) {
  var withGroupHeader = _ref3.withGroupHeader;
  return withGroupHeader && (0, _styledComponents.css)(["content:'", "';display:block;padding:4px 8px;color:", ";font-size:8px;border-bottom:1px solid ", ";text-transform:uppercase;background:white;cursor:default;"], withGroupHeader, _Colors.Greyscale.devilsgrey, _Colors.Greyscale.softgrey);
};

var CallingCodeOption = _styledComponents["default"].li.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOption",
  componentId: "sc-80kraj-12"
})(["cursor:pointer;&:hover{color:", ";background:", ";}&[aria-selected='true']{color:", ";background:", ";}::before{", "}"], _Colors.SecondaryColor.actionblue, _Colors.Greyscale.softgrey, _Colors.SecondaryColor.actionblue, _Colors.Greyscale.softgrey, getGroupHeaderStyles);

exports.CallingCodeOption = CallingCodeOption;

var CallingCodeOptionCallingCode = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionCallingCode",
  componentId: "sc-80kraj-13"
})(["min-width:48px;margin-right:8px;padding:8px;padding-right:0;"]);

exports.CallingCodeOptionCallingCode = CallingCodeOptionCallingCode;

var CallingCodeOptionLabel = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionLabel",
  componentId: "sc-80kraj-14"
})(["width:100%;padding:8px;padding-left:0;color:", ";&:hover{color:inherit;}"], _Colors.Greyscale.devilsgrey);

exports.CallingCodeOptionLabel = CallingCodeOptionLabel;

var GroupHeader = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__GroupHeader",
  componentId: "sc-80kraj-15"
})(["padding:4px 8px;color:", ";font-size:8px;border-bottom:1px solid ", ";text-transform:uppercase;"], _Colors.Greyscale.devilsgrey, _Colors.Greyscale.softgrey);

exports.GroupHeader = GroupHeader;

var NoOptions = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__NoOptions",
  componentId: "sc-80kraj-16"
})(["padding:24px 8px;text-align:center;color:", ";font-size:14px;"], _Colors.Greyscale.devilsgrey);

exports.NoOptions = NoOptions;

var Error = _styledComponents["default"].div.withConfig({
  displayName: "PhoneNumberInputStyles__Error",
  componentId: "sc-80kraj-17"
})(["margin-top:8px;color:", ";"], _Colors.PrimaryColor.glintsred);

exports.Error = Error;