"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports._IndicatorButton = exports.ToggleButton = exports.Menu = exports.LoadingIndicator = exports.Label = exports.Item = exports.Input = exports.IndicatorsContainer = exports.HelperText = exports.GroupHeading = exports.GroupContainer = exports.Group = exports.EmptyList = exports.Container = exports.Combobox = exports.ClearButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Loading = _interopRequireDefault(require("../../General/Loading"));

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var Container = _styledComponents["default"].div.withConfig({
  displayName: "SelectStyle__Container",
  componentId: "sc-qr1jv6-0"
})(["position:relative;font-size:16px;"]);

exports.Container = Container;

var Label = _styledComponents["default"].label.withConfig({
  displayName: "SelectStyle__Label",
  componentId: "sc-qr1jv6-1"
})(["display:block;margin-bottom:8px;color:", ";font-weight:500;&[data-active='true']{color:", ";}&[data-disabled='true']{color:", ";}&[data-invalid='true']{color:", ";}"], _Colors.Greyscale.devilsgrey, _Colors.SecondaryColor.actionblue, _Colors.Greyscale.lightgrey, _Colors.PrimaryColor.glintsred);

exports.Label = Label;

var Combobox = _styledComponents["default"].div.withConfig({
  displayName: "SelectStyle__Combobox",
  componentId: "sc-qr1jv6-2"
})(["display:grid;grid-template-columns:1fr auto;grid-column-gap:0.75em;padding:0.75em 1em 0.75em 1em;border-radius:0.5em;background-color:#ebf5fa;:hover{background-color:#d6eaf2;}&[aria-expanded='true'],&[data-active='true']{background-color:#c2e0ed;}&[data-disabled='true']{background-color:", ";}&[data-invalid='true']{background-color:#feeeee;}"], _Colors.Greyscale.softgrey);

exports.Combobox = Combobox;

var Input = _styledComponents["default"].input.withConfig({
  displayName: "SelectStyle__Input",
  componentId: "sc-qr1jv6-3"
})(["border:none;background-color:transparent;outline:none;color:", ";font-size:inherit;text-overflow:ellipsis;&:not([value='']){color:black;}:disabled::placeholder{color:", ";}"], _Colors.Greyscale.devilsgrey, _Colors.Greyscale.lightgrey);

exports.Input = Input;

var IndicatorsContainer = _styledComponents["default"].div.withConfig({
  displayName: "SelectStyle__IndicatorsContainer",
  componentId: "sc-qr1jv6-4"
})(["display:flex;flex-direction:row;>:not(:last-child){margin-right:0.75em;}"]);

exports.IndicatorsContainer = IndicatorsContainer;

var _IndicatorButton = _styledComponents["default"].button.withConfig({
  displayName: "SelectStyle___IndicatorButton",
  componentId: "sc-qr1jv6-5"
})(["padding:0;border:none;background:none;color:", ";font-size:inherit;"], _Colors.Greyscale.devilsgrey);

exports._IndicatorButton = _IndicatorButton;
var ClearButton = (0, _styledComponents["default"])(_IndicatorButton).withConfig({
  displayName: "SelectStyle__ClearButton",
  componentId: "sc-qr1jv6-6"
})([""]);
exports.ClearButton = ClearButton;
var ToggleButton = (0, _styledComponents["default"])(_IndicatorButton).withConfig({
  displayName: "SelectStyle__ToggleButton",
  componentId: "sc-qr1jv6-7"
})([""]);
exports.ToggleButton = ToggleButton;
var LoadingIndicator = (0, _styledComponents["default"])(_Loading["default"]).withConfig({
  displayName: "SelectStyle__LoadingIndicator",
  componentId: "sc-qr1jv6-8"
})(["align-items:center;font-size:0.5625em;"]);
exports.LoadingIndicator = LoadingIndicator;

var Menu = _styledComponents["default"].ul.withConfig({
  displayName: "SelectStyle__Menu",
  componentId: "sc-qr1jv6-9"
})(["margin-top:4px;position:absolute;width:100%;padding:0.5em 0 0.5em 0;border:1px solid #eeeeee;border-radius:0.5em;box-shadow:", ";background-color:white;z-index:1;[aria-expanded='false'] + &{visibility:hidden;}"], _Shadow.Shadow.down3);

exports.Menu = Menu;

var Item = _styledComponents["default"].li.withConfig({
  displayName: "SelectStyle__Item",
  componentId: "sc-qr1jv6-10"
})(["padding:0.5em 1em;list-style-type:none;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&[aria-selected='true']{background-color:", ";color:", ";}&[disabled]{background-color:transparent;color:", ";cursor:not-allowed;}"], _Colors.Greyscale.softgrey, _Colors.SecondaryColor.actionblue, _Colors.Greyscale.lightgrey);

exports.Item = Item;

var EmptyList = _styledComponents["default"].li.withConfig({
  displayName: "SelectStyle__EmptyList",
  componentId: "sc-qr1jv6-11"
})(["padding:0.5em 1em;list-style-type:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";cursor:not-allowed;"], _Colors.Greyscale.lightgrey);

exports.EmptyList = EmptyList;

var HelperText = _styledComponents["default"].span.withConfig({
  displayName: "SelectStyle__HelperText",
  componentId: "sc-qr1jv6-12"
})(["margin-top:4px;color:", ";font-size:0.875em;&[data-invalid='true']{color:", ";}"], _Colors.Greyscale.devilsgrey, _Colors.PrimaryColor.glintsred);

exports.HelperText = HelperText;

var GroupContainer = _styledComponents["default"].li.withConfig({
  displayName: "SelectStyle__GroupContainer",
  componentId: "sc-qr1jv6-13"
})(["margin-bottom:0.5em;padding:0;list-style-type:none;"]);

exports.GroupContainer = GroupContainer;

var Group = _styledComponents["default"].ul.withConfig({
  displayName: "SelectStyle__Group",
  componentId: "sc-qr1jv6-14"
})(["padding:0;"]);

exports.Group = Group;

var GroupHeading = _styledComponents["default"].li.withConfig({
  displayName: "SelectStyle__GroupHeading",
  componentId: "sc-qr1jv6-15"
})(["padding:0.5em 1em;list-style-type:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";font-size:0.75em;text-transform:uppercase;"], _Colors.Greyscale.devilsgrey);

exports.GroupHeading = GroupHeading;