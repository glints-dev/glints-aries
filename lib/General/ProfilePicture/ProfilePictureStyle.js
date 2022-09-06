"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProfilePictureContent = exports.ProfilePictureContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var CrossPattern = require('../../../assets/image/cross-pattern.svg');

var ProfilePictureContent = _styledComponents["default"].div.withConfig({
  displayName: "ProfilePictureStyle__ProfilePictureContent",
  componentId: "sc-lrsiz1-0"
})(["position:relative;z-index:1;width:5em;height:5em;border-radius:50%;svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}", " &:after{content:'';position:absolute;z-index:-1;background:url(", ");height:100%;width:100%;border-radius:50%;top:4px;left:4px;}img{object-fit:cover;border-radius:50%;width:100%;height:100%;z-index:1;}"], function (_ref) {
  var editable = _ref.editable;

  if (editable) {
    return "\n        outline: none;\n        cursor: pointer;\n\n        &:hover:before {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 0, 0, .5);\n          height: 100%;\n          width: 100%;\n          top: 0\n          left: 0;\n          border-radius: 50%;\n        }\n      ";
  }
}, CrossPattern);

exports.ProfilePictureContent = ProfilePictureContent;

var ProfilePictureContainer = _styledComponents["default"].div.withConfig({
  displayName: "ProfilePictureStyle__ProfilePictureContainer",
  componentId: "sc-lrsiz1-1"
})(["position:relative;display:inline-flex;", ""], function (_ref2) {
  var editable = _ref2.editable;

  if (editable) {
    return "\n        &:focus {\n          outline: none;\n        }\n\n        &:focus > " + ProfilePictureContent + " {\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n      ";
  }
});

exports.ProfilePictureContainer = ProfilePictureContainer;