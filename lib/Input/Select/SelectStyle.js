"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SelectWrapper = exports.SelectListWrapper = exports.SelectLabel = exports.SelectItemWrapper = exports.SelectInput = exports.SelectErrorDefault = exports.SelectContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var SelectContainer = _styledComponents["default"].div.withConfig({
  displayName: "SelectStyle__SelectContainer",
  componentId: "sc-gv8n2w-0"
})(["flex-grow:1;position:relative;font-weight:normal;"]);

exports.SelectContainer = SelectContainer;

var SelectWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SelectStyle__SelectWrapper",
  componentId: "sc-gv8n2w-1"
})(["display:flex;align-items:center;.select-icon{font-size:", ";position:absolute;right:15px;display:flex;align-items:center;cursor:pointer;svg{transform:", ";transition:", ";}}"], function (_ref) {
  var small = _ref.small;
  return small ? '12px' : '15px';
}, function (_ref2) {
  var isFocus = _ref2.isFocus;
  return isFocus ? 'rotate(180deg)' : 'rotate(0)';
}, function (_ref3) {
  var isFocus = _ref3.isFocus;
  return isFocus ? 'transform .5s' : 'transform .5s';
});

exports.SelectWrapper = SelectWrapper;

var SelectLabel = _styledComponents["default"].label.withConfig({
  displayName: "SelectStyle__SelectLabel",
  componentId: "sc-gv8n2w-2"
})(["position:absolute;left:", ";background:", ";color:", ";transition:all .2s;pointer-events:none;font-size:", ";", " ", " ", ""], function (_ref4) {
  var small = _ref4.small;
  return small ? '16px' : '22px';
}, _Colors.Greyscale.white, function (_ref5) {
  var floating = _ref5.floating;
  return floating ? "" + _Colors.Greyscale.black : "" + _Colors.Greyscale.grey;
}, function (_ref6) {
  var small = _ref6.small;
  return small ? '14px' : '16px';
}, function (_ref7) {
  var floating = _ref7.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        top: 1em;\n        transform: translate3d(-15px, -20px, 0);\n        transition: all .2s;\n        font-size: 12px;\n      ";
  }
}, function (_ref8) {
  var floating = _ref8.floating,
      small = _ref8.small;

  if (floating && small) {
    return "\n        transform: translate3d(-10px, -20px, 0);\n      ";
  }
}, function (_ref9) {
  var status = _ref9.status,
      floating = _ref9.floating;

  if (status === 'error' && floating) {
    return "\n        color: " + _Colors.PrimaryColor.glintsred + ";\n      ";
  }
});

exports.SelectLabel = SelectLabel;

var SelectInput = _styledComponents["default"].input.withConfig({
  displayName: "SelectStyle__SelectInput",
  componentId: "sc-gv8n2w-3"
})(["width:100%;outline:none;height:", ";padding:", ";border:", ";transition:all .5s;font-size:", ";line-height:1.5;&::placeholder{color:", ";}", " ", " &:disabled{cursor:not-allowed;background:", ";+ ", "{", " color:", ";}&:hover{border:2px solid ", ";}}&:hover{border:2px solid ", ";transition:all .5s;", " + ", "{", "}}&:focus{border:2px solid ", ";", " + ", "{padding:0 5px;top:1em;transform:", ";transition:all .2s;color:", ";font-size:12px;", "}}"], function (_ref10) {
  var small = _ref10.small;
  return small ? '46px' : '53px';
}, function (_ref11) {
  var small = _ref11.small;
  return small ? '13px 40px 13px 15px' : '15px 42px 15px 20px';
}, function (_ref12) {
  var status = _ref12.status;
  return status === 'error' ? "2px solid " + _Colors.PrimaryColor.glintsred : "2px solid " + _Colors.Greyscale.grey;
}, function (_ref13) {
  var small = _ref13.small;
  return small ? '1em' : '1.1em';
}, _Colors.Greyscale.grey, function (_ref14) {
  var disableTyping = _ref14.disableTyping;

  if (disableTyping) {
    return "\n        color: transparent;\n        text-shadow: 0 0 0 black;\n        cursor: pointer;\n      ";
  }
}, function (_ref15) {
  var status = _ref15.status,
      floating = _ref15.floating;

  if (status === 'error') {
    if (floating) {
      return "\n          border: 2px solid " + _Colors.PrimaryColor.glintsred + ";\n        ";
    }
  }
}, _Colors.Greyscale.softgrey, SelectLabel, function (_ref16) {
  var floating = _ref16.floating;

  if (!floating) {
    return "\n              background: transparent;\n            ";
  }
}, _Colors.Greyscale.grey, _Colors.Greyscale.lightgrey, _Colors.SecondaryColor.actionblue, function (_ref17) {
  var status = _ref17.status;

  if (status === 'error') {
    return "\n          border: 2px solid " + _Colors.PrimaryColor.glintsred + ";\n        ";
  }
}, SelectLabel, function (_ref18) {
  var status = _ref18.status;

  if (status === 'error') {
    return "\n          color: " + _Colors.PrimaryColor.glintsred + ";\n        ";
  }
}, _Colors.SecondaryColor.actionblue, function (_ref19) {
  var status = _ref19.status;

  if (status === 'error') {
    return "\n          border: 2px solid " + _Colors.PrimaryColor.glintsred + ";\n        ";
  }
}, SelectLabel, function (_ref20) {
  var small = _ref20.small;
  return small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)';
}, _Colors.Greyscale.black, function (_ref21) {
  var status = _ref21.status;

  if (status === 'error') {
    return "\n          color: " + _Colors.PrimaryColor.glintsred + ";\n        ";
  }
});

exports.SelectInput = SelectInput;

var SelectListWrapper = _styledComponents["default"].ul.withConfig({
  displayName: "SelectStyle__SelectListWrapper",
  componentId: "sc-gv8n2w-4"
})(["position:absolute;visibility:", ";opacity:", ";transform:", ";transform-origin:center top;transition:", ";background:", ";min-width:100%;height:auto;box-shadow:", ";z-index:9999;max-height:200px;overflow:auto;font-size:", ";padding:0;margin:0;"], function (_ref22) {
  var open = _ref22.open;
  return open ? 'visible' : 'hidden';
}, function (_ref23) {
  var open = _ref23.open;
  return open ? '1' : '0';
}, function (_ref24) {
  var open = _ref24.open;
  return open ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref25) {
  var open = _ref25.open;
  return open ? 'all .2s ease' : 'all .1s ease';
}, _Colors.Greyscale.white, _Shadow.Shadow.down3, function (_ref26) {
  var small = _ref26.small;
  return small ? '1em' : '1.1em';
});

exports.SelectListWrapper = SelectListWrapper;

var SelectItemWrapper = _styledComponents["default"].li.withConfig({
  displayName: "SelectStyle__SelectItemWrapper",
  componentId: "sc-gv8n2w-5"
})(["display:flex;align-items:center;cursor:pointer;padding:0.5em 1em;list-style-type:none;&:first-child{margin-top:0.5em;}&:last-child{margin-bottom:0.5em;}&.active{color:", ";background:", ";}&.select-loading{justify-content:center;}", ""], _Colors.SecondaryColor.actionblue, _Colors.Greyscale.softgrey, function (_ref27) {
  var disabled = _ref27.disabled;

  if (disabled) {
    return "\n        cursor: not-allowed;\n        background: " + _Colors.Greyscale.softgrey + ";\n        color: " + _Colors.Greyscale.grey + ";\n        font-style: italic;\n      ";
  }
});

exports.SelectItemWrapper = SelectItemWrapper;

var SelectErrorDefault = _styledComponents["default"].span.withConfig({
  displayName: "SelectStyle__SelectErrorDefault",
  componentId: "sc-gv8n2w-6"
})(["color:", ";"], _Colors.PrimaryColor.glintsred);

exports.SelectErrorDefault = SelectErrorDefault;