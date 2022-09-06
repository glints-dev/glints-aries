"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.WhiteGreyBtn = exports.StartIconContainer = exports.SolidShadowContainer = exports.SolidShadowBtn = exports.SolidBtnContainer = exports.SolidBtn = exports.LinkBtn = exports.GhostBtnContainer = exports.GhostBtn = exports.EndIconContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

var generalButtonPadding = [15, 40];
var smallButtonPadding = [10, 20];

var Button = _styledComponents["default"].button.withConfig({
  displayName: "ButtonStyle__Button",
  componentId: "sc-jyb3o2-0"
})(["display:flex;position:relative;align-items:center;justify-content:center;border:none;text-transform:uppercase;outline:none;cursor:pointer;font-weight:bold;font-size:", ";line-height:1.5;padding:", ";background:transparent;transition:all 0.2s;text-decoration:none;", ""], function (_ref) {
  var small = _ref.small;
  return small ? '14px' : '16px';
}, function (_ref2) {
  var small = _ref2.small;
  return small ? smallButtonPadding[0] + "px " + smallButtonPadding[1] + "px" : generalButtonPadding[0] + "px " + generalButtonPadding[1] + "px";
}, function (_ref3) {
  var disabled = _ref3.disabled;

  if (disabled) {
    return "\n        &:hover {\n          cursor: not-allowed;\n        }\n      ";
  }
});
/*
 * Default Button
 */


var SolidBtn = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "ButtonStyle__SolidBtn",
  componentId: "sc-jyb3o2-1"
})(["width:", ";border-radius:", ";&:active{background-color:", ";color:", ";}", " ", " &:hover{text-decoration:none;", "}"], function (_ref4) {
  var block = _ref4.block;
  return block && '100%';
}, function (_ref5) {
  var isRoundedCorner = _ref5.isRoundedCorner;
  return isRoundedCorner ? '8px' : '0px';
}, _Colors.Greyscale.black, _Colors.Greyscale.white, function (props) {
  switch (props.theme) {
    case "" + _StyleConfig.ButtonTheme.BLUE:
      return "\n          background-color: " + _Colors.SecondaryColor.actionblue + ";\n          color: " + _Colors.Greyscale.white + ";\n\n          &:hover {\n            color: " + _Colors.Greyscale.white + ";\n          }\n        ";

    default:
      return "\n          background-color: " + _Colors.Greyscale.white + ";\n          color: " + _Colors.SecondaryColor.actionblue + ";\n\n          &:hover {\n            color: " + _Colors.SecondaryColor.actionblue + ";\n          }\n        ";
  }
}, function (_ref6) {
  var disabled = _ref6.disabled;

  if (disabled) {
    return "\n        background-color: " + _Colors.Greyscale.lightgrey + ";\n        color: " + _Colors.Greyscale.white + ";\n      ";
  }
}, function (_ref7) {
  var disabled = _ref7.disabled;

  if (disabled) {
    return "\n          background-color: " + _Colors.Greyscale.lightgrey + ";\n          color: " + _Colors.Greyscale.white + ";\n        ";
  }
});
exports.SolidBtn = SolidBtn;

var SolidBtnContainer = _styledComponents["default"].div.withConfig({
  displayName: "ButtonStyle__SolidBtnContainer",
  componentId: "sc-jyb3o2-2"
})(["position:relative;display:", ";z-index:1;border-radius:", ";", " &:hover{", "{", "}}&:active{", "{", "}}"], function (_ref8) {
  var block = _ref8.block;
  return block ? 'flex' : 'inline-flex';
}, function (_ref9) {
  var isRoundedCorner = _ref9.isRoundedCorner;
  return isRoundedCorner ? '8px' : '0px';
}, function (_ref10) {
  var disabled = _ref10.disabled,
      isRoundedCorner = _ref10.isRoundedCorner;

  if (!disabled) {
    return "\n      &:active {\n        background: " + _Colors.Greyscale.black + ";\n        color: " + _Colors.Greyscale.white + ";\n        transform: translate3d(2px, 2px, 0);\n        transition: all .2s;\n      }\n\n      &:after {\n        content: '';\n        opacity: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);\n        top: 5px;\n        left: 5px;\n        z-index: -1;\n        transition: all .2s;\n        cursor: pointer;\n        border-radius: " + (isRoundedCorner ? '8px' : '0px') + ";\n      }\n\n      &:hover:after {\n        opacity: 1;\n        transition: all .2s;\n      }\n\n      &:active:after {\n        transform: translate3d(-5px, -5px, 0);\n        transition: all .2s;\n      }\n      ";
  }
}, SolidBtn, function (props) {
  if (props.disabled) {
    return "\n            background-color: none;\n          ";
  }
}, SolidBtn, function (props) {
  if (props.disabled) {
    return "\n            background-color: none;\n          ";
  }

  return "\n          background-color: " + _Colors.Greyscale.black + ";\n          color: " + _Colors.Greyscale.white + ";\n        ";
});
/*
 * SolidShadow Button
 */


exports.SolidBtnContainer = SolidBtnContainer;
var SolidShadowBtn = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "ButtonStyle__SolidShadowBtn",
  componentId: "sc-jyb3o2-3"
})(["transition:all 0.2s;cursor:pointer;position:relative;width:100%;&:hover{text-decoration:none;}", ""], function (props) {
  if (props.disabled) {
    return "\n        background-color: " + _Colors.Greyscale.lightgrey + ";\n        color: " + _Colors.Greyscale.white + ";\n      ";
  }

  return "\n      background-color: " + _Colors.PrimaryColor.glintsyellow + ";\n      color: " + _Colors.Greyscale.black + ";\n    ";
});
exports.SolidShadowBtn = SolidShadowBtn;

var SolidShadowContainer = _styledComponents["default"].div.withConfig({
  displayName: "ButtonStyle__SolidShadowContainer",
  componentId: "sc-jyb3o2-4"
})(["position:relative;display:", ";z-index:1;cursor:pointer;&:hover{", "}&:active{", " ", "{", "}}&:before{content:'';width:100%;height:100%;position:absolute;top:5px;left:5px;transition:all 0.2s;", "}&:hover:before{", "}&:active:before{", "}"], function (_ref11) {
  var block = _ref11.block;
  return block ? 'flex' : 'inline-flex';
}, function (props) {
  if (props.disabled) {
    return 'transform: none';
  }

  return "\n        transform: translate(2px, 2px);\n        transition: all .2s;\n      ";
}, function (props) {
  if (!props.disabled) {
    return "\n          transform: translate(3px, 3px);\n          transition: all .2s;\n          color: " + _Colors.Greyscale.white + ";\n        ";
  }

  return 'transform: none';
}, SolidShadowBtn, function (props) {
  if (props.disabled) {
    return "\n            background-color: none;\n          ";
  }

  return "\n          background-color: " + _Colors.Greyscale.black + ";\n          color: " + _Colors.Greyscale.white + ";\n        ";
}, function (props) {
  if (props.disabled) {
    return 'background-color: none';
  }

  return "background-color: " + _Colors.PrimaryColor.glintsred + ";";
}, function (props) {
  if (props.disabled) {
    return "\n          cursor: default;\n          background-color: none;\n        ";
  }

  return "\n      background: " + _Colors.Greyscale.black + ";\n      transform: translate(-2px, -2px);\n      transition: all .2s;\n    ";
}, function (props) {
  if (!props.disabled) {
    return "\n        transform: translate(-5px, -5px);\n        transition: all .2s;\n      ";
  }

  return false;
});
/*
 * Ghost Button
 */


exports.SolidShadowContainer = SolidShadowContainer;
var GhostBtn = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "ButtonStyle__GhostBtn",
  componentId: "sc-jyb3o2-5"
})(["transition:background-color 0.5s;width:", ";background:", ";padding:", ";border:2px solid ", ";color:", ";border-radius:", ";&:hover{transition:background-color 0.5s;text-decoration:none;", "}", ""], function (_ref12) {
  var block = _ref12.block;
  return block && '100%';
}, _Colors.Greyscale.white, function (_ref13) {
  var small = _ref13.small;
  return small ? smallButtonPadding[0] - 2 + "px " + (smallButtonPadding[1] - 2) + "px" : generalButtonPadding[0] - 2 + "px " + (generalButtonPadding[1] - 2) + "px";
}, _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.actionblue, function (_ref14) {
  var isRoundedCorner = _ref14.isRoundedCorner;
  return isRoundedCorner ? '8px' : '0px';
}, function (_ref15) {
  var disabled = _ref15.disabled;

  if (!disabled) {
    return "\n          background-color: " + _Colors.SecondaryColor.actionblue + ";\n          color: " + _Colors.Greyscale.white + ";\n        ";
  }
}, function (_ref16) {
  var disabled = _ref16.disabled;

  if (disabled) {
    return "\n        background-color: " + _Colors.Greyscale.lightgrey + ";\n        color: " + _Colors.Greyscale.white + ";\n        border: none;\n      ";
  }
});
exports.GhostBtn = GhostBtn;

var GhostBtnContainer = _styledComponents["default"].div.withConfig({
  displayName: "ButtonStyle__GhostBtnContainer",
  componentId: "sc-jyb3o2-6"
})(["position:relative;display:", ";z-index:1;", " ", "{", "}"], function (_ref17) {
  var block = _ref17.block;
  return block ? 'flex' : 'inline-flex';
}, function (_ref18) {
  var disabled = _ref18.disabled,
      isRoundedCorner = _ref18.isRoundedCorner;

  if (!disabled) {
    return "\n        &:active {\n          transition: background-color .5s; \n          transform: translate3d(2px, 2px, 0);\n          transition: all .2s;\n        }\n\n        &:after {\n          content: '';\n          opacity: 0;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);\n          top: 5px;\n          left: 5px;\n          z-index: -1;\n          transition: all .2s;\n          cursor: pointer;\n          border-radius: " + (isRoundedCorner ? '8px' : '0px') + ";\n        }\n\n        &:hover:after {\n          opacity: 1;\n          transition: all .2s;\n        }\n\n        &:active:after {\n          transform: translate3d(-5px, -5px, 0);\n          transition: all .2s;\n        }\n        ";
  }
}, GhostBtn, function (_ref19) {
  var disabled = _ref19.disabled;

  if (!disabled) {
    return "\n        &:active {\n          background-color: " + _Colors.Greyscale.black + ";\n          color: " + _Colors.Greyscale.white + ";\n          border: 2px solid " + _Colors.Greyscale.black + ";\n        }\n      ";
  }
});
/*
 * White-Grey Button
 */


exports.GhostBtnContainer = GhostBtnContainer;
var WhiteGreyBtn = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "ButtonStyle__WhiteGreyBtn",
  componentId: "sc-jyb3o2-7"
})(["width:", ";", ""], function (_ref20) {
  var block = _ref20.block;
  return block && '100%';
}, function (_ref21) {
  var disabled = _ref21.disabled,
      isRoundedCorner = _ref21.isRoundedCorner;

  if (!disabled) {
    return "\n        background-color: " + _Colors.Greyscale.white + ";\n        color: " + _Colors.SecondaryColor.actionblue + ";\n        border-radius: " + (isRoundedCorner ? '8px' : '0px') + ";\n\n        &:hover {\n          background-color: " + _Colors.Greyscale.softgrey + ";\n          color: " + _Colors.SecondaryColor.actionblue + ";\n        }\n\n        &:active {\n          background-color: " + _Colors.Greyscale.black + ";\n          color: " + _Colors.Greyscale.white + ";\n        }\n      ";
  }

  return "\n      background-color: " + _Colors.Greyscale.lightgrey + ";\n      color: " + _Colors.Greyscale.white + ";\n    ";
});
/*
 * Link Button
 */

exports.WhiteGreyBtn = WhiteGreyBtn;
var LinkBtn = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "ButtonStyle__LinkBtn",
  componentId: "sc-jyb3o2-8"
})(["font-weight:normal;text-transform:inherit;width:", ";padding:0;justify-content:flex-start;color:", ";", ""], function (_ref22) {
  var block = _ref22.block;
  return block && '100%';
}, _Colors.SecondaryColor.actionblue, function (_ref23) {
  var disabled = _ref23.disabled;

  if (disabled) {
    return "\n        color: " + _Colors.Greyscale.grey + ";\n      ";
  } else {
    return "\n        &:hover {\n          color: " + _Colors.SecondaryColor.darkblue + ";\n          text-decoration: none;\n        }\n      \n        &:active {\n          color: " + _Colors.Greyscale.black + ";\n        }\n      ";
  }
});
exports.LinkBtn = LinkBtn;

var StartIconContainer = _styledComponents["default"].span.withConfig({
  displayName: "ButtonStyle__StartIconContainer",
  componentId: "sc-jyb3o2-9"
})(["display:inline-flex;margin-right:10px;"]);

exports.StartIconContainer = StartIconContainer;

var EndIconContainer = _styledComponents["default"].span.withConfig({
  displayName: "ButtonStyle__EndIconContainer",
  componentId: "sc-jyb3o2-10"
})(["display:inline-flex;margin-left:10px;"]);

exports.EndIconContainer = EndIconContainer;