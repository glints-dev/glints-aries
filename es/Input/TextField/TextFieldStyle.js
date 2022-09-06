import styled from 'styled-components';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';
var startIconPadding = '44px';
export var IconContainer = styled.div.withConfig({
  displayName: "TextFieldStyle__IconContainer",
  componentId: "sc-5sd02x-0"
})(["position:absolute;display:flex;right:1em;cursor:pointer;svg{fill:#666666;}&:hover svg{fill:", ";}"], Greyscale.black);
export var StartIconContainer = styled.div.withConfig({
  displayName: "TextFieldStyle__StartIconContainer",
  componentId: "sc-5sd02x-1"
})(["position:absolute;display:flex;left:16px;svg{fill:#666666;}"]);
export var EndIconContainer = styled.div.withConfig({
  displayName: "TextFieldStyle__EndIconContainer",
  componentId: "sc-5sd02x-2"
})(["position:absolute;display:flex;right:16px;svg{fill:#666666;}"]);
export var TextFieldContainer = styled.div.withConfig({
  displayName: "TextFieldStyle__TextFieldContainer",
  componentId: "sc-5sd02x-3"
})(["position:relative;display:flex;align-items:center;flex-grow:1;"]);
export var TextFieldLabel = styled.label.withConfig({
  displayName: "TextFieldStyle__TextFieldLabel",
  componentId: "sc-5sd02x-4"
})(["position:absolute;left:", ";margin-right:1px;overflow:hidden;color:#666666;transition:all .2s;pointer-events:none;font-weight:400;font-size:", ";", " ", " ", ""], function (_ref) {
  var small = _ref.small;
  return small ? '16px' : '22px';
}, function (_ref2) {
  var small = _ref2.small;
  return small ? '14px' : '16px';
}, function (_ref3) {
  var hasStartIcon = _ref3.hasStartIcon;

  if (hasStartIcon) {
    return "\n        left: " + startIconPadding + ";\n      ";
  }
}, function (_ref4) {
  var floating = _ref4.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        top: 1em;\n        transform: translate3d(-15px, -20px, 0);\n        transition: all .2s;\n        font-size: 12px;\n        background-color: " + Greyscale.white + ";\n      ";
  }
}, function (_ref5) {
  var floating = _ref5.floating,
      small = _ref5.small;

  if (floating && small) {
    return "\n        transform: translate3d(-10px, -20px, 0);\n      ";
  }
});
export var TextFieldInput = styled.input.withConfig({
  displayName: "TextFieldStyle__TextFieldInput",
  componentId: "sc-5sd02x-5"
})(["position:relative;width:100%;outline:none;font-size:", ";padding:", ";border:unset;border-radius:", ";transition:all .5s;background-color:", ";", " ", " &:hover{transition:all .5s;background-color:", ";~ ", "{color:#666666;}}&:focus{background-color:", ";", " ~ ", "{padding:0 5px;top:1em;transform:", ";transition:all .2s;font-size:12px;right:auto;background-color:", ";}}&:disabled{cursor:not-allowed;background:", ";+ ", "{background:transparent;color:", ";}}"], function (_ref6) {
  var small = _ref6.small;
  return small ? '14px' : '16px';
}, function (_ref7) {
  var small = _ref7.small;
  return small ? '8px 16px' : '12px 16px';
}, function (_ref8) {
  var small = _ref8.small;
  return small ? '4px' : '8px';
}, function (_ref9) {
  var status = _ref9.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.08)';
}, function (_ref10) {
  var disableTyping = _ref10.disableTyping;

  if (disableTyping) {
    return "\n        color: transparent;\n        text-shadow: 0 0 0 black;\n        cursor: pointer;\n      ";
  }
}, function (_ref11) {
  var hasStartIcon = _ref11.hasStartIcon;

  if (hasStartIcon) {
    return "\n        padding-left: " + startIconPadding + ";\n      ";
  }
}, function (_ref12) {
  var status = _ref12.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.16)';
}, TextFieldLabel, function (_ref13) {
  var status = _ref13.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.24)';
}, function (_ref14) {
  var hasStartIcon = _ref14.hasStartIcon;

  if (hasStartIcon) {
    return "\n          + " + StartIconContainer + " {\n            svg {\n              fill: " + SecondaryColor.actionblue + ";\n            }\n          }\n        ";
  }
}, TextFieldLabel, function (_ref15) {
  var small = _ref15.small;
  return small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)';
}, Greyscale.white, Greyscale.softgrey, TextFieldLabel, Greyscale.grey);